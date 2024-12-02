import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllReportScreen from "./Screen/AllReport";
import UploadScreen from "./Screen/Upload";
import NotificationScreen from "./Screen/Notification"
import ProfileScreen from "./Screen/Profile"
import ProductScreen from "./Screen/Product"
import EarningScreen from "./Screen/Earning"


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Earning">
        <Stack.Screen name="AllReport" component={AllReportScreen} options={{ title: "All Reports" }} />
        <Stack.Screen name="Upload" component={UploadScreen} options={{ title: "Upload Files" }} />
        <Stack.Screen name="Notification" component={NotificationScreen}  />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
        <Stack.Screen name="Product" component={ProductScreen}  />
        <Stack.Screen name="Earning" component={EarningScreen}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
