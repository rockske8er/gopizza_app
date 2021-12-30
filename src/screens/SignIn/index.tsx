import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform} from 'react-native';

import brand from '@assets/brand.png';
import { Input } from   '@components/Input';
import { Button } from  '@components/Button';
import { useAuth } from "@hooks/auth"
import {
  Container,
  Box,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isLogging, signIn, forgotPassword } = useAuth()

  const handleSingIn = () => {
    signIn(email, password);
  }

  const handleForgotPassword = () => {
    forgotPassword(email);
  }
 
  
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Box>
          <Brand source={brand} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordLabel>Esqueci minha senha?</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button 
            title="Enviar"
            type="secondary"
            onPress={handleSingIn} 
            isLoading={isLogging}
          />
      
        </Box>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { SignIn };
