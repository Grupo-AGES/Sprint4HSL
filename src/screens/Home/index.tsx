import {Text, View, Image } from 'react-native';

import { Header } from '@components/Header'
import styles from '../styles'

export function Home() {
  return (
    <View style={styles.container}>
        <Header logged={true}/>
      
      </View>
  );
}
