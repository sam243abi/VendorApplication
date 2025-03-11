import React, { useState, useEffect, useRef } from 'react';
import {View,Text,StyleSheet,TextInput,Image,TouchableOpacity,Keyboard,Animated,Easing,Platform,TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from './styles/global';
import { navigateTo } from './RoutHub/Routs';
import colors from './components/colors';
import { handlePhoneNumberChange } from './Functions/utility';

const PhoneVerification = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      handleKeyboardShow
    );
    const keyboardHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      handleKeyboardHide
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const handleKeyboardShow = (event) => {
    Animated.timing(slideAnim, {
      toValue: -200,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const handleKeyboardHide = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const handleVerifyOTP = () => {
    if (!isChecked) {
      alert("Please accept the Terms and Conditions.");
      return;
    }

    if (phoneNumber.length !== 10) {
      setErrorMessage("*Phone number must be exactly 10 digits");
    } else {
      setErrorMessage("");
      navigateTo(navigation, 'OTP');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View
        style={[styles.container, { transform: [{ translateY: slideAnim }] }]}
      >
        <Text style={styles.title}>Verify Your Phone Number</Text>
        <Text style={styles.subtitle}>Let's Get Started</Text>
        <Image source={require("./images/PHV.jpg")} style={styles.image} />
        <View style={styles.phoneInputContainer}>
          <View style={styles.prefixContainer}>
            <Text style={styles.prefixText}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(handlePhoneNumberChange(text))}

          />
        </View>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <View style={styles.cbContainer}>
          <TouchableOpacity
            style={styles.cb}
            onPress={() => setIsChecked(!isChecked)}
          >
            <Text style={styles.cbtext}>{isChecked ? "☑️" : "⬜️"}</Text>
          </TouchableOpacity>
          <Text style={styles.label}>I accept the Terms and Conditions</Text>
        </View>
        <TouchableOpacity
          style={globalStyles.SignButton}
          onPress={handleVerifyOTP}
        >
          <Text style={globalStyles.SignButtonT}>Verify OTP</Text>
        </TouchableOpacity>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
  prefixContainer: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  prefixText: {
    fontSize: 16,
    color: colors.border,
  },
  input: {
    flex: 1,
    height: 40,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    marginBottom: 10,
  },
  cbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cb: {
    marginRight: 8,
  },
  cbtext: {
    fontSize: 24,
  },
  label: {
    fontSize: 16,
  },

});
export default PhoneVerification;
