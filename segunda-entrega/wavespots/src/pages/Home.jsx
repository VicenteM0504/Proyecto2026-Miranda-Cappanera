import { useEffect, useState } from "react";
import { getSpots } from "@api/spotsApi.js";
import Filtros from "@components/Filtros.jsx";
import Mapa from "@components/Mapa.jsx";
import TarjetaSpot from "@components/TarjetaSpot.jsx";

const Home = () => {
  const [spots, setSpots] = useState([]);
  const [spotsFiltrados, setSpotsFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pais, setPais] = useState(localStorage.getItem("paisFiltro") || "");
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
      const paisGuardado = localStorage.getItem("paisFiltro") || "";
      if (paisGuardado) {
        setSpotsFiltrados(data.filter((spo) => spo.pais === paisGuardado));
      } else {
        setSpotsFiltrados(data);
      }
    } catch (error) {
      console.error(`Error al retornar spots: ${error}`);
    }
  };

  useEffect(() => {
    fetchSpots();
  }, []);

  /**
   * Filtra la lista de spots según el texto ingresado en el buscador y las opciones seleccionadas.
   * Si no hay coincidencias, informa el error al usuario, blanquea la búsqueda y muestra todos los spots.
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
      setErrorBusqueda("No se encontraron spots con los criterios ingresados.");
      alert("No se encontraron spots con los criterios ingresados.");
      setBusqueda("");
      setPais("");
      setNivel("");
      setOceano("");
      setOla("");
      localStorage.removeItem("paisFiltro");
      setSpotsFiltrados(spots);
    } else {
      setErrorBusqueda("");
      setSpotsFiltrados(newLista);
    }
  };

  const handleBuscar = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    aplicarFiltros(valor, pais, nivel, oceano, ola);
  };

  const handlePais = (valor) => {
    setPais(valor);
    localStorage.setItem("paisFiltro", valor);
    aplicarFiltros(busqueda, valor, nivel, oceano, ola);
  };

  const handleNivel = (valor) => {
    setNivel(valor);
    aplicarFiltros(busqueda, pais, valor, oceano, ola);
  };

  const handleOceano = (valor) => {
    setOceano(valor);
    aplicarFiltros(busqueda, pais, nivel, valor, ola);
  };

  const handleOla = (valor) => {
    setOla(valor);
    aplicarFiltros(busqueda, pais, nivel, oceano, valor);
  };

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
    localStorage.removeItem("paisFiltro");
    setSpotsFiltrados(spots);
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
