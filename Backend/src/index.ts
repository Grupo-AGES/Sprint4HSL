import express from "express";
import { PrismaClient, User } from '@prisma/client';
const emailController = require('./controllers/emailController');
const upload = require("./config/multer");
const PictureController = require("./controllers/pictureController");


import { now } from "mongoose";
import { PasswordCripto } from './PasswordCripto';


const prisma = new PrismaClient();

//const templatePath = path.join(__dirname, '../templates');
const app = express();

var userStatus : User | null;

app.use(express.json());
//app.set("view engine", "hbs");
//app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));

//API DE IMAGEM, TO ARRUMANDO AINDA
app.post("/image", upload.single("file"), PictureController.create);
app.get("/image", PictureController.findAll);
app.delete("/image/:id", PictureController.remove);
app.patch("/image/:id",  upload.single("file"), PictureController.update);
///////////////////////////////////
//CARREGAR PAGINA PELO EXPRESS
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => { 
    res.render("signup");
}); 

app.get("/delete", (req, res) => {
    res.render("delete");
});

app.get("/recovery", (req, res) => {
    res.render("recovery");
});
//////////////////////////QQ


app.get("/user/status", async(req, res) => {

    try{
        const existingUser = await prisma.user.findFirst({where:{matricula:userStatus?.matricula}});
        if(existingUser && userStatus !=null){
        res.send(existingUser)}
        else res.send("notLogged")
    }catch(e){
    }
});

app.post("/user/logout", async(req,res)=>{
    try{
        userStatus = null;
        res.send("deslogged")
    }catch(e){
        res.send(e)
    }
});


app.post("/user", async (req, res) => {
    try {
        const existingUser = await prisma.user.findFirst({ where: { email: req.body.email } });

        console.log(existingUser)
        if (existingUser) {
            res.send("loginExist");
        } else {
            const { name , email, nascimento }= req.body
            const hashedPassword = await PasswordCripto.hashPassword(req.body.password);
            const password = hashedPassword;
            // const name = req.body.name
            const newUser = await prisma.user.create({
                data: {
                    name,
                    password,
                    email,
                    nascimento,
                    matricula: Math.floor(Math.random() * (99999999 - 10000000) + 10000000),
                }
            });

            res.send({"user": newUser});
        }
    } catch (error) {
        res.send("ErrorCantCreateUser");
    }
});

app.get("/user/:email", async (req, res) => {
    
    const email = req.params.email
    try{
        const existingUser = await prisma.user.findFirst({where:{email}});
        if(existingUser){
        res.send(existingUser)}
        else res.send("noExistingUser");
    }catch(e){
        res.send("erroOnGetUser");
    }
});

app.get("/user/birthdays/:mes", async (req, res) => {
    
    const mesSelecionado = req.params.mes;
    try {
      // Suponhamos que você deseja filtrar os aniversários para o mês de dezembro (mês 12)
      
      // Use o Prisma para buscar usuários cujos meses de aniversário correspondem ao mês selecionado
      const usersWithMatchingBirthdays = await prisma.user.findMany({
        where: {
              nascimento: {
                contains: `/${mesSelecionado}/`, // Procura o mês selecionado no formato "DD/MM/YYYY"
              },
            },
          
      });
  
      const userInfoArray = usersWithMatchingBirthdays.map(user => {
        return {
          matricula: user.matricula,
          email: user.email,
          name: user.name,
          nascimento: user.nascimento,
        };
      });
      if(userInfoArray){
      res.send(userInfoArray);}
      else res.send("noUsersWithBirthday")
    } catch (e) {
      res.send("errorOnGetUsers" + e);
      
    }
  });
   

app.post("/user/login", async (req, res) => {
    try {
        const user = await prisma.user.findFirst({ where: { matricula: req.body.matricula } });

        if (user && await PasswordCripto.verifyPassword(req.body.password, user.password)) {
            const login = await prisma.login.findFirst({where:{userId: user.id}});
            if(login){
                await prisma.login.update({where:{userId: user.id},
                data:{
                    loginAt:now()
                }})
            }else
            await prisma.user.update({ where: { matricula: req.body.matricula }, 
            data:{
                logins:{
                    create:{}    
                }
            
            } });
            userStatus = user;
            res.send('successLogin')
        } else {
            res.send("WrongLogin");
        }
    } catch (error) {
        res.send("errorOnLogin"+ error);
    }
});

app.delete("/user/delete", async (req, res) => {
    try {
        const user = await prisma.user.findFirst({ where: { matricula: req.body.matricula } });

        if (user && user.password === req.body.password) {
            const login = await prisma.login.findFirst({where:{userId: user.id}});
            if(login){
                await prisma.login.delete({where:{userId: user.id}})
                await prisma.user.delete({ where: { matricula: req.body.matricula } });
                res.send('succesDeleted')
            }else{
            await prisma.user.delete({ where: { matricula: req.body.matricula } });
            res.send('succesDeleted')}
        } else {
            res.send("wrongPassword");
        }
    } catch (error) {
        res.send("errorDelete"+error);
    }
}); 


app.post("/user/recovery", async (req, res) => {
    try {
        const user = await prisma.user.findUnique({ where: { email: req.body.email } });

        if (user) {
            const code = Math.floor(Math.random() * (999999 - 100000) + 100000);
            const updatedUser = await prisma.user.update({
                where: { email: req.body.email },
                data: { code },
            });
            await emailController.sendEmail(user.email,"Recuperar senha",updatedUser.code,updatedUser.name);
            res.send("codeDelivered");
        } else {
            res.send("wrongEmail");
        }
    } catch (error) {
        res.send("errorOnFindLogin");
    }
});

app.post("/user/recovery/code", async (req, res) => {
    try {
        const user = await prisma.user.findFirst({ where: { code: req.body.code } });

        if (user) {
            app.post("/user/recovery/password", async (req, res) => {
                try {
            
                    if (user) {
                        const hashedPassword = await PasswordCripto.hashPassword(req.body.password);
                        const password = hashedPassword;
                        await prisma.user.update({
                            where: { email: user.email},
                            data: { password,
                                    code:null
                            },
                        });
            
                        res.send("passwordRecovered");
                    } else {
                        res.send("codeWrong");
                    }
                } catch (error) {
                    res.send("errorOnChangePassword");
                }
            });

            res.send("changePassword");
        } else {
            res.send("codeWrong");
        }
    } catch (error) {
        res.send("errorOnChangePassword2");
    }
});

app.patch("/user/change/password", async (req, res) => {
    try {
        
        if (userStatus && userStatus && await PasswordCripto.verifyPassword(req.body.oldPassword, userStatus.password)) {

            const hashedPassword = await PasswordCripto.hashPassword(req.body.newPassword);
            const password = hashedPassword;
            await prisma.user.update({
                where: { email: userStatus.email},
                data: { password,
                },
            });

            res.send("passwordChanged");
        } else {
            res.send("wrongPassword");
        }
    } catch (error) {
        res.send("errorOnChangePassword");
    }
});




app.listen(3000, () => {
    console.log("Port connected");
});
