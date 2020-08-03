import { Navigation } from 'react-native-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { View, Button, Navigator } from 'react-native';

import TimetrackerList from './TimetrackerList.js';
import AddTimetracker from './AddTimetracker.js';
import About from './About.js';
import UpdateTimetracker from './UpdateTimetracker';

const AppNavigator = createStackNavigator({
  TimetrackerList: { screen: TimetrackerList },
  AddTimetracker: { screen: AddTimetracker },
  About: { screen: About },
  UpdateTimetracker: { screen: UpdateTimetracker }
});

const App = createAppContainer(AppNavigator);

export default App;