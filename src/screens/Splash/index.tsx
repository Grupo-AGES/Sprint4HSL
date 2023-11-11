import Background from '@components/Background';
import styles from '@screens/styles';
import { useEffect } from 'react';
import { View } from 'react-native';

export function Splash(props: any) {

  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.replace('login');
    }, 2100);

    return () => clearTimeout(timer);
  }, [props.navigation]);

  return (
    <Background>
      <View style={styles.bodySplash}>
        <img style={styles.imgSplash} src={require('../../../assets/logo.png')}/> 
      </View>
    </Background>
  );
}
