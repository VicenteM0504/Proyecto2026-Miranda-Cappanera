import { useEffect, useState } from "react";
import { getSpots } from "@api/spotsApi.js";
import Filtros from "@components/Filtros.jsx";
import Mapa from "@components/Mapa.jsx";
import TarjetaSpot from "@components/TarjetaSpot.jsx";

/**
 * Página principal que muestra los filtros, el mapa interactivo y el listado de tarjetas de spots.
 * @method Home
 * @return {JSX.Element} Vista principal de WaveSpots
 */
const Home = () => {
  const [spots, setSpots] = useState([]);
  const [spotsFiltrados, setSpotsFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pais, setPais] = useState("");
  const [nivel, setNivel] = useState("");
  const [oceano, setOceano] = useState("");
  const [ola, setOla] = useState("");
  const [spotSeleccionado, setSpotSeleccionado] = useState(null);
  const [errorBusqueda, setErrorBusqueda] = useState("");

  /**
   * Obtiene los spots desde la API mock al cargar la página.
   * @method fetchSpots
   */
  const fetchSpots = async () => {
    try {
      const data = await getSpots();
      setSpots(data);
      setSpotsFiltrados(data);
    } catch (error) {
      console.error(`Error al retornar spots: ${error}`);
    }
  };

  useEffect(() => {
    fetchSpots();
  }, []);

  /**
   * Blanquea el buscador y los filtros desplegables, quita la selección del mapa y vuelve a mostrar la lista completa.
   * @method resetearFiltros
   */
  const resetearFiltros = () => {
    setSpotSeleccionado(null);
    setBusqueda("");
    setPais("");
    setNivel("");
    setOceano("");
    setOla("");
    setErrorBusqueda("");
    localStorage.removeItem("ultimoSpot");
    setSpotsFiltrados(spots);
  };

  /**
   * Filtra la lista de spots según el texto ingresado en el buscador y las opciones seleccionadas.
   * Si no hay coincidencias, informa el error al usuario, resetea todos los filtros y muestra todos los spots.
   * @method aplicarFiltros
   * @param {string} textoBusqueda - Texto a buscar por nombre
   * @param {string} paisSel - País seleccionado
   * @param {string} nivelSel - Nivel seleccionado
   * @param {string} oceanoSel - Océano seleccionado
   * @param {string} olaSel - Tipo de ola seleccionado
   */
  const aplicarFiltros = (textoBusqueda, paisSel, nivelSel, oceanoSel, olaSel) => {
    setSpotSeleccionado(null);
    let newLista = spots;
    const searchWord = textoBusqueda.trim();

    if (searchWord) {
      newLista = newLista.filter((spo) =>
        spo.nombre.toLowerCase().includes(searchWord.toLowerCase()),
      );
    }

    if (paisSel) {
      newLista = newLista.filter((spo) => spo.pais === paisSel);
    }

    if (nivelSel) {
      newLista = newLista.filter((spo) => spo.nivel === nivelSel);
    }

    if (oceanoSel) {
      newLista = newLista.filter((spo) => spo.oceano === oceanoSel);
    }

    if (olaSel) {
      newLista = newLista.filter((spo) => spo.ola === olaSel);
    }

    if (newLista.length === 0) {
      alert("No se encontraron spots con los criterios ingresados.");
      resetearFiltros();
    } else {
      setErrorBusqueda("");
      setSpotsFiltrados(newLista);
    }
  };

  /**
   * Actualiza el texto de búsqueda en tiempo real y aplica los filtros.
   * @method handleBuscar
   * @param {object} e - Evento del input de búsqueda
   */
  const handleBuscar = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    aplicarFiltros(valor, pais, nivel, oceano, ola);
  };

  /**
   * Actualiza el filtro de país y filtra la lista de spots.
   * @method handlePais
   * @param {string} valor - País elegido
   */
  const handlePais = (valor) => {
    setPais(valor);
    aplicarFiltros(busqueda, valor, nivel, oceano, ola);
  };

  /**
   * Actualiza el filtro de nivel y filtra la lista de spots.
   * @method handleNivel
   * @param {string} valor - Nivel elegido
   */
  const handleNivel = (valor) => {
    setNivel(valor);
    aplicarFiltros(busqueda, pais, valor, oceano, ola);
  };

  /**
   * Actualiza el filtro de océano y filtra la lista de spots.
   * @method handleOceano
   * @param {string} valor - Océano elegido
   */
  const handleOceano = (valor) => {
    setOceano(valor);
    aplicarFiltros(busqueda, pais, nivel, valor, ola);
  };

  /**
   * Actualiza el filtro de tipo de ola y filtra la lista de spots.
   * @method handleOla
   * @param {string} valor - Tipo de ola elegido
   */
  const handleOla = (valor) => {
    setOla(valor);
    aplicarFiltros(busqueda, pais, nivel, oceano, valor);
  };

  /**
   * Selecciona un spot desde un botón del mapa y filtra las tarjetas.
   * Si se presiona el mismo botón nuevamente, se quita el filtro.
   * @method mostrarSpot
   * @param {string} nombreSpot - Nombre del spot seleccionado en el mapa
   */
  const mostrarSpot = (nombreSpot) => {
    if (spotSeleccionado === nombreSpot) {
      resetearFiltros();
      return;
    }

    setSpotSeleccionado(nombreSpot);
    localStorage.setItem("ultimoSpot", nombreSpot);
    setBusqueda("");
    setPais("");
    setNivel("");
    setOceano("");
    setOla("");
    setErrorBusqueda("");

    const newLista = spots.filter(
      (spo) => spo.nombre.toLowerCase() === nombreSpot.toLowerCase(),
    );
    setSpotsFiltrados(newLista);

    if (window.innerWidth <= 900) {
      document
        .getElementById("listaSpots")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Filtros
        spots={spots}
        busqueda={busqueda}
        pais={pais}
        nivel={nivel}
        oceano={oceano}
        ola={ola}
        errorBusqueda={errorBusqueda}
        onBuscar={handleBuscar}
        onCambiarPais={handlePais}
        onCambiarNivel={handleNivel}
        onCambiarOceano={handleOceano}
        onCambiarOla={handleOla}
        onLimpiar={resetearFiltros}
      />

      <Mapa spots={spots} onMostrarSpot={mostrarSpot} />

      <div id="listaSpots">
        {spotsFiltrados.map((spot) => (
          <TarjetaSpot key={spot.id} spot={spot} />
        ))}
      </div>
    </>
  );
};

export default Home;
