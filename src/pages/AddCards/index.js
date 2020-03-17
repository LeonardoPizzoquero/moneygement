import React, { useState } from 'react';
import { Image, TouchableOpacity, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import DismissKeyboard from '~/components/DismissKeyboard';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  TitleLogo,
  SubTitle,
  SelectTypes,
} from './styles';

import logo from '~/assets/logo.png';

export default function AddCards() {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <DismissKeyboard>
      <Background>
        <Container>
          <Image source={logo} />
          <TitleLogo>Moneygement</TitleLogo>
          <SubTitle>Selecione um cartão abaixo</SubTitle>
          <Form>
            <SelectTypes
              enabled
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </SelectTypes>

            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              returnKeyType="next"
            />
            <SubmitButton>Redefinir senha</SubmitButton>
          </Form>
        </Container>
      </Background>
    </DismissKeyboard>
  );
}

AddCards.navigationOptions = ({ navigation }) => ({
  title: 'Adicionar Cartões',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={40} color="#FFF" />
    </TouchableOpacity>
  ),
});
