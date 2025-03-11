import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { globalStyles } from './styles/global';
import colors from './components/colors';

const Weekly = ({ navigation }) => {
  const [selectedDays, setSelectedDays] = useState([]);  
  const [quantities, setQuantities] = useState({});       
  const [startDate, setStartDate] = useState('');        
  
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];  
  const dayOfWeekMap = { 'Mo': 1, 'Tu': 2, 'We': 3, 'Th': 4, 'Fr': 5, 'Sa': 6, 'Su': 0 };

  const disablePastDates = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayDate = new Date();

    let disabledDates = {};
    for (let i = 0; i < 365; i++) { 
      const day = new Date(todayDate);
      day.setDate(todayDate.getDate() - i);

      const formattedDay = day.toISOString().split('T')[0];
      if (formattedDay < today) {
        disabledDates[formattedDay] = { disabled: true, disableTouchEvent: true, textColor: 'lightgrey' };  
      }
    }
    return disabledDates;
  };

  const handleDaySelect = (day) => {
    let updatedDays = [...selectedDays];
    if (updatedDays.includes(day)) {
      updatedDays = updatedDays.filter((d) => d !== day);
      setQuantities((prevQuantities) => {
        const updated = { ...prevQuantities };
        delete updated[day];
        return updated;
      });
    } else {
      updatedDays.push(day); 
    }
    setSelectedDays(updatedDays);
  };

  const handleQuantityChange = (day, change) => {
    setQuantities((prev) => ({
      ...prev,
      [day]: Math.max(1, (prev[day] || 1) + change),
    }));
  };

  const calculateNextDeliveryDays = (startDate) => {
    if (!startDate) return {};
    const start = new Date(startDate);
    const markedDates = { [startDate]: { selected: true, selectedColor: '#9dd694', selectedTextColor: 'white' } };
    
    for (let i = 1; i <= 30; i++) {
      const nextDay = new Date(start);
      nextDay.setDate(start.getDate() + i);
      const dayOfWeek = nextDay.getDay(); 
      const formattedDate = nextDay.toISOString().split('T')[0];
      const selectedDay = Object.keys(dayOfWeekMap).find(key => dayOfWeekMap[key] === dayOfWeek);
      if (selectedDays.includes(selectedDay)) {
        markedDates[formattedDate] = { marked: true, dotColor: '#064e3b' };
      }
    }

    return markedDates;
  };

  const handleStartDateSelect = (date) => {
    setStartDate(date.dateString);
  };

  const renderDayButton = (day) => (
    <TouchableOpacity
      key={day}
      style={[styles.dayButton, selectedDays.includes(day) && styles.selectedDayButton]}
      onPress={() => handleDaySelect(day)}
    >
      <Text style={[styles.dayText, selectedDays.includes(day) && styles.selectedDayText]}>{day}</Text>
    </TouchableOpacity>
  );

  const renderQuantitySelector = (day) => (
    <View style={styles.quantityContainer} key={day}>
      <Text>{`${day} of every week`}</Text>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={() => handleQuantityChange(day, -1)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantities[day] || 1}</Text>
        <TouchableOpacity onPress={() => handleQuantityChange(day, 1)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
  <View style={{ flex: 1 }}> 
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <Text style={styles.header}>Select day(s) for Delivery</Text>
      <View style={styles.daysContainer}>{days.map(renderDayButton)}</View>

      <Text style={styles.header}>Select quantity</Text>
      {selectedDays.length > 0 ? (
        selectedDays.map(renderQuantitySelector)
      ) : (
        <Text style={styles.noDaysText}>No days selected yet</Text>
      )}

      <Text style={styles.header}>Select start date</Text>
      <View style={{ flex: 1 }}>
        <Calendar
          onDayPress={handleStartDateSelect}
          markedDates={{
            ...disablePastDates(),
            [startDate]: { selected: true, selectedColor: '#004AAD', selectedTextColor: 'white' },
            ...calculateNextDeliveryDays(startDate), 
          }}
          theme={{
            selectedDayBackgroundColor: '#004AAD',
            selectedDayTextColor: 'white',
            dotColor: '#064e3b',
            todayTextColor: '#064e3b',
            arrowColor: '#9dd694',
          }}
        />
      </View>
    </ScrollView>
    <TouchableOpacity
      style={globalStyles.ScheConfirmButton}
      onPress={() => navigation.navigate('Review', { selectedPlan: 'Weekly' })}
    >
      <Text style={globalStyles.ScheConfirmButtonText}>Confirm</Text>
    </TouchableOpacity>
  </View>
);

};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: colors.background,
  },
  header: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginVertical: 10 
  },
  daysContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around' 
  },
  dayButton: {
    padding: 10, 
    borderRadius: 20, 
    backgroundColor: '#e0e0e0' 
  },
  selectedDayButton: { 
    backgroundColor: colors.primary 
  },
  dayText: {
    fontSize: 16 
  },
  selectedDayText: { 
    color: 'white' 
  },
  noDaysText: { 
    fontSize: 16, 
    color: 'grey', 
    textAlign: 'center' 
  },
  quantityContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginVertical: 10 
  },
  quantityControls: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  quantityButton: { 
    backgroundColor: colors.primary, 
    padding: 10, 
    borderRadius: 10 
  },
  quantityButtonText: { 
    fontSize: 18, 
  },
  quantityText: { 
    fontSize: 16, 
    marginHorizontal: 10 
  },

});

export default Weekly;
