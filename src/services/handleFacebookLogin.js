import { LoginManager } from 'react-native-fbsdk';

export default function handleFacebookLogin() {
  LoginManager.logInWithPermissions(['public_profile']).then(
    result => {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.log(
          `Login success with permissions: ${result.grantedPermissions.toString()}`
        );
      }
    },
    error => {
      console.log(`Login fail with error: ${error}`);
    }
  );
}
