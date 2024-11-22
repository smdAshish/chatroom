import React from 'react';
import {View, TextInput, StyleSheet, ViewStyle} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library

interface TextFieldProps {
  icon: any;
  placeholder: any;
  value: any;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  iconStyle?: ViewStyle;
}

const CustomInput: React.FC<TextFieldProps> = ({
  icon,
  placeholder,
  value,
  onChangeText,
  style,
  iconStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* <Icon name={icon} size={20} style={[styles.icon, iconStyle]} /> */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    color: '#888',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default CustomInput;
