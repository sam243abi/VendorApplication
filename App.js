import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllReportScreen from "./Screen/AllReport";
import UploadScreen from "./Screen/Upload";
import NotificationScreen from "./Screen/Notification"
import ProfileScreen from "./Screen/Profile"
import ProductScreen from "./Screen/Product"
import EarningScreen from "./Screen/Earning"
import product2Screen from "./Screen/product2"
import orderscreen from "./Screen/order"
import SignUpScreen from "./Screen/SignUpScreen";
import RegisterScreen from "./Screen/RegisterScreen";
import OtpScreen from "./Screen/OtpScreen";
import SelectVendorScreen from "./Screen/SelectVendorScreen";
import VendorOnboardingScreen from "./Screen/VendorOnboardingScreen";
import LoginSuccessScreen from "./Screen/LoginSuccessScreen";
import DashboardScreen from "./Screen/DashboardScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="AllReport" component={AllReportScreen} options={{ title: "All Reports" }} />
        <Stack.Screen name="Upload" component={UploadScreen} options={{ title: "Upload Files" }} />
        <Stack.Screen name="Notification" component={NotificationScreen}  />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
        <Stack.Screen name="Product" component={ProductScreen}  />
        <Stack.Screen name="Earning" component={EarningScreen}  />
        <Stack.Screen name="product2" component={product2Screen}  />
        <Stack.Screen name="order" component={orderscreen}  />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Select" component={SelectVendorScreen} /> 
        <Stack.Screen name="Onboarding" component={VendorOnboardingScreen} />
        <Stack.Screen name="LoginSuccessScreen" component={LoginSuccessScreen}/> 
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
