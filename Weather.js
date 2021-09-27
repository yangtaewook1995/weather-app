import React from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
