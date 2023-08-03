import { FilterDrama } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

interface updateFiltersProps {
  type: string;
  active: boolean;
}

function useFilters() {
  const [filterMap, setFilterMap] = useState(
    new Map<string, boolean>([
      ["Italian", false],
      ["American", false],
      ["Mexican", false],
      ["German", false],
      ["Chinese", false],
      ["Beef", false],
      ["Salmon", false],
      ["Lamb", false],
      ["Chicken", false],
      ["Tofu", false],
      ["Noodles", false],
      ["Salty", false],
      ["Umami", false],
      ["Sweet", false],
      ["Spicy", false],
      ["Bitter", false],
      ["Sour", false],
    ])
  );

  const updateFilters = (type: string) => {
    let updatedMap = filterMap;
    const currState = updatedMap.get(type);
    updatedMap.set(type, !currState);
    setFilterMap(updatedMap);
  };

  return { filterMap, updateFilters };
}

export { useFilters };
