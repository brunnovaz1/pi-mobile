import 'react-native-gesture-handler'
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-reanimated'


import Login from './screens/Login';
import Home from './screens/Home';
import CadastroUsuario from './screens/CadrastroUsuario';
import RecuperarSenha from './screens/RecuperarSenha';


const Stack = createStackNavigator();

function App() {
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="CadastrarUsuario" component={CadastroUsuario} />
              <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;