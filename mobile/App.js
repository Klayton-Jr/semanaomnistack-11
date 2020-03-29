import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * No React Native não tem as mesmas tags do html. Pode ser usado div pra praticamente tudo
 * Usam View, Text
 * 
 * Todos os elementos possuem display flex por padrão
 * 
 * Não há hífen no nome das propriedades
 * 
 * Não existe herança de estilos no react native
 */

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

