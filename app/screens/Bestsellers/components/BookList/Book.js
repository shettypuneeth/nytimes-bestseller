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
  color: #f39c12;
  font-weight: 700;
  font-size: 24px;
  margin-right: 18px;
  margin-left: 5px;
`;
const MetaContainer = styled.View`
  flex: 1;
`;
const WeeksOnList = styled.Text`
  color: #7f8c8d;
  font-size: 12px;
`;
const StyledTitle = styled.Text`
  color: #2c3e50;
  font-size: 17px;
  font-weight: 600;
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
      index,
      book,
      coverImageUrl,
      handlePress,
      updateCover
    } = this.props;

    return (
      <StyledContainer onPress={() => handlePress(book.id)}>
        <StyledRank>
          { index + 1 }
        </StyledRank>
        <MetaContainer>
          <WeeksOnList numberOfLines={1}>
             {`${book.weeksOnList} ${book.weeksOnList > 1 ? 'WEEKS' : 'WEEK'} ON LIST`}
          </WeeksOnList>

          <StyledTitle>
            { book.title }
          </StyledTitle>

          <SubTextContainer>
            <StyledSubText numberOfLines={1}>
              By {book.author}
            </StyledSubText>
          </SubTextContainer>
        </MetaContainer>

        <Thumbnail 
          id={book.id}
          updateCover={updateCover}
          coverImageUrl={coverImageUrl} 
        />
      </StyledContainer>
    );
  }
}

Book.propTypes = {};

export default Book;