import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearSpot } from "@api/spotsApi.js";
import Button from "@components/Button.jsx";
import Input from "@components/Input.jsx";
import Select from "@components/Select.jsx";

const NIVELES = ["Principiante", "Intermedio", "Avanzado", "Experto"];
const TIPOS_OLA = ["Beach Break", "Point Break", "Reef Break", "River Mouth"];
const ESTRELLAS = ["1", "2", "3", "4", "5"];

const CAMPOS = [
  { id: "nombre", label: "Nombre", placeholder: "Ej: Pipeline" },
  { id: "pais", label: "País", placeholder: "Ej: Brasil" },
  { id: "oceano", label: "Océano / Mar", placeholder: "Ej: Pacífico" },
  { id: "altura", label: "Altura de ola", placeholder: "Ej: 3-10 ft" },
  { id: "temporada", label: "Mejor temporada", placeholder: "Ej: May - Sep" },
  { id: "viento", label: "Viento", placeholder: "Ej: NE Offshore" },
  {
    id: "clima",
    label: "Link del clima",
    placeholder: "Ej: https://www.windguru.cz/74458",
  },
  {
    id: "descripcion",
    label: "Descripción",
    placeholder: "Contá cómo es la ola...",
  },
];

const SELECTS = [
  {
    id: "nivel",
    label: "Nivel",
    opciones: NIVELES,
    opcionVacia: "Elegí un nivel",
  },
  {
    id: "ola",
    label: "Tipo de ola",
    opciones: TIPOS_OLA,
    opcionVacia: "Elegí un tipo de ola",
  },
  {
    id: "estrellas",
    label: "Estrellas",
    opciones: ESTRELLAS,
    opcionVacia: "Elegí la cantidad",
  },
];

const VALORES_INICIALES = {
  nombre: "",
  pais: "",
  oceano: "",
  altura: "",
  temporada: "",
  viento: "",
  clima: "",
  descripcion: "",
  nivel: "",
  ola: "",
  estrellas: "",
};

const VALIDACIONES = {
  nombre: (valor) =>
    valor.length < 3 ? "El nombre debe tener al menos 3 caracteres." : "",
  pais: (valor) =>
    valor.length < 3 ? "El país debe tener al menos 3 caracteres." : "",
  oceano: (valor) =>
    valor.length < 3 ? "El océano debe tener al menos 3 caracteres." : "",
  altura: (valor) =>
    /^\d+-\d+\+? ft$/.test(valor) ? "" : 'Usá el formato "3-10 ft".',
  temporada: (valor) =>
    /^[A-Za-z]{3} - [A-Za-z]{3}$/.test(valor)
      ? ""
      : 'Usá el formato "May - Sep".',
  viento: (valor) =>
    valor.length < 3 ? "Indicá el viento, por ejemplo NE Offshore." : "",
  clima: (valor) =>
    /^https?:\/\/\S+$/.test(valor)
      ? ""
      : "Ingresá un link que empiece con http:// o https://.",
  descripcion: (valor) =>
    valor.length < 20
      ? "La descripción debe tener al menos 20 caracteres."
      : "",
  nivel: (valor) => (valor === "" ? "Elegí un nivel." : ""),
  ola: (valor) => (valor === "" ? "Elegí un tipo de ola." : ""),
  estrellas: (valor) => (valor === "" ? "Elegí la cantidad de estrellas." : ""),
};

/**
 * Formulario para agregar un spot nuevo. Valida cada campo en tiempo real (onChange) y, si todo está bien, lo envía al servidor mock y vuelve a la página principal.
 * @method NuevoSpot
 */
const NuevoSpot = () => {
  const [valores, setValores] = useState(VALORES_INICIALES);
  const [errores, setErrores] = useState({});
  const [errorEnvio, setErrorEnvio] = useState("");
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  const cambiarValor = (evento) => {
    const { name, value } = evento.target;
    setValores({ ...valores, [name]: value });
    setErrores({ ...errores, [name]: VALIDACIONES[name](value.trim()) });
  };

  const enviar = async (evento) => {
    evento.preventDefault();
    const nuevosErrores = Object.fromEntries(
      Object.keys(VALIDACIONES).map((campo) => [
        campo,
        VALIDACIONES[campo](valores[campo].trim()),
      ]),
    );
    setErrores(nuevosErrores);
    if (Object.values(nuevosErrores).some(Boolean)) {
      return;
    }

    setEnviando(true);
    setErrorEnvio("");
    try {
      await crearSpot({
        nombre: valores.nombre.trim(),
        pais: valores.pais.trim(),
        oceano: valores.oceano.trim(),
        nivel: valores.nivel,
        ola: valores.ola,
        imagen: "sin-foto.svg",
        estrellas: "★".repeat(Number(valores.estrellas)),
        clima: valores.clima.trim(),
        descripcion: valores.descripcion.trim(),
        altura: valores.altura.trim(),
        temporada: valores.temporada.trim(),
        viento: valores.viento.trim(),
      });
      navigate("/");
    } catch {
      setErrorEnvio(
        "No se pudo guardar el spot. Verificá que el servidor esté corriendo (npm run mock).",
      );
      setEnviando(false);
    }
  };

  return (
    <section className="pagina">
      <h2>Agregar un spot</h2>

      <form className="formulario" onSubmit={enviar} noValidate>
        {CAMPOS.map((campo) => (
          <Input
            key={campo.id}
            id={campo.id}
            label={campo.label}
            type="text"
            placeholder={campo.placeholder}
            value={valores[campo.id]}
            error={errores[campo.id]}
            onChange={cambiarValor}
          />
        ))}

        {SELECTS.map((select) => (
          <Select
            key={select.id}
            id={select.id}
            label={select.label}
            opciones={select.opciones}
            opcionVacia={select.opcionVacia}
            value={valores[select.id]}
            error={errores[select.id]}
            onChange={cambiarValor}
          />
        ))}

        {errorEnvio && (
          <p className="mensaje-estado mensaje-error" role="alert">
            {errorEnvio}
          </p>
        )}

        <div className="formulario-acciones">
          <Button type="submit" disabled={enviando}>
            {enviando ? "Guardando..." : "Guardar spot"}
          </Button>
          <Button variante="secundario" onClick={() => navigate("/")}>
            Cancelar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default NuevoSpot;