import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default class MultiselectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCheckbox: []
    };
  }

  selectedOnPress = async (item, checked) => {
    const { data } = item;
    if (checked) {
      const temp = this.state.selectedCheckbox;
      temp.push(item);
      await this.setState({ selectedCheckbox: temp });
    } else {
      const temp = _.remove(
        this.state.selectedCheckbox,
        item => data.id !== item.data.id
      );
      await this.setState({ selectedCheckbox: temp });
    }
    this.props.onChange && this.props.onPress(this.state.selectedCheckbox);
  };

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <BouncyCheckbox
            isChecked={false}
            textColor="#000"
            unfillColor="white"
            fontFamily="JosefinSans-Regular"
            text={item}
            onPress={isChecked => this.selectedOnPress(item, isChecked)}
          />
        )}
      />
    );
  }
}
