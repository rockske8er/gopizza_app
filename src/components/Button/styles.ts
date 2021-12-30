import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
//No Working
//import { RectButton } from 'react-native-gesture-handler';

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps;
  enabled: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px; 
  max-height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({theme , type }) => type === 'primary' ? 
    theme.Colors.Success_900 : theme.Colors.Primary_800 };
`;

export const Title = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.Fonts.Text};
    color: ${theme.Colors.Title};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.Colors.Title
}))``;