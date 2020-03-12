import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

function Dashboard({ navigation }) {
  return (
    <Container>
        <Button
            title="Press me"
            onPress={() => navigation.openDrawer()}
        />
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
