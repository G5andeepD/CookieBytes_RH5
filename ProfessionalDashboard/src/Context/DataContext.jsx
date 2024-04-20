import React, { createContext, useState, useEffect } from 'react';
import { getAllDrugs, getAllDiseases } from '../Services/dataService';  // Ensure path is correct

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [drugs, setDrugs] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDrugs = async () => {
    setIsLoading(true);
    await getAllDrugs()
      .then((data) => {
        console.log("Successfully fetched drugs:", data);
        setDrugs(data);  // Assuming the response structure is directly the array of drugs
      })
      .catch((error) => {
        console.error("Failed to fetch drugs:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchDiseases = async () => {
    setIsLoading(true);
    await getAllDiseases()
      .then((data) => {
        console.log("Successfully fetched diseases:", data);
        setDiseases(data);  // Assuming the response structure is directly the array of diseases
      })
      .catch((error) => {
        console.error("Failed to fetch diseases:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDrugs();
    fetchDiseases();
  }, []);

  return (
    <DataContext.Provider value={{ drugs, diseases, isLoading, fetchDrugs, fetchDiseases }}>
      {children}
    </DataContext.Provider>
  );
};
