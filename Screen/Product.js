import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const productImage = require("../assets/water_bottle.png");

const initialProducts = [
  {
    id: 1,
    title: "Water Bottle",
    category: "Kitchen & Dining > Bottles",
    unitPrice: "₹100.00",
    purchasePrice: "₹150.00",
    createdAt: "8 Sep 2021 08:44 PM",
    published: true,
  },
  {
    id: 2,
    title: "Glass Bottle",
    category: "Kitchen & Dining > Glassware",
    unitPrice: "₹120.00",
    purchasePrice: "₹180.00",
    createdAt: "10 Sep 2021 06:30 PM",
    published: false,
  },
  {
    id: 3,
    title: "Plastic Bottle",
    category: "Kitchen & Dining > Containers",
    unitPrice: "₹80.00",
    purchasePrice: "₹120.00",
    createdAt: "12 Sep 2021 03:15 PM",
    published: true,
  },
];

const ProductScreen = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const togglePublished = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, published: !product.published }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== id)
            );
          },
        },
      ]
    );
  };

  const editProduct = (product) => {
    setSelectedProduct({ ...product });
    setModalVisible(true);
  };

  const saveEditedProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === selectedProduct.id ? selectedProduct : product
      )
    );
    setModalVisible(false);
  };

  const cancelEditing = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={productImage} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      </View>
      <View style={styles.priceSection}>
        <View style={styles.priceBlock}>
          <Text style={styles.priceHeading}>Unit Price</Text>
          <Text style={styles.priceValue}>{item.unitPrice}</Text>
        </View>
        <View style={styles.priceBlock}>
          <Text style={styles.priceHeading}>Purchase Price</Text>
          <Text style={styles.priceValue}>{item.purchasePrice}</Text>
        </View>
        <View style={styles.priceBlock}>
          <Text style={styles.priceHeading}>GST</Text>
          <Ionicons name="checkmark-circle" size={20} color="green" />
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.switchContainer}>
          <Switch
            value={item.published}
            onValueChange={() => togglePublished(item.id)}
          />
          <Text style={styles.publishedText}>Published</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => editProduct(item)}>
            <Ionicons name="pencil" size={24} color="#2c9ff0" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteProduct(item.id)}>
            <Ionicons name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Product List</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Product</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={selectedProduct?.title}
              onChangeText={(text) =>
                setSelectedProduct((prev) => ({ ...prev, title: text }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Category"
              value={selectedProduct?.category}
              onChangeText={(text) =>
                setSelectedProduct((prev) => ({ ...prev, category: text }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Unit Price"
              value={selectedProduct?.unitPrice}
              onChangeText={(text) =>
                setSelectedProduct((prev) => ({ ...prev, unitPrice: text }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Purchase Price"
              value={selectedProduct?.purchasePrice}
              onChangeText={(text) =>
                setSelectedProduct((prev) => ({ ...prev, purchasePrice: text }))
              }
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={saveEditedProduct}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={cancelEditing}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  header: {
    padding: 16,
    backgroundColor: "#007BFF",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    fontSize: 14,
    color: "#888",
  },
  priceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  priceBlock: {
    alignItems: "center",
  },
  priceHeading: {
    fontSize: 14,
    color: "#888",
  },
  priceValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  publishedText: {
    marginLeft: 8,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default ProductScreen;
