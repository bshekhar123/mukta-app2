import { Platform } from 'react-native';

const LOGO_TEXT = '',
  CIA_LOGO = '',
  CCRS_LOGO: any = '';

const ENV = 'STAGE';
let C_GOOGLE_API_KEY_AND = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
let C_GOOGLE_API_KEY_IOS = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
let C_BASE_URL = 'http://192.168.0.111:49000';
let C_APP_VERSION = '3.20.0';
let C_WS_URL = 'ws://192.168.0.104:49000';
let C_ENV_TRACK = true;
let C_X_API_KEY = 'APP';
let LOGO = LOGO_TEXT;
let appName = 'Ridewise';
let C_IS_DEV = true;
let C_APP_ID = 'id1334721215';
let C_APP_BUNDLE_ID = 'io.ridewise.driver';
let C_SSL_CERTS = [];
let C_SSL_ENABLE = true;
let C_PRIMARY = '#235162';
let C_SECONDARY = '#6791BC';
let C_SUCCESS = '#36760D';
let C_INFO = '#1CA8FF';
let C_WARNING = '#FFAE0C';
let C_DANGER = '#DB271D';
let C_TITLE = '#235162';
let C_TEXT = '#999';
let C_ACCENT = '#EAF2F8';
let C_LABEL = '#235162';

if (ENV === 'LIVE') {
  C_GOOGLE_API_KEY_AND = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_GOOGLE_API_KEY_IOS = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_BASE_URL = 'https://manager.zoyride.com';
  C_WS_URL = 'ws://app.zoyride.com:9000';
  C_ENV_TRACK = true;
  C_X_API_KEY = 'APP';
  LOGO = LOGO_TEXT;
  C_SSL_CERTS = [
    'sha256/zg+NVAdVsn+W25+960If3YPbK6V2IUFD4S6TkN+W/Z0=',
    'sha256/jQJTbIh0grw0/1TkHSumWb+Fs0Ggogr621gT3PvPKG0=',
    'sha256/C5+lpZ7tcVwmwQIMcRtPbsQtWLABXhQzejna0wHFr8M=',
  ];
  C_SSL_ENABLE = false;
}

if (ENV === 'MTI') {
  C_GOOGLE_API_KEY_AND = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_GOOGLE_API_KEY_IOS = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_BASE_URL = 'https://dashboard.mytaxiindia.com';
  C_WS_URL = 'ws://app.zoyride.com:9000';
  C_ENV_TRACK = true;
  C_X_API_KEY = 'MTI';
  appName = 'My Taxi India';
  C_SSL_ENABLE = false;
}

if (ENV === 'STAGE') {
  C_GOOGLE_API_KEY_AND = 'AIzaSyC8Uq6x-a_BZXou8P7R2-bgfr1Xcf_Ai1A';
  C_GOOGLE_API_KEY_IOS = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_BASE_URL = 'https://stage.zoyride.com';
  // C_BASE_URL = 'http://192.168.1.7:9090';
  C_WS_URL = 'ws://stage.zoyride.com:9000';
  C_ENV_TRACK = true;
  C_X_API_KEY = 'APP';
  C_SSL_CERTS = [
    'sha256/zg+NVAdVsn+W25+960If3YPbK6V2IUFD4S6TkN+W/Z0=',
    'sha256/jQJTbIh0grw0/1TkHSumWb+Fs0Ggogr621gT3PvPKG0=',
    'sha256/C5+lpZ7tcVwmwQIMcRtPbsQtWLABXhQzejna0wHFr8M=',
  ];
  C_SSL_ENABLE = false;
}

if (ENV === 'DNP') {
  C_GOOGLE_API_KEY_AND = 'AIzaSyB-P1UyMcI_1ZmFL8Oc7WQskloGMbtFlCE';
  C_GOOGLE_API_KEY_IOS = 'AIzaSyB-P1UyMcI_1ZmFL8Oc7WQskloGMbtFlCE';
  C_BASE_URL = 'https://cloud.denebpollux.com';
  C_WS_URL = 'ws://cloud.denebpollux.com';
  C_ENV_TRACK = true;
  C_X_API_KEY = 'DNP';
  appName = 'Deneb and Pollux';
}

if (ENV === 'CCRS') {
  C_GOOGLE_API_KEY_AND = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_GOOGLE_API_KEY_IOS = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_BASE_URL = 'https://dashboard.ccrs.co.in';
  C_ENV_TRACK = true;
  C_X_API_KEY = 'CCRS';
  LOGO = CCRS_LOGO;
  appName = 'CCRS Taxi';
  C_APP_ID = 'id1577604144';
  C_APP_BUNDLE_ID = 'com.zoyride.ccrs';
}

if (ENV === 'CIA') {
  C_GOOGLE_API_KEY_AND = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_GOOGLE_API_KEY_IOS = 'AIzaSyCRqG30aAQzEMG6WZxyDTxhH9XlttHxqiM';
  C_BASE_URL = 'https://cloud.carsinafrica.com';
  // C_WS_URL = "ws://cloud.carsinafrica.com";
  C_ENV_TRACK = true;
  C_X_API_KEY = 'CA';
  LOGO = CIA_LOGO;
  C_PRIMARY = '#145A32';
  appName = 'CARS IN AFRICA';
  C_APP_ID = 'id1572870700';
  C_APP_BUNDLE_ID = 'com.zoyride.carsinafrica';
}

export const COLOR_PRIMARY = C_PRIMARY;
export const COLOR_SECONDARY = C_SECONDARY;
export const COLOR_SUCCESS = C_SUCCESS;
export const COLOR_INFO = C_INFO;
export const COLOR_WARNING = C_WARNING;
export const COLOR_DANGER = C_DANGER;
export const COLOR_TITLE = C_TITLE;
export const COLOR_LABEL = C_LABEL;
export const COLOR_TEXT = C_TEXT;
export const COLOR_ACCENT = C_ACCENT;

export const APP_NAME = appName;

export const GOOGLE_API_KEY =
  Platform.OS == 'ios' ? C_GOOGLE_API_KEY_IOS : C_GOOGLE_API_KEY_AND;
export const X_API_KEY = C_X_API_KEY;
export const BASE_URL = C_BASE_URL;
export const APP_VERSION = C_APP_VERSION;
export const IS_DEV = C_IS_DEV;
export const WS_URL = C_WS_URL;
export const ENV_TRACK = Platform.OS == 'ios' ? true : C_ENV_TRACK;
export const APP_LOGO = LOGO;
export const APP_ID = C_APP_ID;
export const APP_BUNDLE_ID = C_APP_BUNDLE_ID;
export const SSL_CERTS = C_SSL_CERTS;
export const SSL_ENABLE = C_SSL_ENABLE;
export const SOCKET_IO_URL = 'http://164.52.216.106:4200/';
// export const SOCKET_IO_URL = 'https://new-masks-press-182-69-182-138.loca.lt/';
