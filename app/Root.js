// @flow
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import Bestsellers from './screens/Bestsellers'

type Props = {};

const ArtExplorer = StackNavigator({
  Bestsellers: {
    screen: Bestsellers
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
        <ArtExplorer />
      </View>
    );
  }
}

AppRoot.propTypes = {};

export default AppRoot;