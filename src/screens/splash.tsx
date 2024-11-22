import React, {useEffect, useRef} from 'react';
import {View, Animated, Image} from 'react-native';
import {ROUTES} from '../Navigation/routes_name';
import {IMAGES} from '../Utils/image';
import { COLORS } from '../Utils/colors';

const SplashScreen: React.FC<any> = ({navigation}) => {
  const translateY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // Define the up-and-down animation
    Animated.sequence([
      Animated.timing(translateY, {
        toValue: -100, // Move up
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 100, // Move down
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -50, // Move up
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 50, // Move down
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0, // Settle back to center
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to the next page once animation is complete
      navigation.navigate(ROUTES.Home);
    });
  }, [translateY, navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:COLORS.WHITE}}>
      <Animated.View style={{transform: [{translateY}]}}>
        <Image
          source={IMAGES.AppLogo} // Access image directly
          style={{height: 250, width: 250, resizeMode: 'contain'}}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
