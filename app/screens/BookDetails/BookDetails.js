// @flow
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text, Image } from 'react-native';

type Props = {};

@inject('books')
@observer
class BookDetails extends Component<Props> {
  render() {
    return (
      <View>
      </View>
    );
  }
}

export default BookDetails;