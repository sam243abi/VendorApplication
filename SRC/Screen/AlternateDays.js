import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { globalStyles } from './styles/global';

const AlternateDays = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev));

  const generateAlternateDates = () => {
    let markedDates = {};
    if (selectedDate) {
      markedDates[selectedDate] = {
        selected: true,
        selectedColor: '#9dd694',
      };

      const selectedMoment = moment(selectedDate);
      for (let i = 1; i <= 15; i++) {
        const alternateDate = selectedMoment.clone().add(i * 2, 'days').format('YYYY-MM-DD');
        markedDates[alternateDate] = {
          marked: true,
          dotColor: '#064e3b',
        };
      }
    }
    return markedDates;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select start date</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={generateAlternateDates()}
        theme={{
          selectedDayBackgroundColor: '#004AAD',
          todayTextColor: '#064e3b',
          arrowColor: '#9dd694',
        }}
      />
      {selectedDate && (
        <View style={styles.quantityContainer}>
          <Text style={styles.sectionTitle}>Select quantity</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <TouchableOpacity style={globalStyles.ScheConfirmButton} onPress={() => navigation.navigate('Review', { selectedPlan: 'AlternateDays' })}>
        <Text style={globalStyles.ScheConfirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
},
  header: { 
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 10 
},
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginVertical: 10 
},
  quantityContainer: { 
    arginTop: 20 
},
  quantitySelector: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center' 
},
  quantityButton: { 
    backgroundColor: '#E0F0FF',
    padding: 10, 
    borderRadius: 10 
},
  quantityButtonText: { 
    fontSize: 18, 
    color: '#064e3b' 
},
  quantity: { 
    fontSize: 18, 
    marginHorizontal: 20
},
  confirmButton: { 
    backgroundColor: '#9dd694', 
    padding: 15, borderRadius: 10, 
    alignItems: 'center', 
    marginTop: 30 
},
  confirmButtonText: { 
    color: '#064e3b', 
    fontSize: 16, 
    fontWeight: 'bold'
},
});

export default AlternateDays;
