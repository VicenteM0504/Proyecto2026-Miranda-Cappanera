import { Route, Routes } from "react-router-dom";
import Layout from "@components/Layout.jsx";
import Home from "@pages/Home.jsx";
import NuevoSpot from "@pages/NuevoSpot.jsx";
import NoEncontrada from "@pages/NoEncontrada.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nuevo" element={<NuevoSpot />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
};

export default App;