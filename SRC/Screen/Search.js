import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import BottomNav from "./components/BottomNav";
import { globalStyles } from "./styles/global";
import { navigateTo } from "./RoutHub/Routs";
import colors from "./components/colors";

const ProductCard = ({ title, price, imageUrl, onSubscribe }) => (
  <View style={styles.card}>
    <Image source={imageUrl} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <TouchableOpacity
      style={globalStyles.subscribeButton}
      onPress={onSubscribe}
    >
      <Text style={globalStyles.subscribeText}>Subscribe</Text>
    </TouchableOpacity>
  </View>
);

const products = [
  {
    id: "1",
    title: "Aavin Milk",
    price: "\u20b920/500ml",
    imageUrl: require("./images/aavinmilk.png"),
  },
  {
    id: "2",
    title: "Arokya Milk",
    price: "\u20b921/500ml",
    imageUrl: require("./images/arokyamilk.png"),
  },
  {
    id: "3",
    title: "Bisleri Water Can",
    price: "\u20b977/25ltr Can",
    imageUrl: require("./images/bisleri.png"),
  },
];

const runningLowItems = [
  { id: "1", name: "Water Can", image: require("./images/water-can.png") },
  { id: "2", name: "Milk", image: require("./images/milk-Bottle.png") },
  { id: "3", name: "Flowers", image: require("./images/flowers.png") },
];

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeTab, setActiveTab] = useState("Daily");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const renderProductItem = ({ item }) => (
    <ProductCard
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      onSubscribe={() => {
        if (item.title === "Bisleri Water Can") {
          navigateTo(navigation,"Bisleri");
        } else if (
          item.title === "Aavin Milk" ||
          item.title === "Arokya Milk"
        ) {
          navigateTo(navigation,"Heritage");
        } 
        
      }}
    />
  );

  const renderRunningLowItem = ({ item }) => (
    <TouchableOpacity
      style={styles.iconBox}
      onPress={() => {
        if (item.name === "Water Can") {
          navigateTo(navigation,"WaterCanScreen");
        }
        if (item.name === "Milk") {
          navigateTo(navigation,"MilkScreen");
        }
      }}
    >
      <Image source={item.image} style={styles.iconImage} />
      <Text style={styles.iconText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Daily" && styles.activeTab]}
          onPress={() => handleTabPress("Daily")}
        >
          <Text style={styles.tabText}>Daily</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Groceries" && styles.activeTab]}
          onPress={() => handleTabPress("Groceries")}
        >
          <Text style={styles.tabText}>Groceries</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Other Services" && styles.activeTab,
          ]}
          onPress={() => handleTabPress("Other Services")}
        >
          <Text style={styles.tabText}>Other Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Newly In" && styles.activeTab]}
          onPress={() => handleTabPress("Newly In")}
        >
          <Text style={styles.tabText}>Newly In</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              What Are You Running Low On?
            </Text>
            <FlatList
              data={runningLowItems}
              renderItem={renderRunningLowItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular in Your Area</Text>
            <FlatList
              data={filteredProducts}
              renderItem={renderProductItem}
              keyExtractor={(item) => item.id}
              horizontal={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom navigation bar */}
      <BottomNav navigation={navigation} activeTab="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchBox: {
    padding: 10,
    backgroundColor: colors.background,
    borderRadius: 10,
    margin: 10,
    borderColor: colors.border,
    borderWidth: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  iconBox: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 15,
    flex: 1,
    alignItems: "center",
    margin: 3,
    padding: 8,
    backgroundColor: colors.background,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconImage: {
    width: 80,
    height: 50,
    resizeMode: "contain",
    borderRadius: 8,
    marginBottom: 5,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 17,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 12,
    marginLeft: -20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 3,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  tab: {
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SearchScreen;