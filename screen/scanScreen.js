import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import coca from '../assets/cocacola2.png';
import cocaicon from '../assets/cocaIcon.png';

export default function ScanScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#f5f5f5", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={{ position: "absolute", top: 50, left: 20, marginTop: 20, zIndex: 2 }}
            >
                <Ionicons name="arrow-back-outline" size={32} color="black" />
            </TouchableOpacity>

            <Image 
                source={coca} 
                style={{ width: "100%", height: "100%", position: "absolute",  marginTop: 100 }}
            />
            
            <View style={{
                width: 300,
                height: 470,
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 20,
                position: "absolute",
                top: "23%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}>
                <View style={{ position: "absolute", width: 50, height: 50, borderLeftWidth: 4, borderTopWidth: 4, borderColor: "black", top: -2, left: -2, borderTopLeftRadius: 20}} />
                <View style={{ position: "absolute", width: 50, height: 50, borderRightWidth: 4, borderTopWidth: 4, borderColor: "black", top: -2, right: -2, borderTopRightRadius: 20}} />
                <View style={{ position: "absolute", width: 50, height: 50, borderLeftWidth: 4, borderBottomWidth: 4, borderColor: "black", bottom: -2, left: -2, borderBottomLeftRadius: 20}} />
                <View style={{ position: "absolute", width: 50, height: 50, borderRightWidth: 4, borderBottomWidth: 4, borderColor: "black", bottom: -2, right: -2, borderBottomRightRadius: 20}} />
            </View>

            <View
                style={{
                    position: "absolute",
                    bottom: 40,
                    backgroundColor: "white",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 15,
                    width: "90%",
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 5
                }}
            >
                <Image source={cocaicon} style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Donk's</Text>
                    <Text style={{ fontSize: 14, color: "#555" }}>CocaCola</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: "#57A9FB", padding: 10, borderRadius: 10 }}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
