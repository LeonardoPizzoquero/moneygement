import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, handlePress, ...rest }) {
  return (
    <Container onPress={handlePress} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  handlePress: PropTypes.func,
};

Button.defaultProps = {
  loading: false,
  handlePress: () => {},
};
