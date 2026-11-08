import datosIniciales from "../data/db.json";

const BASE_URL = "http://localhost:3001/";

/**
 * Obtiene el listado completo de spots desde el servidor mock (db.json).
 * Si el servidor mock no está corriendo en la terminal, devuelve los datos de db.json.
 * @method getSpots
 * @return {Promise<Array>} Lista de spots de surf
 */
export const getSpots = async () => {
  try {
    const res = await fetch(`${BASE_URL}spots`);
    if (!res.ok) throw new Error("Error al obtener listado de spots");
    return await res.json();
  } catch {
    return datosIniciales.spots;
  }
};

/**
 * Agrega un nuevo spot de surf en el servidor mock (db.json).
 * @method crearSpot
 * @param {object} nuevoSpot - Objeto con los datos del spot a agregar
 * @return {Promise<object>} El spot creado
 */
export const crearSpot = async (nuevoSpot) => {
  const res = await fetch(`${BASE_URL}spots`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(nuevoSpot),
  });
  if (!res.ok) throw new Error("Error al guardar el spot");
  return res.json();
};
