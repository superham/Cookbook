import React, { useState, createContext, useReducer } from "react";
import { Dispatch } from "react";

const AppFiltersContext = createContext({
  Italian: false,
  American: false,
  Mexican: false,
  German: false,
  Chinese: false,
  Beef: false,
  Salmon: false,
  Lamb: false,
  Chicken: false,
  Tofu: false,
  Noodles: false,
  Salty: false,
  Umami: false,
  Sweet: false,
  Spicy: false,
  Bitter: false,
  Sour: false,
}); // to query the states

// {
//     setItalian: React.Dispatch<React.SetStateAction<boolean>>,
//     setAmerican: React.Dispatch<React.SetStateAction<boolean>>,
//     setMexican: React.Dispatch<React.SetStateAction<boolean>>,
//     setGerman: React.Dispatch<React.SetStateAction<boolean>>,
//     setChinese: React.Dispatch<React.SetStateAction<boolean>>,
//     setBeef: React.Dispatch<React.SetStateAction<boolean>>,
//     setSalmon: React.Dispatch<React.SetStateAction<boolean>>,
//     setLamb: React.Dispatch<React.SetStateAction<boolean>>,
//     setChicken: React.Dispatch<React.SetStateAction<boolean>>,
//     setTofu: React.Dispatch<React.SetStateAction<boolean>>,
//     setNoodles: React.Dispatch<React.SetStateAction<boolean>>,
//     setSalty: React.Dispatch<React.SetStateAction<boolean>>,
//     setUmami: React.Dispatch<React.SetStateAction<boolean>>,
//     setSweet: React.Dispatch<React.SetStateAction<boolean>>,
//     setSpicy: React.Dispatch<React.SetStateAction<boolean>>,
//     setBitter: React.Dispatch<React.SetStateAction<boolean>>,
//     setSour: React.Dispatch<React.SetStateAction<boolean>>,
//   }
const AppFiltersDispatchContext = createContext({}); //to mutate the states

//@ts-ignore
function AppFiltersProvider({ children }) {
  // Cuisines
  const [Italian, setItalian] = useState(false);
  const [American, setAmerican] = useState(false);
  const [Mexican, setMexican] = useState(false);
  const [German, setGerman] = useState(false);
  const [Chinese, setChinese] = useState(false);

  // Ingredients
  const [Beef, setBeef] = useState(false);
  const [Salmon, setSalmon] = useState(false);
  const [Lamb, setLamb] = useState(false);
  const [Chicken, setChicken] = useState(false);
  const [Tofu, setTofu] = useState(false);
  const [Noodles, setNoodles] = useState(false);

  // Flavors
  const [Salty, setSalty] = useState(false);
  const [Umami, setUmami] = useState(false);
  const [Sweet, setSweet] = useState(false);
  const [Spicy, setSpicy] = useState(false);
  const [Bitter, setBitter] = useState(false);
  const [Sour, setSour] = useState(false);

  return (
    <AppFiltersContext.Provider // make consumer?
      value={{
        Italian: Italian,
        American: American,
        Mexican: Mexican,
        German: German,
        Chinese: Chinese,
        Beef: Beef,
        Salmon: Salmon,
        Lamb: Lamb,
        Chicken: Chicken,
        Tofu: Tofu,
        Noodles: Noodles,
        Salty: Salty,
        Umami: Umami,
        Sweet: Sweet,
        Spicy: Spicy,
        Bitter: Bitter,
        Sour: Sour,
      }}
    >
      <AppFiltersDispatchContext.Provider
        value={{
          setItalian: setItalian,
          setAmerican: setAmerican,
          setMexican: setMexican,
          setGerman: setGerman,
          setChinese: setChinese,
          setBeef: setBeef,
          setSalmon: setSalmon,
          setLamb: setLamb,
          setChicken: setChicken,
          setTofu: setTofu,
          setNoodles: setNoodles,
          setSalty: setSalty,
          setUmami: setUmami,
          setSweet: setSweet,
          setSpicy: setSpicy,
          setBitter: setBitter,
          setSour: setSour,
        }}
      >
        {children}
      </AppFiltersDispatchContext.Provider>
    </AppFiltersContext.Provider>
  );
}

export { AppFiltersContext, AppFiltersDispatchContext, AppFiltersProvider };
