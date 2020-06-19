import _ from "lodash";
import React, { Component } from "react";
import { FlatList, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default class MultiselectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCheckbox: [],
    };
  }

  selectedOnPress = async (item, checked) => {
    const { id } = item;
    item.isChecked = checked;
    if (checked) {
      const temp = this.state.selectedCheckbox;
      temp.push(item);
      await this.setState({ selectedCheckbox: temp });
    } else {
      const temp = _.remove(
        this.state.selectedCheckbox,
        (item) => id !== item.id
      );
      await this.setState({ selectedCheckbox: temp });
    }
    this.props.onChange && this.props.onChange(this.state.selectedCheckbox);
  };

  renderItem = (data) => {
    const { item, index } = data;

    return (
      <BouncyCheckbox
        isChecked={item.isChecked}
        unfillColor="white"
        disableTextDecoration
        text={item.label}
        onPress={(isChecked) => this.selectedOnPress(item, isChecked)}
        {...this.props}
      />
    );
  };

  componentDidMount() {
    const temp = [];
    this.props.data.map((item) => {
      if (item.isChecked) temp.push(item);
      this.setState({ selectedCheckbox: temp });
    });
  }

  render() {
    const { data } = this.props;
    return <FlatList data={data} renderItem={this.renderItem.bind(this)} />;
  }
}
