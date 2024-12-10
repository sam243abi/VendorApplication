import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ProgressBarAndroid,
  Modal,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const UploadScreen = () => {
  const [activeTab, setActiveTab] = useState("Uploaded");
  const [loadingFileId, setLoadingFileId] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: "Shopping item sheet.xls",
      size: "10MB",
      date: "8 Sep 2021 08:44 PM",
    },
    {
      id: 2,
      name: "Grocery item sheet.xls",
      size: "11.3MB",
      date: "8 Sep 2021 08:44 PM",
    },
    {
      id: 3,
      name: "Pharmacy item sheet.xls",
      size: "9.3MB",
      date: "8 Sep 2021 08:44 PM",
    },
    {
      id: 4,
      name: "Shopping Women sheet.xls",
      size: "10.3MB",
      date: "8 Sep 2021 08:44 PM",
    },
  ]);

  const [uploadingFiles, setUploadingFiles] = useState([
    {
      id: 1,
      name: "Shopping item sheet.xls",
      uploaded: "8.3MB",
      total: "10MB",
      progress: 0.83,
    },
    {
      id: 2,
      name: "Grocery item sheet.xls",
      uploaded: "9.1MB",
      total: "11.3MB",
      progress: 0.81,
    },
  ]);

  const handleFileUpload = (fileId) => {
    setLoadingFileId(fileId);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
        const uploadedFile = uploadingFiles.find((file) => file.id === fileId);
        setUploadingFiles(uploadingFiles.filter((file) => file.id !== fileId));
        setUploadedFiles([
          ...uploadedFiles,
          {
            id: uploadedFile.id,
            name: uploadedFile.name,
            size: uploadedFile.total,
            date: "Just now",
          },
        ]);
        setLoadingFileId(null);
      }
    }, 300);
  };

  const handleDeleteFile = (fileId) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== fileId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Uploading" && styles.activeTab]}
          onPress={() => setActiveTab("Uploading")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Uploading" && styles.activeText,
            ]}
          >
            Uploading Files
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Uploaded" && styles.activeTab]}
          onPress={() => setActiveTab("Uploaded")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Uploaded" && styles.activeText,
            ]}
          >
            Uploaded Files
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {activeTab === "Uploaded"
          ? uploadedFiles.map((file) => (
              <View key={file.id} style={styles.card}>
                <View style={styles.fileInfo}>
                  <Image
                    source={require("../assets/excel-icon.png")}
                    style={styles.icon}
                  />
                  <View>
                    <Text style={styles.fileName}>{file.name}</Text>
                    <Text style={styles.fileDetails}>
                      {file.size} {"\n"} {file.date}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleDeleteFile(file.id)}>
                  <Icon
                    name="trash"
                    size={20}
                    color="red"
                    style={styles.deleteIcon}
                  />
                </TouchableOpacity>
              </View>
            ))
          : uploadingFiles.map((file) => (
              <View key={file.id} style={styles.card}>
                <View style={styles.fileInfo}>
                  <Image
                    source={require("../assets/excel-icon.png")}
                    style={styles.icon}
                  />
                  <View>
                    <Text style={styles.fileName}>{file.name}</Text>
                    <Text style={styles.fileSize}>
                      {file.uploaded} Uploading - {file.total}
                    </Text>
                  </View>
                </View>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={file.progress}
                  color="#28a745"
                  style={styles.progressBar}
                />
                <TouchableOpacity onPress={() => handleFileUpload(file.id)}>
                  <Icon
                    name="arrow-right-circle"
                    size={20}
                    color="#007bff"
                    style={styles.uploadIcon}
                  />
                </TouchableOpacity>
              </View>
            ))}
      </ScrollView>
      <Modal transparent visible={loadingFileId !== null}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#007bff" />
            <Text style={styles.loadingText}>Uploading... Please wait</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  navBar: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#007bff",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#28a745",
  },
  tabText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  activeText: {
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  fileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  fileName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  fileDetails: {
    fontSize: 14,
    color: "#666",
  },
  fileSize: {
    fontSize: 14,
    color: "#666",
  },
  progressBar: {
    marginVertical: 10,
    height: 8,
  },
  uploadIcon: {
    alignSelf: "flex-end",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default UploadScreen;
