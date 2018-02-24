// @flow
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Image, Text } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Banner from './components/Banner';
import Details from './components/Details';

import { mapBookDetailsStateToProps } from '../../stores/mappers';

type Props = {
  book: Object,
  imageCache: Object
};

@inject(mapBookDetailsStateToProps)
@observer
class BookDetails extends Component<Props> {
  _renderBackground: Function;
  _renderForeground: Function;

  constructor() {
    super();
    this._renderBackground = this._renderBackground.bind(this);
    this._renderForeground = this._renderForeground.bind(this);
  }

  _renderBackground() {
    const {
      book,
      imageCache
    } = this.props;

    const imageLinks = imageCache.get(book.id);
    if (!imageLinks) return null;

    let imageUrl = imageLinks.get('thumbnail');
    if (!imageUrl) return null;
    imageUrl = imageUrl.replace('zoom=1', 'zoom=0'); // Feels hacky

    return (
      <Image
        resizeMode='stretch'
        source={{ uri: imageUrl }}
        style={{width: undefined, height: 400}}
      />
    );
  }

  _renderForeground() {
    return null
  }

  render() {
    return (
      <ParallaxScrollView
        backgroundColor="#0984e3"
        backgroundSpeed={10}
        contentBackgroundColor="#fff"
        parallaxHeaderHeight={400}
        renderBackground={this._renderBackground}
      >
        <Banner book={this.props.book} />
        <Details book={this.props.book} />
      </ParallaxScrollView>
    );
  }
}

export default BookDetails;