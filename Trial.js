import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const groupData = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Member',
    photo: require('./assets/i1.jpg'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Leader',
    photo: require('./assets/i2.jpg'),
  },
  {
    id: '3',
    name: 'Bob Johnson',
    role: 'Member',
    photo: require('./assets/i3.jpg'),
  },
];

function GroupCard({ member }) {
  return (
    <View style={styles.card}>
      <Image style={styles.photo} source={member.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.role}>{member.role}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={groupData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroupCard member={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#555',
  },
});
