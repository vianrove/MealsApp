import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsIds, setFavoriteMealIds] = useState([]);
  
  function addFavorite(id) {
    setFavoriteMealIds((currentFavoritesIds) => [...currentFavoritesIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavoritesIds) =>
      currentFavoritesIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
