import React from 'react';
import { TouchableOpacityProps } from 'react-native';

// Not Working
//import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, Load, TypeProps } from './styles';

type Props = TouchableOpacityProps & {
  type?: TypeProps
  title: string
  isLoading?: boolean
}

const Button = ({type = 'primary', title, isLoading = false, ...rest }: Props) =>  {
  return (
    //enabled={!isLoading} 
    <Container enabled={!isLoading} type={type} {...rest}>
      {
        isLoading ? <Load /> : <Title>{title}</Title>
      }
    </Container>
  );
};

export { Button }
