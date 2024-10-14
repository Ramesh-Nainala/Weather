import {hp} from 'helpers/styles/responsive';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';

function Link({style, children, onPress}) {
  return (
    <Pressable
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      onPress={onPress}
      style={[styles.container, style]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: hp(1),
  },
});

export default Link;
