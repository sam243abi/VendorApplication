import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const RegisterScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleRegister = () => {
    if (!agreeToTerms) {
      alert("You must agree to the terms and policies to register.");
      return;
    }
    navigation.navigate("Otp");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={ require("../assets/earnings.png") }
        />
        <Text style={styles.subtitle}>Register at Cellula</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        {/* Name Field */}
        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#064e3b" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Name" />
        </View>

        {/* Username Field */}
        <View style={styles.inputContainer}>
          <Icon
            name="account-circle"
            size={20}
            color="#064e3b"
            style={styles.icon}
          />
          <TextInput style={styles.input} placeholder="Username" />
        </View>

        {/* Email Field */}
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#064e3b" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        {/* Mobile Number Field */}
        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} color="#064e3b" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
          />
        </View>

        {/* Create Password Field */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#064e3b" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Create Password"
            secureTextEntry={!passwordVisible} // Toggle visibility
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? "visibility" : "visibility-off"}
              size={20}
              color="#064e3b"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Field */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#064e3b" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={!confirmPasswordVisible} // Toggle visibility
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            <Icon
              name={confirmPasswordVisible ? "visibility" : "visibility-off"}
              size={20}
              color="#064e3b"
            />
          </TouchableOpacity>
        </View>

        {/* Agree to Terms and Policies */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setAgreeToTerms(!agreeToTerms)}
            style={styles.checkbox}
          >
            <Icon
              name={agreeToTerms ? "check-box" : "check-box-outline-blank"}
              size={20}
              color="#064e3b"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I agree with the terms and policies of Cellula
          </Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    
    
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: "#555",
  },
  registerButton: {
    backgroundColor: "#9dd694",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#064e3b",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
