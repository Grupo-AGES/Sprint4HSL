import {Text, View,  TouchableOpacity } from 'react-native'
import { Header } from '@components/Header'
import styles from '../styles'

export function Perfil(props: any) {
 
  const perfil = {
    img: require('../../../assets/perfil.png'),
    nome: "Ana Maria Braga",
    idade: "46 anos", 
    matricula: "123456",
    email: "anamariabraga@email.com",
    nascimento: "06/11/2023"
}

function alterarSenha(){
    props.navigation.navigate('changePassword')
}

function voltarHome(){
    props.navigation.navigate('home')
}

function irPerfil(){
    props.navigation.navigate('perfil')
}

function irListaAniver(){
    props.navigation.navigate('birthday')
}

return(
    <View>
        <Header logged={true}/>
    <View>
        {/* <Image source={perfil.img}/> */}
      <Text>{perfil.nome}</Text>
      <Text>{perfil.idade}</Text>
      <Text>Número de Matrícula: {perfil.matricula}</Text>
      <Text>E-mail: {perfil.email}</Text>
      <Text>Data de Nascimento: {perfil.nascimento}</Text>
      <TouchableOpacity onPress={alterarSenha}>
        <Text>Alterar senha</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bodyMenu}>
            <TouchableOpacity onPress={voltarHome}>
                <img src={require("../../../assets/casa.png")} style={styles.imgMenu}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={irPerfil}>
                <img src={require("../../../assets/perfil.png")} style={styles.imgMenu}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={irListaAniver} style={styles.imgMenu}>
                <img src={require("../../../assets/balao.png")}/>
            </TouchableOpacity>
        </View>
    </View>
)
}
