// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

type Props = {
  active: bool,
  disabled?: bool,
  handlePress: Function,
  stateKey: string,
  blockId: string | number,
  value: number
};

const StyledContainer = styled.TouchableOpacity`
  padding: 15px 0px;
  width: 50px;
  padding-bottom: ${props => props.active ? '11px' : '15px'};
  border-bottom-width: ${props => props.active ? '4px' : '0px'};
  border-bottom-color: #f1c40f;
`;
const StyledValue = styled.Text`
  text-align: center;
  color: ${props => props.active ? '#f1c40f' : '#fff' };
`;

class Block extends PureComponent<Props> {
  _handlePress: Function;
  constructor() {
    super();
    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    const {
      stateKey,
      disabled,
      handlePress,
      blockId
    } = this.props;

    if (!disabled) {
      handlePress({
        [stateKey]: blockId
      });
    }
  }

  render() {
    const {
      active,
      handlePress,
      value
    } = this.props;
  
    return (
      <StyledContainer
        active={active}
        onPress={this._handlePress}
      >
        <StyledValue active={active}>
          { value }
        </StyledValue>
      </StyledContainer>
    );
  }
}

export default Block;