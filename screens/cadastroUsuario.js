import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { useEffect,useState, router} from 'react';
import axios from 'axios';

function UsuarioCadastroScreen() {

  const [getNome,setNome] = useState()
  const [getSenha,setSenha] = useState()
  const [getEmail,setEmail] = useState()
  const [getCpf,setCpf] = useState()
  


  function inserirDados(){
  

    axios.post('http://professornilson.com/testeservico/clientes'
    , {
    
    nome: getNome,
    senha: getSenha,
    email: getEmail,
    cpf:getCpf
    }).then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Nome</Text>
      <Input onChangeText={text => setNome(text)} style={style.container} />


      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>CPF</Text>
      <Input onChangeText={text => setCpf(text)}  style={style.container} />

      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Email</Text>
      <Input onChangeText={text => setEmail(text)}  style={style.container} />

      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Senha</Text>
      <Input onChangeText={text => setSenha(text)}  style={style.container} />
      
      
      <Button
        title={'Salvar'}
        onPress={()=> inserirDados()}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
          borderRadius:10
        }}
      />
    </View>
  );
}


const style = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#efefee"
  },
  title: {
    fontSize: 12,
    color: "#000",
 }
})

export default UsuarioCadastroScreen;