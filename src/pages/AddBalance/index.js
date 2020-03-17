import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Background from '~/components/Background';
import DismissKeyboard from '~/components/DismissKeyboard';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  TitleLogo,
  SubTitle,
} from './styles';

import logo from '~/assets/logo.png';

export default function AddBalance({ navigation }) {
  function handleSubmit() {
    return 'ok';
  }

  return (
    <DismissKeyboard>
      <Background>
        <Container>
          <Image source={logo} />
          <TitleLogo>Moneygement</TitleLogo>
          <SubTitle>Valor atual do seu saldo no dia de hoje</SubTitle>
          <Form>
            <FormInput
              icon="attach-money"
              keyboardType="decimal-pad"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Ex: 1000,00"
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />

            <SubmitButton onPress={() => navigation.navigate('AddCards')}>
              Adicionar Saldo
            </SubmitButton>
          </Form>
        </Container>
      </Background>
    </DismissKeyboard>
  );
}

AddBalance.navigationOptions = () => ({
  headerShown: false,
});

AddBalance.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
