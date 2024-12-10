import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const EarningScreen = ({ navigation }) => {
  const [activeNav, setActiveNav] = useState("Earning");

  const handleNavPress = (screenName) => {
    setActiveNav(screenName);
    navigation.navigate(screenName);
  };

  return (
    <>
      {/* Earnings Section */}
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Earnings</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <MaterialIcons name="support-agent" size={24} color="#00478F" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <FontAwesome name="bell" size={24} color="#00478F" />
            </TouchableOpacity>
          </View>
        </View>

        {/* This Month and Last Month Earnings */}
        <Text style={styles.subHeader}>This Month</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={require("../assets/cal.png")}
                style={styles.cardIconLarge}
              />
              <View>
                <Text style={styles.cardValue}>₹6002</Text>
                <Text style={styles.cardDescription}>This Month</Text>
              </View>
            </View>
            <Text style={styles.percentageText}>+5%</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={require("../assets/calender.png")}
                style={styles.cardIconLarge}
              />
              <View>
                <Text style={styles.cardValue}>₹10000</Text>
                <Text style={styles.cardDescription}>Last Month Earnings</Text>
              </View>
            </View>
            <Text style={styles.percentageText}>+15%</Text>
          </View>
        </View>

        {/* Total Earnings Section */}
        <View style={styles.largeCard}>
          <View style={styles.cardContent}>
            <Image
              source={require("../assets/gra.png")}
              style={styles.largeCardIcon}
            />
            <View>
              <Text style={styles.largeCardValue}>₹10000</Text>
              <Text style={styles.largeCardDescription}>Total Earnings</Text>
            </View>
          </View>
          <Image
            source={require("../assets/graph.png")}
            style={styles.graphIconLarger}
          />
          <Text style={styles.percentageTextLarge}>+15%</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("DashboardScreen")}
        >
          <Icon
            name="view-dashboard"
            size={24}
            color={activeNav === "DashboardScreen" ? "#0BC184" : "#064663"}
          />
          <Text
            style={[
              styles.navText,
              activeNav === "DashboardScreen" && styles.navActive,
            ]}
          >
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("order")}
        >
          <Icon
            name="format-list-bulleted"
            size={24}
            color={activeNav === "Orders" ? "#0BC184" : "#064663"}
          />
          <Text
            style={[styles.navText, activeNav === "Orders" && styles.navActive]}
          >
            Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("product2")}
        >
          <Icon
            name="archive-outline"
            size={24}
            color={activeNav === "product2" ? "#0BC184" : "#064663"}
          />
          <Text
            style={[
              styles.navText,
              activeNav === "product2" && styles.navActive,
            ]}
          >
            Products
          </Text>
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
          <Icon
            name="account-outline"
            size={24}
            color={activeNav === "Profile" ? "#0BC184" : "#064663"}
          />
          <Text
            style={[
              styles.navText,
              activeNav === "Profile" && styles.navActive,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#00478F",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#00478F",
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    width: "48%",
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconLarge: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#00478F",
  },
  cardDescription: {
    fontSize: 12,
    color: "#555555",
  },
  percentageText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2CBF6D",
  },
  largeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    height: 180,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  largeCardIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  graphIconLarger: {
    width: 200,
    height: 140,
    position: "absolute",
    right: 20,
    top: 20,
  },
  largeCardValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#00478F",
  },
  largeCardDescription: {
    fontSize: 12,
    color: "#555555",
  },
  percentageTextLarge: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2CBF6D",
    position: "absolute",
    right: 20,
    top: 20,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: "#064663",
  },
  navActive: {
    color: "#0BC184",
    fontWeight: "700",
  },
});

export default EarningScreen;
