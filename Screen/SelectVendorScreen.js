import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const SelectVendorScreen = ({ navigation }) => {
  const handlePress = (vendor) => {
    navigation.navigate("Onboarding", { vendor });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/shopping.jpg")}
      />
      <Text style={styles.title}>Daily Drop</Text>
      <Text style={styles.subTitle}>Select Vendor</Text>
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#F9CADA" }]}
        onPress={() => handlePress("Shopping")}
      >
        <Text style={styles.cardText}>Shopping</Text>
        <Image
          style={styles.cardImage}
          source={require("../assets/shopping.jpg")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#FFD8B9" }]}
        onPress={() => handlePress("Grocery")}
      >
        <Text style={styles.cardText}>Grocery</Text>
        <Image
          style={styles.cardImage}
          source={require("../assets/grocery.jpg")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#B9E6FF" }]}
        onPress={() => handlePress("Pharmacy")}
      >
        <Text style={styles.cardText}>Pharmacy</Text>
        <Image
          style={styles.cardImage}
          source={require("../assets/pharmacy.jpg")}
        />
      </TouchableOpacity>
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
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
    marginBottom: 20,
  },
  card: {
    width: "90%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  cardImage: {
    width: 40,
    height: 40,
  },
});

export default SelectVendorScreen;
