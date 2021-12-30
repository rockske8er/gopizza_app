import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Product } from '@screens/Product';

const { Screen, Navigator } = createNativeStackNavigator();

const UserStackRoutes = () => {

  return (
    <Navigator>
      <Screen name={'home'} component={Home} />
      <Screen name={'product'} component={Product} />
    </Navigator>
  )

}

export { UserStackRoutes }
