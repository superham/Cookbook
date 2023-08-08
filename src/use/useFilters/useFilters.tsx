import { FilterDrama } from "@mui/icons-material";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { FilterContext } from "src/context/filterContext";

interface updateFiltersProps {
  type: string;
  active: boolean;
}

function useFilters() {
  //@ts-ignore
  const { filterMap, setFilterMap } = useContext(FilterContext);

  // verify that only 1 of each kind of filter is applied at any one time

  function updateFilter(type: string) {
    let updatedMap = filterMap;
    updatedMap.set(type, !updatedMap.get(type));
    setFilterMap(updatedMap);
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
  return { updateFilter, getFilter, groupFull };
}

export { useFilters };
