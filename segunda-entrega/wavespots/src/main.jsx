import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@components/Layout.jsx";
import Home from "@pages/Home.jsx";
import NuevoSpot from "@pages/NuevoSpot.jsx";
import "@styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nuevo" element={<NuevoSpot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
