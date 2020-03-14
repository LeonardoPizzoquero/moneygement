import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RecoveryPassword from './pages/RecoveryPassword';

import Dashboard from './pages/Dashboard';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
          RecoveryPassword,
        }),
        Dashboard: createDrawerNavigator({
          Home: createBottomTabNavigator(
            {
              Transactions: {
                screen: SignUp,
              },
              Cards: {
                screen: SignUp,
              },
              Home: {
                screen: Dashboard,
              },
              Debtors: {
                screen: SignUp,
              },
              Charts: {
                screen: SignUp,
              },
            },
            {
              initialRouteName: 'Home',
            },
            {
              resetOnBlur: true,
              tabBarOptions: {
                keyboardHidesTabBar: true,
                activeTintColor: '#0D53FE',
                inactiveTintColor: '#AFAFAF',
                style: {
                  backgroundColor: '#fff',
                  paddingBottom: 5,
                },
              },
            }
          ),
        }),
      },
      {
        initialRouteName: isSigned ? 'Dashboard' : 'Sign',
      }
    )
  );
