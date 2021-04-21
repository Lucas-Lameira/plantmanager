import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors'
import Welcome from '../pages/Welcome';
import UserIdentity from '../pages/UserIdentity';
import Confirm from '../pages/Confirm';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator 
    headerMode='none' 
    screenOptions={{cardStyle:{backgroundColor: colors.white}}}
    initialRouteName="Welcome"
  >
    <Stack.Screen name="Welcome" component={Welcome}/>
    <Stack.Screen name="UserIdentity" component={UserIdentity}/>
    <Stack.Screen name="Confirm" component={Confirm}/>
  </Stack.Navigator>
)

export default AppRoutes;

