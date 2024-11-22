// DrawerNavigator.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/Home/Home';
import ProfilePage from '../screens/Profile/Profile';
import {ROUTES} from '../Navigation/routes_name';
import {COLORS} from '../Utils/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FONTS} from '../Utils/FontFamily';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: COLORS.PRIMARY,
        drawerInactiveTintColor: COLORS.LIGHT_GRAY,
      }}>
      <Drawer.Screen name={ROUTES.Home} component={HomeScreen} />
      <Drawer.Screen name={ROUTES.ProfilePage} component={ProfilePage} />
    </Drawer.Navigator>
  );
};

// Custom Drawer Content Component
const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();

  const menuItems = [
    {label: 'Home', icon: 'home', route: ROUTES.Home},
    {label: 'Profile', icon: 'account', route: ROUTES.ProfilePage},
    {label: 'Add Fund', icon: 'wallet-plus', route: 'AddFund'},
    {label: 'Notifications', icon: 'bell', route: 'Notifications'},
    {label: 'Online Support', icon: 'headset', route: 'OnlineSupport'},
    {
      label: 'Transaction History',
      icon: 'history',
      route: 'TransactionHistory',
    },
    {
      label: 'Withdrawal History',
      icon: 'cash-minus',
      route: 'WithdrawalHistory',
    },
  ];
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View style={styles.header}>
        <Entypo name="user" size={28} color={'#60708f'} />
        <Text style={styles.username}>John Doe</Text>
      </View>

      <ScrollView>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            // onPress={() => navigation.navigate(item.ProfilePage)}
            onPress={() => {
              navigation.navigate(item.route);
              console.log('Navigating to:', item.route); // Add this line to log the route
            }}>
            <Icon name={item.icon} size={24} color={COLORS.PRIMARY} />
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Divider */}
        <View style={styles.divider} />
        {/* Settings Section */}
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.menuItem}>
          {/* <Icon name="cog" size={24} color={COLORS.PRIMARY} /> */}
          <Icon name="home" size={24} color={COLORS.PRIMARY} />
          <Text style={styles.menuItemText}>Change Language</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.logoutButton}
            // onPress={() => navigation.navigate(ROUTES.Login)}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 20,
    color: COLORS.BLACK,
    fontFamily: FONTS.RobotoMediumItalic,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.LIGHT_GRAY,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginLeft: 20,
    marginTop: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  logoutButton: {
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DrawerNavigator;
