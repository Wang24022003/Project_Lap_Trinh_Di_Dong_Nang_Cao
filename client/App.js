import React from "react";

import IntroScreen from "./src/IntroScreen";
import HomeScreen from "./src/HomeScreen";
import RegisterScreen from "./src/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/LoginScreen";
import Home from "./src/Home";
import About from "./src/About";
import ProductDetails from "./src/ProductDetails";
import Cart from "./src/Cart";
import Checkout from "./src/Checkout";
import Payments from "./src/Payments";
import Login from "./src/auth/Login";
import Register from "./src/auth/Register";
import Account from "./src/Account/Account";

//routes
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="payment" component={Payments} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="mobile" component={About} />
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

