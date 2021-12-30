import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface HomeProps {
  children: ReactNode;
}

const Home = () =>  {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export { Home };
