import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import {COLORS} from '../Utils/colors';
const {height,width} = Dimensions.get("window")

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean; // Add loading prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  loading = false, // Default to false
}) => {
  const buttonContent = loading ? (
    <ActivityIndicator size="large" color={COLORS.WHITE} />
  ) : (
    <Text style={[styles.text, textStyle]}>{title}</Text>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading} // Disable button while loading
      style={[styles.buttonContainer, buttonStyle]}>
      <View style={{...styles.button, backgroundColor: COLORS.BLACK}}>
        {buttonContent}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: height*0.1,
    borderRadius: 8,
    overflow: 'hidden',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 5,
    borderColor: COLORS.PRIMARY,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderButton: {
    borderRadius: 8,
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
