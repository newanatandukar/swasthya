import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as views from './routes';

const appStack = createStackNavigator({
  homePage: {
    screen: views.HomePage,
    navigationOptions: {
      headerShown: false,
    },
  },
  familyPlanning: {
    screen: views.FamilyPlanning,
    navigationOptions: {
      headerTitle: 'परिवार योजना',
      headerBackTitleVisible: false,
    },
  },
  safeMotherhood: {
    screen: views.SafeMotherhood,
    navigationOptions: {
      headerTitle: 'सुरक्षित मातृत्व र नवजात शिशु स्याहार',
      headerBackTitleVisible: false,
    },
  },
  childHealth: {
    screen: views.ChildHealth,
    navigationOptions: {
      headerTitle: 'बाल स्वास्थय',
      headerBackTitleVisible: false,
    },
  },
  std: {
    screen: views.STD,
    navigationOptions: {
      headerTitle: 'यौन रोग तथा एच.आई.भी र एड्स',
      headerBackTitleVisible: false,
    },
  },
  diseases: {
    screen: views.Diseases,
    navigationOptions: {
      headerTitle: 'रोगहरू',
      headerBackTitleVisible: false,
    },
  },
  childCare: {
    screen: views.ChildCare,
    navigationOptions: {
      headerTitle: 'किशोर किशोरीको प्रजनन स्वास्थ्य',
      headerBackTitleVisible: false,
    },
  },
  femaleHealthVolunteers: {
    screen: views.FemaleHealthVolunteers,
    navigationOptions: {
      headerTitle: 'महिला स्वास्थ्य स्वयंसेविका',
      headerBackTitleVisible: false,
    },
  },
  nutrition: {
    screen: views.Nutrition,
    navigationOptions: {
      headerTitle: 'पोषण',
      headerBackTitleVisible: false,
    },
  },
  newsView: {
    screen: views.NewsView,
    navigationOptions: {
      headerBackTitleVisible: false,
    },
  },
  videoView: {
    screen: views.VideoView,
    navigationOptions: {
      headerBackTitleVisible: false,
    },
  },
  underConstruction: {
    screen: views.UnderConstruction,
    navigationOptions: {
      headerTitle: 'Under Construction',
      headerBackTitleVisible: false,
    },
  },
});

const appContainer = createSwitchNavigator({
  // profile: views.Profile,
  appStack,
});

export default createAppContainer(appContainer);
