import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import theme from '@theme/index';

import { SignIn } from '@screens/SignIn';
import { AuthProvider } from './hooks/auth';
import { ForgotPassword } from '@screens/ForgotPassword';
import { Product } from '@screens/Product';
import { Routes } from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  );
}
