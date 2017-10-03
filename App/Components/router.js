import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import UserShowScene from '../Scenes/user_show.ios.js';
import GroupNewScene from '../Scenes/new_group.ios.js';
import Home from '../../index.ios.js';
import ExpensesShowScene from '../Scenes/expenses_show.ios.js'
import Tabbar from 'react-native-tabbar-bottom'


export const Tabs = TabNavigator({
  UserShowScene: {
    screen: UserShowScene,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  GroupNewScene: {
    screen: GroupNewScene,
    navigationOptions: {
      tabBarLabel: 'Create New Group',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
});
