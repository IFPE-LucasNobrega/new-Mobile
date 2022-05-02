import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button, Image } from 'react-native-elements';

const staticImage = require("../assets/residence_fountain_fountain_water.jpg");
function HomeScreen({navigation}) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>

    <Image
      source={{ uri: staticImage }}
      style={{ width: 100, height: 100, borderRadius: 100}}
    />

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
    <Input style={style.container} secureTextEntry={true} />

    <Button
      title={'Login'}
      onPress={()=>navigation.navigate('Contatos')}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
        borderRadius:10
      }}
    />

    <Button
      title={'Cadastre-se'}
      onPress={()=>navigation.navigate('UsuarioCadastro')}
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

export default HomeScreen;