import React from 'react';

import { Text } from 'react-native';

import { Image, Placeholder, PlaceholderTitle } from './styles';

interface PhotoProps {
  uri: string | null;
}

const Photo = ({ uri }: PhotoProps) => {

  if(uri){
    return (
      <Image source={{ uri: uri}} />
    );
  }

  return (
    <Placeholder>
      <PlaceholderTitle>
        Nenhuma foto {'\n'}
        Carregada
      </PlaceholderTitle>
    </Placeholder>
  )
};

export { Photo };
