import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LoginSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successMessage}>
        Thank You For Becoming a Daily Drop Vendor!
      </Text>
      <Text style={styles.subtitle}>
        We will notify you via email about the approval of your profile.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("DashboardScreen"); // Navigate to DashboardScreen
        }}
      >
        <Text style={styles.buttonText}>Check Mail</Text>
      </TouchableOpacity>
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  successMessage: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#004664",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#6690a2",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#30cc9e",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginSuccessScreen;
