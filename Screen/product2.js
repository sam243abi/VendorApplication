import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Products2 = ({ navigation }) => {
  const [activeNav, setActiveNav] = useState("Products");

  const handleNavPress = (screenName) => {
    setActiveNav(screenName);
    navigation.navigate(screenName);
  };

  return (
    <>
      {/* Main Content */}
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Products</Text>
          <View style={styles.iconContainer}>
            {/* Notification Icon */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")} // Navigate to Notification screen
            >
              <FontAwesome name="bell" size={24} color="#00478F" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={require("../assets/add-product.png")}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Add New Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={require("../assets/bulk-upload.png")}
              style={styles.actionIcon}
            />
            <Text
              style={styles.actionText}
              onPress={() => navigation.navigate("Upload")}
            >
              Bulk Upload Products
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonWide}>
            <Image
              source={require("../assets/demo-sheet.png")}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Download Demo Sheet</Text>
          </TouchableOpacity>
        </View>

        {/* Product List Header */}
        <View style={styles.productListHeader}>
          <Text style={styles.subHeader}>Products List</Text>
          <TouchableOpacity>
            <Text
              style={styles.seeAllText}
              onPress={() => navigation.navigate("Product")}
            >
              See All Products
            </Text>
          </TouchableOpacity>
        </View>

        {/* Product Item */}
        <View style={styles.productItem}>
          <View style={styles.productIndex}>
            <Text style={styles.indexText}>1</Text>
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Water Bottle</Text>
            <Text style={styles.productCategory}>
              Kitchen & Dining › Bottles
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.unitPrice}>Unit Price: ₹100.00</Text>
              <Text style={styles.purchasePrice}>Purchase Price: ₹150.00</Text>
              <Text style={styles.gst}>GST</Text>
            </View>
            <Text style={styles.createdAt}>
              Created At: 8 Sep 2021 08:44 PM
            </Text>
          </View>
          <View style={styles.productStatus}>
            <Text style={styles.statusText}>Published</Text>
          </View>
          <View style={styles.actionIcons}>
            <TouchableOpacity>
              <AntDesign name="edit" size={20} color="#007BFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="delete" size={20} color="#FF6347" />
            </TouchableOpacity>
          </View>
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
            color={activeNav === "order" ? "#0BC184" : "#064663"}
          />
          <Text
            style={[styles.navText, activeNav === "order" && styles.navActive]}
          >
            Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress("Products")}
        >
          <Icon
            name="archive-outline"
            size={24}
            color={activeNav === "Products" ? "#0BC184" : "#064663"}
          />
          <Text
            style={[
              styles.navText,
              activeNav === "Products" && styles.navActive,
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
    padding: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#00478F",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
  },
  actionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  actionButtonWide: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#00478F",
    textAlign: "center",
  },
  productListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#00478F",
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007BFF",
  },
  productItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  productIndex: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#00478F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  indexText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#00478F",
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 12,
    color: "#555555",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  unitPrice: {
    fontSize: 12,
    color: "#555555",
  },
  purchasePrice: {
    fontSize: 12,
    color: "#555555",
  },
  gst: {
    fontSize: 12,
    color: "#555555",
  },
  createdAt: {
    fontSize: 12,
    color: "#555555",
  },
  productStatus: {
    position: "absolute",
    top: 15,
    right: 50,
    backgroundColor: "#2CBF6D",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  actionIcons: {
    flexDirection: "row",
    gap: 15,
    position: "absolute",
    right: 10,
    top: 15,
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

export default Products2;
