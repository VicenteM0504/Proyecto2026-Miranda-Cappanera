import mapamundi from "@assets/mapamundi.jpg";

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
