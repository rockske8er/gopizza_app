import styled, { css } from 'styled-components/native';

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

export const Placeholder = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.Colors.Secondary_900};
`;

export const PlaceholderTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.Fonts.Text};
    color: ${theme.Colors.Secondary_900};
  `}
`

