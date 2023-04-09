import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrackLocationScreen from './TrackLocationScreen'; 


function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('SOS Alert');
  };

  const handleTrackLocationPress = () => {
    navigation.navigate('SARI Track Location');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>SOS</Text>
      </TouchableOpacity>
      
      <View style={styles.cardContainerTitle}>
        <Text style={styles.cardContainerTitleText}>Emergency</Text>
      </View>
      <ScrollView horizontal={true}>
      
        <View style={styles.cardContainer}>
          <Card name="Track Location" image={require('./assets/trackloc.png')} onPress={handleTrackLocationPress} />
          <Card name="Track Location" image={require('./assets/trackloc.png')} />
          <Card name="Alarm Button" image={require('./assets/alarmbutton.png')} />
          <Card name="Virtual Escort" image={require('./assets/virtualescort.png')} />
          <Card name="Safe Route Planner" image={require('./assets/srpp.png')} />
          <Card name="Fake Call" image={require('./assets/fakecall.jpg')} />
        </View>
      </ScrollView>
      <View style={styles.cardContainerTitle}>
        <Text style={styles.cardContainerTitleText}>Other Features</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.cardContainer}>
          <Card name="Safety Network" image={require('./assets/wsnn.jpg')} />
          <Card name="In-App Chat" image={require('./assets/iac.png')} />
          <Card name="Auto Call Record" image={require('./assets/acr.png')} />
        </View>
      </ScrollView> 
    </View>
  );
}

function SOSAlert() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SOS Alert Sent</Text>
    </View>
  );
}


function Card({ name, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SARI For Women Safety" component={HomeScreen} />
        <Stack.Screen name="SOS Alert" component={SOSAlert} />
        <Stack.Screen name="SARI Track Location" component={TrackLocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink', // set the background color here
  },
  button: {
    marginTop: 30,
    marginBottom:30,
    backgroundColor: 'red',
    padding: 70,
    borderRadius: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,

  },
  card: {
    padding: 15,
    width: 300,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    margin: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
  },
  cardText: {
    fontSize: 30,
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: 140,
    height: 68,
    borderRadius: 95,
  },
  cardContainerTitle: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    margin: 3,
    marginTop: 20
  },
  cardContainerTitleText: {
    fontSize: 30,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
