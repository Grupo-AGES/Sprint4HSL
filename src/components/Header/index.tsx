import {View, Image } from 'react-native';

import styles from './headerStyle';

export function Header(props: { logged: boolean }) {
    if(props.logged==true){
        return(
            <View style={styles.header}>
          <View style={styles.imageHeader}>
            <Image source={require("../../../assets/logoBlue.png")} />
          </View>
        </View>
        )
    }else{
         return (
          <View style={styles.header}>
            <View style={styles.imageHeader}>
              <Image source={require('../../../assets/Vector.png')} />
            </View>
          </View>
  )
    }
}
