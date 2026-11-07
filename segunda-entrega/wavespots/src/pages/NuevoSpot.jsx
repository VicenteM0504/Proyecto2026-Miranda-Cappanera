import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearSpot } from "@api/spotsApi.js";
import Button from "@components/Button.jsx";
import Input from "@components/Input.jsx";

const NuevoSpot = () => {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [oceano, setOceano] = useState("");
  const [nivel, setNivel] = useState("");
  const [ola, setOla] = useState("");
  const [altura, setAltura] = useState("");
  const [temporada, setTemporada] = useState("");
  const [viento, setViento] = useState("");
  const [estrellas, setEstrellas] = useState("");
  const [clima, setClima] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  /**
   * Valida en tiempo real cada campo del formulario a medida que el usuario escribe.
   * @method validarCampo
   * @param {string} campo - Nombre del campo a validar
   * @param {string} valor - Valor ingresado por el usuario
   */
  const validarCampo = (campo, valor) => {
    let mensaje = "";
    if (!valor.trim()) {
      mensaje = "Este campo es obligatorio.";
    } else if (
      (campo === "nombre" || campo === "pais" || campo === "oceano") &&
      valor.trim().length < 3
    ) {
      mensaje = "Debe tener al menos 3 caracteres.";
    } else if (campo === "clima" && !valor.startsWith("http")) {
      mensaje = "El link debe comenzar con http o https.";
    } else if (campo === "descripcion" && valor.trim().length < 10) {
      mensaje = "La descripción debe tener al menos 10 caracteres.";
    }

    setErrores((prev) => ({ ...prev, [campo]: mensaje }));
    return mensaje === "";
  };

  /**
   * Comprueba todos los campos y envía el nuevo spot al servidor mock.
   * @method handleSubmit
   * @param {object} e - Evento del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const esValido =
      validarCampo("nombre", nombre) &
      validarCampo("pais", pais) &
      validarCampo("oceano", oceano) &
      validarCampo("nivel", nivel) &
      validarCampo("ola", ola) &
      validarCampo("altura", altura) &
      validarCampo("temporada", temporada) &
      validarCampo("viento", viento) &
      validarCampo("estrellas", estrellas) &
      validarCampo("clima", clima) &
      validarCampo("descripcion", descripcion);

    if (!esValido) {
      return;
    }

    try {
      await crearSpot({
        nombre: nombre.trim(),
        pais: pais.trim(),
        oceano: oceano.trim(),
        nivel,
        ola,
        imagen: "sin-foto.svg",
        estrellas,
        clima: clima.trim(),
        descripcion: descripcion.trim(),
        altura: altura.trim(),
        temporada: temporada.trim(),
        viento: viento.trim(),
      });
      navigate("/");
    } catch (error) {
      console.error(`Error al guardar el spot: ${error}`);
    }
  };

  return (
    <section className="nuevo-spot-container">
      <h2>Agregar nuevo spot</h2>

      <form className="formulario-spot" onSubmit={handleSubmit}>
        <Input
          id="nombre"
          label="NOMBRE DEL SPOT"
          placeholder="Ej: Pipeline"
          maxLength={30}
          size={30}
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            validarCampo("nombre", e.target.value);
          }}
          error={errores.nombre}
        />

        <Input
          id="pais"
          label="PAÍS"
          placeholder="Ej: Brasil"
          maxLength={30}
          size={30}
          value={pais}
          onChange={(e) => {
            setPais(e.target.value);
            validarCampo("pais", e.target.value);
          }}
          error={errores.pais}
        />

        <Input
          id="oceano"
          label="OCÉANO / MAR"
          placeholder="Ej: Pacífico"
          maxLength={30}
          size={30}
          value={oceano}
          onChange={(e) => {
            setOceano(e.target.value);
            validarCampo("oceano", e.target.value);
          }}
          error={errores.oceano}
        />

        <div className="filter-group">
          <label htmlFor="nivelNuevo">NIVEL</label>
          <div className="select-wrapper">
            <select
              id="nivelNuevo"
              value={nivel}
              onChange={(e) => {
                setNivel(e.target.value);
                validarCampo("nivel", e.target.value);
              }}
            >
              <option value="">Seleccionar nivel</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
              <option value="Experto">Experto</option>
              <option value="Profesional">Profesional</option>
            </select>
          </div>
          {errores.nivel && (
            <p className="mensaje-error" role="alert">
              {errores.nivel}
            </p>
          )}
        </div>

        <div className="filter-group">
          <label htmlFor="olaNuevo">TIPO DE OLA</label>
          <div className="select-wrapper">
            <select
              id="olaNuevo"
              value={ola}
              onChange={(e) => {
                setOla(e.target.value);
                validarCampo("ola", e.target.value);
              }}
            >
              <option value="">Seleccionar tipo de ola</option>
              <option value="Reef Break">Reef Break</option>
              <option value="Beach Break">Beach Break</option>
              <option value="Point Break">Point Break</option>
              <option value="River Mouth">River Mouth</option>
            </select>
          </div>
          {errores.ola && (
            <p className="mensaje-error" role="alert">
              {errores.ola}
            </p>
          )}
        </div>

        <div className="filter-group">
          <label htmlFor="estrellasNuevo">ESTRELLAS</label>
          <div className="select-wrapper">
            <select
              id="estrellasNuevo"
              value={estrellas}
              onChange={(e) => {
                setEstrellas(e.target.value);
                validarCampo("estrellas", e.target.value);
              }}
            >
              <option value="">Seleccionar estrellas</option>
              <option value="★★★">★★★</option>
              <option value="★★★★">★★★★</option>
              <option value="★★★★★">★★★★★</option>
            </select>
          </div>
          {errores.estrellas && (
            <p className="mensaje-error" role="alert">
              {errores.estrellas}
            </p>
          )}
        </div>

        <Input
          id="altura"
          label="ALTURA DE OLA"
          placeholder="Ej: 3-10 ft"
          maxLength={20}
          size={20}
          value={altura}
          onChange={(e) => {
            setAltura(e.target.value);
            validarCampo("altura", e.target.value);
          }}
          error={errores.altura}
        />

        <Input
          id="temporada"
          label="MEJOR TEMPORADA"
          placeholder="Ej: May - Sep"
          maxLength={20}
          size={20}
          value={temporada}
          onChange={(e) => {
            setTemporada(e.target.value);
            validarCampo("temporada", e.target.value);
          }}
          error={errores.temporada}
        />

        <Input
          id="viento"
          label="VIENTO"
          placeholder="Ej: NE Offshore"
          maxLength={25}
          size={25}
          value={viento}
          onChange={(e) => {
            setViento(e.target.value);
            validarCampo("viento", e.target.value);
          }}
          error={errores.viento}
        />

        <Input
          id="clima"
          label="LINK DEL CLIMA"
          placeholder="Ej: https://www.windguru.cz/74458"
          maxLength={80}
          size={30}
          value={clima}
          onChange={(e) => {
            setClima(e.target.value);
            validarCampo("clima", e.target.value);
          }}
          error={errores.clima}
        />

        <div className="campo-completo">
          <Input
            id="descripcion"
            label="DESCRIPCIÓN"
            placeholder="Breve descripción de la ola..."
            maxLength={160}
            size={50}
            value={descripcion}
            onChange={(e) => {
              setDescripcion(e.target.value);
              validarCampo("descripcion", e.target.value);
            }}
            error={errores.descripcion}
          />
        </div>

        <div className="acciones-formulario">
          <Button type="submit" className="btn-limpiar">
            Guardar spot
          </Button>
          <Button
            type="button"
            className="btn-limpiar"
            onClick={() => navigate("/")}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default NuevoSpot;
