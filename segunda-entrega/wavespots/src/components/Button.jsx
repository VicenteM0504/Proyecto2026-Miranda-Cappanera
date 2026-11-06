/**
 * Botón genérico reutilizable. Acepta cualquier atributo de un button (onClick, aria-label, etc.).
 * @method Button
 * @param {string} variante - Estilo del botón: "primario", "secundario" o "icono".
 * @param {string} type - Tipo del botón: "button" (por defecto) o "submit".
 */
const Button = ({
  children,
  variante = "primario",
  type = "button",
  ...resto
}) => {
  return (
    <button type={type} className={`btn btn-${variante}`} {...resto}>
      {children}
    </button>
  );
};

export default Button;