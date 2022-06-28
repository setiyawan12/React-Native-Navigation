import React from 'react';
import AskDoctorScreen from '../screens/AskDoctor';
import AskMotherScreen from '../screens/AskMother';
import YourBabyScreen from '../screens/YourBaby';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet,Image,Text} from 'react-native';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const AskDoctorStack =()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name='AskDoctor' component={AskDoctorScreen}/>
  </Stack.Navigator>
  )
}

const YourBabyStack =()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name='YourBaby' component={YourBabyScreen}/>
  </Stack.Navigator>
  )
}

const AskMotherStack =()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name='AskMother' component={AskMotherScreen}/>
  </Stack.Navigator>
  )
}
const MyTabs = () => {
    return (
        <Tab.Navigator 
        tabBarOptions={{
            showLabel: false,
            style: {
                position: "absolute",
                elevation: 0,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                height: 60,
                ...styles.shadow,
            }
        }}
        >
        <Tab.Screen
        name="AskDoctor"
        component={AskDoctorStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: "center", justifyContent: "center", top: 5 }}
            >
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#FF869E" : "#748c94",
                }}
              />
             <Text
                style={{ color: focused ? "#FF869E" : "#748c94", fontSize: 12 }}
              >
                Ask Doctor
              </Text>
            </View>
          )
        }}
      />
        <Tab.Screen
        name="YourBaby"
        component={YourBabyStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: "center", justifyContent: "center", top: 5 }}
            >
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#FF869E" : "#748c94",
                }}
              />
             <Text
                style={{ color: focused ? "#FF869E" : "#748c94", fontSize: 12 }}
              >
                Your Baby
              </Text>
            </View>
          )
        }}
      />
        <Tab.Screen
        name="AskMother"
        component={AskMotherStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: "center", justifyContent: "center", top: 5 }}
            >
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#FF869E" : "#748c94",
                }}
              />
             <Text
                style={{ color: focused ? "#FF869E" : "#748c94", fontSize: 12 }}
              >
                Ask Mother
              </Text>
            </View>
          )
        }}
      />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7f6df0",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
})

export default (Navigator = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
})