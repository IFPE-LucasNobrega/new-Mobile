import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

function UsuarioCadastroScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Nome</Text>
      <Input style={style.container} />


      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>CPF</Text>
      <Input style={style.container} />

      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Email</Text>
      <Input style={style.container} />

      <Text style={
        {
          alignSelf: 'flex-start', fontWeight: 'bold', paddingLeft: 10
        }
      }>Senha</Text>
      <Input style={style.container} />
      
      
      <Button
        title={'Salvar'}
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