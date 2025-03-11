import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Modal,ScrollView,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from './styles/global';
import { navigateTo } from './RoutHub/Routs';
const ReviewPage = ({ route, navigation }) => {
  const { selectedPlan } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [locations, setLocations] = useState([
    'BX0X, Radiance Shine, OMR, Kazhipattur',
  ]);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');

  const handleAddLocation = () => {
    if (street && city && postcode) {
      const fullAddress = `${street}, ${city}, ${postcode}`;
      const updatedLocations = [...locations, fullAddress];
      setLocations(updatedLocations);
      setSelectedLocationIndex(updatedLocations.length - 1);
      setModalVisible(false);
      setStreet('');
      setCity('');
      setPostcode('');
    }
  };

  const handleConfirmOrder = () => {
    setConfirmModalVisible(true);
  };

  const handleFinalConfirmation = () => {
    setConfirmModalVisible(false);
    navigateTo(navigation,'SubscriptionStartScreen');
  };

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      <View>
      <Text style={styles.title}>Selected Time Slot</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedPlan === 'Daily' ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => navigateTo(navigation,'Daily')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedPlan === 'Daily' ? styles.selectedText : styles.unselectedText,
            ]}
          >
            Daily
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedPlan === 'AlternateDays'
              ? styles.selectedButton
              : styles.unselectedButton,
          ]}
          onPress={() => navigateTo(navigation,'AlternateDays')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedPlan === 'AlternateDays'
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            Alternate Days
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedPlan === 'Weekly' ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => navigateTo(navigation,'Weekly')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedPlan === 'Weekly' ? styles.selectedText : styles.unselectedText,
            ]}
          >
            Weekly
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedPlan === 'Monthly' ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => navigateTo(navigation,'Monthly')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedPlan === 'Monthly' ? styles.selectedText : styles.unselectedText,
            ]}
          >
            Monthly
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.deliveryContainer}>
        <Text style={styles.title}>Delivery Address</Text>
        {locations.map((location, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.addressRow,
              selectedLocationIndex === index && styles.selectedAddressRow,
            ]}
            onPress={() => setSelectedLocationIndex(index)}
          >
            <Ionicons
              name="location-sharp"
              size={20}
              color={selectedLocationIndex === index ? '#1E88E5' : '#000'}
            />
            <Text
              style={[
                styles.addressText,
                selectedLocationIndex === index && styles.selectedAddressText,
              ]}
            >
              {location}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.addLocationContainer}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add-circle-outline" size={22} color="#1E88E5" />
          <Text style={styles.addLocationText}>ADD THE LOCATION</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={16} color="#1E88E5" />
          <Text style={styles.infoText}>
            Can Deposit of ₹150 per quantity will be collected during the first delivery.
          </Text>
        </View>
      </View>

      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Location</Text>
            <Text style={styles.label}>Street</Text>
            <TextInput
              value={street}
              onChangeText={setStreet}
              style={styles.input}
            />
            <Text style={styles.label}>City</Text>
            <TextInput
              value={city}
              onChangeText={setCity}
              style={styles.input}
            />
            <Text style={styles.label}>Postcode</Text>
            <TextInput
              value={postcode}
              onChangeText={setPostcode}
              keyboardType="numeric"
              style={styles.input}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.addButton]}
                onPress={handleAddLocation}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} visible={confirmModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={styles.modalImageContainer}>
            <Image
              source={require('./images/bisleri.png')} 
              style={styles.imageStyle}
            />
            <View style={styles.modalDetails}>
              <Text style={styles.modalTextTitle}>25 Litre Can</Text>
              <Text style={styles.modalText}>2x every Tuesday and Friday</Text>
              <Text style={styles.modalCost}>Estimated Monthly Cost: ₹450</Text>
            </View>
          </View>

            <View style={styles.modalAddressContainer}>
              <Text style={styles.modalAddressLabel}>Delivery Address:</Text>
              <Text style={styles.modalAddressText}>{locations[selectedLocationIndex]}</Text>
            </View>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setConfirmModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleFinalConfirmation}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
    <View style={styles.confirmOrderContainer}>
    <TouchableOpacity style={globalStyles.ScheConfirmButton} onPress={handleConfirmOrder}>
      <Text style={globalStyles.ScheConfirmButtonText}>Confirm Order</Text>
    </TouchableOpacity>
  </View>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
      },
      buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 2,
        margin: 5,
        width: '45%',
      },
      selectedButton: {
        backgroundColor: '#9dd694',
        borderColor: '#9dd694',
      },
      unselectedButton: {
        backgroundColor: '#fff',
        borderColor: '#9dd694',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#064e3b',
      },
      selectedText: {
        color: '#064e3b',
      },
      unselectedText: {
        color: '#9dd694',
      },
      deliveryContainer: {
        marginTop: 30,
        width: '100%',
      },
      addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
      },
      selectedAddressRow: {
        backgroundColor: '#9dd694',
      },
      addressText: {
        fontSize: 20,
        marginLeft: 5,
        color: '#000',
      },
      selectedAddressText: {
        color: '#064e3b',
        fontWeight: 'bold',
      },
      addLocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },
      addLocationText: {
        color: '#064e3b',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 30,
        top:15

      },
      infoBox: {
        borderWidth: 1,
        borderColor: '#1E88E5',
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#F5FAFF',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      },
      infoText: {
        fontSize: 16,
        color: '#000',
        marginLeft: 5,
        flexShrink: 1,
        marginTop: 20,
        marginBottom: 20,
      },
      
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 10,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
      },
      modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
      },
      modalButton: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        backgroundColor: '#ccc',
        
      },
      addButton: {
        backgroundColor: '#1E88E5',
      },
      modalButtonText: {
        color: '#064e3b',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center',
      },
      confirmOrderContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
      },
      confirmButton: {
        width: '50%',
        backgroundColor: '#9dd694',
        borderColor: '#9dd694',
        borderWidth: 0,
        paddingVertical: 12,
        borderRadius: 8,
      },
      confirmutton:{
        width: '100%',
        backgroundColor: '#9dd694',
        borderColor: '#9dd694',
        borderWidth: 2,
        paddingVertical: 12,
        borderRadius: 8,
      },
      confirmButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#064e3b',
        textAlign: 'center',
      },
      modalDescription: {
        fontSize: 16,
        marginVertical: 15,
        textAlign: 'center',
        color: '#555',
      },
      modalImageContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20 
      },
      modalDetails: { 
        marginLeft: 15 
      },
      modalTextTitle: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#000' 
      },
      modalText: { 
        fontSize: 16, 
        color: '#555' 
      },
      modalCost: {
        fontSize: 16, 
        color: '#388E3C', 
        fontWeight: 'bold', 
        marginTop: 5 
      },
      modalAddressContainer: { 
        marginVertical: 10 
      },
      modalAddressLabel: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#000' 
      },
      modalAddressText: { 
        fontSize: 16, 
        color: '#555' 
      },
      imageStyle: {
        width: 80,  
        height: 80, 
        resizeMode: 'contain', 
      },
});

export default ReviewPage;
