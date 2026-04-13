import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Cadastro from './Cadastro';
import EsqueceuSenha from './EsqueceuSenha';
import CodigoVerificacao from './CodigoVerificacao';
import NovaSenha from './NovaSenha';
import BemVindo from './BemVindo';
import Escala from './Escala';
import Formacao from './Formacao';
import Configuracoes from './Configuracoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen name="CodigoVerificacao" component={CodigoVerificacao} />
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="NovaSenha" component={NovaSenha} />
        <Stack.Screen name="Escala" component={Escala} />
        <Stack.Screen name="Formacao" component={Formacao} />
        <Stack.Screen name="Settings" component={Configuracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}