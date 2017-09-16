import Expo from 'expo';
import App from './src/App';

ErrorUtils.setGlobalHandler((error,isFatal)=>{
  console.log(error);
})

Expo.registerRootComponent(App);
