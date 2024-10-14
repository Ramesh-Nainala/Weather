import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTE_NAMES} from 'constants/index';
import LoginScreen from 'screens/auth/login/LoginScreen';
import VerifyOTPScreen from 'screens/auth/verifyOTP/VerifyOTPScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAMES.LOGIN} screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE_NAMES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTE_NAMES.VERIFY_OTP_SCREEN} component={VerifyOTPScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
