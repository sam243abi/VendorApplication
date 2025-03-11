import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import BottomNav from "./components/BottomNav";
import { navigateTo } from "./RoutHub/Routs";

const profileImage = "https://via.placeholder.com/100";
const settingsIcon = "https://cdn-icons-png.flaticon.com/512/3524/3524659.png"; // New settings icon

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Mythreya Kannan</Text>
            <Text style={styles.profilePhone}>(+91) 8903658369</Text>
          </View>
          <TouchableOpacity>
            <Image source={{ uri: settingsIcon }} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Active Subscriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Past Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Share Daily Drop to Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Get Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>About App</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom navigation bar */}
      <BottomNav navigation={navigation} activeTab="Account" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },
  profileImageContainer: {
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profilePhone: {
    fontSize: 14,
    color: "#777",
  },
  settingsIcon: {
    width: 25,
    height: 25,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Account;