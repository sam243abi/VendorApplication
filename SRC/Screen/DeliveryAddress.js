import React, { useState } from 'react';
import {View,Text,Keyboard,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform,TouchableWithoutFeedback,ScrollView,} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import {globalStyles} from '../Screen/styles/global'
import { navigateTo } from './RoutHub/Routs';
import colors from './components/colors';

const sampleLocations = [
  {
    latitude: 13.0827,
    longitude: 80.2707,
    street: 'Anna Salai',
    city: 'Chennai',
    postalCode: '600002',
  },
  {
    latitude: 13.0674,
    longitude: 80.2376,
    street: 'Mylapore',
    city: 'Chennai',
    postalCode: '600004',
  },
  {
    latitude: 13.0924,
    longitude: 80.2016,
    street: 'Ambattur',
    city: 'Chennai',
    postalCode: '600053',
  },
];

const DeliveryAddress = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 13.0827,
    longitude: 80.2707,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [marker, setMarker] = useState({
    latitude: 13.0827,
    longitude: 80.2707,
  });
  const [address, setAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
  });

  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;

    setMarker({ latitude, longitude });

    const matchedLocation = sampleLocations.find(
      (loc) =>
        Math.abs(loc.latitude - latitude) < 0.05 &&
        Math.abs(loc.longitude - longitude) < 0.05
    );

    if (matchedLocation) {
      setAddress((prev) => ({
        ...prev,
        street: matchedLocation.street,
        city: matchedLocation.city,
        postalCode: matchedLocation.postalCode,
      }));
    } else {
      setAddress((prev) => ({
        ...prev,
        street: 'Unknown Street',
        city: 'Unknown City',
        postalCode: '000000',
      }));
    }

    setRegion({ ...region, latitude, longitude });
  };

  const onSubmit = () => {
    navigateTo(navigation,'Home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
      >
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <MapView
            style={styles.map}
            region={region}
            onPress={handleMapPress}
          >
            <Marker coordinate={marker} />
          </MapView>

          <Text style={styles.title}>Where Should We Deliver?</Text>
          <Text style={styles.title2}>Enter your address</Text>

          <TextInput
            style={styles.input}
            placeholder="Street"
            value={address.street}
            onChangeText={(text) =>
              setAddress((prev) => ({ ...prev, street: text }))
            }
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={address.city}
            onChangeText={(text) =>
              setAddress((prev) => ({ ...prev, city: text }))
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Postal Code"
            value={address.postalCode}
            onChangeText={(text) =>
              setAddress((prev) => ({ ...prev, postalCode: text }))
            }
          />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={globalStyles.SignButton} onPress={onSubmit}>
              <Text style={globalStyles.SignButtonT}>Next</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  title2: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DeliveryAddress;
