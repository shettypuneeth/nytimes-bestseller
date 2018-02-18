// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { observer, inject } from 'mobx-react';

import { mapDateFilterStateToProps } from '../../../../stores/mappers';

import Month from './Month';
import Year from './Year';

type Props = {
  fetchBooks: Function,
  selectedMonth: number,
  selectedYear: number,
  setMonth: Function,
  setYear: Function
};

@inject(mapDateFilterStateToProps)
@observer
class DateNavigator extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (
      this.props.selectedMonth !== prevProps.selectedMonth ||
      this.props.selectedYear !== prevProps.selectedYear
    ) {
      this.props.fetchBooks();
    }
  }
  
  render() {
    const {
      selectedYear,
      selectedMonth,
      setMonth,
      setYear
    } = this.props;

    return (
      <View>
        <Month
          selectedMonth={selectedMonth}
          handleSelection={setMonth}
        />
        <Year
          selectedYear={selectedYear}
          handleSelection={setYear}
        />
      </View>
    );
  }
}

export default DateNavigator;