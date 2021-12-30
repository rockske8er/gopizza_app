import React from 'react';

import { TextInputProps } from 'react-native';

import { Container, TypeProps  } from './styles';

type Props = TextInputProps & {
  type?: TypeProps
}

const Input = ({type = 'primary', ...rest}: Props) => {
  return (
    <Container type='primary' {...rest} />
  );
}

export { Input };
