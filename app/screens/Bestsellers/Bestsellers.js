// @flow
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import Cover from './components/Cover';
import DateFilter from './components/DateFilter';

type Props = {
  navigation: {
    navigate: Object
  }
};
type State = {
  isLoading: boolean,
  error: Object | null,
  bestsellers: Array<Object>,
};

class Bestsellers extends Component<Props, State> {
  handleItemPress: Function;
  _fetchItems: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      bestsellers: [],
      error: null
    };
    this.handleItemPress = this.handleItemPress.bind(this);
    this._fetchItems = this._fetchItems.bind(this);
  }

  _fetchItems(options: Object): void {
    this.setState({
      isLoading: true
    });
  }

  componentDidMount() {
    const options = {
    };

    this._fetchItems(options);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    // this._fetchItems({});
  }

  handleItemPress(artwork: Object): void {
    const { navigate } = this.props.navigation;
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Cover />
        <DateFilter
          selectedMonth={0}
          selectedYear={2018}
          handleSelection={() => {}}
        />
      </View>
    );
  }
}

Bestsellers.propTypes = {};

export default Bestsellers;