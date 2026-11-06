/**
 * Campo de texto genérico con su label y un mensaje de error accesible.
 * @method Input
 * @param {string} id - Id del input (también se usa como name y para el label).
 * @param {string} label - Texto de la etiqueta.
 * @param {string} error - Mensaje de error; si está vacío no se muestra nada.
 */
const Input = ({ id, label, error, ...resto }) => {
  return (
    <div className="campo">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...resto}
      />
      {error && (
        <p id={`${id}-error`} className="campo-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;