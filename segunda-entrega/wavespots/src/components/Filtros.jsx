import Button from "@components/Button.jsx";
import Input from "@components/Input.jsx";

const PAISES = [
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

const Filtros = ({
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
              {PAISES.map((p) => (
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
