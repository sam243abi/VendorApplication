import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { navigateTo } from "../RoutHub/Routs";

const BottomNav = ({ navigation, activeTab }) => {
  
  return (
    <View style={styles.bottomNavContainer}>
      {/* Navigation button for Home */}
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigateTo(navigation,"Home");
        }}
      >
        <Icon
          name="star"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "Home" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "Home" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Home
        </Text>
      </Pressable>

      {/* Navigation button for Search */}
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigateTo(navigation,"Search");
        }}
      >
        <Icon
          name="search"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "Search" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "Search" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Search
        </Text>
      </Pressable>

      {/* Navigation button for Drops */}
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigateTo(navigation,"Drops");
        }}
      >
        <Icon
          name="clock-o"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "Drops" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "Drops" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Drops
        </Text>
      </Pressable>

      {/* Navigation button for Account */}
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigateTo(navigation,"Account");
        }}
      >
        <Icon
          name="user"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "Account" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "Account" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Account
        </Text>
      </Pressable>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottomNavContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    // elevation: 2, // Shadow for better appearance
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 1,
  },
  activeIcon: {
    color: "#9dd694", 
  },
  inactiveIcon: {
    color: "#94a3b8", 
  },
  navText: {
    fontSize: 12,
    fontWeight: "500",
  },
  activeText: {
    color: "#9dd694", 
  },
  inactiveText: {
    color: "#94a3b8", 
  },
});