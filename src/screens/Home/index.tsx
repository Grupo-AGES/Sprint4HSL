import {Text, View,  TouchableOpacity } from 'react-native';
import  Carousel  from '@components/Carousel'
import { Header } from '@components/Header'
import styles from '../styles'

export function Home(props: any) {
  function teste(){
    props.navigation.navigate('birthday')
  }

  return (
    <View style={styles.containerLogged}>
        <Header logged={true}/>
        <Carousel/>
        <TouchableOpacity onPress={teste}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
      </View>
  );
}
