import { StyleSheet } from 'react-native';
import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import FirstAid from './Pages/FirstAid';
import GeneralHelp from './Pages/GeneralHelp';
import Home from './Pages/Home';
import Infos from './Pages/Infos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              headerStyle: {
                backgroundColor: "#ee0040",
              },
              headerTintColor: "#fff"
            }
          }
        >
          <Stack.Screen name="Home" component={Home} options={{
            title: "Aplicativo Primeiros Socorros UFCG"
          }} />
          <Stack.Screen name="FirstAid" component={FirstAid} options={{
            title: "Primeiros Socorros"
          }} />
          <Stack.Screen name="GeneralHelp" component={GeneralHelp} options={{
            title: "Regra dos 3 'C'"
          }} />
          <Stack.Screen name="Infos" component={Infos} options={{
            title: "Informações"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  },
});