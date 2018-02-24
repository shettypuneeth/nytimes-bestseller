// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

type Props = {
  active: bool,
  disabled?: bool,
  handlePress: Function,
  blockId: string | number,
  value: number
};

const getFontColor = (disabled) => disabled ? '#95a5a6' : '#ecf0f1';

const StyledContainer = styled.TouchableOpacity`
  padding: 15px 0px;
  width: 50px;
  padding-bottom: ${props => props.active ? '11px' : '15px'};
  border-bottom-width: ${props => props.active ? '4px' : '0px'};
  border-bottom-color: #FFD700;
`;
const StyledValue = styled.Text`
  text-align: center;
  color: ${props => props.active ? '#FFD700' : getFontColor(props.disabled) };
`;

class Block extends PureComponent<Props> {
  _handlePress: Function;
  constructor() {
    super();
    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    const {
      disabled,
      handlePress,
      blockId
    } = this.props;

    if (!disabled) {
      handlePress(blockId);
    }
  }

  render() {
    const {
      active,
      disabled,
      handlePress,
      value
    } = this.props;
  
    return (
      <StyledContainer
        disabled={disabled}
        active={active}
        onPress={this._handlePress}
      >
        <StyledValue
          active={active}
          disabled={disabled}
        >
          { value }
        </StyledValue>
      </StyledContainer>
    );
  }
}

export default Block;