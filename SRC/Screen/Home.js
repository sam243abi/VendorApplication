import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import BottomNav from "./components/BottomNav";
import colors from "./components/colors";
import { DailySupplies, OtherServices } from "../../ProductData";

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate(item.screen, { type: item.type })}
      style={styles.itemContainer}
    >
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </Pressable>
  );

  const HeaderAndBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const banners = [
      {
        id: "1",
        title: "Daily Drop",
        subtitle: "Thirsty for Savings?",
        description: "Subscribe to Fresh Water Today!",
        image: require("./images/aquafina.png"),
        screen: "Product",
        type: "watercan",
      },
      {
        id: "2",
        title: "Fresh Flowers",
        subtitle: "Decorate Your Space",
        description: "Get Fresh Flowers Delivered Daily!",
        image: require("./images/flowers.png"),
        screen: "FlowersScreen",
      },
      {
        id: "3",
        title: "Healthy Choices",
        subtitle: "Stay Fit",
        description: "Post-Workout Essentials Delivered.",
        image: require("./images/post-workout.png"),
        screen: "PostWorkoutScreen",
      },
    ];

    const scrollToNext = () => {
      const nextIndex = (activeIndex + 1) % banners.length;
      setActiveIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
    };

    useEffect(() => {
      const interval = setInterval(scrollToNext, 3000);
      return () => clearInterval(interval);
    }, [activeIndex]);

    const onViewableItemsChanged = ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index);
      }
    };

    const viewabilityConfig = {
      itemVisiblePercentThreshold: 50,
    };

    return (
      <View style={styles.headerAndBannerContainer}>
        <Text style={styles.deliveryText}>Delivering To</Text>
        <Text style={styles.homeText}>Mythreya's Home</Text>
        <FlatList
          ref={flatListRef}
          data={banners}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          renderItem={({ item }) => (
            <View style={styles.bannerContainer}>
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerTitle}>{item.title}</Text>
                <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
                <Text style={styles.bannerDescription}>{item.description}</Text>
                <Pressable
                  style={styles.subscribeButton}
                  onPress={() =>
                    navigation.navigate(item.screen, { type: item.type })
                  }
                >
                  <Text style={styles.subscribeButtonText}>Subscribe</Text>
                </Pressable>
              </View>
              <Image source={item.image} style={styles.bannerImage} />
            </View>
          )}
        />
        <View style={styles.paginationContainer}>
          {banners.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    );
  };

  const DailySuppliesSection = () => (
    <View>
      <Text style={styles.sectionTitle}>Daily Supplies</Text>
      <FlatList
        data={DailySupplies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );

  const OtherServicesSection = () => (
    <View>
      <Text style={styles.sectionTitle}>Other Services</Text>
      <FlatList
        data={OtherServices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          ListHeaderComponent={<HeaderAndBanner />}
          ListFooterComponent={
            <>
              <DailySuppliesSection />
              <OtherServicesSection />
            </>
          }
          data={[]}
          renderItem={null}
          contentContainerStyle={{ paddingBottom: 120 }}
        />
        <View style={styles.bottomNavContainer}>
          <BottomNav navigation={navigation} activeTab="Home" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerAndBannerContainer: {
    padding: 10,
    backgroundColor: colors.banner,
  },
  deliveryText: {
    fontSize: 14,
    color: colors.border,
  },
  homeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bannerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15, 
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary, 
    backgroundColor: colors.background,
    marginVertical: 5,
  },
  bannerTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  bannerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  bannerDescription: {
    fontSize: 14,
    color: colors.border,
    marginBottom: 4,
  },
  bannerImage: {
    width: 80,
    height: 100,
    resizeMode: "contain",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor:colors.border,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.primary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  flatListContent: {
    paddingHorizontal: 5,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 15,
  },
  itemImage: {
    width: 75,
    height: 45,
    resizeMode: "contain",
  },
  itemText: {
    marginTop: 10,
    fontSize: 14,
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  subscribeButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    borderColor: colors.buttonBor,
    borderWidth: 2,
    borderColor: colors.buttonBor,
    alignSelf: "flex-start",
  },
  subscribeButtonText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Home;
 