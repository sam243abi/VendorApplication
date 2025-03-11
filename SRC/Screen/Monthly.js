import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { globalStyles } from './styles/global';

const MonthlyPage = ({ navigation }) => {
  const [selectedDates, setSelectedDates] = useState({});
  const [quantities, setQuantities] = useState({});
  const currentMonth = moment().format('YYYY-MM');
  const minDate = moment().startOf('month').format('YYYY-MM-DD');
  const maxDate = moment().endOf('month').format('YYYY-MM-DD');

  const handleDayPress = (day) => {
    const date = day.dateString;
    setSelectedDates((prev) => {
      const newDates = { ...prev };
      if (newDates[date]) {
        delete newDates[date];
        delete quantities[date];
      } else {
        newDates[date] = { selected: true, selectedColor: '#9dd694' };
        quantities[date] = 1;
      }
      return newDates;
    });
  };

  const handleConfirm = () => {
    if (Object.keys(selectedDates).length === 0) {
      Alert.alert(
        'Select a Date',
        'Please select at least one date before confirming.',
        [{ text: 'OK' }]
      );
    } else {
      navigation.navigate('Review', { selectedPlan: 'Monthly' });
    }
  };

  const updateQuantity = (date, increment) => {
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      if (increment) {
        newQuantities[date]++;
      } else {
        newQuantities[date] = Math.max(1, newQuantities[date] - 1);
      }
      return newQuantities;
    });
  };

  const generateMarkedDates = () => selectedDates;

  return (
    <View style={{ flex: 1 }}>
      
  <ScrollView style={styles.container} nestedScrollEnabled={true} contentContainerStyle={{ paddingBottom: 100 }}>
   
    <View>
    <Text style={styles.header}>Select date(s) for monthly delivery</Text>

      <Calendar
        onDayPress={handleDayPress}
        markedDates={generateMarkedDates()}
        minDate={minDate}
        maxDate={maxDate}
        disableArrowLeft={true}
        disableArrowRight={true}
        hideDayNames={true}
        hideExtraDays={true}
        theme={{
          selectedDayBackgroundColor: '#9dd694',
          todayTextColor: '#064e3b',
          arrowColor: '#9dd694',
        }}
      />

      {Object.keys(selectedDates).length > 0 && (
        <View style={styles.quantityContainer}>
          <Text style={styles.sectionTitle}>Select quantity</Text>
          <FlatList
            data={Object.keys(selectedDates)}
            keyExtractor={(item) => item}
            renderItem={({ item: date }) => (
              <View style={styles.dateQuantityRow}>
                <Text style={styles.dateText}>{moment(date).format('Do')} of every month</Text>
                <View style={styles.quantitySelector}>
                  <TouchableOpacity
                    onPress={() => updateQuantity(date, false)}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{quantities[date]}</Text>
                  <TouchableOpacity
                    onPress={() => updateQuantity(date, true)}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
      </View>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  quantityContainer: {
    marginTop: 20,
  },
  dateQuantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#9dd694',
    padding: 10,
    borderRadius: 10,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#064e3b',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 20,
  },

});

export default MonthlyPage;
