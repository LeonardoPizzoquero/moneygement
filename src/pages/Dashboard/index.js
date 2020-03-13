import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

import { signOut } from '~/store/modules/auth/actions';

function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <Button title="Press me" onPress={() => navigation.openDrawer()} />
      <Button title="SignOut" onPress={() => dispatch(signOut())} />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  ),
  showLabel: false,
};

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigationFocus(Dashboard);
