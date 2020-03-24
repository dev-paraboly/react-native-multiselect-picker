import _ from "lodash";
import React, { Component } from "react";
import { FlatList, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default class MultiselectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCheckbox: [],
      removedCheckbox: []
    };
  }

  selectedOnPress = async (item, checked) => {
    const { id, label, value, isChecked } = item;
    item.isChecked = checked;
    if (checked) {
      const temp = this.state.selectedCheckbox;
      temp.push(item);
      await this.setState({ selectedCheckbox: temp });
    } else {
      const list = this.state.removedCheckbox;
      list.push(item);
      await this.setState({ removedCheckbox: list });
      const temp = _.remove(
        this.state.selectedCheckbox,
        item => id !== item.id
      );
      await this.setState({ selectedCheckbox: temp });
    }
    this.props.onChange && this.props.onChange(this.state.selectedCheckbox);
    this.props.onRemove && this.props.onRemove(this.state.removedCheckbox);
  };

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <BouncyCheckbox
            isChecked={item.isChecked}
            unfillColor="white"
            disableTextDecoration
            text={item.label}
            onPress={isChecked => this.selectedOnPress(item, isChecked)}
            {...this.props}
          />
        )}
      />
    );
  }
}
