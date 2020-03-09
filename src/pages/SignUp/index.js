import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  TitleLogo,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Icon name="piggy-bank" size={50} color="#fff" />
        <TitleLogo>Moneygement</TitleLogo>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Digite seu nome completo"
            returnKeyType="next"
          />
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

          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Já possuo uma conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
