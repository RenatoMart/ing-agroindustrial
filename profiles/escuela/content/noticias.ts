// Noticias y eventos institucionales — editar aquí para actualizar el feed.
// Por ahora no hay noticias publicadas: con la lista vacía, las páginas muestran
// el mensaje "no hay noticias por el momento". Agrega objetos con la forma de
// `Noticia` para que vuelvan a aparecer.
export interface Noticia {
  id: number;
  categoria: string;
  categoriaColor: string;
  titulo: string;
  resumen: string;
  fecha: string; // YYYY-MM-DD
  fechaFormateada: string;
  link: string;
  imagen: string;
}

export const noticias: Noticia[] = [];
