import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import HomePage from '../screens/WelcomePage';
import About from '../screens/About';
import News from '../screens/News';
import WishList from '../screens/WishList';
import MyPlantsForm from '../screens/MyPlantsForm';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import Register from '../screens/Register';

const HomePageName = 'Welcome Page';
const AboutName = 'About';
const NewsName = 'News';
const WishListName = 'Wish List';
const MyPlantsFormName = 'My plants';
const LoginScreenName = 'Login';
const LogoutScreenName = 'Logout';
const RegisterName = 'Register';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const loggedIn = useSelector((state) => state.AuthReducers.authToken);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <NavigationContainer>
      {loggedIn ? (
        <Tab.Navigator
          initialRouteName={HomePageName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === HomePageName) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === AboutName) {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              } else if (rn === NewsName) {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              } else if (rn === WishListName) {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (rn === MyPlantsFormName) {
                iconName = focused ? 'document-text' : 'document-text-outline';
              } else if (rn === LogoutScreenName) {
                iconName = focused ? 'exit' : 'exit-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#577D86',
            inactiveTintColor: '#577D86',
            style: {
              backgroundColor: '#FFFFFF',
              padding: 10,
              height: 70,
            },
            labelStyle: {
              paddingBottom: 10,
              fontSize: 10,
            },
          }}
        >
          <Tab.Screen name={HomePageName} component={HomePage} />
          <Tab.Screen name={AboutName} component={About} />
          <Tab.Screen name={NewsName} component={News} />
          <Tab.Screen name={WishListName} component={WishList} />
          <Tab.Screen name={MyPlantsFormName} component={MyPlantsForm} />
          <Tab.Screen name={LogoutScreenName} component={LogoutScreen} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name={LoginScreenName}
            component={LoginScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? 'person-circle' : 'person-circle-outline'}
                  size={size}
                  color={color}
                  style={{ paddingBottom: 10 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name={RegisterName}
            component={Register}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? 'person-add' : 'person-add-outline'}
                  size={size}
                  color={color}
                  style={{ paddingBottom: 10 }}
                />
              ),
            }}
          />
        </Tab.Navigator>

      )}
    </NavigationContainer>
  );
}
