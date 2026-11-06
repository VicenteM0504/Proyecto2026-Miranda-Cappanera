import Button from "@components/Button.jsx";

/**
 * Tarjeta con la información de un spot de surf y el botón de favorito.
 * @method TarjetaSpot
 * @param {object} spot - Datos del spot a mostrar.
 * @param {boolean} esFavorito - Indica si el spot está marcado como favorito.
 * @param {Function} onToggleFavorito - Se ejecuta con el id del spot al apretar el corazón.
 */
const TarjetaSpot = ({ spot, esFavorito, onToggleFavorito }) => {
  return (
    <article className="tarjeta">
      <div className="imagen-tarjeta">
        <img
          src={`/fotosspots/${spot.imagen}`}
          alt={`Foto spot ${spot.nombre}`}
          className="foto-spot"
        />
        <span className="nivel">{spot.nivel}</span>
        <div className="estrellas">{spot.estrellas}</div>
      </div>

      <div className="contenido-tarjeta">
        <div className="title-row">
          <h2>{spot.nombre}</h2>
          <div className="acciones-tarjeta">
            <Button
              variante="icono"
              onClick={() => onToggleFavorito(spot.id)}
              aria-pressed={esFavorito}
              aria-label={
                esFavorito
                  ? `Quitar ${spot.nombre} de favoritos`
                  : `Agregar ${spot.nombre} a favoritos`
              }
            >
              {esFavorito ? "♥" : "♡"}
            </Button>
            <a
              href={spot.clima}
              className="clima"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clima
            </a>
          </div>
        </div>

        <p className="ubicacion">
          {spot.pais} · {spot.oceano}
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
    </article>
  );
};

export default TarjetaSpot;