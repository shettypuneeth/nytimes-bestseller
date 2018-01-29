// @flow
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import Search from './components/Search';
import Header from "../common/Header";
import ArtworkGrid from './components/ArtworkGrid';

import { fetchArtifacts } from "../../api/harvard-art";

import type { ArtworkType } from '../types/Gallary';

type Props = {
  navigation: {
    navigate: Object,
    state: {
      params: {
        query: string
      }
    }
  }
};
type State = {
  isLoading: boolean,
  error: Object | null,
  query: string,
  artworks: Array<ArtworkType>,
};

class Gallary extends Component<Props, State> {
  handleArtworkPress: Function;
  handleSubmit: Function;
  _fetchItems: Function;

  constructor(props: Props) {
    super(props);
    const { navigation: { state } } = this.props;
    const { params } = state;
    const query = params ? params.query : '';

    this.state = {
      query,
      isLoading: false,
      artworks: [],
      error: null
    };
    this.handleArtworkPress = this.handleArtworkPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._fetchItems = this._fetchItems.bind(this);
  }

  _fetchItems(options: Object): void {
    this.setState({
      isLoading: true
    });

    fetchArtifacts(options)
      .then(response => {
        const { records } = response;
        this.setState({
          isLoading: false,
          artworks: records
        });
      })
      .catch(error => this.setState({
        isLoading: false,
        error
      }));
  }

  componentDidMount() {
    const options = {
      keyword: this.state.query
    };

    this._fetchItems(options);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.query !== this.state.query) {
      const options = {
        keyword: this.state.query
      };
      this._fetchItems(options);
    }
  }

  handleArtworkPress(artwork: ArtworkType): void {
    const { navigate } = this.props.navigation;

    // $FlowFixMe Add types for navigate method    
    navigate('Exhibit', {
      artwork,
      query: this.state.query
    });
  }

  handleSubmit(keyword: string) {
    this.setState({ query: keyword });
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Search
          query={this.state.query}
          onSubmit={this.handleSubmit}
        />
        <ArtworkGrid
          error={this.state.error}
          artworks={this.state.artworks}
          onPress={this.handleArtworkPress}
          isLoading={this.state.isLoading}
        />
      </View>
    );
  }
}

Gallary.propTypes = {};

export default Gallary;