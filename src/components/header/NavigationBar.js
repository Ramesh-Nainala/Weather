/* eslint-disable no-param-reassign */
import colors from 'assets/colors';
import React from 'react';
import {View, StyleSheet, Platform, Animated} from 'react-native';
import {hp, isIOS, isIphoneXOnwards, wp} from 'helpers/styles/responsive';

export const navbarXSpace = isIphoneXOnwards ? hp(27) : 0;
export const navbarHeight = isIOS ? hp(81) : hp(72);

function NavigationBar({
  height,
  style,
  isFixed,
  bgColor,
  left,
  hasLeft,
  right,
  hasRight,
  center,
  hasCenter,
  leftStyle,
  centerStyle,
  rightStyle,
  sidesWidth,
  animated,
  borderBottomWidth,
}) {
  const _wrapperStyle = {
    height: height + navbarXSpace,
    borderBottomWidth,
  };
  const _sideStyle = {
    width: sidesWidth,
  };
  bgColor = typeof bgColor === 'string' ? {backgroundColor: bgColor} : bgColor;

  if (animated) {
    return (
      <Animated.View
        style={[
          styles.wrapper,
          isFixed ? styles.wrapperFixed : null,
          bgColor,
          styles.wrapper,
          _wrapperStyle,
          style,
        ]}>
        {hasLeft ? <View style={[styles.left, _sideStyle, leftStyle]}>{left}</View> : null}
        {hasCenter ? <View style={[styles.center, centerStyle]}>{center}</View> : null}
        {hasRight ? <View style={[styles.right, _sideStyle, rightStyle]}>{right}</View> : null}
      </Animated.View>
    );
  }

  return (
    <View
      style={[styles.wrapper, isFixed ? styles.wrapperFixed : null, bgColor, _wrapperStyle, style]}>
      {hasLeft ? <View style={[styles.left, _sideStyle, leftStyle]}>{left}</View> : null}
      {hasCenter ? <View style={[styles.center, centerStyle]}>{center}</View> : null}
      {hasRight ? <View style={[styles.right, _sideStyle, rightStyle]}>{right}</View> : null}
    </View>
  );
}

NavigationBar.defaultProps = {
  height: navbarHeight,
  isFixed: false,
  bgColor: 'white',
  hasLeft: false,
  hasCenter: false,
  hasRight: false,
  left: null,
  center: null,
  right: null,
  sidesWidth: 88,
  animated: false,
  borderBottomWidth: 1,
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: NavigationBar.height,
    paddingTop: Platform.OS === 'ios' ? 20 + navbarXSpace : wp(24),
    borderBottomColor: colors.textDark,
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
    width: 0,
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
