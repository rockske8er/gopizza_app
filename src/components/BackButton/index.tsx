import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons  } from '@expo/vector-icons';

import { Container } from './styles';
import { useTheme } from 'styled-components/native';


type Props = TouchableOpacityProps;
const BackButton = ({...rest }: Props) =>  {

  const { Colors } = useTheme()
  return (
    <Container {...rest}>
      <MaterialIcons
        name='chevron-left' 
        size={18}
        color={Colors.Title}
      />
    </Container>
  );
};

export { BackButton };
