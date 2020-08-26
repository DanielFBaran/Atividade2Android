import React, {useState} from 'react'
import {View,Text, StyleSheet, Alert, Button} from 'react-native'

export default props => {
    const [n1, setN1] = useState(0),
    [n2, setN2] = useState(0),
    [resp, setResp] = useState(0)

    let val1 = parseFloat(n1);
    let val2 = parseFloat(n2);

    function add(){
        setResp(val1 + val2)
    }
    function sub(){
        setResp(val1 - val2)
    }
    function multi(){
        setResp(val1 * val2)
    }
    function div(){
        if(val2 == 0){
            Alert.alert('Não é possivel dividir por zero!')
        } else {
        setResp(val1 / val2)
        }
    }
    return (
        <View style={styles.view}>
            <Text style={styles.texto}>Pseudo Calculadora</Text>
            <Text style={styles.texto}>Insira o Primeiro Valor</Text>
            value={val1}
            onChangeText={n1 => setN1(n1)}
            <Text style={styles.texto}>Insira o Segundo Valor</Text>
            value={val2}
            onChangeText={n2 => setN2(n2)}
            <Button style={styles.button} title='+' onPress={(add)}></Button>
            <Button style={styles.button} title='-' onPress={(sub)}></Button>
            <Button style={styles.button} title='*' onPress={(multi)}></Button>
            <Button style={styles.button} title='/' onPress={(div)}></Button>
            <Text>Resultado: {resp}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    texto:{
        color: 'white',
        fontSize: 24,
        fontWeight:'bold'
    },
    view:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        width:300
    },
    button:{
        flexDirection:'row',
        flexGrow:1
    }

})