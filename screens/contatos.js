import * as React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useEffect,useState } from 'react';
import axios from 'axios';
const add = require("../assets/favicon.png");
const perfil = require('../assets/perfil.png')






function ContatosScreen({navigation}) {
  const [getContatos,setContatos] = useState([])

  useEffect(()=>{
    function consultarDados(){
  
      axios.get('http://professornilson.com/testeservico/clientes')
      
      .then(function (response) {
      console.log(response);
      setContatos(response.data)
      }).catch(function (error) {
      console.log(error);
      
      });
      
      }
      consultarDados();
  },[])
    return (      
        <View>
            {
                getContatos.map((contato) => (
                <ListItem 
                key={contato.id} bottomDivider onPress={()=>navigation.navigate('Editar', {
                  nome:contato.nome,
                  telefone:contato.telefone,
                  email:contato.email,
                  id:contato.id

                })}>
                    <ListItem.Content>
                    <ListItem.Title>{contato.nome}</ListItem.Title>
                    <ListItem.Subtitle>{contato.telefone}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                ))
            }
        </View>        
    );
}

export default ContatosScreen;
