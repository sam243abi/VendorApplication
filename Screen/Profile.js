import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.editIcon}>✏️</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Details Section */}
        <View style={[styles.section, { minHeight: 220 }]}>
          <Image
            source={{
              uri: "https://via.placeholder.com/80",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Manish Harsh</Text>
          <Text style={styles.email}>manish@gmail.com</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </Text>
        </View>

        {/* Communication Address Section */}
        <View style={[styles.section, { minHeight: 300 }]}>
          <Text style={styles.sectionTitle}>Communication Address</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.label}>Address: </Text>301B, Sector C, Gandhinagar
          </Text>
          <Text style={styles.sectionText}>
            <Text style={styles.label}>Country: </Text>India
          </Text>
          <Text style={styles.sectionText}>
            <Text style={styles.label}>City: </Text>Gandhinagar
          </Text>
          <Text style={styles.sectionText}>
            <Text style={styles.label}>Postal Code: </Text>234232
          </Text>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.changePasswordButton}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007bff",
  },
  editIcon: {
    fontSize: 20,
    color: "#007bff",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  email: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  changePasswordButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Profile;
