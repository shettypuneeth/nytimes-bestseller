// @flow

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Provider } from 'mobx-react';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import Bestsellers from './screens/Bestsellers'
import BookDetails from './screens/BookDetails'

import { BookStore } from './stores/BookStore';

const books = BookStore.create({
  books: {},
  imageCache: {}
});

type Props = {};

const BestSellers = StackNavigator({
  Bestsellers: {
    screen: Bestsellers
  },
  Details: {
    screen: BookDetails
  }
}, {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: '#fff'
  }
});

class AppRoot extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Provider books={books}>
          <BestSellers />        
        </Provider>
      </View>
    );
  }
}

AppRoot.propTypes = {};

export default AppRoot;