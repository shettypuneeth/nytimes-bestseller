// @flow
import React, { Component } from 'react';
import styled from 'styled-components/native';

import Month from './Month';
import Year from './Year';

type Props = {
  selectedMonth: number,
  selectedYear: number,
  handleSelection: Function
};

const StyledContainer = styled.View`
`;

class DateNavigator extends Component<Props> {
  render() {
    const {
      selectedYear,
      selectedMonth,
      handleSelection
    } = this.props;

    return (
      <StyledContainer>
        <Month
          selectedMonth={selectedMonth}
          handleSelection={handleSelection}
        />
        <Year
          selectedYear={selectedYear}
          handleSelection={handleSelection}
        />
      </StyledContainer>
    );
  }
}

export default DateNavigator;