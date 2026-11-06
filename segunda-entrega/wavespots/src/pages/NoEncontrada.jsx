import { Link } from "react-router-dom";

/**
 * Página que se muestra cuando la dirección no coincide con ninguna ruta.
 * @method NoEncontrada
 */
const NoEncontrada = () => {
  return (
    <section className="pagina">
      <h2>Página no encontrada</h2>
      <p>La dirección que buscás no existe.</p>
      <Link to="/">Volver a los spots</Link>
    </section>
  );
};

export default NoEncontrada;