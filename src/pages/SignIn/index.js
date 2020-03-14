import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Background from '~/components/Background';
import DismissKeyboard from '~/components/DismissKeyboard';
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
  FacebookButton,
  TextFacebookButton,
  Line,
  Or,
} from './styles';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';
import handleFacebookLogin from '~/services/handleFacebookLogin';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <DismissKeyboard>
      <Background>
        <Container>
          <Image source={logo} />
          <TitleLogo>Moneygement</TitleLogo>
          <FacebookButton loading={loading} onPress={handleFacebookLogin}>
            <Icon name="facebook-square" size={20} color="#fff" />
            <TextFacebookButton>Entrar com Facebook</TextFacebookButton>
          </FacebookButton>
          <OtherWrapper>
            <Line />
            <Or>ou</Or>
            <Line />
          </OtherWrapper>
          <Form>
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onSubmitEditing={() => passwordRef.current.focus()}
              placeholder="Digite seu e-mail"
              returnKeyType="next"
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Sua senha secreta"
              returnKeyType="send"
              ref={passwordRef}
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleSubmit}
            />

            <SubmitButton loading={loading} onPress={handleSubmit}>
              Acessar
            </SubmitButton>

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
    </DismissKeyboard>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
