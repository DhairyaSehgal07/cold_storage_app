import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen.tsx";
import LoginScreenV1 from "./Screens/v1-Screens/LoginScreenV1.tsx";
import FarmerRegisterScreenV1 from "./Screens/v1-Screens/FarmerRegisterScreenV1.tsx";
import StoreAdminRegisterScreenV1 from "./Screens/v1-Screens/StoreAdminRegisterScreenV1.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route index={true} path="/login" element={<LoginScreenV1 />} />
      <Route
        index={true}
        path="/register"
        element={<FarmerRegisterScreenV1 />}
      />
      <Route
        index={true}
        path="/register-admin"
        element={<StoreAdminRegisterScreenV1 />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
