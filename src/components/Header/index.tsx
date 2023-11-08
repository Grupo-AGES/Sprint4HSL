import {View, Image, Text, Linking, TouchableOpacity} from 'react-native';

import styles from './headerStyle';

export function Header(props: { logged: boolean }) {

  function clickMenu(){
    console.log('clicou')
    return(
      <View>
        <TouchableOpacity onPress={() => { 
      Linking.openURL('https://reactnative.dev'); 
    }}>
          <Image source={require("../../../assets/casa.png")} />
          <Text>Página Inicial</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { 
      Linking.openURL('https://reactnative.dev'); 
    }}>
          <Image source={require("../../../assets/perfil.png")} />
          <Text>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { 
      Linking.openURL('https://reactnative.dev'); 
    }}>
          <Image source={require("../../../assets/balao.png")} />
          <Text>Lista de Aniversiariantes</Text>
        </TouchableOpacity>
      </View>
    )
  }

    if(props.logged==true){
        return(
            <View style={styles.headerLoggado}>
              <Text style={styles.menuHeader} onPress={clickMenu}>&#9776;</Text>
          <View style={styles.imageHeader}>
            <Image source={require("../../../assets/logoBlue.png")} />
          </View>
        </View>
        )
    }else{
         return (
          <View style={styles.headerNoLoggado}>
            <View style={styles.imageHeader}>
              <Image source={require('../../../assets/Vector.png')} />
            </View>
          </View>
  )
    }
}
