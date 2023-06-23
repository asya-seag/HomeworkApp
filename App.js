import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './src/screens/Welcome';
import HomePage from './src/screens/Home.js';
import MyPlants from './src/screens/MyPlants';
import WishList from './src/screens/WishList';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomePage}/>
    <Stack.Screen name="Welcome" component={Welcome}/>
    <Stack.Screen name="MyPlants" component={MyPlants}/>
    <Stack.Screen name="WishList" component={WishList}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ffdd80',
    margin: 10,
    width: 300,  // Specify the width
    height: 80,  // Specify the height
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
});
