import { Text, View, TouchableOpacity } from 'react-native'
import { Header } from '@components/Header'
import styles from '../styles'
import { useEffect, useState } from 'react'
import { getUser } from 'services/integracao';

export function Perfil(props: any) {
    const [perfil, setPerfil] = useState([])

    const img = require('../../../assets/perfil.png')
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const nascimento = perfil.nascimento
    const partes = nascimento.split("/");
    const anoNascimento: string = partes[2];
    const anoNumber = parseInt(anoNascimento)
    let idade = 0

    function calculaIdade(ano: number, anoNumber: number) {
        const resultado = ano - anoNumber
        idade += resultado
    }

    useEffect(() => {
        async function getUser() {
            const response = await getUser(email)
            setPerfil(response.data)
        }

        getUser()
        calculaIdade(ano, anoNumber)

    }, []);

    function alterarSenha() {
        props.navigation.navigate('changePassword')
    }

    function voltarHome() {
        props.navigation.navigate('home')
    }

    function irPerfil() {
        props.navigation.navigate('perfil')
    }

    function irListaAniver() {
        props.navigation.navigate('birthday')
    }

    return (
        <View>
            <Header logged={true} />
            <View>
                {/* <Image source={perfil.img}/> */}
                <Text>{perfil.name}</Text>
                <Text>{idade}</Text>
                <Text>Número de Matrícula: {perfil.matricula}</Text>
                <Text>E-mail: {perfil.email}</Text>
                <Text>Data de Nascimento: {perfil.nascimento}</Text>
                <TouchableOpacity onPress={alterarSenha}>
                    <Text>Alterar senha</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyMenu}>
                <TouchableOpacity onPress={voltarHome}>
                    <img src={require("../../../assets/casa.png")} style={styles.imgMenu} />
                </TouchableOpacity>
                <TouchableOpacity onPress={irPerfil}>
                    <img src={require("../../../assets/perfil.png")} style={styles.imgMenu} />
                </TouchableOpacity>
                <TouchableOpacity onPress={irListaAniver} style={styles.imgMenu}>
                    <img src={require("../../../assets/balao.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
