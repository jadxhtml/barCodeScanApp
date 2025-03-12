import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "./screen/homeScreen";
import scanScreen from "./screen/scanScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tab.Screen 
          name="Home" 
          component={homeScreen} 
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }}
          />
        <Tab.Screen
          name="Scan"
          component={scanScreen} 
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="scan-outline" size={size} color={color} /> }}
          />

      </Tab.Navigator>
    </NavigationContainer>
  );
}