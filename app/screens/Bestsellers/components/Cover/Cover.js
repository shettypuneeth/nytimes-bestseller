// @flow

import React from 'react';
import styled from "styled-components/native";
import PropTypes from 'prop-types';

type Props = {};

const StyledContainer = styled.View`
  position: relative;
  background-color: #95a5a6;
`;
const StyledImage = styled.Image`
  height: 250;
  width: auto;
`;
const ForegroundContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: flex-end;
  align-items: flex-end;
`;
const TitleContainer = styled.View`
  width: 100%;
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.87);
`;
const StyledTitle = styled.Text`
  color: #2c3e50;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`; 
const StyledSubTitle = styled.Text`
  color: #747d8c;
  font-size: 14px;
  text-align: center;
`;

const Cover = () => {
  return (
    <StyledContainer>
      <StyledImage 
        resizeMode='cover'
        source={require('../../../../assets/book-proto-2.jpg')}
      />
      <ForegroundContainer>
        <TitleContainer>
          <StyledTitle>
            NY TIMES BESTSELLERS
          </StyledTitle>
          <StyledSubTitle>
            Powered by nytimes and google books api
          </StyledSubTitle>
        </TitleContainer>
      </ForegroundContainer>
    </StyledContainer>
  );
};

Cover.propTypes = {};

export default Cover;