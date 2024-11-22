import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../Utils/FontFamily';
import {COLORS} from '../../Utils/colors';

const Groups = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontFamily: FONTS.RobotoBold, fontSize: 25, color: '#000'}}>
        Groups
      </Text>
      <Text
        style={{
          fontFamily: FONTS.RobotoBold,
          fontSize: 25,
          color: COLORS.PRIMARY,
          marginTop: 25,
        }}>
        Comming Soon...
      </Text>
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({});
