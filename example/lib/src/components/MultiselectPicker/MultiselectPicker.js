import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import _ from "lodash";

export default class MultiselectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCheckbox: []
    };
  }

  selectedOnPress = async (item, checked) => {
    const { id, value, label } = item;
    if (checked) {
      const temp = this.state.selectedCheckbox;
      temp.push(item);
      await this.setState({ selectedCheckbox: temp });
    } else {
      const temp = _.remove(
        this.state.selectedCheckbox,
        item => id !== item.id
      );
      await this.setState({ selectedCheckbox: temp });
    }
    this.props.onChange && this.props.onChange(this.state.selectedCheckbox);
  };

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <BouncyCheckbox
            isChecked={false}
            textColor="#000"
            unfillColor="white"
            fontFamily="JosefinSans-Regular"
            iconComponent={<Image style={{ height: 10, width: 10 }} />}
            text={item.label}
            onPress={isChecked => this.selectedOnPress(item, isChecked)}
          />
        )}
      />
    );
  }
}
