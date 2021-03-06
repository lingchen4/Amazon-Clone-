// setup data layer
// we need this to track the basket
import React from 'react'
import { useContext, createContext, useReducer } from "react";

export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);