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
import MultiselectPicker from "./lib/src/components/MultiselectPicker/MultiselectPicker";

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
  }
];

const App = () => {
  return (
    <View>
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
    justifyContent: "center"
  }
});

export default App;
