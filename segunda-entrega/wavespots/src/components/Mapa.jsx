import mapamundi from "@assets/mapamundi.jpg";

/**
 * Mapa mundial con un punto por cada spot que tenga posición asignada (campo "punto").
 * @method Mapa
 * @param {Array} spots - Lista completa de spots.
 * @param {number|null} spotSeleccionado - Id del spot elegido en el mapa, o null si no hay ninguno.
 * @param {Function} onSeleccionar - Se ejecuta con el id del spot al apretar un punto.
 */
const Mapa = ({ spots, spotSeleccionado, onSeleccionar }) => {
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
              className={`punto ${spot.punto}${spot.id === spotSeleccionado ? " activo" : ""}`}
              aria-label={`Ver ${spot.nombre}`}
              aria-pressed={spot.id === spotSeleccionado}
              onClick={() => onSeleccionar(spot.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Mapa;