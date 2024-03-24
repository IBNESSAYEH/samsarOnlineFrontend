import React, { createContext, useContext, useState } from "react";

// Create a context
const UserAuthenticatedContext = createContext({});

// Create a provider component
export const UserAuthenticatedContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({name: "Ibnessayeh"});
    const [userToken, setUserToken] = useState("sdfghjk");
  
    return (
        <UserAuthenticatedContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken
        }}>
            {children}
        </UserAuthenticatedContext.Provider>
    );
}

// Custom hook to consume the context
export const useUserAuthenticatedContext = () => useContext(UserAuthenticatedContext);
