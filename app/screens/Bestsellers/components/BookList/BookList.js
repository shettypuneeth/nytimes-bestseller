// @flow

import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  StyleSheet
} from "react-native";
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { mapBookListStateToProps } from '../../../../stores/mappers';

import Book from './Book';

type Props = {
  books: Array<Object>,
  isLoading: bool,
  onPress: Function,
  imageCache: Object,
  selectBook: Function,
  updateCover: Function
};

const StyledList = styled.View`
  flex: 1;
`;
const StyledLoader = styled.View`
  margin-top: 10px;
`;

@inject(mapBookListStateToProps)
@observer
class BookList extends Component<Props> {
  _renderBook: Function;
  handlePress: Function;
  updateCover: Function;

  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
    this._renderBook = this._renderBook.bind(this);
    this.updateCover = this.updateCover.bind(this);
  }

  updateCover(isbn: string) {
    this.props.updateCover(isbn);
  }
  
  _renderBook({ item, index }: { item: Object, index: number }) {
    const imageLinks = this.props.imageCache.get(item.id);
    const url = imageLinks ? imageLinks.get('smallThumbnail') : '';

    return (
      <Book
        book={item}
        key={item.id}
        index={index}
        coverImageUrl={url}
        handlePress={this.handlePress}
        updateCover={this.updateCover}
      />
    );
  }

  _renderSeparator() {
    return (
      <View style={styles.separator} />
    )
  }

  handlePress(id: string) {
    const { onPress, selectBook } = this.props;
    
    selectBook(id);
    onPress(id);
  }

  render() {
    const {
      isLoading,
      books,
      imageCache
    } = this.props;

    if (isLoading) {
      return (
        <StyledLoader>
          <ActivityIndicator size='large' />
        </StyledLoader>
      );
    }

    return (
      <StyledList>
        <FlatList
          data={[books[0], books[1]]}
          initialNumToRender={5}
          extraData={imageCache}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this._renderSeparator}
          maxToRenderPerBatch={5}
          renderItem={this._renderBook}
          windowSize={3}
        />
      </StyledList>
    );
  }
}

BookList.propTypes = {};

export default BookList;

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
    backgroundColor: '#34495e'
  }
})