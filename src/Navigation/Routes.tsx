import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../Navigation/routes_name';
import SplashScreen from '../screens/splash';
import OnBoardingScreen from '../screens/intro/onBoardingScreen';
import {COLORS} from '../Utils/colors';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import HomeScreen from '../screens/Home/Home';
import DrawerNavigator from './Drawer';
import BottomTab from './TabBar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.PRIMARY} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: '#fffff'},
        }}
        initialRouteName={ROUTES.SPLASH}>
        <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
        <Stack.Screen name={ROUTES.Login} component={LoginScreen} />
        <Stack.Screen name={ROUTES.Register} component={RegisterScreen} />
        <Stack.Screen name={ROUTES.OnBoarding} component={OnBoardingScreen} />
        <Stack.Screen name={ROUTES.Home} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
