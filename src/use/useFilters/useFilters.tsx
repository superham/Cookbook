import { FilterDrama } from "@mui/icons-material";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { FilterContext } from "src/context/filterContext";

interface updateFiltersProps {
  type: string;
  active: boolean;
}

function useFilters() {
  //@ts-ignore
  const {
    //@ts-ignore
    filterMap,
    //@ts-ignore
    setFilterMap,
    //@ts-ignore
    setCuisWarn,
    //@ts-ignore
    setIngWarn,
    //@ts-ignore
    setFlavorWarn,
    //@ts-ignore
    setCuisFilterActive,
    //@ts-ignore
    setIngFilterActive,
    //@ts-ignore
    setFlavorFilterActive,
  } = useContext(FilterContext);

  // verify that only 1 of each kind of filter is applied at any one time

  function updateFilter(type: string) {
    let updatedMap = filterMap;
    updatedMap.set(type, !updatedMap.get(type));
    setFilterMap(updatedMap);

    if (returnCuisFilter()) {
      setCuisFilterActive(true);
    } else {
      setCuisFilterActive(false);
    }

    if (returnIngFilter()) {
      setIngFilterActive(true);
    } else {
      setIngFilterActive(false);
    }

    if (returnFlavorFilter()) {
      setFlavorFilterActive(true);
    } else {
      setFlavorFilterActive(false);
    }
  }

  function getFilter(type: string) {
    return filterMap.get(type);
  }

  // return if filter group is full
  function groupFull(type: string) {
    // assign group to prop type
    let cuisinesGroup = false;
    let IngredientsGroup = false;
    let flavorsGroup = false;

    switch (type) {
      case "Italian":
      case "Mexican":
      case "German":
      case "American":
      case "Indian":
      case "Chinese":
        cuisinesGroup = true;
        break;
      case "Beef":
      case "Noodles":
      case "Tofu":
      case "Salmon":
      case "Lamb":
      case "Chicken":
        IngredientsGroup = true;
        break;
      case "Salty":
      case "Sweet":
      case "Bitter":
      case "Umami":
      case "Spicy":
      case "Sour":
        flavorsGroup = true;
        break;
    }

    let groupStatus = false;
    // check for cuisines group
    if (cuisinesGroup) {
      groupStatus =
        getFilter("Italian") ||
        getFilter("Mexican") ||
        getFilter("German") ||
        getFilter("American") ||
        getFilter("Indian") ||
        getFilter("Chinese");
    }

    // check for Ingredients
    if (IngredientsGroup) {
      groupStatus =
        getFilter("Beef") ||
        getFilter("Noodles") ||
        getFilter("Tofu") ||
        getFilter("Salmon") ||
        getFilter("Lamb") ||
        getFilter("Chicken");
    }

    // check for Flavors group
    if (flavorsGroup) {
      groupStatus =
        getFilter("Salty") ||
        getFilter("Sweet") ||
        getFilter("Bitter") ||
        getFilter("Umami") ||
        getFilter("Spicy") ||
        getFilter("Sour");
    }

    return groupStatus;
  }

  function whatGroup(type: string) {
    switch (type) {
      case "Italian":
      case "Mexican":
      case "German":
      case "American":
      case "Indian":
      case "Chinese":
        return "Cuisine";
        break;
      case "Beef":
      case "Noodles":
      case "Tofu":
      case "Salmon":
      case "Lamb":
      case "Chicken":
        return "Ingredient";
        break;
      case "Salty":
      case "Sweet":
      case "Bitter":
      case "Umami":
      case "Spicy":
      case "Sour":
        return "Flavor";
        break;
    }
  }

  // returns
  function returnCuisFilter() {
    // loop over each key return the one that is true
    if (getFilter("Italian")) {
      return "Italian";
    }

    if (getFilter("Mexican")) {
      return "Mexican";
    }

    if (getFilter("German")) {
      return "German";
    }

    if (getFilter("American")) {
      return "American";
    }

    if (getFilter("Chinese")) {
      return "Chinese";
    }

    if (getFilter("Indian")) {
      return "Indian";
    }
  }

  function returnIngFilter() {
    // loop over each key return the one that is true
    if (getFilter("Beef")) {
      return "Beef";
    }

    if (getFilter("Salmon")) {
      return "Salmon";
    }

    if (getFilter("Lamb")) {
      return "Lamb";
    }

    if (getFilter("Tofu")) {
      return "Tofu";
    }

    if (getFilter("Noodles")) {
      return "Noodles";
    }

    if (getFilter("Chicken")) {
      return "Chicken";
    }
  }

  function returnFlavorFilter() {
    // loop over each key return the one that is true
    if (getFilter("Salty")) {
      return "Salty";
    }

    if (getFilter("Umami")) {
      return "Umami";
    }

    if (getFilter("Sweet")) {
      return "Sweet";
    }

    if (getFilter("Spicy")) {
      return "Spicy";
    }

    if (getFilter("Bitter")) {
      return "Bitter";
    }

    if (getFilter("Sour")) {
      return "Sour";
    }
  }

  function setWarning(type: string, active: boolean) {
    const group = whatGroup(type);

    switch (group) {
      case "Cuisine":
        if (active) {
          setCuisWarn(true);
        } else {
          setCuisWarn(false);
        }
        break;
      case "Ingredient":
        if (active) {
          setIngWarn(true);
        } else {
          setIngWarn(false);
        }
        break;
      case "Flavor":
        if (active) {
          setFlavorWarn(true);
        } else {
          setFlavorWarn(false);
        }
        break;
    }
  }

  return {
    updateFilter,
    getFilter,
    groupFull,
    returnCuisFilter,
    returnIngFilter,
    returnFlavorFilter,
    whatGroup,
    setWarning,
  };
}

export { useFilters };
