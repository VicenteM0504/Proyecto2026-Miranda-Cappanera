import Button from "@components/Button.jsx";
import Input from "@components/Input.jsx";

const PAISES_BASE = [
  "Brasil",
  "EE. UU.",
  "México",
  "Costa Rica",
  "El Salvador",
  "Perú",
  "Chile",
  "Portugal",
  "Francia",
  "España",
  "Irlanda",
  "Reino Unido",
  "Sudáfrica",
  "Namibia",
  "Marruecos",
  "Indonesia",
  "Fiyi",
  "Australia",
  "Nueva Zelanda",
  "Sri Lanka",
  "Filipinas",
];

const NIVELES = [
  "Principiante",
  "Intermedio",
  "Avanzado",
  "Experto",
  "Profesional",
];

const OCEANOS = [
  "Pacífico",
  "Atlántico",
  "Antártico",
  "Mar Cantábrico",
  "Índico",
];

const OLAS = ["Reef Break", "Beach Break", "Point Break", "River Mouth"];

/**
 * Renderiza el buscador por nombre, los cuatro desplegables de filtrado y el botón para limpiar filtros.
 * @method Filtros
 * @param {Array} spots - Lista de spots cargados
 * @param {string} busqueda - Texto actual del buscador
 * @param {string} pais - País seleccionado
 * @param {string} nivel - Nivel seleccionado
 * @param {string} oceano - Océano seleccionado
 * @param {string} ola - Tipo de ola seleccionado
 * @param {string} errorBusqueda - Mensaje de error si la búsqueda es inválida
 * @param {Function} onBuscar - Función que se ejecuta al escribir en el buscador
 * @param {Function} onCambiarPais - Función que actualiza el país seleccionado
 * @param {Function} onCambiarNivel - Función que actualiza el nivel seleccionado
 * @param {Function} onCambiarOceano - Función que actualiza el océano seleccionado
 * @param {Function} onCambiarOla - Función que actualiza el tipo de ola seleccionado
 * @param {Function} onLimpiar - Función que resetea todos los filtros
 * @return {JSX.Element} Sección de filtros
 */
const Filtros = ({
  spots = [],
  busqueda,
  pais,
  nivel,
  oceano,
  ola,
  errorBusqueda,
  onBuscar,
  onCambiarPais,
  onCambiarNivel,
  onCambiarOceano,
  onCambiarOla,
  onLimpiar,
}) => {
  const paisesNuevos = spots
    .map((s) => s.pais)
    .filter((p) => p && !PAISES_BASE.includes(p));
  const listaPaises = [...PAISES_BASE, ...new Set(paisesNuevos)];

  return (
    <div className="filtros-contenedor">
      <Input
        id="Busqueda"
        label="Busqueda"
        placeholder="Buscar por nombre..."
        maxLength={30}
        size={30}
        icono="🔍"
        value={busqueda}
        onChange={onBuscar}
        error={errorBusqueda}
      />

      <section className="filters-grid">
        <div className="filter-group">
          <label htmlFor="Pais">PAÍS</label>
          <div className="select-wrapper">
            <span className="field-icon">🚩</span>
            <select
              name="Pais"
              id="Pais"
              value={pais}
              onChange={(e) => onCambiarPais(e.target.value)}
            >
              <option value="">Todos</option>
              {listaPaises.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="Nivel">NIVEL</label>
          <div className="select-wrapper">
            <span className="field-icon">📊</span>
            <select
              name="Nivel"
              id="Nivel"
              value={nivel}
              onChange={(e) => onCambiarNivel(e.target.value)}
            >
              <option value="">Todos</option>
              {NIVELES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="Oceano">OCÉANO / MAR</label>
          <div className="select-wrapper">
            <span className="field-icon">🌙</span>
            <select
              name="Oceano"
              id="Oceano"
              value={oceano}
              onChange={(e) => onCambiarOceano(e.target.value)}
            >
              <option value="">Todos</option>
              {OCEANOS.map((oc) => (
                <option key={oc} value={oc}>
                  {oc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="Ola">TIPO DE OLA</label>
          <div className="select-wrapper">
            <span className="field-icon">⇅</span>
            <select
              name="Ola"
              id="Ola"
              value={ola}
              onChange={(e) => onCambiarOla(e.target.value)}
            >
              <option value="">Todos</option>
              {OLAS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <Button className="btn-limpiar" onClick={onLimpiar}>
        Limpiar filtros
      </Button>
    </div>
  );
};

export default Filtros;
