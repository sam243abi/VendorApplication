import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment'; 
import { Alert } from 'react-native';
import { globalStyles } from './styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import colors from './components/colors';

const DailyPage = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    if (!selectedDate) {
      Alert.alert(
        'Select a Date',
        'Please select a start date before confirming.',
        [{ text: 'OK' }]
      );
    } else {
      navigation.navigate('Review', { selectedPlan: 'Daily' });
    }
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString); 
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const today = moment().format('YYYY-MM-DD'); 


  const generateMarkedDates = () => {
    let markedDates = {};
    if (selectedDate) {
      markedDates[selectedDate] = {
        selected: true,
        selectedColor: '#9dd694',
      };

      const selectedMoment = moment(selectedDate);
      for (let i = 1; i <= 30; i++) {
        const nextDate = selectedMoment.clone().add(i, 'days').format('YYYY-MM-DD');
        markedDates[nextDate] = {
          marked: true,
          dotColor: '#064e3b', 
        };
      }
    }
    return markedDates;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.sectionTitle}>Select start date</Text>
      <Calendar
        current={selectedDate || today} 
        minDate={today} 
        onDayPress={handleDayPress}
        markedDates={generateMarkedDates()} 
        theme={{
          selectedDayBackgroundColor: '#004AAD',
          todayTextColor: '#185f46',
          arrowColor: '#9dd694',
          dayTextColor: '#000',
          textDisabledColor: '#d9e1e8',
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
      </ScrollView>
      <TouchableOpacity style={globalStyles.ScheConfirmButton} onPress={handleConfirm}>
        <Text style={globalStyles.ScheConfirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  productDetails: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  quantityContainer: {
    marginTop: 20,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 20,
  },
});

export default DailyPage;
