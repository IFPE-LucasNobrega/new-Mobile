import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { useEffect,useState, router} from 'react';
import axios from 'axios';



function EditCadastroScreen({route,nevegation}) {
  const [getNome,setNome] = useState()
  const [getId,setId] = useState()
  const [getTelefone,setTelefone] = useState()
  const [getEmail,setEmail] = useState()
  const [getCpf,setCpf] = useState()
  


  useEffect(()=>{
    if(route.params){
          const { nome } =  route.params 
          const { telefone } =  route.params 
          const { cpf } =  route.params 
          const { id } =  route.params
          const {email} = route.params
  

          setNome(nome)
          setTelefone(telefone)
          setCpf(cpf)
          setId(id)
          setEmail(email)

    }
  },[])  

  function alterarDados(){
    axios.put('http://professornilson.com/testeservico/clientes/'+getId, {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf
      })
      .then(function (response) {
        setNome('');
        setCpf('');
        setTelefone(''); 
        showMessage({
            message: "Registro Alterado com sucesso",
            type: "success",
          }); 
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });    
}
function excluirDados(){

  axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
  
  .then(function (response) {
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
      }>Login</Text>
      <Input 
      onChangeText={text => setNome(text)}
      style={style.container} value={getNome||''} placeholder="Nome" />


      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Email</Text>
      <Input 
      onChangeText={text => setEmail(text)}
      style={style.container} value={getEmail||''} placeholder="Email" />


      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Telefone</Text>
      <Input 
      onChangeText={text => setTelefone(text)}
      style={style.container}value={getTelefone||''} placeholder="Telefone"/>
      
      
      <Button
        onPress={()=>alterarDados()}
        title={'Alterar'}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
          borderRadius:10
        }}
      />

      <Button
        title={'Excluir'}
        onPress={()=>{
          excluirDados()
        }}
        buttonStyle={{backgroundColor: 'red'}}
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

export default EditCadastroScreen;