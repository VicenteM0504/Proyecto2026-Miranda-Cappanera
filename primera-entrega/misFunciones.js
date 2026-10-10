const spots = [
  {
    nombre: "Saquearema",
    pais: "Brasil",
    oceano: "Atlantico",
    nivel: "Intermedio",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/saquarema.jpg",
    estrellas: "★★★★",
    clima: "https://www.windguru.cz/74458",
    descripcion: "La capital del surf en Brasil, con olas potentes e intensas que se sostienen muy bien con swells fuertes.",
    altura: "3-10 ft",
    temporada: "May - Sep",
    viento: "NE Offshore"
  },
  {
    nombre: "Pipeline",
    pais: "USA",
    oceano: "Pacifico",
    nivel: "Experto",
    ola: "Reef Break",
    imagen: "imagenes/fotosspots/pipeline.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/53",
    descripcion: "Icónica ola pesada y tubular que rompe sobre un arrecife de coral somero y cavernoso.",
    altura: "6-20+ ft",
    temporada: "Nov - Mar",
    viento: "E/SE Offshore"
  },
  {
    nombre: "Puerto Escondido",
    pais: "Mexico",
    oceano: "Pacifico",
    nivel: "Experto",
    ola: "Beach Break",
    imagen: "imagenes/fotosspots/puerto escondido.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/156673",
    descripcion: "El \"Pipeline Mexicano\", potente beach break con tubos masivos y orilleros pesados sobre fondo de arena.",
    altura: "6-20+ ft",
    temporada: "May - Oct",
    viento: "NE Offshore"
  },
  {
    nombre: "Pavones",
    pais: "Costa Rica",
    oceano: "Pacifico",
    nivel: "Intermedio",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/pavones.jpg",
    estrellas: "★★★★",
    clima: "https://www.windguru.cz/25161",
    descripcion: "Una de las izquierdas más largas del mundo, capaz de regalar recorridos de más de 1 kilómetro en días épicos.",
    altura: "3-8 ft",
    temporada: "May - Sep",
    viento: "NE Offshore"
  },
  {
    nombre: "Punta Roca",
    pais: "El Salvador",
    oceano: "Pacifico",
    nivel: "Avanzado",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/puntaroca.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/26388",
    descripcion: "Considerada la mejor derecha de Centroamérica, muy veloz, hueca y técnica sobre cantos rodados.",
    altura: "4-10 ft",
    temporada: "Mar - Oct",
    viento: "N/NE Offshore"
  },
  {
    nombre: "Chicama",
    pais: "Peru",
    oceano: "Pacifico",
    nivel: "Principiante",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/chicama.jpg",
    estrellas: "★★★",
    clima: "",
    descripcion: "La ola izquierda más larga del mundo, con secciones perfectamente conectables sobre un fondo de arena y piedra.",
    altura: "3-7 ft",
    temporada: "Mar - Nov",
    viento: "SE Offshore"
  },
  {
    nombre: "Punta de Lobos",
    pais: "Chile",
    oceano: "Pacifico",
    nivel: "Intermedio",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/puntadelobos.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/209091",
    descripcion: "Mítica punta flanqueada por morros rocosos que despide izquierdas potentes e intensas en agua fría.",
    altura: "4-15+ ft",
    temporada: "Mar - Oct",
    viento: "SE Offshore"
  },
  {
    nombre: "Cloud 9",
    pais: "Filipinas",
    oceano: "Pacifico",
    nivel: "Intermedio",
    ola: "Reef Break",
    imagen: "imagenes/fotosspots/cloud9.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/544537",
    descripcion: "Ola insignia de Filipinas; una derecha tubular corta, intensa y muy fotogénica sobre arrecife coralino somero.",
    altura: "3-8 ft",
    temporada: "Sep - Nov",
    viento: "SW Offshore"
  },
  {
    nombre: "Arugam Bay",
    pais: "Sri Lanka",
    oceano: "Pacifico",
    nivel: "Principiante",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/arugambay.jpg",
    estrellas: "★★★★",
    clima: "https://www.windguru.cz/96362",
    descripcion: "Meca del surf en Sri Lanka con derechas amigables, secciones fluidas y un ambiente tropical descontracturado.",
    altura: "2-6 ft",
    temporada: "May - Sep",
    viento: "SW Offshore"
  },
  {
    nombre: "Jeffreys Bay",
    pais: "Sudafrica",
    oceano: "Indico",
    nivel: "Avanzado",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/Jbay.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/68531",
    descripcion: "Una de las mejores olas de derecha del mundo, famosa por sus secciones veloces y tubulares.",
    altura: "4-10 ft",
    temporada: "Jun - Ago",
    viento: "SW Offshore"
  },
  {
    nombre: "Nazaré",
    pais: "Portugal",
    oceano: "Atlantico",
    nivel: "Experto",
    ola: "Beach Break",
    imagen: "imagenes/fotosspots/nazare.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/75856",
    descripcion: "Epicentro mundial de olas gigantes, alimentado por un cañón submarino que crea paredes verdaderamente colosales.",
    altura: "15-80+ ft",
    temporada: "Oct - Mar",
    viento: "E/SE Offshore"
  },
  {
    nombre: "Hossegor",
    pais: "Francia",
    oceano: "Atlantico",
    nivel: "Avanzado",
    ola: "Beach Break",
    imagen: "imagenes/fotosspots/hossegor.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/309513",
    descripcion: "Meca del surf europeo con bancos de arena únicos que generan tubos pesados y explosivos cerca de la orilla.",
    altura: "4-10 ft",
    temporada: "Sep - Nov",
    viento: "E Offshore"
  },
  {
    nombre: "Mundaka",
    pais: "España",
    oceano: "Mar Cantabrico",
    nivel: "Avanzado",
    ola: "River Mouth",
    imagen: "imagenes/fotosspots/mundaka.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/3650",
    descripcion: "Considerada la mejor izquierda de Europa, una ola tubular legendaria creada por la ría de Urdaibai.",
    altura: "4-12 ft",
    temporada: "Sep - Mar",
    viento: "S/SW Offshore"
  },
  {
    nombre: "Bundoran",
    pais: "Irlanda",
    oceano: "Atlantico",
    nivel: "Intermedio",
    ola: "Reef Break",
    imagen: "imagenes/fotosspots/bundoran.jpg",
    estrellas: "★★★★",
    clima: "https://www.windguru.cz/103244",
    descripcion: "Capital del surf irlandés, destacando por The Peak, un arrecife de losa plana con izquierdas y derechas muy tubulares.",
    altura: "3-10 ft",
    temporada: "Sep - Mar",
    viento: "E/SE Offshore"
  },
  {
    nombre: "Thurso East",
    pais: "Reino Unido",
    oceano: "Atlantico",
    nivel: "Avanzado",
    ola: "Reef Break",
    imagen: "imagenes/fotosspots/thursoeast.jpg",
    estrellas: "★★★★",
    clima: "https://www.windguru.cz/4160",
    descripcion: "Derecha escocesa de clase mundial que rompe sobre una losa caliza plana en latitudes árticas.",
    altura: "4-10 ft",
    temporada: "Oct - Mar",
    viento: "S/SW Offshore"
  },
  {
    nombre: "Skeleton Bay",
    pais: "Namibia",
    oceano: "Atlantico",
    nivel: "Experto",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/skeletonbay.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/208269",
    descripcion: "La izquierda de arena más larga y tubular del planeta, capaz de ofrecer tubos de más de 30 segundos en el desierto.",
    altura: "4-10 ft",
    temporada: "May - Sep",
    viento: "S Offshore"
  },
  {
    nombre: "Anchor Point",
    pais: "Marruecos",
    oceano: "Atlantico",
    nivel: "Intermedio",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/anchorpoint.jpg",
    estrellas: "★★★★",
    clima: "https://www.windguru.cz/409927",
    descripcion: "La derecha emblemática de Marruecos con secciones largas sobre plataformas rocosas y paredes limpias.",
    altura: "4-10 ft",
    temporada: "Nov - Mar",
    viento: "E/NE Offshore"
  },
  {
    nombre: "Uluwatu",
    pais: "Indonesia",
    oceano: "Indico",
    nivel: "Avanzado",
    ola: "Reef Break",
    imagen: "imagenes/fotosspots/uluwatu.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/1281402",
    descripcion: "Templo sagrado del surf balinés con múltiples picos de izquierda sobre arrecife.",
    altura: "3-12 ft",
    temporada: "May - Sep",
    viento: "SE Offshore"
  },
  {
    nombre: "Cloudbreak",
    pais: "Fiji",
    oceano: "Pacifico",
    nivel: "Avanzado",
    ola: "Reef Break",
    imagen: "imagenes/fotosspots/cloudbreak.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/208779",
    descripcion: "Impresionante izquierda de mar abierto que aguanta cualquier tamaño con tubos masivos e intensos sobre coral.",
    altura: "4-20+ ft",
    temporada: "Abr - Oct",
    viento: "E/SE Offshore"
  },
  {
    nombre: "Snapper Rocks",
    pais: "Australia",
    oceano: "Pacifico",
    nivel: "Intermedio",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/snapperrocks.jpg",
    estrellas: "★★★★★",
    clima: "https://www.windguru.cz/476420",
    descripcion: "El inicio del Superbank, creando derechas kilométricas conectadas con miles de oportunidades para tubos y giros.",
    altura: "3-8 ft",
    temporada: "Dici - Abr",
    viento: "S/SW Offshore"
  },
  {
    nombre: "Raglan",
    pais: "Nueva Zelanda",
    oceano: "Pacifico",
    nivel: "Intermedio",
    ola: "Point Break",
    imagen: "imagenes/fotosspots/manubay.jpg",
    estrellas: "★★★★",
    clima: "https://www.windguru.cz/25736",
    descripcion: "Famosa izquierda sobre cantos de roca volcánica negra con tramos kilométricos e ideal ritmo para carving.",
    altura: "3-8 ft",
    temporada: "Mar - Oct",
    viento: "S/SW Offshore"
  }
];


/**
 * Renderiza e inserta en el DOM las tarjetas de los spots de surf contenidos en la lista ingresada.
 * @method mostrarTarjetas
 * @param {array} lista Arreglo de objetos que representa la lista de spots a mostrar.
 */


let mostrarTarjetas = (lista) => {
  let contenedor = document.getElementById("listaSpots");
  contenedor.innerHTML = "";

  lista.forEach((spo) => {
    contenedor.innerHTML += `
      <div class="tarjeta">
        <div class="imagen-tarjeta" style="background-image: url('${spo.imagen}')">
          <span class="Nivel2">${spo.nivel}</span>
          <div class="estrellas">${spo.estrellas}</div>
        </div>

        <div class="contenido-tarjeta">
          <div class="title-row">
            <h2>${spo.nombre}</h2>
            <a href="${spo.clima}" class="clima" target="_blank" rel="noopener noreferrer">Clima</a>
          </div>

          <p class="ubicacion">${spo.nombre} · ${spo.pais} · Oceano ${spo.oceano}</p>
          <p class="description">${spo.descripcion}</p>

          <div class="info-grid">
            <div class="info-box">
              <span>ALTURA DE OLA</span>
              <p>${spo.altura}</p>
            </div>
            <div class="info-box">
              <span>MEJOR TEMPORADA</span>
              <p>${spo.temporada}</p>
            </div>
            <div class="info-box">
              <span>VIENTO</span>
              <p>${spo.viento}</p>
            </div>
            <div class="info-box">
              <span>BREAK</span>
              <p>${spo.ola}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};


/**
 * Filtra la lista de spots según el texto ingresado en el buscador y las opciones seleccionadas en los desplegables de país, nivel, ola y océano.
 * @method filtrarTarjeta
 */

let filtrarTarjeta = () => {
  let searchWord = document.getElementById("Busqueda").value;
  let pais = document.getElementById("Pais").value;
  let nivel = document.getElementById("Nivel").value;
  let ola = document.getElementById("Ola").value;
  let oceano = document.getElementById("Oceano").value;

  let newLista = spots;

  if (searchWord) {
    newLista = newLista.filter((spo) =>
      spo.nombre.toLowerCase().includes(searchWord.toLowerCase())
    );
  }

  if (pais) {
    newLista = newLista.filter((spo) => spo.pais == pais);
  }

  if (nivel) {
    newLista = newLista.filter((spo) => spo.nivel == nivel);
  }

  if (ola) {
    newLista = newLista.filter((spo) => spo.ola == ola);
  }

  if (oceano) {
    newLista = newLista.filter((spo) => spo.oceano == oceano);
  }

  if (newLista.length === 0) {
    alert("No se encontraron spots con los criterios ingresados.");
    mostrarTarjetas(spots);
  } else {
    mostrarTarjetas(newLista);
  }
};


/**
 * Selecciona un spot desde la interaccion con un boton desde el mapa, y ejecuta el filtrado de tarjetas.
 * @method mostrarSpot
 * @param {string} nombreSpot Nombre del lugar seleccionado desde el botón del mapa.
 */

let mostrarSpot = (nombreSpot) => {
  let newLista = spots.filter(
    (spo) => spo.nombre.toLowerCase() == nombreSpot.toLowerCase()
  );
  mostrarTarjetas(newLista);
};



document.addEventListener("DOMContentLoaded", () => {
    mostrarTarjetas(spots);
});