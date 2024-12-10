import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DashboardScreen = () => {
  const navigation = useNavigation(); // Navigation object
  const [activeNav, setActiveNav] = useState("Dashboard"); // Track active navigation item

  const handleNavPress = (screenName) => {
    setActiveNav(screenName); // Update active navigation state
    navigation.navigate(screenName); // Navigate to the selected screen
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Ankit</Text>
            <Text style={styles.date}>Dec 12, 2021</Text>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.iconBadge}>
              <Text style={styles.icon}>💬</Text>
              <View style={styles.badge} />
            </TouchableOpacity>
            <Text
              style={styles.icon}
              onPress={() => navigation.navigate("Notification")}
            >
              🔔
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <View style={styles.card}>
            <Text style={styles.iconLarge}>🛍️</Text>
            <View>
              <Text style={styles.cardTitle}>Shopping</Text>
              <Text style={styles.cardSubtitle}>Switch Vendor Type</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.iconLarge}>💬</Text>
            <View>
              <Text style={styles.cardTitle}>Chat</Text>
              <Text style={styles.cardSubtitle}>View Chat</Text>
            </View>
          </View>
        </View>

        {/* Statistics Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>This Month</Text>
            <TouchableOpacity>
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate("AllReport")}
              >
                All Report
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.stats}>
            {/* StatCard components */}
            <StatCard label="Gross Sales" value="₹230.44" change="+10%" />
            <StatCard label="Earnings" value="₹6002" change="+5%" />
            <StatCard label="Total Orders" value="1043" change="+15%" />
            <StatCard label="Total Products" value="107" change="+5%" />
          </View>
        </View>

        {/* New Orders Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Order</Text>
            <TouchableOpacity>
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate("order")}
              >
                See All Orders
              </Text>
            </TouchableOpacity>
          </View>
          {/* OrderCard components */}
          <OrderCard
            orderId="20211028-07104354"
            date="2 Nov 2021 04:24 PM"
            name="Ankit Gajera"
            amount="₹230.44"
            status="Paid"
          />
          <OrderCard
            orderId="20211028-07104354"
            date="2 Nov 2021 04:24 PM"
            name="Ankit Gajera"
            amount="₹230.44"
            status="Paid"
          />
        </View>
      </ScrollView>

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
    </>
  );
};

// StatCard Component
const StatCard = ({ label, value, change }) => (
  <View style={styles.statCard}>
    <Text style={styles.statLabel}>{label}</Text>
    <View style={styles.statContent}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statChange}>{change}</Text>
    </View>
  </View>
);

// OrderCard Component
const OrderCard = ({ orderId, date, name, amount, status }) => (
  <View style={styles.orderCard}>
    <View>
      <Text style={styles.orderId}>{orderId}</Text>
      <Text style={styles.orderDetails}>{date}</Text>
      <Text style={styles.orderDetails}>Customer Name: {name}</Text>
      <Text style={styles.orderDetails}>Delivery Status: Placed</Text>
    </View>
    <View style={{ alignItems: "flex-end" }}>
      <Text style={styles.orderAmount}>{amount}</Text>
      <Text style={styles.orderStatus}>{status}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  date: {
    color: "#888",
  },
  icons: {
    flexDirection: "row",
  },
  iconBadge: {
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  badge: {
    position: "absolute",
    right: -2,
    top: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: "48%",
  },
  iconLarge: {
    fontSize: 32,
    marginRight: 8,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardSubtitle: {
    color: "#888",
    fontSize: 12,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "#007bff",
  },
  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  statLabel: {
    fontSize: 14,
    color: "#888",
  },
  statContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statChange: {
    fontSize: 14,
    color: "green",
  },
  orderCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 8,
  },
  orderId: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  orderDetails: {
    fontSize: 12,
    color: "#888",
    marginBottom: 2,
  },
  orderAmount: {
    fontWeight: "bold",
    fontSize: 16,
  },
  orderStatus: {
    color: "green",
    fontSize: 12,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#064663",
  },
  navActive: {
    color: "#0BC184",
    fontWeight: "bold",
  },
});

export default DashboardScreen;
