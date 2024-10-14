import colors from 'assets/colors';
import React from 'react';
import {View, StyleSheet, Platform, Animated} from 'react-native';
import {hp, isIOS, isIphoneXOnwards, wp} from 'helpers/styles/responsive';

export const navbarXSpace = isIphoneXOnwards ? hp(3) : 0;
export const navbarHeight = isIOS ? hp(12) : hp(7);

function NavigationBar({
  height = navbarHeight + navbarXSpace,
  style,
  bgColor = colors.white,
  left,
  right,
  center,
  leftStyle,
  centerStyle,
  rightStyle,
  sidesWidth = wp(8), // default width value for left and right container
  animated = false,
  borderBottomWidth = 0,
}) {
  const wrapperStyle = {
    height,
    borderBottomWidth,
  };

  const sideStyle = {
    width: sidesWidth,
  };

  const dynamicBgColor = typeof bgColor === 'string' ? {backgroundColor: bgColor} : bgColor;

  if (animated) {
    return (
      <Animated.View style={[styles.wrapper, dynamicBgColor, wrapperStyle, style]}>
        <View style={[styles.left, sideStyle, leftStyle]}>{left}</View>
        <View style={[styles.center, centerStyle]}>{center}</View>
        <View style={[styles.right, sideStyle, rightStyle]}>{right}</View>
      </Animated.View>
    );
  }

  return (
    <View style={[styles.wrapper, dynamicBgColor, wrapperStyle, style]}>
      <View style={[styles.left, sideStyle, leftStyle]}>{left}</View>
      <View style={[styles.center, centerStyle]}>{center}</View>
      <View style={[styles.right, sideStyle, rightStyle]}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 + navbarXSpace : hp(0),
    borderBottomColor: colors.black,
    // justifyContent: 'center',
  },
  left: {
    marginLeft: wp(3),
    alignItems: 'flex-start',
    // borderWidth: 1,
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    marginHorizontal: wp(2),
    // borderWidth: 1,
  },
  right: {
    marginRight: wp(3),
    alignItems: 'flex-end',
    // borderWidth: 1,
  },
});

export default NavigationBar;

// Working code but layout like LeftIcon, Center title, RightIcon
/*
import colors from 'assets/colors';
import React from 'react';
import {View, StyleSheet, Platform, Animated} from 'react-native';
import {hp, isIOS, isIphoneXOnwards, wp} from 'helpers/styles/responsive';

export const navbarXSpace = isIphoneXOnwards ? hp(27) : 0;
export const navbarHeight = isIOS ? hp(81) : hp(52);

function NavigationBar({
  height = navbarHeight + navbarXSpace,
  style,
  isFixed = false,
  bgColor = 'white',
  left,
  hasLeft = false,
  right,
  hasRight = false,
  center,
  hasCenter = false,
  leftStyle,
  centerStyle,
  rightStyle,
  sidesWidth = 88,
  animated = false,
  borderBottomWidth = 1,
}) {
  const wrapperStyle = {
    height,
    borderBottomWidth,
  };

  const sideStyle = {
    width: sidesWidth,
  };

  const dynamicBgColor = typeof bgColor === 'string' ? {backgroundColor: bgColor} : bgColor;

  if (animated) {
    return (
      <Animated.View
        style={[
          styles.wrapper,
          isFixed && styles.wrapperFixed,
          dynamicBgColor,
          wrapperStyle,
          style,
        ]}>
        {hasLeft && <View style={[styles.left, sideStyle, leftStyle]}>{left}</View>}
        {hasCenter && <View style={[styles.center, centerStyle]}>{center}</View>}
        {hasRight && <View style={[styles.right, sideStyle, rightStyle]}>{right}</View>}
      </Animated.View>
    );
  }

  return (
    <View
      style={[styles.wrapper, isFixed && styles.wrapperFixed, dynamicBgColor, wrapperStyle, style]}>
      {hasLeft && <View style={[styles.left, sideStyle, leftStyle]}>{left}</View>}
      {hasCenter && <View style={[styles.center, centerStyle]}>{center}</View>}
      {hasRight && <View style={[styles.right, sideStyle, rightStyle]}>{right}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 20 + navbarXSpace : wp(4),
    borderBottomColor: colors.black,
  },
  wrapperFixed: {
    top: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: wp(16),
  },
  center: {
    flexGrow: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: wp(20),
  },
});

export default NavigationBar;
*/
