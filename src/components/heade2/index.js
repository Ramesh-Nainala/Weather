import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {useStoreState} from 'easy-peasy';
import {normalize, wp} from 'helpers/styles/responsive';
import FontText from 'components/FontText';
import Fonts from 'assets/fonts/fonts';
import colors from 'assets/colors';
import NavigationBar from './NavigationBar';

function Header({leftIcon, title, rightIcon, onLeftPress, onRightPress, style}) {
  const {preferences} = useStoreState((state) => state.appFlavour);
  return (
    <NavigationBar
      sidesWidth={wp(10)} // used for extend area of side bar
      borderBottomWidth={0}
      bgColor={preferences.primary_color}
      style={style}
      left={
        leftIcon && (
          <Pressable
            style={styles.leftBoxStyle}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={onLeftPress}>
            {leftIcon}
          </Pressable>
        )
      }
      center={
        title && (
          <View style={styles.titleBoxStyle}>
            <FontText fontFamily={Fonts.semiBold} size={normalize(16)} lines={1} color={colors.red}>
              {title}
            </FontText>
          </View>
        )
      }
      right={
        rightIcon && (
          <Pressable
            style={styles.rightBoxStyle}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={onRightPress}>
            {rightIcon}
          </Pressable>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  leftBoxStyle: {
    borderWidth: 1,
    alignSelf: 'center',
  },
  titleBoxStyle: {
    borderWidth: 1,
    alignSelf: 'center',
  },
  rightBoxStyle: {
    borderWidth: 1,
    alignSelf: 'center',
  },
});

export default Header;

/*
  <Header
    title={'Leave Management'}
    leftIcon={<SvgIcons.NotificationIcon fill={colors.white} />}
    rightIcon={<SvgIcons.NotificationIcon fill={colors.white} />}
    onLeftPress={() => console.log('left press')}
    onRightPress={() => console.log('right press')}
    // onLeftPress={() => navigation.openDrawer()}
    // onRightPress={() => navigation.navigate(ROUTE_NAMES.NOTIFICATION_SCREEN)}
  />
*/

// import React from 'react';
// import {Pressable, Text, StyleSheet} from 'react-native';
// import colors from 'assets/colors';
// import Fonts from 'assets/fonts/fonts';
// import SvgIcons from 'assets/svgs/svgIcons';
// import {wp, normalize} from 'helpers/styles/responsive';
// import NavigationBar from './NavigationBar';

// function Header({title, onBackPress, right, style, hasLeft}) {
//   return (
//     <NavigationBar
//       hasCenter
//       hasLeft
//       hasRight
//       sidesWidth={wp(10)}
//       borderBottomWidth={0}
//       bgColor={colors.green_00C999}
//       style={style}
//       left={
//         hasLeft ? (
//           <Pressable onPress={onBackPress}>
//             <SvgIcons.Left fill={colors.white} />
//           </Pressable>
//         ) : null
//       }
//       center={
//         <Text numberOfLines={1} style={styles.title}>
//           {`${title}`}
//         </Text>
//       }
//       right={right}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     color: colors.white,
//     fontSize: normalize(20),
//     textAlign: 'center',
//     fontFamily: Fonts.bold,
//   },
// });
// export default Header;
