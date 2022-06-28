import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArticlesScreen from '../screens/Articles';
import ProgressScreen from '../screens/Progress';
import ToolsScreen from '../screens/Tools';
const TabTop = createMaterialTopTabNavigator()

const YourBaby = () =>{
    return(
    <TabTop.Navigator
        initialRouteName="Tools"
        tabBarOptions={{
          activeTintColor: '#2C3639',
          labelStyle: { fontSize: 12 },
        }}
      >
        <TabTop.Screen
          name="Progress"
          component={ProgressScreen}
          options={{ tabBarLabel: 'Progress' }}
        />
        <TabTop.Screen
          name="Articles"
          component={ArticlesScreen}
          options={{ tabBarLabel: 'Articles' }}
        />
        <TabTop.Screen
          name="Tools"
          component={ToolsScreen}
          options={{ tabBarLabel: 'Tools' }}
        />
      </TabTop.Navigator>
    )
}

export default YourBaby
