// @flow

import React from 'react';
import { ScrollView } from "react-native";
import styled from 'styled-components/native';

import Block from './Block';

const StyledMonth = styled.View`
  flex-direction: row;
  background: rgba(44, 62, 80, 0.95);
`;

type Props = {
  selectedMonth: number,
  handleSelection: Function
};

const MONTHS: Array<number> = Array.from(new Array(12), (v, i) => i);
const MONTH_NAME_MAP = {
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec',
};

const Month = (props: Props) => {
  const {
    handleSelection,
    selectedMonth
  } = props;
  const currentMonth = (new Date()).getMonth();
  
  return (
    <ScrollView horizontal={true}>
      <StyledMonth>
        {
          MONTHS.map(m => (
            <Block 
              active={m === selectedMonth}
              blockId={m}
              disabled={m > currentMonth}
              handlePress={handleSelection}
              key={m}
              value={MONTH_NAME_MAP[m]}
            />
          ))
        }
      </StyledMonth>
    </ScrollView>
  );
};

export default Month;