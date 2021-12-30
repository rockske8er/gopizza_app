import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { UserStackRoutes } from './user.stack.routes';

const Routes: React.FC = () => {
  return ( 
    <NavigationContainer>
      <UserStackRoutes />
    </NavigationContainer>
  );
}

export { Routes } ;