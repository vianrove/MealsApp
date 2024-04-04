import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Ionicons name={icon} color="white" size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 8,
    margin: 4,
  },
});
