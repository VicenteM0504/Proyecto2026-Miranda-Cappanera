import mapamundi from "@assets/mapamundi.jpg";

/**
 * Renderiza el mapa mundial interactivo con los botones de cada spot de surf.
 * @method Mapa
 * @param {Array} spots - Lista de spots de surf
 * @param {Function} onMostrarSpot - Función que filtra por el spot seleccionado en el mapa
 * @return {JSX.Element} Contenedor del mapa con sus puntos
 */
const Mapa = ({ spots, onMostrarSpot }) => {
  return (
    <div className="mapa-container">
      <div className="mapa-inner">
        <img src={mapamundi} alt="Mapa mundial" className="mapa" />

        {spots
          .filter((spot) => spot.punto)
          .map((spot) => (
            <button
              key={spot.id}
              type="button"
              className={`punto ${spot.punto}`}
              onClick={() => onMostrarSpot(spot.nombre)}
            >
              ●
            </button>
          ))}
      </div>
    </div>
  );
};

export default Mapa;
