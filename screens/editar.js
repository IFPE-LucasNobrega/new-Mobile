import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';


function EditCadastroScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Login</Text>
      <Input style={style.container} placeholder="Login do Banco" />


      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Email</Text>
      <Input style={style.container} placeholder="Email do Banco" />


      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Telefone</Text>
      <Input style={style.container} placeholder="Telefone do Banco" />
      
      
      <Button
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