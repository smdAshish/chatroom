import React, {useState} from 'react';
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
import CustomInput from '../../component/customInput';
import {COLORS} from '../../Utils/colors';

const {height, width} = Dimensions.get('window');

const RegisterScreen: React.FC<any> = ({navigation, route}) => {
  const [userName, setUserame] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
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
          }}>
          <ScrollView>
            <View style={styles.form}>
              <CustomInput
                icon="user"
                placeholder="Enter your username"
                value={userName}
                onChangeText={setUserame}
              />

              <CustomInput
                icon="user"
                placeholder="Enter your email"
                value={password}
                onChangeText={setPassword}
              />

              <CustomInput
                icon="user"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
              />

              <CustomInput
                icon="user"
                placeholder="Enter your confirm password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />

              <View style={{width: width * 0.2, alignSelf: 'center'}}>
                <CustomButton
                  onPress={() => {
                    constFunction.playSound();
                    navigation.navigate(ROUTES.Login);
                  }}
                  title={'REGISTER'}
                />
              </View>
            </View>
          </ScrollView>
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
    padding: 20,
  },
  checkboxLabel: {
    fontSize: 17,
    color: COLORS.WHITE,
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

export default RegisterScreen;
