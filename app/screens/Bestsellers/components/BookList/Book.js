// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';

type Props = {
  book: Object,
  index: number,
  coverImageUrl: string,
  handlePress: Function,
  updateCover: Function
};

const StyledContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
const StyledRank = styled.Text`
`;

const MetaContainer = styled.View`
  flex: 1;
`;
const StyledTitle = styled.Text`
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 2px;
`;
const SubTextContainer = styled.View`
  flex-direction: row;
`;
const StyledSubText = styled.Text`
  color: #7f8c8d;
  font-size: 16px;
  margin-right: 4px;
`;

class Book extends PureComponent<Props> {
  render() {
    const {
      book,
      coverImageUrl,
      handlePress,
      updateCover
    } = this.props;

    return (
      <StyledContainer onPress={() => handlePress(book.id)}>
        <Thumbnail 
          id={book.id}
          updateCover={updateCover}
          coverImageUrl={coverImageUrl} 
        />

        <MetaContainer>
          <StyledTitle>
            { book.title }
          </StyledTitle>

          <SubTextContainer>
            <StyledSubText numberOfLines={1}>
              By {book.author}
            </StyledSubText>
          </SubTextContainer>
        </MetaContainer>
      </StyledContainer>
    );
  }
}

Book.propTypes = {};

export default Book;