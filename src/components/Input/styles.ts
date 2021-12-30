import styled, { css } from 'styled-components/native';
import {TextInput} from 'react-native'

export type TypeProps = 'primary' | 'secondary'

type Props = {
  type: TypeProps
}

export const Container = styled(TextInput).attrs<Props>(({theme, type}) => ({
  placeholderTextColor: type === 'primary' ? theme.Colors.Secondary_900 : theme.Colors.Primary_050
}))<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  border-radius: 12px;

  ${({theme, type}) => css`
    font-family: ${theme.Fonts.Text};
    border: 1px solid ${theme.Colors.Shape};
    color: ${type === 'primary' ? theme.Colors.Title : theme.Colors.Secondary_900};
  `}
`;
