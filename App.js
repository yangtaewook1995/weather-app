import React from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "e8a8812924268ca9d44d2da54ff64228";

export default class App extends React.Component {
  state = {
    isLoading: true,
    temp: null,
    condition: null,
  };

  getCurrentWeather = async (lat, lon) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    this.setState({ temp: temp, condition: weather[0].main });
  };

  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      this.getCurrentWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Cant find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;

    return isLoading ? (
      <Loading></Loading>
    ) : (
      <Weather temp={Math.round(temp)} condition={condition}></Weather>
    );
  }
}
