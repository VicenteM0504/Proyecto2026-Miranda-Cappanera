import { useEffect, useRef, useState } from "react";
import { getSpots } from "@api/spotsApi.js";
import Filtros from "@components/Filtros.jsx";
import Mapa from "@components/Mapa.jsx";
import TarjetaSpot from "@components/TarjetaSpot.jsx";

const FILTROS_VACIOS = {
  busqueda: "",
  pais: "",
  nivel: "",
  ola: "",
  oceano: "",
};

const normalizar = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const valoresUnicos = (spots, campo) =>
  [...new Set(spots.map((spot) => spot[campo]))].sort((a, b) =>
    a.localeCompare(b),
  );

const leerFavoritos = () => {
  try {
    const guardados = JSON.parse(localStorage.getItem("favoritos"));
    return Array.isArray(guardados) ? guardados : [];
  } catch {
    return [];
  }
};

/**
 * Página principal: filtros, mapa y tarjetas de los spots que trae el servidor mock.
 * @method Home
 */
const Home = () => {
  const [spots, setSpots] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [filtros, setFiltros] = useState(FILTROS_VACIOS);
  const [spotSeleccionado, setSpotSeleccionado] = useState(null);
  const [favoritos, setFavoritos] = useState(leerFavoritos);
  const listaRef = useRef(null);

  useEffect(() => {
    const cargarSpots = async () => {
      try {
        setSpots(await getSpots());
      } catch {
        setError(
          "No se pudieron cargar los spots. Verificá que el servidor esté corriendo (npm run mock).",
        );
      } finally {
        setCargando(false);
      }
    };
    cargarSpots();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const cambiarFiltro = (evento) => {
    setSpotSeleccionado(null);
    setFiltros({ ...filtros, [evento.target.name]: evento.target.value });
  };

  const limpiarFiltros = () => {
    setSpotSeleccionado(null);
    setFiltros(FILTROS_VACIOS);
  };

  const seleccionarSpot = (id) => {
    if (id === spotSeleccionado) {
      limpiarFiltros();
      return;
    }
    setFiltros(FILTROS_VACIOS);
    setSpotSeleccionado(id);
    if (window.innerWidth <= 900) {
      listaRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleFavorito = (id) => {
    setFavoritos(
      favoritos.includes(id)
        ? favoritos.filter((favorito) => favorito !== id)
        : [...favoritos, id],
    );
  };

  const opciones = {
    paises: valoresUnicos(spots, "pais"),
    niveles: valoresUnicos(spots, "nivel"),
    oceanos: valoresUnicos(spots, "oceano"),
    olas: valoresUnicos(spots, "ola"),
  };

  const busqueda = normalizar(filtros.busqueda.trim());
  const spotsVisibles = spotSeleccionado
    ? spots.filter((spot) => spot.id === spotSeleccionado)
    : spots.filter(
        (spot) =>
          normalizar(spot.nombre).includes(busqueda) &&
          (!filtros.pais || spot.pais === filtros.pais) &&
          (!filtros.nivel || spot.nivel === filtros.nivel) &&
          (!filtros.ola || spot.ola === filtros.ola) &&
          (!filtros.oceano || spot.oceano === filtros.oceano),
      );

  return (
    <>
      <Filtros
        filtros={filtros}
        opciones={opciones}
        onCambio={cambiarFiltro}
        onLimpiar={limpiarFiltros}
      />

      <Mapa
        spots={spots}
        spotSeleccionado={spotSeleccionado}
        onSeleccionar={seleccionarSpot}
      />

      {cargando && (
        <p className="mensaje-estado" role="status">
          Cargando spots...
        </p>
      )}
      {error && (
        <p className="mensaje-estado mensaje-error" role="alert">
          {error}
        </p>
      )}
      {!cargando && !error && spotsVisibles.length === 0 && (
        <p className="mensaje-estado" role="status">
          No se encontraron spots con los criterios ingresados.
        </p>
      )}

      <section
        ref={listaRef}
        className="lista-spots"
        aria-label="Spots de surf"
      >
        {spotsVisibles.map((spot) => (
          <TarjetaSpot
            key={spot.id}
            spot={spot}
            esFavorito={favoritos.includes(spot.id)}
            onToggleFavorito={toggleFavorito}
          />
        ))}
      </section>
    </>
  );
};

export default Home;