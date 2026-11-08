import { Link } from "react-router-dom";

/**
 * Encabezado de la aplicación con el logotipo, título y barra de navegación.
 * @method Header
 * @return {JSX.Element} Componente de cabecera
 */
const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-titulo">
        <img src="/logo.jpg" alt="Logo surf" className="logo" />
        <div className="titulos">
          <h1>WaveSpots</h1>
          <h5>Global Surf Information</h5>
        </div>
      </div>

      <nav className="navegacion">
        <Link to="/">Inicio</Link>
        <Link to="/nuevo">Agregar spot</Link>
      </nav>
    </header>
  );
};

export default Header;
