import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function TrackLocationPage() {
  const initialRegion = {
    latitude: 19.0769,
    longitude: 72.9009,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container} >
        <Text style={styles.text}>Your Current Location</Text>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker coordinate={{ latitude: 19.0769, longitude: 72.9009 }} title="KJSCE" description="You are here" />
        </MapView>
      </View>
      <View style={styles.outsideContainer}>
        <Text style={styles.outsideText}>Stay calm, your Location is being shared with your emergency contacts</Text>
      </View>
      <Text style={styles.difftext}>Emergency contacts: </Text>
      <View style={styles.outsideContainer}>
        
        <Text style={styles.outsideText}>ABC XYZ </Text>
        <Text style={styles.outsideText}>+91 9876543210</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    margin: 10,
    padding: 10
  },
  map: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 30
  },
  body: {
    margin: 20
  },
  difftext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30
  },
  outsideContainer: {
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 10,
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'pink',
    margin: 10,
    padding: 10
  },
  outsideText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    alignContent:'center'
  }
});
