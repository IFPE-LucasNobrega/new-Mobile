import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import CadastroScreen from './screens/cadastro';
import ContatosScreen from './screens/contatos';
import UsuarioCadastroScreen from './screens/cadastroUsuario';
import EditCadastroScreen from './screens/editar';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

function App() {
    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'blue', height: 40 }, headerTitleStyle: { color: 'white', fontWeight: 'bold' }, headerTitleAlign: 'center' }} >
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Cadastro" component={CadastroScreen} options={({navigation}) => ({
                headerLeft: () => (
                    <Button onPress={() => navigation.navigate('Contatos')} type="clear" icon={<Icon name="arrowleft" size={20} color="white" />} />
                ), title: 'Cadastro de Contato'
            })  } />
            <Stack.Screen name="Contatos" component={ContatosScreen} options={ ({navigation}) => ({
                headerLeft: () => (
                    <Button onPress={() => navigation.navigate('Home')} type="clear" icon={<Icon name="arrowleft" size={20} color="white" />} />
                ),                
                headerRight: () => (
                    <Button onPress={() => navigation.navigate("Cadastro")} type="clear" icon={<Icon name="pluscircleo" size={20} color="white" />} />
                ), title: 'Lista de Contatos'
            })}/>
            <Stack.Screen name="Editar" component={EditCadastroScreen} options={ ({navigation}) => ({
                headerLeft: () => (
                    <Button onPress={() => navigation.navigate('Contatos')} type="clear" icon={<Icon name="arrowleft" size={20} color="white" />} />
                ), title: 'Edição de Contato'
            })}/>
            <Stack.Screen name="UsuarioCadastro" component={UsuarioCadastroScreen} options={ ({navigation}) => ({
                headerLeft: () => (
                    <Button onPress={() => navigation.navigate('Home')} type="clear" icon={<Icon name="arrowleft" size={20} color="white" />} />
                ), title: 'Cadastro de Usuário'
            })}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;