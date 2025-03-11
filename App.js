import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens (Ensure correct capitalization & file paths)
import Welcome from './SRC/Screen/Welcome';
import PhoneVerification from './SRC/Screen/PhoneVerification';
import OtpVerification from './SRC/Screen/OtpVerification';
import Profile from './SRC/Screen/Profile';
import DeliveryAddress from './SRC/Screen/DeliveryAddress';
import Intro from './SRC/Screen/Intro';
import Daily from './SRC/Screen/Daily';
import Weekly from './SRC/Screen/Weekly';
import Monthly from './SRC/Screen/Monthly';
import AlternateDays from './SRC/Screen/AlternateDays';
import Home from './SRC/Screen/Home';
import Search from './SRC/Screen/Search';
import Drops from './SRC/Screen/Drops';
import Account from './SRC/Screen/Account';
import Product from './SRC/Screen/Product';
import SubscriptionStartScreen from './SRC/Screen/SubscriptionStartScreen';
import Schedule from './SRC/Screen/Schedule';
import Subscribe from './SRC/Screen/Subscribe';
import VendorDetails from './SRC/Screen/VendorDetails';
import Review from './SRC/Screen/Review';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="OTP" component={OtpVerification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="AlternateDays" component={AlternateDays} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Drops" component={Drops} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="SubscriptionStartScreen" component={SubscriptionStartScreen} />
        <Stack.Screen name="VendorDetails" component={VendorDetails} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
