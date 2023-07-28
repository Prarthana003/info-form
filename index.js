// index.js

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Add this line to enable React Native Web
import { registerRootComponent } from 'expo';

// Instead of using AppRegistry, use registerRootComponent to run the app in the web environment
registerRootComponent(App);

// Uncomment the following line if you're using AppRegistry to run the app in mobile
// AppRegistry.registerComponent(appName, () => App);
