import { Outlet } from "react-router-dom";
import Header from "@components/Header.jsx";

/**
 * Estructura principal que renderiza el encabezado y el contenido de las rutas hijas mediante Outlet.
 * @method Layout
 * @return {JSX.Element} Estructura principal de la página
 */
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
