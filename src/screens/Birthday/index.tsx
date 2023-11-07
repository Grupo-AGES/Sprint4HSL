import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React from "react";

  import { Header } from '../../components/Header'
  
  export default function Birthday() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            width: '100%',
            height: '100%',
        },
        header: {
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#005CA3',
        },
        imageHeader: {
            marginTop: 20,
        },
        formContent: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
        },
        formLabel: {
            marginTop: 20,
            color: '#005CA3',
        },
        
    });
  
    return (
      <View style={styles.container}>
        <ScrollView>
        <Header logged={true}/>
          <View style={styles.formContent}>
            
          </View>
        </ScrollView>
      </View>
    );
  }
  