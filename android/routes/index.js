import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AuthStack, AppStack, LatihanStack, UjianStack} from './stackNavigator';

const MainNavigator = createSwitchNavigator(
  {
    // SplashScreen: SplashScreenStack,
    AuthScreen: AuthStack,
    AppScreen: AppStack,
    LatihanScreen: LatihanStack,
    UjianScreen: UjianStack,
  },
  {
    initialRouteName: 'AuthScreen',
  },
);

const app = createAppContainer(MainNavigator);

export default app;
