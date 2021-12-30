import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform} from 'react-native';
import brand from '@assets/brand.png';
import { Container, Box, Brand, Title} from './styles';

import { Input } from   '@components/Input';
import { Button } from  '@components/Button';
import { useAuth } from "@hooks/auth"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const { isLogging, forgotPassword } = useAuth()

  const handleForgotPassword = () => {
    forgotPassword(email);
    setEmail('');
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Box>
          <Brand source={brand} />

          <Title>Recuperar Senha </Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Button 
            title="Enviar"
            type="secondary"
            onPress={handleForgotPassword} 
            isLoading={isLogging}
          />
      
        </Box>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { ForgotPassword };
