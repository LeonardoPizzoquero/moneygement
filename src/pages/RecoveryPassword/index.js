import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  TitleLogo,
  RecoveryMessage,
} from './styles';

import logo from '~/assets/logo.png';

export default function RecoveryPassword({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <TitleLogo>Moneygement</TitleLogo>
        <RecoveryMessage>
          Insira seu e-mail para redefinir sua senha
        </RecoveryMessage>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
          />

          <SubmitButton>Redefinir senha</SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Voltar para o login</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

RecoveryPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
