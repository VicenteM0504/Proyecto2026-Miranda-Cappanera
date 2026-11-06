/**
 * Desplegable genérico con su label y un mensaje de error accesible.
 * @method Select
 * @param {string} id - Id del select (también se usa como name y para el label).
 * @param {string} label - Texto de la etiqueta.
 * @param {Array} opciones - Arreglo de strings con las opciones a elegir.
 * @param {string} opcionVacia - Texto de la primera opción, la que no tiene valor.
 * @param {string} error - Mensaje de error; si está vacío no se muestra nada.
 */
const Select = ({
  id,
  label,
  opciones,
  opcionVacia = "Todos",
  error,
  ...resto
}) => {
  return (
    <div className="campo">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...resto}
      >
        <option value="">{opcionVacia}</option>
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="campo-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;