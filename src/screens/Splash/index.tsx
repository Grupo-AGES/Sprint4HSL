import Background from '@components/Background';
import { Touchable, TouchableOpacity } from 'react-native';

//ta dando erro na imagem, ja tentei usar a tag Image, mas ai quebra a pagina inteira
export function Splash(props: any) {
  function irLogin(){
    props.navigation.navigate('login')
  }

  return (
    <Background>
      <TouchableOpacity onPress={irLogin}>
        <img src='../../../assets/logo.png'/> 
      </TouchableOpacity>
      
    </Background>
  );
}
