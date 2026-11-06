import Button from "@components/Button.jsx";
import Input from "@components/Input.jsx";
import Select from "@components/Select.jsx";

/**
 * Buscador y desplegables para filtrar los spots, más el botón que los limpia.
 * @method Filtros
 * @param {object} filtros - Valores actuales: busqueda, pais, nivel, ola y oceano.
 * @param {object} opciones - Opciones de cada desplegable: paises, niveles, olas y oceanos.
 * @param {Function} onCambio - Se ejecuta cuando cambia cualquier campo.
 * @param {Function} onLimpiar - Se ejecuta al apretar "Limpiar filtros".
 */
const Filtros = ({ filtros, opciones, onCambio, onLimpiar }) => {
  return (
    <section className="filtros" aria-label="Filtros">
      <Input
        id="busqueda"
        label="Búsqueda"
        type="text"
        placeholder="Buscar por nombre..."
        maxLength={30}
        value={filtros.busqueda}
        onChange={onCambio}
      />

      <div className="filters-grid">
        <Select
          id="pais"
          label="País"
          opciones={opciones.paises}
          value={filtros.pais}
          onChange={onCambio}
        />
        <Select
          id="nivel"
          label="Nivel"
          opciones={opciones.niveles}
          value={filtros.nivel}
          onChange={onCambio}
        />
        <Select
          id="oceano"
          label="Océano / Mar"
          opciones={opciones.oceanos}
          value={filtros.oceano}
          onChange={onCambio}
        />
        <Select
          id="ola"
          label="Tipo de ola"
          opciones={opciones.olas}
          value={filtros.ola}
          onChange={onCambio}
        />
      </div>

      <Button variante="secundario" onClick={onLimpiar}>
        Limpiar filtros
      </Button>
    </section>
  );
};

export default Filtros;