import {Text, View,  TouchableOpacity } from 'react-native';
import  Carousel  from '@components/Carousel'
import { Header } from '@components/Header'
import styles from '../styles'
import { useEffect } from 'react';

export function Home(props: any) {

  useEffect(()=>{
    console.log("props",props)
  },[])

  function voltarHome(){
    props.navigation.navigate('home')
}

function irPerfil(){
    props.navigation.navigate('perfil')
}

function irListaAniver(){
    props.navigation.navigate('birthday')
}

  return (
    <View style={styles.containerLogged}>
        <Header logged={true}/>
        <Carousel/>
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
  );
}
