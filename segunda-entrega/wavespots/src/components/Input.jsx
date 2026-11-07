/**
 * Componente genérico de campo de texto con etiqueta y mensaje de error accesible.
 * @method Input
 * @param {string} id - Identificador único del input y referencia del label
 * @param {string} label - Texto del label
 * @param {string} placeholder - Texto de ayuda dentro del input
 * @param {string} value - Valor actual del campo
 * @param {Function} onChange - Función para actualizar el valor en tiempo real
 * @param {number} maxLength - Cantidad máxima de caracteres permitidos
 * @param {number} size - Tamaño visual del input
 * @param {string} icono - Icono opcional a mostrar dentro del campo
 * @param {string} error - Mensaje de error de validación
 */
const Input = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  maxLength = 40,
  size = 30,
  icono,
  error,
}) => {
  return (
    <div className="search-container">
      <label htmlFor={id}>{label}</label>
      <div className="input-wrapper">
        {icono && <span className="search-icon">{icono}</span>}
        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          maxLength={maxLength}
          size={size}
          value={value}
          onChange={onChange}
          className={icono ? "con-icono" : ""}
        />
      </div>
      {error && (
        <p className="mensaje-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
