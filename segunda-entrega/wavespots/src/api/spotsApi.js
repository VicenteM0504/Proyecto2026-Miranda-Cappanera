const API_URL = "http://localhost:3001";

/**
 * Pide al servidor mock (db.json) la lista completa de spots.
 * @method getSpots
 * @return {Promise<Array>} Arreglo de objetos con los spots de surf.
 */
export const getSpots = async () => {
  const respuesta = await fetch(`${API_URL}/spots`);
  if (!respuesta.ok) {
    throw new Error("No se pudieron cargar los spots");
  }
  return respuesta.json();
};

/**
 * Envía un spot nuevo al servidor mock para que lo agregue en db.json.
 * @method crearSpot
 * @param {object} spot - Datos del spot a guardar (sin id, lo asigna el servidor).
 * @return {Promise<object>} El spot guardado, ya con su id.
 */
export const crearSpot = async (spot) => {
  const respuesta = await fetch(`${API_URL}/spots`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spot),
  });
  if (!respuesta.ok) {
    throw new Error("No se pudo guardar el spot");
  }
  return respuesta.json();
};
