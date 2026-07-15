# REQUISITOS — Información para la web del Programa de Ingeniería Agroindustrial

Checklist maestro de **toda** la información que necesita el sitio, sección por sección,
con el formato en que debe entregarse y su estado actual.

- **Escuela activa:** Ingeniería Agroindustrial — Facultad de Ciencias Agropecuarias, UNT
- **Perfil que se edita:** `profiles/escuela/` (**nunca** `src/`)
- **Última actualización:** 14-07-2026

## Cómo leer el estado

| Símbolo | Significado |
|---|---|
| ✅ | Cargado con información real y verificada |
| ⚠️ | Parcial — hay algo cargado, pero falta completar |
| ⬜ | Falta la información. El campo sigue con el texto de plantilla |
| 🚫 | **Bloqueado**: la página está "En Construcción" dentro de `src/` y no tiene campo en el perfil. Aunque tengas la información, hoy no hay dónde cargarla sin tocar `src/` |

**Regla de trabajo:** si un dato no está confirmado por fuente oficial, se deja en ⬜ y **no** se
rellena con texto aproximado. Ver `profiles/README.md`.

## Fuentes ya procesadas

| Fuente | Qué aportó |
|---|---|
| `CONTENIDO MÍNIMO DE LA PÁGINA WEB AGROINDUSTRIAL.docx` | Historia, perfiles de ingreso/egreso, cifras, autoridades, descripción de la carrera |
| `Hoja 1.html` (planilla de docentes) | Nombres de los 16 docentes + enlaces a sus hojas de vida |
| Escalafón UNT (SGA, hojas de vida públicas) | Grado, estudios y condición (nombrado/contratado) de los 16 docentes |
| `admisionunt.info/docs/ingenieriaagroindustrial.pdf` | Malla curricular oficial (**leída pero no cargada**, ver sección Académico) |

## Resumen por sección

| Sección | Estado | Falta principal |
|---|---|---|
| Configuración global | ⚠️ | Entidad acreditadora, enlaces institucionales |
| Inicio | ⚠️ | Mensaje del decano, ambientes, noticias, avisos |
| Nosotros | ⚠️ | Misión, visión, valores |
| Académico | ⚠️ | **Malla curricular**, objetivos, titulación |
| Organización | ⚠️ | Fotos, RENACYT, cursos por docente, organigrama |
| Investigación | ⬜ | Todo |
| Admisión | ⚠️ | Modalidades, requisitos, fechas |
| Contacto | ⚠️ | Teléfono y correo institucional, horario, redes |

# 1. Configuración global

Identidad que se repite en navbar, footer y buscadores.

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Nombre del programa | `config/site.ts` → `programa.nombre` | Texto | ✅ | "Programa de Estudios de Ingeniería Agroindustrial" |
| Nombre corto | `config/site.ts` → `programa.nombreCorto` | Texto | ✅ | "Ingeniería Agroindustrial" |
| Universidad | `config/site.ts` → `universidad` | Texto + siglas + URL | ✅ | UNT · unitru.edu.pe |
| Facultad | `config/site.ts` → `facultad` | Texto | ✅ | Facultad de Ciencias Agropecuarias |
| Wordmark del navbar | `config/site.ts` → `wordmark` | 2 líneas cortas | ✅ | "Ingeniería" / "Agroindustrial" |
| Tagline (footer) | `config/site.ts` → `tagline` | 1 frase | ✅ | Tomado de la descripción de la carrera |
| **Entidad acreditadora** | `config/site.ts` → `acreditacion` | Nombre de entidad + texto del sello | ⬜ | El documento dice que el programa **está acreditado y con reconocimiento internacional**, pero **no nombra la entidad**. ¿ICACIT? ¿SINEACE? Hoy el sello del hero muestra "Acreditada por la Entidad" |
| Libro de Reclamaciones | `config/site.ts` → `enlaces.libroReclamaciones` | URL | ⬜ | Confirmar la URL oficial de la UNT |
| Bolsa de trabajo | `config/site.ts` → `enlaces.bolsaTrabajo` | URL | ⬜ | |
| Enlaces institucionales (footer) | `config/site.ts` → `enlacesInstitucionales` | Lista de `{ label, url }` | ⬜ | Definir qué 3 portales enlazar |
| Título y descripción SEO | `config/seo.ts` | Texto (≤ 160 car. la descripción) | ✅ | |
| Textos alternativos de logos | `config/branding.ts` → `alt` | Texto | ✅ | |
| Etiquetas del menú | `config/navigation.ts` | Texto | ✅ | Solo etiquetas; **las rutas no se cambian** |

# 2. Inicio

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Eyebrow + título del hero | `config/site.ts` → `hero` | Texto, título a 2 líneas | ✅ | |
| Descripción del hero | `config/site.ts` → `hero.descripcion` | 1 párrafo (2-3 líneas) | ✅ | |
| Botones del hero | `config/site.ts` → `hero.ctas` | `{ label, to }` | ✅ | Rutas internas ya válidas |
| Cifras destacadas (3) | `config/site.ts` → `cifras` | `{ numero, etiqueta, sub }` | ✅ | 830 egresados · 208 créditos · creado en 1993 |
| Nombre y cargo del decano | `config/site.ts` → `decana` | Texto | ✅ | Dr. Raúl Benito Siche Jara |
| **Mensaje del decano** | `config/site.ts` → `decana.mensaje` | 1 párrafo de bienvenida | ⬜ | Falta el texto real |
| Video de bienvenida | `config/site.ts` → `decana.video.youtubeId` | ID de YouTube (solo el ID) | ⬜ | Si se deja vacío, el reproductor no aparece |
| Accesos rápidos | `content/home.ts` → `accesosRapidos` | `{ titulo, descripcion, icono, link }` | ✅ | Estructural, ya apunta a rutas reales |
| **Ambientes / laboratorios** | `content/home.ts` → `ambientes` | `{ badge, titulo, descripcion, imagen, alt }` | ⬜ | Faltan nombres, descripciones y **fotos** de laboratorios |
| **Noticias** | `content/noticias.ts` | `{ id, categoria, categoriaColor, titulo, resumen, fecha (YYYY-MM-DD), fechaFormateada, link, imagen }` | ⬜ | Hoy son 3 noticias de plantilla con imágenes de relleno |
| **Avisos (banner superior)** | `content/avisos.ts` | `{ id, texto, link, externo }` | ⬜ | Si se deja `[]`, el banner no se muestra |

# 3. Nosotros

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Año de fundación | `content/identidad.ts` → `historia.fundacion` | Número | ✅ | 1993 |
| Reseña histórica | `content/identidad.ts` → `historia.resena` | 1-2 párrafos | ✅ | Texto del documento |
| Hitos | `content/identidad.ts` → `historia.hitos` | `{ año, descripcion }` | ✅ | 1993 · 1995 · 2000 · 2013 · 2018 |
| **Misión** | `content/identidad.ts` → `mision` | 1 párrafo | ⬜ | Vacío en el documento |
| **Visión** | `content/identidad.ts` → `vision` | 1 párrafo | ⬜ | Vacío en el documento |
| **Valores** | `content/identidad.ts` → `valores` | `{ nombre, descripcion }` × 6 | ⬜ | No se ha proporcionado |

# 4. Académico

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Perfil del ingresante | `content/academico.ts` → `perfilIngresante` | `{ area, descripcion }` | ✅ | 4 bloques de competencias |
| Perfil del egresado | `content/academico.ts` → `perfilEgresado` | `{ area, descripcion }` | ✅ | UC1–UC4 |
| Grado y título | `content/academico.ts` → `gradoAcademico`, `tituloProfesional` | Texto | ✅ | Cargado (hoy ninguna página los usa) |
| **Malla curricular** | `content/malla.ts` → `CURRICULUM_DATA` | `{ id, name, type, credits, hoursT, hoursP, cycle, isElective, description }` | ⬜ | **Contiene la malla de EDUCACIÓN PRIMARIA.** Ver detalle abajo |
| **Prerrequisitos** | `content/malla.ts` → `PREREQUISITES_EDGES` | `{ id, source, target, style }` | ⬜ | No hay documento de prerrequisitos |
| **Objetivos educacionales** | — | — | 🚫 | Página "En Construcción" en `src/`. Sin campo en el perfil |
| **Objetivos académicos** | — | — | 🚫 | Igual que el anterior |
| **Titulación / trámites** | `content/academico.ts` → `tramites` | `{ id, titulo, descripcion, requisitos[], pdfUrl }` | ⬜ | Faltan requisitos oficiales y los PDF. Los de `docs/` son de Educación Primaria |
| **Movilidad** | `content/academico.ts` → `movilidad` | `{ institucion, tipo, descripcion, modalidad }` | ⬜ | |
| **Convenios** | `content/investigacion.ts` → `convenios` | `{ institucion, tipo, descripcion, vigencia }` | ⬜ | |
| Laboratorios | — | — | 🚫 | Página "En Construcción" en `src/` |
| Responsabilidad social | — | — | 🚫 | Página "En Construcción" en `src/` |

## Detalle: qué falta para cargar la malla

La malla oficial (`admisionunt.info/docs/ingenieriaagroindustrial.pdf`) ya fue leída y **valida**:
los créditos por ciclo suman **21+21+21+21+20+20+20+22+22+20 = 208**, que coincide con el total
oficial. Formato de cada curso en el PDF: `Teoría/Práctica/Créditos` (ej. `2/2/3`).

Se tiene | Falta
---|---
Nombre del curso | **Descripción de cada curso** (≈63 cursos) — no existe en ninguna fuente
Ciclo (I–X) | **Prerrequisitos** — las flechas del PDF no son legibles con fiabilidad
Horas de teoría y práctica | **Código de curso** (solo hay 33 códigos, de cursos de otros departamentos)
Créditos | |
Tipo por color (generales / específicas / especialidad) | |

Dos problemas adicionales a resolver antes de cargarla:

1. **La categoría "COMPLEMENTARIA"** (amarillo: las Prácticas Preprofesionales) no existe en el
   sistema, que solo admite `general`, `especifico` o `especialidad`.
2. **Las Prácticas Preprofesionales están mal ubicadas en el PDF** (las cajas se superponen). Por
   aritmética de créditos correspondería: Prácticas I → Ciclo VIII (`0/4/2`), Prácticas II → Ciclo IX
   (`0/4/2`), Prácticas III → Ciclo X (`0/16/8`). **Requiere confirmación oficial.**

> Decisión tomada el 14-07-2026: **no se toca la malla** hasta tener esta información.
> Mientras tanto, la web sigue mostrando cursos de Educación Primaria.

# 5. Organización

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Director de escuela | `content/autoridades.ts` → `director` | `{ nombre, cargo, correo, bio, foto }` | ⚠️ | Cargado. **Falta la foto** |
| **Coordinadores** | `content/autoridades.ts` → `coordinadores` | `{ nombre, cargo, correo }` | ⬜ | No se ha proporcionado la relación |
| Docentes: nombre | `content/docentes.ts` → `nombre` | Texto | ✅ | 16 docentes |
| Docentes: grado | `content/docentes.ts` → `grado` | "Doctor" / "Doctora" / "Magíster" | ✅ | Del escalafón UNT |
| Docentes: departamento | `content/docentes.ts` → `departamento` | Texto | ✅ | Todos en Ciencias Agroindustriales |
| Docentes: condición | `content/docentes.ts` → `condicion` | "Nombrado" / "Contratado" | ✅ | 14 nombrados · 2 contratados |
| Docentes: especialidades | `content/docentes.ts` → `especialidades` | Lista de textos | ✅ | Derivadas de sus grados del escalafón |
| **Docentes: curso principal** | `content/docentes.ts` → `cursoPrincipal` | Texto | ⬜ | **Falta la asignación de cursos por docente.** Hoy va vacío y el frente de la tarjeta no muestra curso |
| **Docentes: investigador / RENACYT** | `content/docentes.ts` → `investigador`, `categoriaInvestigacion` | `true/false` + "RENACYT · Nivel X" | ⬜ | Falta saber quién es investigador. Mientras todos sean `false`, el filtro "Investigadores" no aparece |
| **Docentes: fotos** | `content/docentes.ts` → `foto` + `assets/` | Imagen vertical (~3:4), `.webp` o `.jpg` | ⬜ | Sin foto se muestra una silueta |
| **Organigrama** | `content/autoridades.ts` → `organigrama` | `{ nombre, cargo, hijos[] }` | ⬜ | **Pendiente: el usuario enviará la imagen.** Hoy tiene la estructura genérica del Estatuto UNT |
| Mapa de procesos | `assets/organigrama/mapa-procesos.png` | Imagen | ⬜ | Verificar si la actual es de Agroindustrial |
| **Comités** (5) | — | — | 🚫 | Página "En Construcción" en `src/`. Se tiene el dato: Presidente del Comité de Calidad = Dr. Juan Carlos Solano Gaviño; Tutoría = R.D. 503-2026 |
| **Órganos de gobierno** | — | — | 🚫 | Página "En Construcción" en `src/` |
| **Administrativos** | — | — | 🚫 | Página "En Construcción" en `src/`. El documento indica 1 administrativo y 3 ayudantes de laboratorio |

# 6. Investigación

Ninguna de estas filas tiene información en el documento (todas vienen vacías).

| Dato | Dónde se edita | Formato esperado | Estado |
|---|---|---|---|
| **Líneas de investigación** | `content/investigacion.ts` → `lineasInvestigacion` | `{ nombre, descripcion, responsable }` | ⬜ |
| **Proyectos** | `content/investigacion.ts` → `proyectos` | `{ titulo, estado, año, descripcion, investigadores[] }` | ⬜ |
| **Publicaciones** | `content/investigacion.ts` → `publicaciones` | `{ titulo, autores, año, revista, url }` | ⬜ |
| **Convenios** | `content/investigacion.ts` → `convenios` | `{ institucion, tipo, descripcion, vigencia }` | ⬜ |
| Revistas | — | — | 🚫 (página "En Construcción" en `src/`) |

# 7. Admisión

Panel lateral flotante + enlaces.

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Portal de Admisión | `content/admision.ts` → `portalAdmision` | URL | ✅ | `admisionunt.info/carreraDetalle/24` |
| **Modalidades de ingreso** | `content/admision.ts` → `modalidadesAdmision` | `{ titulo, dirigidoA, vacantes, descripcion }` | ⬜ | Faltan las modalidades y el número de vacantes |
| **Requisitos y fechas** | `content/admision.ts` → `infoUtilAdmision` | `{ titulo, detalle }` | ⬜ | |
| Estadística: Matriculados | `config/navigation.ts` → `ADMISION_GROUPS` | URL | ✅ | Ficha pública del programa |
| Estadística: Graduados | `config/navigation.ts` → `ADMISION_GROUPS` | URL | ✅ | Ficha pública del programa |
| **Estadística: Ingresantes** | `config/navigation.ts` → `ADMISION_GROUPS` | URL | ⬜ | La Declaración Pública no declara fuente para este dato |
| **Estadística: Titulados** | `config/navigation.ts` → `ADMISION_GROUPS` | URL | ⬜ | Igual que el anterior |
| Política de Gestión de Calidad | `config/navigation.ts` → `ADMISION_GROUPS` | URL | ✅ | Ya apuntaba a Drive |
| **Guía del postulante** | — | — | 🚫 | Página "En Construcción" en `src/` |
| **Resoluciones** | — | — | 🚫 | Página "En Construcción" en `src/` |

> El documento trae las tablas de matriculados/egresados/graduados 2020–2026 (Tabla 0-1) y de
> personal (Tabla 0-2), pero **el sitio no tiene una página para publicarlas**: solo enlaza a la
> ficha externa. Si se quieren mostrar en la web, hay que definirlo aparte.

# 8. Contacto

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Dirección | `content/contacto.ts` → `direccion` | Texto | ✅ | Av. Juan Pablo II s/n — Ciudad Universitaria |
| Mapa | `content/contacto.ts` → `mapaEmbedUrl` | URL "embed" de Google Maps | ⚠️ | Apunta al campus UNT genérico. Afinar al pabellón de la facultad |
| **Teléfono institucional** | `content/contacto.ts` → `telefonos` | Lista de textos | ⬜ | **Decisión 14-07-2026: no se publican los celulares personales** de las autoridades que trae el documento. Falta un teléfono institucional (con anexo) |
| **Correo institucional** | `content/contacto.ts` → `correo` | Correo | ⬜ | Falta un correo del programa (no el personal del director) |
| **Horario de atención** | `content/contacto.ts` → `horarioAtencion` | Texto | ⬜ | |
| **Redes sociales** | `content/contacto.ts` → `redesSociales` | URLs | ⬜ | Facebook, Instagram, YouTube, X |
| **Libro de Reclamaciones** | `content/contacto.ts` → `libroReclamacionesUrl` | URL | ⬜ | |

# 9. Recursos gráficos (`profiles/escuela/assets/`)

| Archivo | Uso | Estado | Nota |
|---|---|---|---|
| `logo-universidad.png` | Navbar + footer | ⚠️ | Existe. Confirmar que es el logo UNT vigente |
| `logo-escuela.png` | Navbar | ⚠️ | Existe. **Confirmar que es el logo de Agroindustrial** y no de otra escuela |
| `logo-bolsa-trabajo.png` | Hero | ⚠️ | Existe |
| `libro-reclamaciones.svg` | Hero | ⚠️ | Existe |
| `hero/hero-1..3` | Fondo del hero | ⚠️ | Existen. **Confirmar que son fotos de Agroindustrial**. Recomendado: `.webp`, horizontal |
| Fotos de docentes (16) | Tarjetas de plana docente | ⬜ | Vertical ~3:4, `.webp` o `.jpg` |
| Foto del director | Página Dirección | ⬜ | Vertical ~3:4 |
| Imágenes de ambientes | Inicio | ⬜ | Horizontal |
| `organigrama/mapa-procesos.png` | Estructura organizacional | ⚠️ | Confirmar si corresponde a Agroindustrial |

# 10. Lo más urgente

1. **Malla curricular** — hoy la web publica cursos de Educación Primaria. Se necesita: descripción
   por curso, prerrequisitos y confirmación de las Prácticas Preprofesionales.
2. **Entidad acreditadora** — el sello del hero dice "Acreditada por la Entidad".
3. **Misión y visión** — están vacías en el documento fuente.
4. **Fotos** (16 docentes + director) y **cursos por docente**.
5. **Contacto institucional** — teléfono, correo y horario.
6. **Organigrama** — pendiente de la imagen.

> Las filas marcadas 🚫 requieren tocar `src/`, que está fuera del alcance de este trabajo.
> Si esas secciones deben publicarse, hay que decidirlo con quien mantiene la plantilla.
