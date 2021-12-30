import { ReactNode } from 'react';

import { Platform, Text } from 'react-native';

import { Container } from './styles';

interface ProductProps {
  children: ReactNode;
}

const Product = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text>Product</Text>
    </Container>
  );
};

export { Product };
