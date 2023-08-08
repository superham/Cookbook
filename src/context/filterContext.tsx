import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};
export interface filterContextType {
  filterMap: Map<string, boolean>;
  setFilterMap: React.Dispatch<React.SetStateAction<Map<string, boolean>>>;
  cuisWarn: boolean;
  setCuisWarn: React.Dispatch<React.SetStateAction<boolean>>;
  ingWarn: boolean;
  setIngWarn: React.Dispatch<React.SetStateAction<boolean>>;
  flavorWarn: boolean;
  setFlavorWarn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterContext = React.createContext<filterContextType | null>(
  null
);

const FilterProvider: React.FC<Props> = ({ children }) => {
  const [filterMap, setFilterMap] = useState(
    new Map<string, boolean>([
      ["Italian", false],
      ["American", false],
      ["Mexican", false],
      ["German", false],
      ["Chinese", false],
      ["Indian", false],
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

  const [cuisWarn, setCuisWarn] = useState(false);
  const [ingWarn, setIngWarn] = useState(false);
  const [flavorWarn, setFlavorWarn] = useState(false);

  // show warning

  return (
    <FilterContext.Provider
      value={{
        filterMap,
        setFilterMap,
        cuisWarn,
        setCuisWarn,
        ingWarn,
        setIngWarn,
        flavorWarn,
        setFlavorWarn,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider };
