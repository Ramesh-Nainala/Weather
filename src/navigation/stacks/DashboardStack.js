import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTE_NAMES} from 'constants/index';
import DashboardScreen from 'screens/dashboard/DashboardScreen';

const Stack = createStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAMES.DASHBOARD_SCREEN}>
      <Stack.Screen name={ROUTE_NAMES.DASHBOARD_SCREEN} component={DashboardScreen} />
    </Stack.Navigator>
  );
}

export default DashboardStack;
