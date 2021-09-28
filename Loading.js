import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Text style={styles.text}>Getting Weather....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2C2C2C",
    fontSize: 30,
  },
});

export default Loading;
