export const director = {
  nombre: "Dr. Viviano Paulino Ninaquispe Zare",
  cargo: "Director de la Escuela Profesional de Ingeniería Agroindustrial",
  correo: "vninaquispe@unitru.edu.pe",
  bio: "Doctor en Ciencias e Ingeniería por la Universidad Nacional de Trujillo, Magíster en Gerencia de Industrias Agropecuarias y Pesqueras e Ingeniero Agroindustrial por la Universidad Nacional del Santa. Docente principal a dedicación exclusiva del Departamento Académico de Ciencias Agroindustriales.",
  foto: null // PENDIENTE: falta la fotografía del director.
};

// PENDIENTE: no se ha proporcionado la relación de coordinadores del programa.
export const coordinadores = [
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) Académico",
    correo: "coordinacion.academica@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Investigación",
    correo: "coordinacion.investigacion@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Prácticas Preprofesionales",
    correo: "coordinacion.practicas@universidad.edu.pe"
  }
];

// Estructura según el Estatuto UNT vigente (2021, pág. 18): una Facultad se
// compone de Escuela Profesional, Departamentos Académicos, Unidad de Segunda
// Especialidad, Unidad de Investigación y Unidad de Posgrado.
export const organigrama = {
  nombre: "Facultad",
  cargo: "Decano(a)",
  hijos: [
    { nombre: "Escuela Profesional", cargo: "Director(a) de Escuela" },
    { nombre: "Departamentos Académicos", cargo: "Jefe(s) de Departamento" },
    { nombre: "Unidad de Segunda Especialidad", cargo: "" },
    { nombre: "Unidad de Investigación", cargo: "" },
    { nombre: "Unidad de Posgrado", cargo: "" }
  ]
};
