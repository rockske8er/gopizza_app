import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Product } from '@screens/Product';

const { Screen, Navigator } = createNativeStackNavigator();

const UserStackRoutes = () => {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={'product'} component={Product} />
        <Screen name={'home'} component={Home} />
    </Navigator>
  )

}

export { UserStackRoutes }
