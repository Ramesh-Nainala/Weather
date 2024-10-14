import React from 'react';
import {Pressable} from 'react-native';
import {normalize, wp} from 'helpers/styles/responsive';
import colors from 'assets/colors';
import SvgIcons from 'assets/svgs/svgIcons';
import FontText from 'components/FontText';
import NavigationBar from './NavigationBar';
// import NavigationBar from 'components/NavigationBar';

function Header({title, onBackPress, right, style}) {
  return (
    <NavigationBar
      hasCenter
      hasLeft
      hasRight
      sidesWidth={wp(21)}
      borderBottomWidth={0}
      bgColor={colors.white}
      style={style}
      left={
        <Pressable onPress={onBackPress}>
          <SvgIcons.Left height={wp(6.5)} width={wp(6.5)} color={colors.gray2} />
        </Pressable>
      }
      center={
        <FontText lines={1} color={'white'} name="bold" size={normalize(20)} textAlign={'center'}>
          {`${title}`}
        </FontText>
      }
      right={right}
    />
  );
}

export default Header;
