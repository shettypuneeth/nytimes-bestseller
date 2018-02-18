// @flow
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import Cover from './components/Cover';
import DateFilter from './components/DateFilter';
import BookList from './components/BookList';

type Props = {
  navigation: {
    navigate: Function
  }
};

class Bestsellers extends Component<Props> {
  handleItemPress: Function;
  constructor() {
    super();
    this.handleItemPress = this.handleItemPress.bind(this);
  }
  
  handleItemPress(isbn: Object): void {
    const { navigate } = this.props.navigation;
    navigate('Details');
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Cover />

        <DateFilter />

        <BookList onPress={this.handleItemPress} />
      </View>
    );
  }
}

Bestsellers.propTypes = {};

export default Bestsellers;