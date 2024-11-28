import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const AllReportScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("All");
  const tabs = ["All", "Daily", "Weekly", "Monthly", "Yearly"];

  const data = [
    {
      id: 1,
      icon: require("../assets/sales.png"),
      title: "Gross Sales",
      value: "₹230.44",
      percentage: "+10%",
    },
    {
      id: 2,
      icon: require("../assets/earnings.png"),
      title: "Earnings",
      value: "₹6002",
      percentage: "+5%",
    },
    {
      id: 3,
      icon: require("../assets/orders.png"),
      title: "Total Orders",
      value: "1043",
      percentage: "+15%",
    },
    {
      id: 4,
      icon: require("../assets/products.png"),
      title: "Total Products",
      value: "107",
      percentage: "+5%",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>All Reports</Text>
      </View>
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.selectedTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.icon} style={styles.icon} />
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Text style={styles.percentage}>{item.percentage}</Text>
            </View>
            <View style={styles.rightContent}>
              <Text style={styles.value}>{item.value}</Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Icon name="download" size={20} color="#004d66" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  topBar: 
  {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0047ab",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backText: 
  {
    color: "white",
    fontSize: 18,
    marginRight: 8,
  },
  headerText: 
  {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  tabContainer: 
  {
    flexDirection: "row",
    backgroundColor: "#0047ab",
    justifyContent: "space-around",
  },
  tab: 
  {
    paddingVertical: 10,
  },
  tabText: 
  {
    fontSize: 14,
    color: "white",
  },
  selectedTabText: 
  {
    fontWeight: "bold",
    color: "#90ee90",
  },
  card: 
  {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
  },
  icon: 
  {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  cardContent: 
  {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: 
  {
    flex: 1,
  },
  percentage: 
  {
    color: "#28a745",
    fontWeight: "bold",
    fontSize: 16,
  },
  rightContent: 
  {
    alignItems: "flex-end",
    justifyContent: "flex-start", 
    marginRight: 8,
  },
  value: 
  {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4, 
  },
  title: 
  {
    fontSize: 14,
    color: "#666",
  },
  downloadButton: 
  {
    padding: 8,
    backgroundColor: "#e8f5e9",
    borderRadius: 4,
  },
});

export default AllReportScreen;
