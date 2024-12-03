import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";

const Products2 = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Products</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <MaterialIcons name="support-agent" size={24} color="#00478F" />
          </TouchableOpacity>
          <TouchableOpacity>
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
          <Text style={styles.actionText}>Bulk Upload Products</Text>
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
          <Text style={styles.seeAllText}>See All Products</Text>
        </TouchableOpacity>
      </View>

      {/* Product Item */}
      <View style={styles.productItem}>
        <View style={styles.productIndex}>
          <Text style={styles.indexText}>1</Text>
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Water Botter</Text>
          <Text style={styles.productCategory}>Kitchen & Dining › Bottles</Text>
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
});

export default Products2;
