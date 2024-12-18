import React, { useCallback, useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface TDropDownProps {
    selectedValue: string;
    handleSortChange: (value: string) => void;
}

const DropDown = ({selectedValue,handleSortChange}:TDropDownProps) => {

  const [modalVisible, setModalVisible] = useState(false);


  // List of items for the dropdown
  const data = [
    { label: "Title (A-Z)", value: "title" },
    { label: "Pages", value: "pages" },
    { label: "Release Date", value: "releaseDate" },
  ];

  // Toggle modal visibility
  const toggleModal = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [setModalVisible, modalVisible]);

  // Handle item selection
  const handleSelect = useCallback((item: { value: string; label: string }) => {
    handleSortChange(item.value);
    toggleModal(); // Close the modal after selection
  }, [handleSortChange, toggleModal]);

  const keyExtractor = (item:{ value: string}) => item.value


  const renderItem = useCallback(({ item }: { item: { value: string; label: string } }) => (
    <TouchableOpacity onPress={() => handleSelect(item)} style={styles.modalItem}>
      <Text style={styles.modalItemText}>{item.label}</Text>
    </TouchableOpacity>
  ), [handleSelect]);

  return (
    <View style={styles.container}>
      {/* Display the selected value */}
      <TouchableOpacity style={styles.selectedItem} onPress={toggleModal}>
      <FontAwesome5 name="sort" size={24} color="black" />
        <Text style={styles.selectedText}>
          {data.find((item) => item.value === selectedValue)?.label || "Select sort by"}
        </Text>
      </TouchableOpacity>

      {/* Modal to display dropdown options */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{"Sort By"}</Text>
            <FlatList
              data={data}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
            />
            {/* Close button */}
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>{"Close"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
  },
  selectedItem: {
    backgroundColor: "#ddd",
    borderRadius: 5,
    width: 150,
    alignItems: "center",
    flexDirection:'row',
    gap:5,
    justifyContent:'center',
    paddingVertical:5,
   
  },
  selectedText: {
    fontSize: 12,
    fontWeight: "bold"
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 250,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  modalItemText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DropDown;