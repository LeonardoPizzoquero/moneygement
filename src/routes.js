import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RecoveryPassword from './pages/RecoveryPassword';
import AddBalance from './pages/AddBalance';
import AddCards from './pages/AddCards';

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
        Dashboard: createDrawerNavigator(
          {
            Start: createStackNavigator(
              {
                AddBalance,
                AddCards,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: '#FFF',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                  headerTitleAlign: 'center',
                },
              }
            ),
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
          },
          {
            initialRouteName: 'Start',
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'Dashboard' : 'Sign',
      }
    )
  );
