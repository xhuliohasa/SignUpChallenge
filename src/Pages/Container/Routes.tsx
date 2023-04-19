import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupForm from '../SignupForm/Signup';
import GreetingPage from '../GreetingPage/GreetingPage';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpForm">
        <Stack.Screen
          name="SignUpForm"
          component={SignupForm}
          options={{title: 'Sign Up'}}
        />
        <Stack.Screen
          name="GreetingPage"
          component={GreetingPage}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
