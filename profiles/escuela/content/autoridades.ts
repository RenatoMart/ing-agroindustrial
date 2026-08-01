import fotoNinaquispe from '../assets/personas/ninaquispe-zare.webp';
import fotoSanchez from '../assets/personas/sanchez-gonzalez.webp';

export const director = {
  nombre: "Mg. Jesús Alexander Sánchez González",
  cargo: "Director de la Escuela Profesional de Ingeniería Agroindustrial",
  correo: "agroindustrial@unitru.edu.pe",
  bio: "Magíster en Ciencias, mención Microbiología y Tecnología de Alimentos por la Universidad Nacional de Trujillo, y Magíster en Evaluación de la Calidad y Procesos de Certificación en Educación Superior por la Universidad Internacional de La Rioja. Ingeniero Agroindustrial por la Universidad Nacional de Trujillo. Docente nombrado del Departamento Académico de Ciencias Agroindustriales.",
  foto: fotoSanchez // Foto oficial (carpeta compartida assets/personas/).
};

// El Director del Departamento Académico se muestra en esta misma página (el menú
// tiene la entrada "Director de departamento" → /organizacion/direccion). La página
// solo expone `director` y `coordinadores`, así que va como primera tarjeta de esta lista.
// PENDIENTE: no se ha proporcionado la relación de coordinadores del programa.
export const coordinadores = [
  {
    nombre: "Dr. Viviano Paulino Ninaquispe Zare",
    cargo: "Director del Departamento Académico de Ciencias Agroindustriales",
    correo: "vninaquispe@unitru.edu.pe",
    foto: fotoNinaquispe
  },
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
