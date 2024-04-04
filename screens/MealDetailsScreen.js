import { useLayoutEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { BlurView } from "expo-blur";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import UnorderedList from "../components/UnorderedList";
import OrderedList from "../components/OrderedList";
import Categories from "../components/Categories";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ navigation, route }) => {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const { ingredients, steps, categoryIds } = meal;

  //   const mealIsFavorite = favoriteMealsContext.ids.includes(meal.id);
  const mealIsFavorite = favoriteMealsIds.includes(meal.id);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      //   favoriteMealsContext.removeFavorite(meal.id);
      dispatch(removeFavorite({ id: meal.id }));
    } else {
      //   favoriteMealsContext.addFavorite(meal.id);
      dispatch(addFavorite({ id: meal.id }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            size={25}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, mealIsFavorite]);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={{ uri: meal.imageUrl }} style={styles.bgImage}>
        <View style={styles.mealTitleContainer}>
          <BlurView
            intensity={30}
            tint="dark"
            experimentalBlurMethod="dimezisBlurView"
            style={styles.mealTitleBg}
          >
            <Text style={styles.mealTitle}>{meal.title}</Text>
          </BlurView>
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <View>
          <Text>CATEGORIES</Text>
          {/* <Categories data={mealCategories} /> */}
        </View>
        <View style={styles.section}>
          <Text style={styles.subTitle}>ingredients:</Text>
          <UnorderedList data={ingredients} />
        </View>
        <View style={styles.section}>
          <Text style={styles.subTitle}>Steps:</Text>
          <OrderedList data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    height: 300,
    width: "100%",
  },
  mealTitleContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  mealTitleBg: {
    padding: 16,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  infoContainer: {
    margin: 18,
  },
  section: {
    marginTop: 8,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
