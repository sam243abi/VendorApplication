import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";  
import { ProductData } from "../../ProductData";
import colors from "./components/colors";

const imageMap = {
  "./SRC/images/bisleri.png": require("./images/bisleri.png"),
  "./SRC/images/aquafina.png": require("./images/aquafina.png"),   
  "./SRC/images/bluestar.png": require("./images/bluestar.png"),
  "./SRC/images/aavinmilk.png": require("./images/aavinmilk.png"),
  "./SRC/images/arokyamilk.png": require("./images/arokyamilk.png"),
};

const Product = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { type } = route.params; // Get the type (e.g., watercan or milk) from route params
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Load data based on type (watercan or milk)
    
    const data = ProductData[type]?.map((item) => 
     
    
     ({ ...item,
       image: imageMap[item.image]
    
    })
   );
    console.log("data",data)
    setProductData(data || []);
  }, [type]);
  
  const renderItem = ({ item }) => 
    ( 
  
    <View style={styles.itemContainer}>
      
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe", { product: item })}
       
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {type === "watercan" ? "Water Can" : "Milk"}
      </Text>
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 20,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 16,
    resizeMode: "contain",
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: colors.border,
  },
  button: {
    backgroundColor: colors.secondary,
    borderColor: colors.buttonBor,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth:2,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Product;