import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTE_NAMES} from 'constants/index';
import {setTopLevelNavigation} from 'navigation/navigationHelper';
import HomeScreen from 'screens/home/HomeScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer independent ref={(ref) => setTopLevelNavigation(ref)}>
      <Stack.Navigator initialRouteName={ROUTE_NAMES.HOME} screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTE_NAMES.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
