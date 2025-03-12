import React from "react";
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import Donk from '../assets/donk.png';
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
    const InsightCard = ({ icon, title, subtitle, color }) => (
        <View style={{
            width: "47%",
            height: "70%",
            padding: 15,
            borderRadius: 15,
            alignItems: "center",
            marginBottom: 15,
            backgroundColor: '#dcdde1'
        }}>
            <Ionicons name={icon} size={30} color={color} />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>{title}</Text>
            <Text style={{ fontSize: 14, color: "#555" }}>{subtitle}</Text>
        </View>
    );
    return (
        <View>
            <View>
                <Text style={{
                    fontWeight: 'bold',
                    width: 90,
                    height: 52,
                    top: 63,
                    left: 23,
                }}>Hello 👋🏻 Donk</Text>

                <Image source={Donk} style={{
                    width: 66.7,
                    height: 66.7,
                    top: 10,
                    left: 300,
                    borderRadius: 20
                }} />;
            </View>
            <Text style={{
                fontSize: 18,
                marginTop: 40,
                marginBottom: 10,
                marginLeft: 20

            }}>Your Insights!</Text>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: 20,
            }}>
                <InsightCard icon='scan-outline' title='Scan' subtitle='Scan' color="#a29bfe" />
                <InsightCard icon='alert-circle-outline' title='Alert' subtitle='Alert' color="#e17055" />
                <InsightCard icon='checkmark-circle-outline' title='Checkmark' subtitle='Checkmark' color="#00b894" />
                <InsightCard icon='calendar-outline' title='Directory' subtitle='Directory' color="#0984e3" />

            </View>
        </View>
    )
}

