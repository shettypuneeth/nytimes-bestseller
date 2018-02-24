// @flow

import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

type Props = {
  id: string,
  coverImageUrl: string,
  updateCover: Function
}

class Thumbnail extends Component<Props> {
  componentDidMount() {
    this.props.updateCover(this.props.id);
  }

  render() {
    const {
      coverImageUrl,
      id
    } = this.props;

    if (!coverImageUrl) {
      return (
        <Image
          resizeMode='cover'
          style={styles.image}
          source={require('../../../../assets/book_placeholder.png')}
        />
      );
    }
    return (
      <Image
        resizeMode='cover'      
        style={styles.image}
        source={{uri: coverImageUrl}}
      />
    );
  }
}

export default Thumbnail;

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    // marginRight: 10,  
    borderRadius: 3,
    overflow: 'hidden'
  }
})