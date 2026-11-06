import { NavLink, Outlet } from "react-router-dom";

/**
 * Estructura común de todas las páginas: encabezado con navegación y, debajo, la página de la ruta activa (Outlet).
 * @method Layout
 */
const Layout = () => {
  return (
    <>
      <header className="main-header">
        <div className="logo-titulo">
          <img src="/logo.jpg" alt="Logo surf" />
          <div className="titulos">
            <h1>WaveSpots</h1>
            <p>Global Surf Information</p>
          </div>
        </div>
        <nav className="navegacion" aria-label="Principal">
          <NavLink to="/" end>
            Spots
          </NavLink>
          <NavLink to="/nuevo">Agregar spot</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;