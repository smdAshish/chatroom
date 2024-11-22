import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextStyle,
  ViewStyle,
  ImageStyle,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {IMAGES} from '../../Utils/image';
import CustomButton from '../../component/customAppButton';
import {constFunction} from '../../Utils/constFunction';
import {ROUTES} from '../../Navigation/routes_name';
import {COLORS} from '../../Utils/colors';

const {height, width} = Dimensions.get('window');

const CheckBox: React.FC = () => (
  <View
    style={{width: 20, height: 20, backgroundColor: '#ddd', borderRadius: 3}}
  />
);

const LoginScreen: React.FC<any> = ({navigation, route}) => {
  return (
    <ImageBackground
      source={IMAGES.NewBG}
      resizeMode="cover"
      style={{height: height * 1, width: width * 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            height: height * 1,
            width: width * 0.25,
          }}>
          <Image
            source={IMAGES.backgroundImage}
            resizeMode="cover"
            style={{height: height * 1, width: width * 0.25}}
          />

          <View
            style={{
              position: 'absolute',
              width: width * 0.15,
              height: height * 0.15,
              justifyContent: 'center',
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {
                constFunction.playSound();
                navigation.navigate(ROUTES.OnBoarding);
              }}
              style={{
                height: '60%',
                width: width * 0.1,
                borderWidth: 2,
                borderColor: COLORS.ERROR,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
              }}>
              <Text style={styles.checkboxLabel}>BACK</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: height * 1,
            width: width * 0.5,
            justifyContent: 'center',
          }}>
          <View style={styles.form}>
            <TextInput placeholder="Username" style={styles.input} />

            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />

            <View style={styles.checkboxContainer}>
              <View style={{flexDirection: 'row'}}>
                <CheckBox />
                <Text style={styles.checkboxLabel}>Save password</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <View style={{width: width * 0.4, alignSelf: 'center'}}>
              <CustomButton
                onPress={() => {
                  navigation.navigate('Drawer');
                }}
                title={'LOG IN'}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            height: height * 1,
            width: width * 0.25,
          }}></View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F8F8F8',
    padding: 20,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  form: {
    width: '100%',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    height: height * 0.16,
  },
  checkboxLabel: {
    marginLeft: 10,
    color: COLORS.WHITE,
  },
  forgotPasswordText: {
    marginLeft: 'auto',
    color: '#007BFF',
  },
  loginButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
