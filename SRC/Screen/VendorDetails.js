import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VendorDetails = () => {
  const vendor = {
    name: "Swetha Agencies",
    location: "OMR, Kazhipattur",
    phone: "+919876543210",
    distributorFor:
      "Authorized Distributor For Bisleri, Aquafina, Blue Star Water Cans",
    avatarInitials: "SA",
    activeSubscription: {
      name: "Blue Star 25 ltrs",
      quantity: "2 x 25ltr can",
      schedule: "Every TUE, FRI, & THU 4:30 - 5:30PM",
      status: "Scheduled",
      imageUrl: require("./images/bluestar.png"),
    },
    storeLocation: {
      latitude: 12.834,
      longitude: 80.221,
    },
  };

  const handleCallVendor = () => {
    const phoneNumber = `tel:${vendor.phone}`;
    Linking.openURL(phoneNumber).catch((err) =>
      console.error("Failed to open dialer", err)
    );
  };

  const handleStoreLocation = () => {
    const { latitude, longitude } = vendor.storeLocation;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open Google Maps", err)
    );
  };

  return (
    <View style={styles.container}>
      {/* Vendor Avatar */}
      <View style={styles.vendorInfoContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{vendor.avatarInitials}</Text>
          <View style={styles.greenIndicator} />
        </View>
        <Text style={styles.vendorName}>{vendor.name}</Text>
        <Text style={styles.vendorLocation}>{vendor.location}</Text>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Distributor Information */}
      <Text style={styles.distributorText}>{vendor.distributorFor}</Text>

      {/* Call & Location Buttons */}
      <View style={styles.buttonsContainerVertical}>
        <TouchableOpacity style={styles.callButton} onPress={handleCallVendor}>
          <Ionicons name="call-outline" size={18} color="#064e3b" />
          <Text style={styles.smallButtonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={handleStoreLocation}
        >
          <Ionicons name="location-outline" size={18} color="#064e3b" />
          <Text style={styles.smallButtonText}>Location</Text>
        </TouchableOpacity>
      </View>

      {/* Active Subscription */}
      <View style={styles.subscriptionContainer}>
        <Text style={styles.activeSubscriptionTitle}>Active Subscriptions</Text>
        <View style={styles.subscriptionCard}>
          <Image
            source={vendor.activeSubscription.imageUrl}
            style={styles.subscriptionImage}
          />
          <View style={styles.subscriptionDetails}>
            <Text style={styles.subscriptionName}>
              {vendor.activeSubscription.name}
            </Text>
            <Text style={styles.subscriptionQuantity}>
              {vendor.activeSubscription.quantity}
            </Text>
            <Text style={styles.subscriptionSchedule}>
              {vendor.activeSubscription.schedule}
            </Text>
          </View>
          <View style={styles.subscriptionActions}>
            <TouchableOpacity style={styles.manageButton}>
              <Text style={styles.manageButtonText}>Manage</Text>
            </TouchableOpacity>
            <Text style={styles.scheduledBadge}>
              {vendor.activeSubscription.status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  vendorInfoContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#A020F0",
    marginBottom: 8,
    position: "relative",
  },
  avatarText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  greenIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#00FF00",
    position: "absolute",
    bottom: 2,
    right: 2,
    borderWidth: 2,
    borderColor: "#fff",
  },
  vendorName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  vendorLocation: {
    fontSize: 14,
    color: "#888",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 16,
  },
  distributorText: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  buttonsContainerVertical: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  smallButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 56,
    borderWidth: 1,
    borderColor: "#008000",
    borderRadius: 5,
    marginVertical: 8,
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 69,
    borderWidth: 1,
    borderColor: "#008000",
    borderRadius: 5,
    marginVertical: 8,
  },
  smallButtonText: {
    marginLeft: 6,
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
  },
  subscriptionContainer: {
    marginTop: 16,
  },
  activeSubscriptionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  subscriptionCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 16,
    borderWidth: 1,
    borderColor: "#c1e5bb",
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  subscriptionImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  subscriptionDetails: {
    flex: 1,
    marginLeft: 16,
  },
  subscriptionSchedule: {
    fontSize: 12,
    color: "#888",
  },
  subscriptionActions: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-end",
    flex: 1,
  },
  scheduledBadge: {
    backgroundColor: "#e1f5e4",
    color: "#064e3b",
    fontWeight: "bold",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: 8,
  },
  manageButton: {
    alignSelf: "flex-end",
    backgroundColor: "#064e3b",
    borderRadius: 5,
    padding: 8,
  },
  manageButtonText: {
    color: "#fff",
  },
});

export default VendorDetails;
