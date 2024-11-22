import {StyleSheet, Text, Image, View, Dimensions} from 'react-native';
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../Navigation/routes_name';
import HomeScreen from '../screens/Home/Home';
import Groups from '../screens/Home/Groups';
import Search from '../screens/Home/Search';
import Profile from '../screens/Home/ProfileScreen';
import History from '../screens/Home/History';

import ProfileScreen from '../screens/Home/ProfileScreen';
import {FONTS} from '../Utils/FontFamily';
import {IMAGES} from '../Utils/image';
import {COLORS} from '../Utils/colors';

const {height, width} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

type TabParamList = {
  Wallet: undefined;
  Market: undefined;
  Home: undefined;
  Reward: undefined;
  Card: undefined;
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: height * 0.1,
          backgroundColor: 'white',
          // width: width * 1,
          // alignItems: 'center',
          borderTopLeftRadius: height / 25,
          borderTopRightRadius: height / 25,
          borderColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          bottom: -height * 0.0,
        },
      }}>
      {/* ************ Wallet Tab ************ */}
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={IMAGES.SEARCH}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.RobotoRegular,
                    color: COLORS.PRIMARY,
                    fontSize: height / 65,
                  }}>
                  Search
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={IMAGES.SEARCH}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text
                  style={{
                    fontFamily: FONTS.RobotoRegular,
                    color: '#929292',
                    fontSize: height / 65,
                  }}>
                  Search
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={IMAGES.TEAM}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.RobotoRegular,
                    color: COLORS.PRIMARY,
                    fontSize: height / 65,
                  }}>
                  Groups
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={IMAGES.TEAM}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text
                  style={{
                    fontFamily: FONTS.RobotoRegular,
                    color: '#929292',
                    fontSize: height / 65,
                  }}>
                  Groups
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <View style={styles.TabImageContainer}>
              <Image
                source={IMAGES.HOME}
                resizeMode="contain"
                style={{
                  position: 'absolute',
                  bottom: 1,
                  // height: height * 0.12,
                  // width: width * 0.29,
                  height: 50,
                  width: 50,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={IMAGES.BOOK}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.RobotoRegular,
                    color: COLORS.PRIMARY,
                    fontSize: height / 65,
                  }}>
                  Task
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={IMAGES.BOOK}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text
                  style={{
                    fontFamily: FONTS.RobotoRegular,
                    color: '#929292',
                    fontSize: height / 65,
                  }}>
                  Task
                </Text>
              </View>
            ),
        }}
      />

      {/* ************ Card Tab ************ */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={IMAGES.PROFILE}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.RobotoRegular,
                    color: COLORS.PRIMARY,
                    fontSize: height / 65,
                  }}>
                  Profile
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={IMAGES.PROFILE}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text
                  style={{
                    fontFamily: FONTS.RobotoRegular,
                    color: '#929292',
                    fontSize: height / 65,
                  }}>
                  Profile
                </Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  img: {
    // height: height * 0.05,
    // width: width * 0.06,
    height: 35,
    width: 35,
    tintColor: COLORS.PRIMARY,
  },
  image: {
    // height: height * 0.05,
    // width: width * 0.06,
    height: 35,
    width: 35,
  },
  TabImageContainer: {
    height: height * 0.07,
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.06,
  },
});
