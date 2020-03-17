import { Platform, Picker } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 10px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const TitleLogo = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-center;
  margin-top: 30px;
`;

export const SelectTypes = styled(Picker)`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  height: 40px;
  margin: 20px 0;
`;
