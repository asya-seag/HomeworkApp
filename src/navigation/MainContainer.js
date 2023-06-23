import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomePage from '../screens/WelcomePage';
import About from '../screens/About';
import MyPlants from '../screens/MyPlants';
import WishList from '../screens/WishList';

const HomePageName ='Welcome Page';
const AboutName ='About';
const MyPlantsName ='My Plants';
const WishListName ='Wish List';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={HomePageName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                    
                        if(rn === HomePageName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === AboutName){
                            iconName=focused ? 'information-circle':'information-circle-outline';
                        } else if (rn === MyPlantsName){
                            iconName=focused ? 'leaf':'leaf-outline';
                        } else if (rn === WishListName){
                            iconName=focused ? 'heart':'heart-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}
                tabBarOptions={{
                    activeTintColour: 'tomato',
                    inactiveTintColour: 'grey',
                    labelStyle: {paddingBottom: 10, fontSize: 10 },
                    style: {padding: 10, height: 70}
                }}
            >
                <Tab.Screen name={HomePageName} component={HomePage}/>
                <Tab.Screen name={AboutName} component={About}/>
                <Tab.Screen name={MyPlantsName} component={MyPlants}/>
                <Tab.Screen name={WishListName} component={WishList}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}