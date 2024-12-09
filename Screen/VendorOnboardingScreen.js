import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialIcons";

const VendorOnboardingScreen = ({ route, navigation }) => {
  const { vendor } = route.params;

  const [businessType, setBusinessType] = useState("Business");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [certificates, setCertificates] = useState("Yes");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [category, setCategory] = useState("");

  const handleFileUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      setUploadedFiles((prev) => [...prev, result]);
    }
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log({
      businessType,
      name,
      businessName,
      email,
      state,
      city,
      certificates,
      category,
      uploadedFiles,
    });
    navigation.navigate("LoginSuccessScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vendor Onboarding Details</Text>
      <Text style={styles.subTitle}>
        Enter your vendor details in below field
      </Text>

      {/* Business Type */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => setBusinessType("Business")}
        >
          {businessType === "Business" ? (
            <Icon name="check-circle" size={24} color="#004085" />
          ) : (
            <Icon name="radio-button-unchecked" size={24} color="#ccc" />
          )}
          <Text style={styles.toggleText}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => setBusinessType("Individual")}
        >
          {businessType === "Individual" ? (
            <Icon name="check-circle" size={24} color="#004085" />
          ) : (
            <Icon name="radio-button-unchecked" size={24} color="#ccc" />
          )}
          <Text style={styles.toggleText}>Individual</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Business Name"
        value={businessName}
        onChangeText={setBusinessName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.dropdown}>
        <Picker
          selectedValue={state}
          onValueChange={(itemValue) => setState(itemValue)}
        >
          <Picker.Item label="Please Select State" value="" />
          <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
          <Picker.Item label="Kerala" value="Kerala" />
        </Picker>
      </View>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Picker.Item label="Please Select City" value="" />
          <Picker.Item label="Chennai" value="Chennai" />
          <Picker.Item label="Coimbatore" value="Coimbatore" />
        </Picker>
      </View>

      {/* Certificates */}
      <Text style={styles.label}>
        Do you have relevant valid certificates and licenses?
      </Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleOption]}
          onPress={() => setCertificates("Yes")}
        >
          {certificates === "Yes" ? (
            <Icon name="check-circle" size={24} color="#004085" />
          ) : (
            <Icon name="radio-button-unchecked" size={24} color="#ccc" />
          )}
          <Text style={styles.toggleText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleOption]}
          onPress={() => setCertificates("No")}
        >
          {certificates === "No" ? (
            <Icon name="check-circle" size={24} color="#004085" />
          ) : (
            <Icon name="radio-button-unchecked" size={24} color="#ccc" />
          )}
          <Text style={styles.toggleText}>I will upload later</Text>
        </TouchableOpacity>
      </View>

      {certificates === "Yes" && (
        <>
          {/* Upload File Button */}
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleFileUpload}
          >
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>

          {/* Uploaded File Preview Section */}
          {uploadedFiles.length > 0 && (
            <View style={styles.fileListContainer}>
              {uploadedFiles.map((file, index) => (
                <View key={index} style={styles.uploadPreviewContainer}>
                  <Text style={styles.uploadedFileName}>{file.name}</Text>
                  <TouchableOpacity onPress={() => handleRemoveFile(index)}>
                    <Icon name="close" size={24} color="#d9534f" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </>
      )}

      {/* Categories Dropdown */}
      <View style={styles.dropdown}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Please Select Categories" value="" />
          <Picker.Item label="Customer" value="Customer" />
          <Picker.Item label="Business" value="Business" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f7faff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#004085",
  },
  subTitle: {
    fontSize: 16,
    color: "#666",
    marginVertical: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  toggleOption: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  toggleText: {
    fontSize: 16,
    color: "#666",
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#004085",
  },
  uploadButton: {
    backgroundColor: "#d4edda",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  uploadText: {
    color: "#155724",
    fontWeight: "bold",
  },
  fileListContainer: {
    marginTop: 10,
  },
  uploadPreviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  uploadedFileName: {
    flex: 1,
    fontSize: 16,
    color: "#555",
  },
  submitButton: {
    backgroundColor: "#004085",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default VendorOnboardingScreen;
