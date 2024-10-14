/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
import {Dimensions, Platform} from 'react-native';
import {isIphoneX, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {getUniqueId} from 'react-native-device-info';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
export const uniqueDeviceId = getUniqueId();
export const isiPAD = viewportHeight / viewportWidth < 1.6;
export const isTablet = viewportHeight / viewportWidth < 1.6;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isX = isIphoneX();
export const statusBarHeight = getStatusBarHeight();

export function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

export function ls(size) {
  return scale(size);
}

export function vs(size) {
  return verticalScale(size);
}

export function ms(size) {
  return moderateScale(size);
}

export function mvs(size) {
  return moderateVerticalScale(size);
}

export const safeAreaHeight = isIOS && !isX ? hp(4.5) : isX ? hp(6) : hp(2);

const deviceScale = viewportWidth / 375;
export function normalize(size) {
  const newSize = size * deviceScale;
  if (Platform.OS === 'ios') {
    if (isiPAD) {
      return Math.round(newSize) - wp(1);
    }
    return Math.round(newSize);
  }
  if (isTablet) {
    return Math.round(newSize) - wp(1);
  }
  return Math.round(newSize);
}

export {viewportWidth, viewportHeight};
