import React from "react";
import Loading from "./Loading";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "Actually, outside of the house",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "For more info look outside",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "Do you want to build a snowman?",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny",
    subtitle: "Go get your hat",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, it's boring",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
  },
  Fog: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Fog!",
    subtitle: "It's like you have no glasses on.",
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Sand!",
    subtitle: "Bring your mask.",
  },
  Ash: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Ash!",
    subtitle: "It's like you have no glasses on.",
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Squall!",
    subtitle: "It's like you have no glasses on.",
  },
  Tornado: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Tornado!",
    subtitle: "It's like you have no glasses on.",
  },
  Smoke: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Smoke!",
    subtitle: "It's like you have no glasses on.",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content"></StatusBar>

      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  tempTerm: {
    fontSize: 20,
    color: "white",
  },
  title: {
    fontSize: 44,
    color: "white",
    fontWeight: "300",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
