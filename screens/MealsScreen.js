import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const MealsScreen = ({ route, navigation }) => {
  const categoryTitle = route.params.categoryTitle;
  const categoryID = route.params.categoryID;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryID) >= 0;
  });

  return <MealsList items={displayedMeals} />
};

export default MealsScreen;
