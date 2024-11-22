import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

type ChatRoom = {
  id: string;
  title: string;
  participants: string;
  rating: string;
  status: 'live' | 'notify';
  borderColor: string;
  buttonColor: string;
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
  },
  {
    id: '2',
    title: 'Sarla',
    participants: '24+',
    rating: '4.9',
    status: 'live',
    borderColor: '#FF4500',
    buttonColor: '#FF4500',
  },
  {
    id: '3',
    title: 'Chota Bheem',
    participants: '31+',
    rating: '4.9',
    status: 'live',
    borderColor: '#FFA500',
    buttonColor: '#FFA500',
  },
  {
    id: '4',
    title: 'Baby Shark',
    participants: 'NA',
    rating: '4.7',
    status: 'notify',
    borderColor: '#B0B0B0',
    buttonColor: '#B0B0B0',
  },
  {
    id: '5',
    title: 'Kids Hut',
    participants: 'NA',
    rating: '4.9',
    status: 'notify',
    borderColor: '#B0B0B0',
    buttonColor: '#B0B0B0',
  },
];

const OnBoardingScreen: React.FC = () => {
  const renderChatRooms = () => {
    const rows = [];
    for (let i = 0; i < chatRooms.length; i += 2) {
      const rowItems = chatRooms.slice(i, i + 2); // Get two items for each row
      rows.push(
        <View key={`row-${i}`} style={styles.row}>
          {rowItems.map(item => (
            <Card
              key={item.id}
              containerStyle={[styles.card, {borderColor: item.borderColor}]}>
              <Text style={[styles.cardTitle, {color: item.borderColor}]}>
                {item.title}
              </Text>
              <Text style={styles.cardDetails}>
                {item.participants} | {item.rating}
              </Text>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  {backgroundColor: item.buttonColor},
                ]}
                onPress={() => console.log(`${item.title} button pressed`)}>
                <Text style={styles.actionButtonText}>
                  {item.status === 'live' ? 'Join' : 'Notify'}
                </Text>
              </TouchableOpacity>
              {item.status === 'live' && (
                <View
                  style={[
                    styles.liveBadge,
                    {backgroundColor: item.borderColor},
                  ]}>
                  <Text style={styles.liveText}>LIVE</Text>
                </View>
              )}
            </Card>
          ))}
        </View>,
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          name="magnify"
          size={24}
          color="#B0B0B0"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="type here......"
          placeholderTextColor="#B0B0B0"
        />
      </View>
      <View style={styles.cardsContainer}>{renderChatRooms()}</View>
    </View>
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
    height: height * 0.09,
    width: width * 0.9,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#000',
  },
  cardsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    position: 'relative',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  actionButton: {
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  liveBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  liveText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default OnBoardingScreen;
