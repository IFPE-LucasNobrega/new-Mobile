import * as React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const add = require("../assets/favicon.png");
const perfil = require('../assets/perfil.png')
const listaContatos = [
    {
      name: 'Amy Farha',
      login: 'amy@ifpe.edu.br',
      avatar_url: add,
      telefone: '(81)8888-9999'
    },
    {
      name: 'Chris Jackson',
      login: 'chris@ifpe.edu.br',
      avatar_url: perfil,
      telefone: '(11)9999-8888'
    }
  ]


function ContatosScreen({navigation}) {
    return (      
        <View>
            {
                listaContatos.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={()=>navigation.navigate('Editar')}>
                    <Avatar rounded source={{uri: l.avatar_url}} />
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                ))
            }
        </View>        
    );
}

export default ContatosScreen;
