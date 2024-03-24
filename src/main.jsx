import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { router } from "./router.jsx";
import {  RouterProvider } from "react-router-dom";
import { UserAuthenticatedContextProvider } from "./contexts/UserAuthenticatedContext/UserAuthenticatedContextProvider";
import { AnnonceContextProvider } from "./contexts/AnnonceContext/AnnonceContextProvider";
import AuthProvider from "./contexts/AuthenticationContext/AuthProvider.jsx";

import AOS from 'aos';
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <AnnonceContextProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AnnonceContextProvider>
    
  </React.StrictMode>
);
