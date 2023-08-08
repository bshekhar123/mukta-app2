import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
const COLOR = {
  PRIMARY: '#F9F9F9',
  BG_COLOR: '#FFFFFF',
  BLACK: '#000000',
  RED: '#FF0000',
  THEME_COLOR: '#F08180',
  LIGHT_COLOR: '#979797',
  GREY: '#D9D9D9',
  DARK_GREY: '#9E9E9E',
};



const FONT_SIZE = {
  f27: 27,
  f25: 25,
  f20: 20,
  f22: 22,
  f24: 24,
  f18: 18,
  f17: 17,
  f16: 16,
  f14: 14,
  f13: 13,
  f12: 12,
  f10: 10,
};

const NavName = {
  intro: 'Intro',
  login: 'Login',
  otpScreen: 'OtpScreen',
  home: 'Home',
  homeScreen: 'HomeScreen',
  dashBoard: 'Dashboard',
  profileScreen: 'ProfileScreen',
  editProfile: 'EditProfile',
  savedAddress: 'Saved Address',
  bookingsDetails: 'Bookings Details',
  bookings: 'Bookings',
  signupScreen: 'Signup',
  shuttleScreen: 'Shuttle',
  addAddresScreen: 'AddAddress',
  addBooking: 'AddBooking',
  locationSelect: 'LocationSelect',
  setAddress: 'SetAddress',
  selectCar: 'SelectCar',
  payment: 'Payment',
  driverArrival: 'DriverArrival',
  driverDetail: 'DriverDetail',
  call: 'Call',
  tripToDestination: 'TripToDestination',
  message: 'Message',
  selectTransport: 'SelectTransport',
  noInternet: 'NoInternet',
  splashScreen: 'SplashScreen',
};

const PLACEHOLDER_IMAGE =
  'https://john-mohamed.com/wp-content/uploads/2018/05/Profile_avatar_placeholder_large.png';

const windowWidth = Dimensions.get('window').width / 100;
const windowHeight = Dimensions.get('window').height / 100;

const responsiveWidth = (widthPercent) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((windowWidth * elemWidth) / 100);
};
const responsiveHeight = (heightPercent) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((windowHeight * elemHeight) / 100);
};

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

export function RFS(fontSize, standardScreenHeight = 680) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export {
  COLOR,
  FONT_SIZE,
  NavName,
  PLACEHOLDER_IMAGE,
  windowHeight,
  windowWidth,
  responsiveHeight,
  responsiveWidth,
};
