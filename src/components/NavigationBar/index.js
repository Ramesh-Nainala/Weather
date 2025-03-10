/* eslint-disable no-param-reassign */
import React from 'react';
import {View, StyleSheet, Platform, Animated} from 'react-native';
import {isX, hp, wp} from 'helpers/styles/responsive';
import colors from 'assets/colors';

export const navbarXSpace = isX ? hp(3) : 0;
export const navbarHeight = Platform.OS === 'ios' ? hp(9) : hp(8.5);

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
  bgColor = typeof bgColor === 'string' ? {backgroundColor: colors[bgColor]} : bgColor;

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
    paddingTop: Platform.OS === 'ios' ? 20 + navbarXSpace : 0,
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
    paddingLeft: wp(4),
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
    paddingRight: wp(5),
  },
});

export default NavigationBar;
