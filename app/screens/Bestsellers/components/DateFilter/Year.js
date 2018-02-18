// @flow

import React from 'react';
import { ScrollView, StyleSheet } from "react-native";
import styled from 'styled-components/native';

import Block from './Block';

const StyledYear = styled.View`
  flex-direction: row;
  border-top-width: ${props => StyleSheet.hairlineWidth};
  border-top-color: rgba(236, 240, 241, 0.7);
  background: rgba(44, 62, 80, 1.0);
`;

type Props = {
  selectedYear: number,
  handleSelection: Function
};

const currentYear = (new Date()).getFullYear();
const YEARS: Array<number> = Array.from(new Array(20), (v, i) => currentYear - i);

const Year = (props: Props) => {
  const {
    handleSelection,
    selectedYear
  } = props;

  return (
    <ScrollView horizontal={true}>
      <StyledYear>
        {
          YEARS.map(m => (
            <Block 
              active={m === selectedYear}
              blockId={m}
              handlePress={handleSelection}
              key={m}
              value={m}
            />
          ))
        }
      </StyledYear>
    </ScrollView>
  );
};

export default Year;