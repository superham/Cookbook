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

  function updateFilter(type: string) {
    let updatedMap = filterMap;
    updatedMap.set(type, !updatedMap.get(type));
    setFilterMap(updatedMap);
  }

  function getFilter(type: string) {
    console.log("getFilter");
    return filterMap.get(type);
  }

  return { updateFilter, getFilter };
}

export { useFilters };
