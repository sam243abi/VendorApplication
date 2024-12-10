import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const orders = [
  {
    id: "1",
    orderNumber: "#20211028-07104354",
    date: "2 Nov 2021 04:24 PM",
    customerName: "Ankit Gajera",
    amount: "₹230.44",
    status: "Paid",
    deliveryStatus: "Placed",
  },
  {
    id: "2",
    orderNumber: "#20211028-07104355",
    date: "3 Nov 2021 12:10 PM",
    customerName: "John Doe",
    amount: "₹120.00",
    status: "Unpaid",
    deliveryStatus: "Shipped",
  },
  {
    id: "3",
    orderNumber: "#20211028-07104356",
    date: "4 Nov 2021 08:40 AM",
    customerName: "Jane Smith",
    amount: "₹340.78",
    status: "Paid",
    deliveryStatus: "Delivered",
  },
];

const Orders = ({ navigation }) => {
  const [activeNav, setActiveNav] = useState("Orders");

  const handleNavPress = (screen) => {
    setActiveNav(screen);
    navigation.navigate(screen);
  };

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert("Navigated!")}>
      <View style={styles.cardContent}>
        <View style={styles.orderInfo}>
          <Text style={styles.orderNumber}>{item.orderNumber}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.customerLabel}>Customer Name</Text>
          <Text style={styles.customerName}>{item.customerName}</Text>
          <Text style={styles.deliveryLabel}>Delivery Status</Text>
          <Text style={styles.deliveryStatus}>{item.deliveryStatus}</Text>
        </View>
        <View style={styles.amountInfo}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.status}>{item.status}</Text>
          <Image
            style={styles.invoiceIcon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1257/1257806.png",
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="car-outline" size={24} color="#000" />
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
          >
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Total Orders</Text>
        <Text style={styles.inactiveTab}>Pending Order</Text>
        <Text style={styles.inactiveTab}>Placed Order</Text>
      </View>

      {/* Orders List */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("DashboardScreen")}
        >
          <Icon name="view-dashboard" size={24} color="#064663" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("order")}
        >
          <Icon name="format-list-bulleted" size={24} color="#064663" />
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("product2")}
        >
          <Icon name="archive-outline" size={24} color="#064663" />
          <Text style={styles.navText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("Earning")}
        >
          <Icon
            name="credit-card"
            size={24}
            color={activeNav === "Earning" ? "#0BC184" : "#064663"}
          />
          <Text
            style={[
              styles.navText,
              activeNav === "Earning" && styles.navActive,
            ]}
          >
            Earning
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("Profile")}
        >
          <Icon name="account-outline" size={24} color="#064663" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 16,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a73e8",
    borderBottomWidth: 2,
    borderBottomColor: "#1a73e8",
    paddingBottom: 8,
  },
  inactiveTab: {
    fontSize: 16,
    color: "#888",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderInfo: {
    flex: 3,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  customerLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 8,
  },
  customerName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  deliveryLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 8,
  },
  deliveryStatus: {
    fontSize: 14,
    color: "#1a73e8",
    fontWeight: "bold",
  },
  amountInfo: {
    flex: 1,
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  status: {
    fontSize: 14,
    color: "#1a73e8",
    fontWeight: "bold",
    marginVertical: 4,
  },
  invoiceIcon: {
    width: 24,
    height: 24,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#064663",
    marginTop: 4,
  },
  navActive: {
    color: "#0BC184",
    fontWeight: "bold",
  },
});

export default Orders;
