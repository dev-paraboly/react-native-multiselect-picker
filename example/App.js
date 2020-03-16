/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import MultiselectPicker from "./lib/src/MultiselectPicker";

const data = [
  {
    id: 0,
    label: "Fred",
    value: "Fred Çakmaktaş"
  },
  {
    id: 1,
    label: "Vilma",
    value: "Vilma Çakmaktaş"
  },
  {
    id: 2,
    label: "Barni",
    value: "Barni Moloztaş"
  },
  {
    id: 3,
    label: "Betty",
    value: "Betty Moloztaş"
  }
];

const App = () => {
  return (
    <View style={styles.container}>
      <MultiselectPicker
        data={data}
        onChange={checked => {
          console.log(checked);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    left: 15
  }
});

export default App;
