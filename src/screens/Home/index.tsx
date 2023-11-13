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
        <Text style={styles.tituloHome}>Nossa História</Text>
        <Text style={styles.textoHome}>No dia 29 de outubro de 1976, com a presença do então Presidente da República Gen. Ernesto Geisel, foi oficialmente inaugurado o HOSPITAL UNIVERSITÁRIO DA PUCRS. Materializou-se aí um pioneirismo para o Instituto Marista em todo o mundo, passando este Hospital a ser o primeiro investimento da Congregação na Área da Saúde.

Em 1982, por razões jurídicas e caracterizando, além da missão de ensino, a de assistência voltada à comunidade, ocorreu a alteração do nome fantasia do hospital para HOSPITAL SÃO LUCAS DA PUCRS. A denominação foi uma homenagem ao apóstolo e evangelista São Lucas, que foi médico e artista plástico, considerado o padroeiro dos médicos.

Com a natureza marista de cuidado, acolhimento e humanização, o Hospital São Lucas trabalha há 46 anos para oferecer um atendimento completo da emergência ao pós alta. Integrante do Campus da Saúde da PUCRS e de natureza filantrópica, é polo de uma assistência de qualidade, ensino de excelência e pesquisa de ponta, com soluções em saúde de relevância nacional e internacional, como os testes da vacina Coronavac, contra o coronavírus, e os testes da primeira vacina contra a dengue a ser distribuída pelo SUS em todo o território nacional até 2025. 
 
O HSL é referência para inúmeras áreas do Estado, com atendimentos remotos e presenciais, e procurado por pacientes de todas as regiões do Brasil e também do Exterior, principalmente nas áreas de cardiologia, oncologia e neurologia. Com um corpo clínico renomado e mais de 4.000 colaboradores que fazem parte da missão de cuidar e salvar vidas, presta assistência a pacientes adultos em praticamente todas as especialidades médicas, com uma circulação diária de 18 mil pessoas por dia na insitituição. </Text>
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
