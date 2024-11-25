import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const initialNotifications = [
  {
    id: "1",
    title: "New Order Received",
    category: "Kitchen & Dining",
    item: "Water Bottles Pink Color",
    date: "8 Sep 2021",
    time: "08:44 PM",
  },
  {
    id: "2",
    title: "New Order Received",
    category: "Kitchen & Dining",
    item: "Water Bottles Pink Color",
    date: "8 Sep 2021",
    time: "08:44 PM",
  },
  {
    id: "3",
    title: "New Order Received",
    category: "Kitchen & Dining",
    item: "Water Bottles Pink Color",
    date: "8 Sep 2021",
    time: "08:44 PM",
  },
];

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);

  // Handle long press to start selection mode or toggle selection
  const handleLongPress = (id) => {
    setSelectionMode(true); // Enable selection mode
    toggleSelection(id); // Select the long-pressed notification
  };

  // Handle single tap to toggle selection (only in selection mode)
  const handlePress = (id) => {
    if (selectionMode) {
      toggleSelection(id);
    }
  };

  // Toggle selection for a notification
  const toggleSelection = (id) => {
    setSelectedNotifications((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id) // Deselect
        : [...prevSelected, id] // Select
    );
  };

  // Handle delete action
  const handleDelete = () => {
    if (selectedNotifications.length === 0) {
      Alert.alert("No Notifications Selected", "Please select a notification to delete.");
      return;
    }

    setNotifications((prevNotifications) =>
      prevNotifications.filter(
        (notification) => !selectedNotifications.includes(notification.id)
      )
    );
    setSelectedNotifications([]); // Clear selection after deletion
    setSelectionMode(false); // Exit selection mode
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedNotifications.includes(item.id);

    return (
      <TouchableOpacity
        style={[
          styles.notificationCard,
          isSelected && styles.selectedNotificationCard,
        ]}
        onLongPress={() => handleLongPress(item.id)}
        onPress={() => handlePress(item.id)}
      >
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <View style={styles.notificationDetails}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.arrow}> › </Text>
          <Text style={styles.item}>{item.item}</Text>
        </View>
        <Text style={styles.timestamp}>{`${item.date} ${item.time}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="trash-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fb", // Matches the light gray background in the image
  },
  header: {
    backgroundColor: "#006d7d", // Matches the teal header color
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  listContainer: {
    padding: 16,
  },
  notificationCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedNotificationCard: {
    backgroundColor: "#e0f7fa", // Light blue for selected notifications
    borderColor: "#00796b",
    borderWidth: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d2d2d", // Dark gray color
    marginBottom: 8,
  },
  notificationDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: "#7a7a7a", // Light gray color for category
  },
  arrow: {
    fontSize: 14,
    color: "#7a7a7a", // Arrow separator color
  },
  item: {
    fontSize: 14,
    color: "#1792e8", // Blue color for the clickable text
    fontWeight: "600",
  },
  timestamp: {
    fontSize: 12,
    color: "#a3a3a3", // Light gray color for the timestamp
  },
});

export default NotificationScreen;
