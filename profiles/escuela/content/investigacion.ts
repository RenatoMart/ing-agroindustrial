// Fuente: "LINEA DE INVESTIGACION" (Drive), tabla docente → líneas. Se invirtió a
// línea → docentes (varios docentes comparten línea). El documento no declara un
// responsable único por línea ni una descripción del área, así que:
//   - `responsable` lista a los docentes que trabajan en esa línea (no hay un
//     único responsable designado en la fuente).
//   - `descripcion` queda vacía a propósito: no hay texto de sumilla en la fuente
//     y no se debe inventar.
export const lineasInvestigacion = [
  {
    nombre: "Bioquímica y Biología Molecular",
    descripcion: "",
    responsable: "Guillermo Alberto Linares Luján, Jesús Alexander Sánchez González, Víctor Javier Vásquez Villalobos"
  },
  {
    nombre: "Biotecnología Industrial",
    descripcion: "",
    responsable: "Guillermo Alberto Linares Luján, Jesús Alexander Sánchez González, Carmen Rosa Rojas Padilla, Gabriela del Carmen Barraza Jáuregui, Víctor Javier Vásquez Villalobos"
  },
  {
    nombre: "Ciencias Animales y Lechería",
    descripcion: "",
    responsable: "Guillermo Alberto Linares Luján, Jesús Alexander Sánchez González"
  },
  {
    nombre: "Ingeniería Industrial",
    descripcion: "",
    responsable: "Guillermo Alberto Linares Luján, Jesús Alexander Sánchez González, Juan Carlos Solano Gaviño"
  },
  {
    nombre: "Alimentos y Bebidas",
    descripcion: "",
    responsable: "Viviano Paulino Ninaquispe Zare, Juan Carlos Solano Gaviño, Carmen Rosa Rojas Padilla, Gabriela del Carmen Barraza Jáuregui, Julio César Rojas Naccha, Karla Margielly Zavaleta Guzmán, Gregorio Mayer Ascón Dionicio"
  },
  {
    nombre: "Negocios y Management",
    descripcion: "",
    responsable: "Juan Carlos Solano Gaviño, Karla Margielly Zavaleta Guzmán"
  },
  {
    nombre: "Automatización y Sistemas de Control",
    descripcion: "",
    responsable: "Raúl Benito Siche Jara, Víctor Javier Vásquez Villalobos"
  },
  {
    nombre: "Ingeniería de Materiales",
    descripcion: "",
    responsable: "Raúl Benito Siche Jara"
  },
  {
    nombre: "Nanomateriales",
    descripcion: "",
    responsable: "Carmen Rosa Rojas Padilla, Gabriela del Carmen Barraza Jáuregui"
  },
  {
    nombre: "Otras Ciencias Agropecuarias",
    descripcion: "",
    responsable: "Carmen Rosa Rojas Padilla, Julio César Rojas Naccha"
  },
  {
    nombre: "Otras Ingenierías y Tecnologías",
    descripcion: "",
    responsable: "Gregorio Mayer Ascón Dionicio"
  },
  {
    nombre: "Biología Celular y Microbiología",
    descripcion: "",
    responsable: "Víctor Javier Vásquez Villalobos"
  }
];

export const proyectos = [
  {
    titulo: "Título del proyecto de investigación 1",
    estado: "En ejecución",
    año: "2023-2024",
    descripcion: "Descripción breve del primer proyecto de investigación del programa.",
    investigadores: ["Nombre del Investigador 1", "Nombre del Investigador 2"]
  },
  {
    titulo: "Título del proyecto de investigación 2",
    estado: "Finalizado",
    año: "2022-2023",
    descripcion: "Descripción breve del segundo proyecto de investigación del programa.",
    investigadores: ["Nombre del Investigador 1", "Nombre del Investigador 2"]
  }
];

// Fuente: revistas.unitru.edu.pe/index.php/agroindscience (revista de la propia
// UNT). Se incluye la publicación de una docente del programa en el número
// vigente (Vol. 16 N.° 2, 2026).
export const publicaciones = [
  {
    titulo: "Nanoencapsulación de compuestos bioactivos de plantas medicinales infravaloradas: Una revisión narrativa con enfoque bibliométrico",
    autores: "Jacobo-Cruz, L., Chilon-Neyra, J., & Barraza-Jáuregui, G.",
    año: 2026,
    revista: "Agroindustrial Science, Vol. 16, N.° 2, pp. 319-328",
    url: "https://revistas.unitru.edu.pe/index.php/agroindscience/es/article/view/7505"
  },
  {
    titulo: "Oca (Oxalis tuberosa): Propiedades nutritivas y funcionales. Contenido de oxalato y su influencia en el humano",
    autores: "Dionicio-Varas, E., Boñon-Rocha, E., Llontop-Ayasta, N., Rojas-Naccha, J. C., & Vásquez-Villalobos, V. J.",
    año: 2026,
    revista: "Agroindustrial Science, Vol. 16, N.° 1, pp. 165-174",
    url: "https://revistas.unitru.edu.pe/index.php/agroindscience/es/article/view/7152"
  },
  {
    titulo: "Secado del tarwi (Lupinus mutabilis) por combinación de microondas y aire caliente",
    autores: "Ninaquispe Zare, V. P.",
    año: 2014,
    revista: "Agroindustrial Science, Vol. 3, N.° 2, pp. 147-154",
    url: "https://revistas.unitru.edu.pe/index.php/agroindscience/es/article/view/521"
  }
];

// Revistas científicas vinculadas al programa.
// Fuente: revistas.unitru.edu.pe/index.php/agroindscience (consultada 25-07-2026).
export interface Revista {
  nombre: string;
  descripcion: string;
  issn: string;
  doi: string;
  periodicidad: string;
  indexaciones: string[];
  correo: string;
  url: string;
}

export const revistas: Revista[] = [
  {
    nombre: "Agroindustrial Science",
    descripcion: "Revista científica de acceso abierto de la Universidad Nacional de Trujillo, donde profesionales de las ciencias agroindustriales difunden sus trabajos de investigación en español, inglés o portugués: biotecnología, manejo de plagas, sistemas agrícolas, postcosecha, procesos agroindustriales, industria de alimentos, biocombustibles, envases y embalajes, y gestión agroindustrial.",
    issn: "2226-2989 (Electrónico)",
    doi: "10.17268/agroind.sci",
    periodicidad: "Cuatrimestral",
    indexaciones: ["DOAJ", "EBSCO", "REDIB", "DIALNET", "MIAR", "LATINDEX", "BASE", "Sherpa Romeo"],
    correo: "agroind.science@unitru.edu.pe",
    url: "https://revistas.unitru.edu.pe/index.php/agroindscience/es"
  }
];

export const convenios = [
  {
    institucion: "Nombre de la institución aliada",
    tipo: "Interinstitucional",
    descripcion: "Descripción breve del convenio: con quién y para qué.",
    vigencia: "2022 - 2027"
  }
];
