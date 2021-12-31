
import { ReactNode } from 'react';

import { Platform } from 'react-native';

import { BackButton } from '@components/BackButton';
import { Photo } from '@components/Photo';

import { 
  Container,
  Header,
  Title,
  DeleteButton,
  DeleteButtonText
 } from './styles';

interface ProductProps {
  children: ReactNode;
}

const Product = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <BackButton />
        <Title>Cadastrar</Title>
        <DeleteButton>
          <DeleteButtonText>Deletar</DeleteButtonText>
        </DeleteButton>
      </Header>

      <Photo uri={null}  />

    </Container>
  );
};

export { Product };
