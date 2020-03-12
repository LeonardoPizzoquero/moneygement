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
  LoginButtons,
  BorderLogin,
  OtherWrapper,
  Line,
  Or,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <TitleLogo>Moneygement</TitleLogo>
        <OtherWrapper>
          <Line></Line>
          <Or>ou</Or>
          <Line></Line>
        </OtherWrapper>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
          />

          <SubmitButton>Acessar</SubmitButton>

          <LoginButtons>
            <SignLink onPress={() => navigation.navigate('SignUp')}>
              <SignLinkText>Criar conta gratuita</SignLinkText>
            </SignLink>
            <SignLink onPress={() => navigation.navigate('SignUp')}>
              <BorderLogin>|</BorderLogin>
            </SignLink>
            <SignLink onPress={() => navigation.navigate('RecoveryPassword')}>
              <SignLinkText>Esqueci a senha</SignLinkText>
            </SignLink>
          </LoginButtons>
        </Form>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
