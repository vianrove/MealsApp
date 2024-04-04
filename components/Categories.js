import { StyleSheet, Text, View } from "react-native";

const Categories = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((category, index) => {
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>;
      })}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  categoryContainer: {
    borderRadius: 18,
    padding: 8,
    margin: 4,
    borderColor: "#7EAC50",
  },
  categoryText: {
    fontWeight: "bold",
    color: "#7EAC50",
  },
});
