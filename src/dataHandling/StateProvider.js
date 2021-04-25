import React, { createContext, useContext, useReducer } from 'react'

// Prepares the dataLayer
export const StateContext = createContext()

// Wrap this to our app and it will provide the Data Layer to every compenent in the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pulls information from the data layer
export const useStateValue = () => useContext(StateContext)


// THIS CODE PROVIDES ALL OF THE COMPONENTS ACCESS TO THE DATA LAYER