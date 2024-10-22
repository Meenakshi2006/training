import React, { Children, useState } from "react";
import FetchContext from "./myContext";
export default function MyProvider({ children }) {
  const [countryData, setCountryData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );
    const data = await response.json();
    setCountryData(data);
    console.log("------in context--------");

    return (
      <FetchContext.Provider
        value={{
          countryData,
          fetchData,
        }}
      >
        {children}
      </FetchContext.Provider>
    );
  };

  return (
    <FetchContext.Provider
      value={{
        countryData,
        fetchData,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}
