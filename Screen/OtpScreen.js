import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OTPScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]); // Store refs for each TextInput
  const navigation = useNavigation();

  const handleInputChange = (value, index) => {
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);

    // Automatically focus the next input if available
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    console.log("OTP Submitted:", otp.join(""));
    // Navigate to SelectVendorScreen after submission
    navigation.navigate("Select");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/shopping.jpg")}
      />
      <Text style={styles.title}>Daily Drop</Text>
      <Text style={styles.subTitle}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            ref={(ref) => (inputRefs.current[index] = ref)} // Store ref in the array
          />
        ))}
      </View>
      <Text style={styles.infoText}>Enter Code sent to anki****.com</Text>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.npm }>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>Din't you  Receive any code ?</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Re-send Code</Text>
      </TouchableOpacity>
      <View style={styles.bottomLinkContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Click Here to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  subTitle: {
    fontSize: 18,
    color: "#000",
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
  },
  submitButton: {
    width: "80%",
    backgroundColor: "#9dd694",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
    
  },
  submitText: {
    color: "#064e3b",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#00b894",
    fontSize: 14,
  },
  bottomLinkContainer: {
    position: "absolute",
    bottom: 60,
  },
});

export default OTPScreen;
