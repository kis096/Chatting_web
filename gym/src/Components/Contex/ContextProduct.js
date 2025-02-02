import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import ProductReducer from "../../reducer/productReducer";

// Create Context
const AppContext = createContext();

// API URL
const API = "https://api.pujakaitem.com/api/products";

// Initial state for the reducer
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct:{}
};

// Context Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);




  // Fetch products from API
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;

      console.log("API Response:", products); // Debug API response

      dispatch({
        type: "SET_API_DATA",
        payload: products,
      });
    } catch (error) {
      console.error("API Error:", error);
      dispatch({ type: "API_ERROR" });
    }
  };
// my second api call for single product?

  const getSingleProduct = async(url)=>{
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({
        type: "SET_SINGLE_PRODUCT",
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
      
    }

  }
  // Fetch data on component mount
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch , getSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for consuming context
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
