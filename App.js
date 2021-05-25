import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import ScanScreen from './screens/ScanScreen'
import ProfileScreen from './screens/ProfileScreen'
import CardScreen from './screens/CardScreen'

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCbliX0ukfMF5HXJkDpqwEKaqy9xw9Kg8o",
  authDomain: "qrcard-2df18.firebaseapp.com",
  projectId: "qrcard-2df18",
  storageBucket: "qrcard-2df18.appspot.com",
  messagingSenderId: "745752461067",
  appId: "1:745752461067:web:ade9baa7d83aee7ad9ec0e"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  QRCARD: HomeScreen,
  Profile: ProfileScreen,
  Scan: ScanScreen,
  Card: CardScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
  )
)