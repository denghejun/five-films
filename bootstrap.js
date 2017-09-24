import Expo from 'expo';
import App from './src/App.tsx';

ErrorUtils.setGlobalHandler((error,isFatal)=>{
  console.log(error);
})

Expo.registerRootComponent(App);
