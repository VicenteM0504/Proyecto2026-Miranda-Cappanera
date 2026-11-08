/**
 * Renderiza la tarjeta individual con toda la información de un spot de surf.
 * @method TarjetaSpot
 * @param {object} spot - Objeto con los datos del spot a mostrar
 * @return {JSX.Element} Tarjeta del spot
 */
const TarjetaSpot = ({ spot }) => {
  return (
    <div className="tarjeta">
      <div className="imagen-tarjeta">
        <img
          src={`/fotosspots/${spot.imagen}`}
          alt={`Foto spot ${spot.nombre}`}
          className="foto-spot"
        />
        <span className="Nivel2">{spot.nivel}</span>
        <div className="estrellas">{spot.estrellas}</div>
      </div>

      <div className="contenido-tarjeta">
        <div className="title-row">
          <h2>{spot.nombre}</h2>
          <a
            href={spot.clima}
            className="clima"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clima
          </a>
        </div>

        <p className="ubicacion">
          {spot.nombre} · {spot.pais} · Oceano {spot.oceano}
        </p>
        <p className="description">{spot.descripcion}</p>

        <div className="info-grid">
          <div className="info-box">
            <span>ALTURA DE OLA</span>
            <p>{spot.altura}</p>
          </div>
          <div className="info-box">
            <span>MEJOR TEMPORADA</span>
            <p>{spot.temporada}</p>
          </div>
          <div className="info-box">
            <span>VIENTO</span>
            <p>{spot.viento}</p>
          </div>
          <div className="info-box">
            <span>BREAK</span>
            <p>{spot.ola}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaSpot;
