import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import {IMAGES} from '../../Utils/image';
import {COLORS} from '../../Utils/colors';
import {FONTS} from '../../Utils/FontFamily';

const {height, width} = Dimensions.get('window');

type ChatRoom = {
  id: string;
  title: string;
  participants: string;
  rating: string;
  status: 'live' | 'notify';
  borderColor: string;
  buttonColor: string;
  logo: any; // Adjusted type for images
};

const chatRooms: ChatRoom[] = [
  {
    id: '1',
    title: 'Tom & Jerry',
    participants: '17+',
    rating: '4.8',
    status: 'live',
    borderColor: '#32CD32',
    buttonColor: '#32CD32',
    logo: IMAGES.TOM_AND_JERRY,
  },
  {
    id: '2',
    title: 'Sarla',
    participants: '24+',
    rating: '4.9',
    status: 'live',
    borderColor: '#FF4500',
    buttonColor: '#FF4500',
    logo: IMAGES.SARLA,
  },
  {
    id: '3',
    title: 'Chota Bheem',
    participants: '31+',
    rating: '4.9',
    status: 'live',
    borderColor: '#FFA500',
    buttonColor: '#FFA500',
    logo: IMAGES.CHOTA_BHEEM,
  },
  {
    id: '4',
    title: 'Baby Shark',
    participants: 'NA',
    rating: '4.7',
    status: 'notify',
    borderColor: '#B0B0B0',
    buttonColor: '#B0B0B0',
    logo: IMAGES.BABY_SHARK,
  },
  {
    id: '5',
    title: 'Kids Hut',
    participants: 'NA',
    rating: '4.9',
    status: 'notify',
    borderColor: '#B0B0B0',
    buttonColor: '#B0B0B0',
    logo: IMAGES.KIDS_HUT,
  },
];

const HomeScreen: React.FC = () => {
  const renderItem = ({item}: {item: ChatRoom}) => (
    <View style={[styles.card, {borderColor: item.borderColor}]}>
      <View style={styles.statusContainer}>
        <Text style={[styles.statusText, {color: item.borderColor}]}>
          {item.status === 'live' ? 'LIVE' : 'Notify'}
        </Text>
      </View>
      <Image source={item.logo} style={styles.logo} />
      <Text style={[styles.cardTitle, {color: item.borderColor}]}>
        {item.title}
      </Text>
      <View style={styles.detailsRow}>
        <Text style={styles.cardDetails}>{item.participants}</Text>
        <Text style={styles.cardDetails}>|</Text>
        <Text style={styles.cardDetails}>{item.rating}</Text>
      </View>
      <TouchableOpacity
        style={[styles.actionButton, {backgroundColor: item.buttonColor}]}
        onPress={() => console.log(`${item.title} button pressed`)}>
        <Text style={styles.actionButtonText}>
          {item.status === 'live' ? 'Join' : 'Notify'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={IMAGES.MAINBG}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={IMAGES.SEARCH} style={{height: 35, width: 35}} />
        <TextInput
          style={styles.searchInput}
          placeholder="type here......"
          placeholderTextColor="#B0B0B0"
        />
      </View>
      <View style={{height: height * 0.76}}>
        <FlatList
          data={chatRooms}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <View style={styles.promoContainer}>
              <Image source={IMAGES.TEAMWORK} style={styles.promoLogo} />
              <Text style={styles.promoText}>
                Join Group Have fun with other kids
              </Text>
            </View>
          )}
          contentContainerStyle={styles.cardsContainer}
          numColumns={2}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    margin: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    height: height * 0.09,
    width: width * 0.9,
  },
  searchInput: {
    flex: 1,
    color: '#000',
    fontSize: 18,
    marginLeft: 20,
  },
  cardsContainer: {
    paddingHorizontal: 10,
  },
  promoContainer: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: '#FFF9E1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  promoLogo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  promoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    position: 'relative',
    alignItems: 'center',
  },
  statusContainer: {
    alignSelf: 'flex-end',
    width: '100%',
  },
  statusText: {
    fontSize: height / 60,
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'right',
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: height / 48,
    fontFamily: FONTS.RobotoBold,
    marginBottom: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  cardDetails: {
    fontSize: height / 60,
    fontFamily: FONTS.RobotoBold,
    color: '#555',
    marginHorizontal: 5,
  },
  actionButton: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '80%',
    minHeight: height * 0.04,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
