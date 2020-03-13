import { Platform } from 'react-native';
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
  background: #f1f0f7;
`;

export const TitleLogo = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
`;

export const OtherWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Line = styled.View`
  height: 2px;
  padding: 0 75px;
  background-color: #fff;
  margin: 15px 0 0 0;
`;

export const Or = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 10px 15px 0 15px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 26px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const BorderLogin = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const LoginButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
