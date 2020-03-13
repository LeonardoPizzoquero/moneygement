import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
} from './styles';

import logo from '~/assets/logo.png';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <DismissKeyboard>
      <Background>
        <Container>
          <Image source={logo} />
          <TitleLogo>Moneygement</TitleLogo>
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              placeholder="Digite seu nome completo"
              returnKeyType="next"
              value={name}
              onChangeText={setName}
              onSubmitEditing={() => emailRef.current.focus()}
            />
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              returnKeyType="next"
              ref={emailRef}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={() => passwordRef.current.focus()}
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

            <SubmitButton loading={loading} handlePress={handleSubmit}>
              Criar conta
            </SubmitButton>

            <SignLink onPress={() => navigation.navigate('SignIn')}>
              <SignLinkText>Já tenho uma conta</SignLinkText>
            </SignLink>
          </Form>
        </Container>
      </Background>
    </DismissKeyboard>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
