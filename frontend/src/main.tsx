import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

import HomePage from "./components/pages/HomePage.tsx";
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ntthjy41ngckxmm3.us.auth0.com"
      clientId="nrOrAVOB7MdP2CUD6kfSjKGQeYvvED9y"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<App />} />

        </Routes>
      </Router>
      <Toaster toastOptions={{ className: "dark:bg-zinc-950 dark:text-white" }} />
    </Auth0Provider>
  </React.StrictMode>
);
