import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import colors from "./components/colors";

const { width } = Dimensions.get("window");

const imageMap = {
  "./SRC/images/bisleri.png": require("./images/bisleri.png"),
  "./SRC/images/aquafina.png": require("./images/aquafina.png"),
  "./SRC/images/bluestar.png": require("./images/bluestar.png"),
  "./SRC/images/aavinmilk.png": require("./images/aavinmilk.png"),
  "./SRC/images/arokyamilk.png": require("./images/arokyamilk.png"),
  "./SRC/images/shelf.jpeg": require("./images/shelf.jpeg"),
  "./SRC/images/ingre.jpeg": require("./images/ingre.jpeg"),
  "./SRC/images/nut.jpeg": require("./images/nut.jpeg"),
  "./SRC/images/mai.jpeg": require("./images/mai.jpeg"),
  "./SRC/images/fssai.jpeg": require("./images/fssai.jpeg"),
  "./SRC/images/bar.jpeg": require("./images/bar.jpeg"),
};

const Subscribe = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params || {}; // Ensure safe access to params

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product details not available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Vendor Details */}
      {product.vendor && (
        <View style={styles.vendorCard}>
          <View style={styles.vendorDetailsContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>{product.vendor.name?.[0]}</Text>
            </View>
            <View>
              <Text style={styles.vendorTitle}>{product.vendor.name}</Text>
              <Text style={styles.vendorRating}>
                Rating: {product.vendor.rating || "N/A"}
              </Text>
            </View>
          </View>
        </View>
      )}

      {/* Slideshow */}
      <View style={styles.swiperContainer}>
        <Swiper
          autoplay
          autoplayTimeout={3}
          dot={<View style={styles.dotStyle} />}
          activeDot={<View style={styles.activeDotStyle} />}
        >
          {product.Products?.map((item, index) =>
            imageMap[item.image] ? (
              <Image
                key={index}
                source={imageMap[item.image]}
                style={styles.slideImage}
              />
            ) : (
              <View key={index} style={styles.slideFallbackContainer}>
                <Text style={styles.imageFallbackText}>
                  No image available
                </Text>
              </View>
            )
          )}
        </Swiper>
      </View>

      {/* Product Details */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>

        {/* Collapsible Sections */}
        {["Shelf Life", "Certifications", "Product Description"].map(
          (section, index) => (
            <View key={index} style={styles.collapsibleSection}>
              <TouchableOpacity
                onPress={() => toggleSection(section)}
                style={styles.collapsibleHeader}
              >
                <Text style={styles.collapsibleHeaderText}>{section}</Text>
              </TouchableOpacity>
              {expandedSection === section && (
                <View style={styles.collapsibleContent}>
                  <Text>
                    {section === "Shelf Life" &&
                      product.shelfLife &&
                      `Shelf Life: ${product.shelfLife}`}
                    {section === "Certifications" &&
                      product.certifications &&
                      `Certifications: ${product.certifications}`}
                    {section === "Product Description" &&
                      `Description: ${product.description}`}
                  </Text>
                </View>
              )}
              <View style={styles.divider} />
            </View>
          )
        )}

        {/* Related Products */}
        <View style={styles.relatedProductsSection}>
          <Text style={styles.relatedProductsTitle}>Related Products</Text>
          <View style={styles.relatedProductsContainer}>
            {product.relatedProducts?.length > 0 ? (
              product.relatedProducts.map((related) => (
                <View key={related.id} style={styles.relatedProductCard}>
                  {imageMap[related.image] ? (
                    <Image
                      source={imageMap[related.image]}
                      style={styles.relatedProductImage}
                    />
                  ) : (
                    <Text style={styles.imageFallbackText}>
                      No image available
                    </Text>
                  )}
                  <Text style={styles.relatedProductName}>{related.name}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noRelatedProductsText}>
                No related products available.
              </Text>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Subscribe Button */}
      <TouchableOpacity
        style={styles.subscribeButton}
        onPress={() => navigation.navigate("Schedule", { product })}
      >
        <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
  vendorCard: {
    flexDirection: "row",
    backgroundColor: colors.background,
    padding: 15,
    alignItems: "center",
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  vendorDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#d67d00",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  iconText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: "bold",
  },
  vendorTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  vendorRating: {
    fontSize: 14,
    color: colors.border,
  },
  swiperContainer: {
    height: 250,
    width: "100%",
  },
  slideImage: {
    height: "90%",
    width: "90%",
  },
  slideFallbackContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  scrollView: {
    flex: 1,
  },
  productInfo: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
    marginTop: 5,
  },
  relatedProductsSection: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  relatedProductsTitle: {
    fontSize: 18,
    fontWeight: "bold", 
    marginBottom: 10,
  },
  relatedProductsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  relatedProductCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: width * 0.45,
    elevation: 2,
    marginVertical: 10,
  },
  relatedProductImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 5,
  },
  relatedProductName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  noRelatedProductsText: {
    color: "gray",
    textAlign: "center",
  },
  subscribeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 20,
  },
  subscribeButtonText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  dotStyle: {
    backgroundColor: "gray",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor:colors.primary,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  imageFallbackText: {
    textAlign: "center",
    color: "gray",
  },
  collapsibleSection: {
    marginVertical: 5,
  },
  collapsibleHeader: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  collapsibleHeaderText: {
    fontSize: 16,
  },
  collapsibleContent: {
    padding: 15,
    backgroundColor: colors.background,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 10,
  },
});

export default Subscribe;