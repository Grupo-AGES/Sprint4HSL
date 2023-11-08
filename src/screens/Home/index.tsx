import {Text, SafeAreaView, View, Image, Dimensions } from 'react-native';
import  Carousel  from '@components/Carousel'
import { Header } from '@components/Header'
import styles from '../styles'

export function Home() {
  return (
    <View style={styles.containerLogged}>
        <Header logged={true}/>
        <Carousel/>
      </View>
  );
}
