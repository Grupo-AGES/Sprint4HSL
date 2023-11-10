
import Birthday from '@screens/Birthday';
import Register from '@screens/Register';
import RecoveryMatricula from '@screens/RecoveryMatricula';
import RecoveryPassword from '@screens/RecoveryPassword';
import axios from 'axios';


//id String @id @default(auto()) @map("_id") @db.ObjectId
//matricula Int @unique
//email String @unique
//name String
//nascimento String
//password String
//code Int?
//src String?
const data = {
    name: 'Gustavo Santos',
    password: 'passworssd123',
    email: 'gustavo.santos@sdsdedsaxample.com',
    nascimento: '12/12/1999',
 };
 
 createUser(data);
 
 async function createUser(data: any) {
    let response = await axios.post('http://localhost:3000/user', data)
    console.log(response.status)
 }
 
 async function getUser(email: string) {
    let response = await axios.get(`http://localhost:3000/user/${email}`)
    console.log(response.status)
 }
 
 async function getUserStatus(existingUser : any  ) {
    let response = await axios.get(`http://localhost:3000/user/status`)
    console.log(response.status)
 }
    
 async function logout() {
        let response = await axios.post(`http://localhost:3000/user/logout`)
        console.log(response.status)
    }
    
    async function login(data: any) {
        let response = await axios.post(`http://localhost:3000/user/login`, data)
        console.log(response.status)
    }
    
    async function deleteUser(email: string) {
        let response = await axios.delete(`http://localhost:3000/user/:email`)
        console.log(response.status)
    }
    
    async function updateUser(data: any) {
        let response = await axios.put(`http://localhost:3000/user`, data)
        console.log(response.status)
    }
    
    async function recoveryPassword(email: string) {
        let response = await axios.post(`http://localhost:3000/user/recovery`, email)
        console.log(response.status)
    }
    
    async function recoveryMatricula(email: string) {
        let response = await axios.post(`http://localhost:3000/user/recovery/matricula`, email)
        console.log(response.status)
    }
    
    async function recoveryCode(data: any) {
        let response = await axios.post(`http://localhost:3000/user/recovery/code`, data)
        console.log(response.status)
    }
    
    async function recoveryPasswordCode(data: any) {
        let response = await axios.post(`http://localhost:3000/user/recovery/password`, data)
        console.log(response.status)
    }
    async function birthdays() {
        let response = await axios.get(`http://localhost:3000/birthdays/:mes`)
        console.log(response.status)
    }
