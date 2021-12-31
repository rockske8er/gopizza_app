import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.Background};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) =>({
  colors: theme.Colors.Gradient
}) )`
  width: 100%;
  flex-direction: row;
  align-items:  center;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + 32}px 20px 24px;

`

export const Title = styled.Text`
  font-size: 24px;
  ${({ theme }) => css`
    font-family: ${theme.Fonts.Title};
    color: ${theme.Colors.Title};
  ` }
`;

export const DeleteButton = styled.TouchableOpacity`
`;

export const DeleteButtonText = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.Fonts.Text};
    color: ${theme.Colors.Title};
  ` }
`;