/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  findNodeHandle,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Link from 'components/Link';
import {hp, normalize, wp} from 'helpers/styles/responsive';
import Fonts from 'assets/fonts/fonts';
import colors from 'assets/colors';
import FontText from 'components/FontText';

const Input = forwardRef(
  (
    {
      value,
      editable = true,
      height = hp(5),
      fontSize = normalize(15),
      fontFamily = Fonts.regular,
      color = colors.teal_757575,
      placeholder = 'Type something...',
      placeholderTextColor = colors.placeHolder,
      blurOnSubmit = false,
      returnKeyType = 'done',
      multiline = false,
      multilineHeight = hp(10),
      keyboardType = 'text',
      autoCapitalize = 'none',
      maxLength,
      secureTextEntry = false,
      inputStyle,
      children,
      style,
      onFocus,
      onBlur,
      autoFocus = false,
      textAlign = 'left',
      caretHidden = false,
      contextMenuHidden = false,
      selectTextOnFocus = false,
      pointerEvents,
      onSubmit,
      clearOnSubmit = false,
      willCheckPosition = true,
      checkPosition,
      onChangeText,
      onEndEditing,
      onKeyPress,
      autoCorrect,
      withTitle = false,
      title,
      withLeftIcon = false,
      withRightIcon = false,
      leftIcon,
      rightIcon,
      fontStyle,
      onRightIconPress,
      onLeftIconPress,
      isRequired = false,
      pTop,
      pBottom,
      labelSize = normalize(14),
      labelColor = colors.gray,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [inputEditable, setInputEditable] = useState(editable);
    const inputRef = React.useRef();

    React.useEffect(() => {
      setInputValue(value);
    }, [value]);

    const onChangeTextHandler = (text) => {
      setInputValue(text);
      if (typeof onChangeText === 'function') {
        onChangeText(text);
      }
    };

    const onSubmitEditingHandler = () => {
      if (typeof onSubmit === 'function') {
        onSubmit(inputValue);
      }
      if (clearOnSubmit) {
        setInputValue('');
      }
    };

    const onFocusHandler = () => {
      if (typeof onFocus === 'function') {
        onFocus();
      }
      if (willCheckPosition && typeof checkPosition === 'function') {
        checkPosition(findNodeHandle(inputRef.current));
      }
    };

    const _inputStyle = {
      height: multiline ? multilineHeight : height,
      fontSize,
      fontFamily: fontFamily || Fonts.regular,
      color: color || colors.black,
      placeholderTextSize: fontSize,
    };

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      blur: () => {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      },
      disable: () => setInputEditable(false),
      enable: () => setInputEditable(true),
    }));

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          {withTitle && (
            <FontText
              size={labelSize}
              color={labelColor}
              pTop={pTop}
              pBottom={pBottom}
              style={fontStyle}>
              {title}
              {isRequired && (
                <FontText size={labelSize} color={colors.red} style={fontStyle}>
                  {'*'}
                </FontText>
              )}
            </FontText>
          )}
          <View style={[styles.wrapper, style]}>
            {withLeftIcon && <Link onPress={onLeftIconPress}>{leftIcon}</Link>}
            <TextInput
              ref={inputRef}
              textContentType="none"
              pointerEvents={pointerEvents}
              editable={inputEditable}
              value={inputValue}
              textAlign={textAlign}
              autoComplete="off"
              autoCorrect={!!(autoCorrect && autoCorrect === true)}
              allowFontScaling={false}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              onChangeText={onChangeTextHandler}
              onSubmitEditing={onSubmitEditingHandler}
              blurOnSubmit={multiline ? false : blurOnSubmit}
              returnKeyType={returnKeyType}
              multiline={multiline}
              underlineColorAndroid="transparent"
              keyboardType={keyboardType}
              maxLength={maxLength}
              autoCapitalize={autoCapitalize}
              secureTextEntry={secureTextEntry}
              onFocus={onFocusHandler}
              onBlur={onBlur}
              onEndEditing={onEndEditing}
              autoFocus={autoFocus}
              caretHidden={caretHidden}
              contextMenuHidden={contextMenuHidden}
              selectTextOnFocus={selectTextOnFocus}
              onKeyPress={onKeyPress}
              style={[
                multiline ? styles.inputMultiline : null,
                styles.input,
                _inputStyle,
                inputStyle,
              ]}
            />
            {children}
            <Link onPress={onRightIconPress}>{withRightIcon ? rightIcon : null}</Link>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingLeft: wp(2),
    paddingRight: wp(2),
    paddingVertical: 0,
    marginHorizontal: 0,
  },
  inputMultiline: {
    textAlignVertical: 'top',
    marginTop: hp(1),
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
    justifyContent: 'space-between',
    marginBottom: hp(1),
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderBottomWidth: 2,
    elevation: 2,
  },
});

export default Input;
