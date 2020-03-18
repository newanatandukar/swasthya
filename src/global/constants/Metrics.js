import { Platform, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const isAndroid = Platform.OS !== 'ios';
const statusBarHeight = getStatusBarHeight(false);
const screenWidth = Dimensions.get('window').width;
const screenHeight = isAndroid
  ? Dimensions.get('screen').height - statusBarHeight
  : Dimensions.get('window').height;
const widthRatio = screenWidth / 375;
const heightRatio = screenHeight / 812;
const iPhoneX =
  !isAndroid &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (screenHeight === 812 || screenHeight === 896);
const navBarHeightOnb = 44;
const navBarHeightApp = 54;
const navBarHeightExtra = 136;
const headerHeightOnb = statusBarHeight + navBarHeightOnb;
const headerHeightApp = statusBarHeight + navBarHeightApp;
const headerHeightExtra = statusBarHeight + navBarHeightExtra;
const contentHeightOnb = screenHeight - headerHeightOnb;
const contentHeightApp = screenHeight - headerHeightApp;
const contentHeightExtra = screenHeight - headerHeightExtra;
const contentHeightModal = screenHeight - headerHeightApp;

export default {
  // font sizes
  fontSizeBig: 18,
  fontSizeNormal: 14,
  fontSizeSmall: 10,

  // margins
  marginHuge: 36,
  marginBig: 24,
  marginNormal: 16,
  marginSmall: 10,
  marginTiny: 6,

  // frame sizes
  screenWidth,
  screenHeight,
  widthRatio,
  heightRatio,
  statusBarHeight,
  navBarHeightOnb,
  navBarHeightApp,
  navBarHeightExtra,
  headerHeightOnb,
  headerHeightApp,
  headerHeightExtra,
  bigTitleHeight: 87,
  drawerWidth: screenWidth * 0.64,
  screenSpacing: iPhoneX ? { top: 0, bottom: 20 } : { top: 0, bottom: 0 },
  contentHeightOnb,
  contentHeightApp,
  contentHeightExtra,
  contentHeightModal,
  iPhoneX,
  keyboardHeight: 216,

  // custom
  controlWidth: 324 * widthRatio,
  controlHeight: 52 * widthRatio,
  headingTop: 22 * heightRatio,
  subHeadingTop: 20 * heightRatio,
};
