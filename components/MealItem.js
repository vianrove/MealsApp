import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { MEALS } from "../data/dummy-data";

import { useNavigation } from "@react-navigation/native";

const MealItem = ({ title, imageSource, complexity, duration }) => {
  const navigation = useNavigation();

  const mealId = MEALS.find((meal) => meal.title === title).id;

  function pressHandler() {
    navigation.navigate("MealDetail", { mealId: mealId });
  }

  return (
    <View style={styles.card}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <Image style={styles.mealImage} source={{ uri: imageSource }} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.mealTitle}>{title}</Text>
            <Text>Complexity: {complexity}</Text>
            <Text>Required time: {duration} minutes</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 16,
    elevation: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  mealImage: {
    width: "100%",
    height: 200,
    flex: 1,
    borderRadius: 8,
  },
  cardTextContainer: {
    padding: 8,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
