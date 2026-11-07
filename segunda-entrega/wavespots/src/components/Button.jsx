/**
 * Componente genérico de botón reutilizable en distintas páginas.
 * @method Button
 * @param {string} type - Tipo de botón ("button" o "submit")
 * @param {string} className - Clase CSS del botón
 * @param {Function} onClick - Función que se ejecuta al hacer clic
 * @param {node} children - Texto o contenido del botón
 */
const Button = ({ type = "button", className = "btn-limpiar", onClick, children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
