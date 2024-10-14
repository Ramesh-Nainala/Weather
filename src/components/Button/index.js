import React, {useCallback} from 'react';
import {StyleSheet, Keyboard, Pressable} from 'react-native';
import {hp} from 'helpers/styles/responsive';
import colors from 'assets/colors';

function Button(props) {
  const {
    children,
    style,
    buttonStyle,
    bgColor = colors.tintColor,
    disabled = false,
    pointerEvents,
    shadowColor = colors.tintColor,
    buttonHeight = hp(5),
    dismissKeyboardOnPress = true,
    borderColor = bgColor,
    onPress, // Move this out of the onButtonPress function
  } = props;

  const onButtonPress = useCallback(
    (evt) => {
      dismissKeyboardOnPress && Keyboard.dismiss();
      if (onPress) {
        onPress(evt);
      }
    },
    [dismissKeyboardOnPress, onPress]
  );

  return (
    <Pressable
      onPress={onButtonPress}
      disabled={disabled}
      pointerEvents={pointerEvents}
      style={[
        styles.button,
        styles.shadow,
        buttonStyle,
        {backgroundColor: bgColor, height: buttonHeight, borderColor},
        shadowColor ? {shadowColor} : null,
        style,
      ]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  shadow: {
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 10,
  },
});

export default Button;

/*
import React from 'react';
import {StyleSheet, Keyboard, Pressable} from 'react-native';
import {hp} from 'helpers/styles/responsive';
import colors from 'assets/colors';

function Button(props) {
  const {
    children,
    style,
    buttonStyle,
    activeOpacity = 0.5,
    bgColor = colors.tintColor,
    disabled = false,
    pointerEvents,
    shadowColor = colors.tintColor,
    buttonHeight = hp(5),
    dismissKeyboardOnPress = true,
    borderColor = bgColor,
  } = props;

  function onButtonPress(prop) {
    return (evt) => {
      const {onPress, dismissKeyboardOnPress} = prop;
      dismissKeyboardOnPress && Keyboard.dismiss();
      if (onPress) {
        onPress(evt);
      }
    };
  }

  return (
    <Pressable
      activeOpacity={activeOpacity}
      onPress={onButtonPress(props)}
      disabled={disabled}
      pointerEvents={pointerEvents}
      style={[
        styles.button,
        styles.shadow,
        buttonStyle,
        shadowColor ? {shadowColor} : null,
        bgColor ? {backgroundColor: bgColor} : null,
        buttonHeight ? {height: buttonHeight} : null,
        borderColor ? {borderColor} : null,
        style,
      ]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  shadow: {
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 10,
  },
});

export default Button;
*/