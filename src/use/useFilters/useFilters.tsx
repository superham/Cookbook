import React, { useState } from "react";

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

  return { filterMap, setFilterMap };
}

export { useFilters };
