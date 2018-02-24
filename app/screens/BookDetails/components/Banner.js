// @flow

import React from 'react';
import styled from 'styled-components/native';

type Props = {
  book: Object
};

const Container = styled.View`
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-bottom-color: #dfe6e9;
`;
const StyledTitle = styled.Text`
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 2px;
`;
const StyledSubText = styled.Text`
  color: #7f8c8d;
  font-size: 16px;
  margin-right: 4px;
`;

const Banner = ({book}: Props) => {
  const {
    title,
    author
  } = book;

  return (
    <Container>
      <StyledTitle>
        { title }
      </StyledTitle>
      <StyledSubText>
        by { author }
      </StyledSubText>
    </Container>
  );
};

export default Banner;