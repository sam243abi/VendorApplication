import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "./components/BottomNav";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { navigateTo } from "./RoutHub/Routs";
import colors from "./components/colors";

const Drops = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarDates, setCalendarDates] = useState([]);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  useEffect(() => {
    const generateCalendarDates = () => {
      const today = new Date();
      const rangeDays = 30; // Number of days to show before and after
      const calendar = [];

      for (let i = -rangeDays; i <= rangeDays; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        calendar.push(date);
      }
      setCalendarDates(calendar);
    };

    const loadSelectedDate = async () => {
      try {
        const storedDate = await AsyncStorage.getItem("selectedDate");
        if (storedDate) {
          setSelectedDate(new Date(storedDate));
        }
      } catch (error) {
        console.error("Error loading selected date:", error);
      }
    };

    generateCalendarDates();
    loadSelectedDate();
  }, []);

  const handleDateChange = async (date) => {
    try {
      await AsyncStorage.setItem("selectedDate", date.toISOString());
      setSelectedDate(date);
    } catch (error) {
      console.error("Error saving selected date:", error);
    }
  };

  const handleConfirmDate = (date) => {
    handleDateChange(date);
    setDatePickerVisible(false);
  };

  const products = [
    {
      id: 1,
      name: "Aavin Double Toned Milk",
      quantity: "2 x 500ml pouch",
      deliveryTime: "Everyday 6:30 - 7:00AM",
      status: "Delivered",
      image: require("./images/aavinmilk.png"),
    },
    {
      id: 2,
      name: "Tender Coconut",
      quantity: "2 Pcs",
      deliveryTime: "Every SUN, WED 6:30 - 7:00AM",
      status: "Delivered",
      image: require("./images/tender-coconut.png"),
    },
    {
      id: 3,
      name: "Aquafina 25 ltrs",
      quantity: "2 x 25ltr can",
      deliveryTime: "Every SUN, WED, THU 4:30 - 5:30PM",
      status: "Scheduled",
      image: require("./images/aquafina.png"),
    },
  ];

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productQuantity}>{item.quantity}</Text>
        <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
        <View>
          <Text
            style={[
              styles.statusText,
              item.status === "Delivered"
                ? styles.deliveredText
                : styles.scheduledText,
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.manageButton}>
        <Text style={styles.manageButtonText}>Manage</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCalendar = () => (
    <View>
      {/* Horizontally Scrollable Dates with Proper Alignment */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.datesScrollView}
      >
        {calendarDates.map((date, index) => {
          const isSelectedDate =
            selectedDate.toDateString() === date.toDateString();

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.calendarItem,
                isSelectedDate && styles.selectedCalendarItem,
              ]}
              onPress={() => handleDateChange(date)}
            >
              <Text
                style={[
                  styles.calendarDay,
                  isSelectedDate && styles.selectedText,
                ]}
              >
                {date.toLocaleString("default", { weekday: "short" })}
              </Text>
              <Text
                style={[
                  styles.calendarDate,
                  isSelectedDate && styles.selectedText,
                ]}
              >
                {date.getDate()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
          <Text style={styles.headerTitle}>
            {`${selectedDate.getDate()} ${selectedDate.toLocaleString(
              "default",
              { month: "long" }
            )}`}
          </Text>
        </TouchableOpacity>
      </View>

      {renderCalendar()}

      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.productList}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={selectedDate}
        onConfirm={handleConfirmDate}
        onCancel={() => setDatePickerVisible(false)}
      />

      {/* Bottom navigation bar */}
      <BottomNav navigation={navigation} activeTab="Drops" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  datesScrollView: {
    flexDirection: "row",
  },
  calendarItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  selectedCalendarItem: {
    backgroundColor: colors.primary,
  },
  calendarDay: {
    fontSize: 12,
    fontWeight: "bold",
  },
  calendarDate: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedText: {
    color: colors.background,
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 16,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  productImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginRight: 12,
    marginLeft: -20,
  },
  productDetails: {
    flex: 1,
    position: "relative",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productQuantity: {
    color: colors.border,
  },
  deliveryTime: {
    color: colors.border,
    marginBottom: 5,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  deliveredText: {
    color: colors.primary,
    fontSize: 14,
  },
  scheduledText: {
    fontSize: 14,
  },
  manageButton: {
    alignSelf: "flex-end",
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderColor:colors.primary,
    borderWidth: 2,
  },
  manageButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Drops;