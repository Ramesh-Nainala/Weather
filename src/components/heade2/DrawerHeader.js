import React from 'react';
import {View, Pressable, StyleSheet, Image} from 'react-native';
import colors from 'assets/colors';
import Fonts from 'assets/fonts/fonts';
import SvgIcons from 'assets/svgs/svgIcons';
import {wp, normalize, hp} from 'helpers/styles/responsive';
import {useNavigation} from '@react-navigation/native';
import FontText from 'components/FontText';
import {useStoreState} from 'easy-peasy';
import LocalImages from 'assets/images/localImages';
import NavigationBar from './NavigationBar';

function DrawerHeader({title, right, style, hasLeft}) {
  const {preferences} = useStoreState((state) => state.appFlavour);
  const navigation = useNavigation();
  return (
    <NavigationBar
      hasLeft
      sidesWidth={wp(8)}
      borderBottomWidth={0}
      bgColor={preferences.primary_color}
      style={style}
      left={
        hasLeft ? (
          <Pressable
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            style={styles.leftBoxStyle}
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            {/* <SvgIcons.DrawerMenu fill={colors.white} /> */}
            <Image
              source={LocalImages.drawer}
              tintColor={colors.white}
              style={styles.leftIconStyle}
            />
          </Pressable>
        ) : null
      }
      center={
        title && (
          <View style={styles.titleBoxStyle}>
            <FontText fontFamily={Fonts.bold} size={normalize(18)} lines={1} color={colors.white}>
              {title}
            </FontText>
          </View>
        )
      }
      right={right}
    />
  );
}

const styles = StyleSheet.create({
  leftBoxStyle: {
    // borderWidth: 1,
    // alignSelf: 'center',
  },
  titleBoxStyle: {
    // borderWidth: 1,
    // alignSelf: 'center',
  },
  leftIconStyle: {
    // height: hp(5),
    width: wp(7),
    resizeMode: 'cover',
  },
});

export default DrawerHeader;

/*
  <DrawerHeader
    title="My Screen Title"
    hasLeft
    right={
      <Pressable style={styles.rightBoxStyle} onPress={() => console.log('right pressed')}>
        <SvgIcons.NotificationIcon fill={colors.black} />
      </Pressable>
    }
    // style={styles.headerStyle}
  />

  rightBoxStyle: {
    borderWidth: 1,
    alignSelf: 'center',
  },
  headerStyle: {
    // we can implement any style of header
  },
*/
