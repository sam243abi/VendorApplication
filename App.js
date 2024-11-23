import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllReportScreen from "./Screen/AllReport";
import UploadScreen from "./Screen/Upload";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Upload">
        <Stack.Screen name="AllReport" component={AllReportScreen} options={{ title: "All Reports" }} />
        <Stack.Screen name="Upload" component={UploadScreen} options={{ title: "Upload Files" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;