import * as  React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "../Screen/Home/index.js"
import Login from "../Screen/Login/index"
import Splash from "../Screen/Splash"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Splash" component={Splash}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;