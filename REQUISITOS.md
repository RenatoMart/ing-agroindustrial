# REQUISITOS — Información para la web del Programa de Ingeniería Agroindustrial

Checklist maestro de **toda** la información que necesita el sitio, sección por sección,
con el formato en que debe entregarse y su estado actual.

- **Escuela activa:** Ingeniería Agroindustrial — Facultad de Ciencias Agropecuarias, UNT
- **Perfil que se edita:** `profiles/escuela/` (**nunca** `src/`)
- **Última actualización:** 09-08-2026

## Cómo leer el estado

| Símbolo | Significado |
|---|---|
| ✅ | Cargado con información real y verificada |
| ⚠️ | Parcial — hay algo cargado, pero falta completar |
| ⬜ | Falta la información. El campo sigue con el texto de plantilla |
| 🚫 | **Bloqueado**: la página está "En Construcción" dentro de `src/` y no tiene campo en el perfil. Aunque tengas la información, hoy no hay dónde cargarla sin tocar `src/` |

**Regla de trabajo:** si un dato no está confirmado por fuente oficial, se deja en ⬜ y **no** se
rellena con texto aproximado. Ver `profiles/README.md`.

## Estado de Drive (23-07-2026)

Conector **reconectado**. Estructura mapeada:

- **Programa de Estudios – Ing. Agroindustrial** → `DOCENTES` (9 fotos, ✅ descargadas y cableadas),
  `FOTO GENERAL` (1), `ESTUDIANTES` (3).
- **PAGINA WEB** → `CV DOCENTES` (ignorado), `GRADOS ACADÉMICOS` (✅ trámites cargados), `LABORATORIOS`
  (vacía), `LÍNEAS DE INVESTIGACIÓN` (subcarpeta vacía), `MALLA CURRICULAR` (✅ ya cargada),
  `ORGANIGRAMA` (diferido por el usuario), `SILABOS`, `SINEACE` (diferido por el usuario).

Nota técnica: la búsqueda del conector no indexa el contenido recién compartido; se enumeró vía
`embeddedfolderview` y se descargó con los IDs de archivo directos.

## Comités como cards — HECHO ✅

Editar `src/` fue **aprobado por el usuario** para esta feature. Implementado en
`src/pages/organizacion/Comites.tsx` + `profiles/escuela/content/comites.ts`. Ver sección Organización.
**Órganos de Gobierno** sigue pendiente (faltan los nombres de los integrantes).

## Fuentes ya procesadas

| Fuente | Qué aportó |
|---|---|
| `CONTENIDO MÍNIMO DE LA PÁGINA WEB AGROINDUSTRIAL.docx` | Historia, perfiles de ingreso/egreso, cifras, autoridades, descripción de la carrera |
| `Hoja 1.html` (planilla de docentes) | Nombres de los 16 docentes + enlaces a sus hojas de vida |
| Escalafón UNT (SGA, hojas de vida públicas) | Grado, estudios y condición (nombrado/contratado) de los 16 docentes |
| `MALLA CURRICULAR.xlsx` (Drive) | Malla oficial con códigos, tipos, horas y prerrequisitos (**cargada** ✅) |
| `R.D. N° 503-2026-FAC.CC.AGROP.` | Integrantes de 3 comités (Egresado, Ciencia y Tecnología, Tutoría) |
| Carpeta DOCENTES (Drive) | 9 fotos oficiales de docentes (**cargadas** ✅) |
| Carpeta GRADOS ACADÉMICOS (Drive) | Trámites de Bachiller y Título (**cargados** ✅) |
| Datos dictados por el usuario (31-07-2026) | Correo institucional, horario de atención, Director de escuela (Sánchez) y Director de departamento (Ninaquispe) |
| Tabla 0-1 del programa (09-08-2026) | Matriculados por ciclo, egresados y grados de Bachiller 2020–2026 (**página `/admision/estadisticas`** ✅) |
| Propuesta curricular (09-08-2026) | Los 6 valores institucionales (**cargados** ✅) |
| `admisionunt.info/docs/VACANTES_2027.pdf` | Vacantes exactas 2027-I de Agroindustrial (**cargadas** ✅) |
| `organigrama.pdf` (09-08-2026) | Organigrama de la Escuela → convertido a PNG (**cargado** ✅) |

## Resumen por sección

| Sección | Estado | Falta principal |
|---|---|---|
| Configuración global | ⚠️ | Entidad acreditadora, enlaces institucionales |
| Inicio | ⚠️ | Mensaje del decano, ambientes, noticias, avisos |
| Nosotros | ✅ | Confirmar si misión/visión son del programa o de la facultad |
| Académico | ⚠️ | Sumillas de la malla, movilidad, convenios |
| Organización | ⚠️ | 7 fotos restantes, RENACYT, cursos por docente, 2 comités, órganos de gobierno, administrativos |
| Investigación | ⬜ | Todo |
| Admisión | ⚠️ | Modalidades, requisitos, fechas |
| Contacto | ⚠️ | Teléfono institucional, Libro de Reclamaciones |

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
| **Entidad acreditadora** | `config/site.ts` → `acreditacion` | Nombre de entidad + texto del sello | ⬜ | El documento dice que el programa **está acreditado y con reconocimiento internacional**, pero **no nombra la entidad**. ¿ICACIT? ¿SINEACE? Hoy el sello del hero muestra "Acreditada por la Entidad". **Revisado 09-08-2026:** `admisionunt.info/acreditacioninfo` **NO sirve** para esto — esa página es "Acreditación de **Ingresantes**" (trámite de matrícula del postulante que ingresó), no acreditación institucional del programa; no menciona SINEACE ni ICACIT |
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
| Misión | `content/identidad.ts` → `mision` | 1 párrafo | ⚠️ | Cargada (texto proporcionado por el usuario). **Parece institucional/de facultad** (menciona "Región La Libertad", alcance global), no específica del programa — confirmar si existe una propia de Agroindustrial |
| Visión | `content/identidad.ts` → `vision` | 1 párrafo | ⚠️ | Cargada (texto proporcionado por el usuario). Mismo caso: **"Al año 2030... institución..."** suena institucional, no de programa — confirmar |
| Valores | `content/identidad.ts` → `valores` | `{ nombre, descripcion }` × 6 | ⚠️ | **6 valores cargados** (confirmados por el usuario 09-08-2026): Integridad, Autonomía responsable, Tolerancia y promoción del diálogo, Justicia y respeto por la dignidad humana, Solidaridad y compromiso social, Búsqueda y difusión de la verdad. `descripcion` queda vacía por valor (la fuente no la da individual) |

# 4. Académico

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Perfil del ingresante | `content/academico.ts` → `perfilIngresante` | `{ area, descripcion }` | ✅ | 4 bloques de competencias |
| Perfil del egresado | `content/academico.ts` → `perfilEgresado` | `{ area, descripcion }` | ✅ | UC1–UC4 |
| Grado y título | `content/academico.ts` → `gradoAcademico`, `tituloProfesional` | Texto | ✅ | Cargado (hoy ninguna página los usa) |
| Malla curricular | `content/malla.ts` → `CURRICULUM_DATA` | `{ id, name, type, credits, hoursT, hoursP, cycle, isElective, description }` | ✅ | **Plan 2018 real cargado**: 63 cursos (59 obligatorios + 4 electivos), 208 créditos. Falta solo la **sumilla/descripción** de cada curso (ver abajo) |
| Prerrequisitos | `content/malla.ts` → `PREREQUISITES_EDGES` | `{ id, source, target, style }` | ✅ | 41 prerrequisitos oficiales cargados desde el Excel |
| Objetivos educacionales | `content/academico.ts` → `objetivosEducacionales` | `{ codigo, formulacion }` | ✅ | **OE1–OE4 cargados** (Vicerrectorado Académico UNT, confirmado por el usuario 25-07-2026). Editado `src/pages/nosotros/Objetivos.tsx` (aprobado) para reemplazar "En Construcción" |
| Objetivos académicos | `content/academico.ts` → `objetivosAcademicos` | Lista de textos | ✅ | **5 objetivos cargados** (confirmados por el usuario 25-07-2026), tal cual se transcribieron de la captura. La tabla fuente traía una segunda columna que quedó cortada y no se pudo leer; se dejó fuera a propósito |
| Titulación / trámites | `content/academico.ts` → `tramites`, `titulacion` | `{ id, titulo, descripcion, requisitos[], pdfUrl }` | ✅ | **Cargado** desde los documentos oficiales de Bachiller y Título (Drive). Bachiller (RCU 274-2022, RCD 0042-2024-SUNEDU) y Título por Tesis / Suficiencia Profesional (Reglamento 007-2022-UNT/URA). `pdfUrl` enlaza a los reglamentos oficiales en Drive |
| **Movilidad** | `content/academico.ts` → `movilidad` | `{ institucion, tipo, descripcion, modalidad }` | ⬜ | |
| **Convenios** | `content/investigacion.ts` → `convenios` | `{ institucion, tipo, descripcion, vigencia }` | ⬜ | |
| Laboratorios | — | — | 🚫 | Página "En Construcción" en `src/` |
| Responsabilidad social | — | — | 🚫 | Página "En Construcción" en `src/` |

## Detalle de la malla — cargada ✅

Cargada desde `MALLA CURRICULAR.xlsx` (fuente con códigos, tipos, horas y prerrequisitos).
Verificado por script: **63 cursos = 59 obligatorios + 4 electivos, 208 créditos** (coincide con
la cifra oficial) y **41 aristas de prerrequisito, 0 huérfanas**.

Decisiones de mapeo aplicadas:

- **`id` = código oficial** del curso (p. ej. `2038`). Los electivos usan `EL-1`…`EL-4`.
- **`type`** por color de la malla oficial: verde→`general`, naranja→`especifico`, azul→`especialidad`.
- **Prácticas Preprofesionales** (categoría amarilla "Complementaria", que el sistema no tiene) se
  mapearon a `especialidad`, que es lo más cercano.
- **Electivos**: como en la malla oficial, se muestran como **un nodo genérico por ciclo**
  ("Electivo I…IV"). Las opciones reales de cada uno están listadas en su `description`.
- **`hoursP` = práctica + laboratorio** (P + L del Excel).

Único pendiente de la malla:

| Se tiene | Falta |
|---|---|
| Nombre, código, ciclo, horas, créditos, tipo y prerrequisitos | **Sumilla/descripción de cada curso** (no consta en la fuente). Por eso el modal de cada curso obligatorio muestra la descripción vacía |

# 5. Organización

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Director de escuela | `content/autoridades.ts` → `director` | `{ nombre, cargo, correo, bio, foto }` | ✅ | **Mg. Jesús Alexander Sánchez González** (31-07-2026), con foto oficial. Bio armada con sus grados del escalafón. Correo: el institucional del programa (no se tiene uno personal) |
| Director de departamento | `content/autoridades.ts` → `coordinadores[0]` | `{ nombre, cargo, correo, foto }` | ⚠️ | **Dr. Viviano Paulino Ninaquispe Zare** (31-07-2026), con foto oficial. Se muestra en la misma página `/organizacion/direccion` (el menú ya tiene esa entrada), pero **cae bajo el título "Coordinaciones"**, que está fijo en `src/pages/autoridades/Direccion.tsx`. Cambiar ese título requiere tocar `src/` |
| **Coordinadores** | `content/autoridades.ts` → `coordinadores` | `{ nombre, cargo, correo }` | ⬜ | No se ha proporcionado la relación (siguen 3 tarjetas de plantilla) |
| Docentes: nombre | `content/docentes.ts` → `nombre` | Texto | ✅ | 16 docentes |
| Docentes: grado | `content/docentes.ts` → `grado` | "Doctor" / "Doctora" / "Magíster" | ✅ | Del escalafón UNT |
| Docentes: departamento | `content/docentes.ts` → `departamento` | Texto | ✅ | Todos en Ciencias Agroindustriales |
| Docentes: condición | `content/docentes.ts` → `condicion` | "Nombrado" / "Contratado" | ✅ | 14 nombrados · 2 contratados |
| Docentes: especialidades | `content/docentes.ts` → `especialidades` | Lista de textos | ✅ | Derivadas de sus grados del escalafón |
| **Docentes: curso principal** | `content/docentes.ts` → `cursoPrincipal` | Texto | ⬜ | **Falta la asignación de cursos por docente.** Hoy va vacío y el frente de la tarjeta no muestra curso |
| **Docentes: investigador / RENACYT** | `content/docentes.ts` → `investigador`, `categoriaInvestigacion` | `true/false` + "RENACYT · Nivel X" | ⬜ | Falta saber quién es investigador. Mientras todos sean `false`, el filtro "Investigadores" no aparece |
| **Docentes: fotos** | `content/docentes.ts` → `foto` + `assets/personas/` | Imagen vertical (~3:4), `.webp` | ⚠️ | **9 de 16 con foto oficial** (descargadas de Drive y verificadas contra la referencia): Ninaquispe, Siche, Zavaleta, Barraza, Sánchez, Linares, Solano, Rojas Naccha, Rojas Padilla. **Faltan 7** (no están en la carpeta DOCENTES): Rodríguez Salinas, Huaccha, Vegas, Salvador, Gómez, Campos, Sisniegas |
| Organigrama (imagen) | `assets/organigrama/mapa-procesos.png` | PNG (lo carga un `<img>`, **no admite PDF**) | ✅ | **Organigrama real de la Escuela** (09-08-2026): convertido del PDF del usuario a PNG 4000×2250 (200 dpi, paleta indexada, 186 KB). Muestra Dirección de Escuela → Secretaría · Comités (5) · Sala de Docentes · Laboratorios (8) |
| `organigrama` (datos) | `content/autoridades.ts` → `organigrama` | `{ nombre, cargo, hijos[] }` | ⬜ | Sigue con la estructura genérica del Estatuto UNT. **Hoy ninguna página lo usa** (la de Organigrama muestra la imagen); alimentaría el componente `OrganigramaFlow`, que está sin montar |
| **Comités** | `content/comites.ts` + `src/pages/organizacion/Comites.tsx` | Cards de miembros `{ nombre, rol, grado, foto }` | ⚠️ | **HECHO** (4 de 6 comités): Calidad (Solano), Tutoría y Nivelación, Seguimiento al Egresado, Ciencia y Tecnología — con integrantes de la R.D. 503-2026. **Pendientes**: Comité Técnico de Currículo y Comité de Responsabilidad Social (sin datos → siguen "En construcción"). Fotos: docentes con foto se reutilizan; estudiantes con silueta |
| **Órganos de gobierno** (Consejo de Facultad, Consejeros, Centro Federado) | pendiente `content/` + `src/pages/organizacion/OrganosGobierno.tsx` | Cards de miembros | 🚫 | Editar `src/` aprobado, mismo modelo. **En espera de datos**: faltan los nombres de los integrantes (no están en los documentos) |
| **Administrativos** | pendiente `content/` + `src/pages/organizacion/…` | Cards de miembros | 🚫 | Editar `src/` aprobado (mismo modelo de cards). **En espera de datos**: el documento indica 1 administrativo y 3 ayudantes de laboratorio, pero **sin nombres** |

# 6. Investigación

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Líneas de investigación | `content/investigacion.ts` → `lineasInvestigacion` | `{ nombre, descripcion, responsable }` | ⚠️ | **12 líneas cargadas** desde la tabla "LINEA DE INVESTIGACION" (Drive), invertida de docente→líneas a línea→docentes. La fuente no da un responsable único por línea, así que `responsable` lista a todos los docentes de esa línea. `descripcion` queda vacía (no hay sumilla del área en la fuente) |
| **Proyectos** | `content/investigacion.ts` → `proyectos` | `{ titulo, estado, año, descripcion, investigadores[] }` | ⬜ | |
| Publicaciones | `content/investigacion.ts` → `publicaciones` | `{ titulo, autores, año, revista, url }` | ⚠️ | **3 publicaciones reales cargadas** (verificadas en revistas.unitru.edu.pe por metadato `citation_author`, no solo apellido): Gabriela Barraza-Jáuregui (2026), Julio César Rojas-Naccha (2026), Viviano Ninaquispe Zare (2014). Hay más candidatas por apellido (Daniel Salvador Rodríguez, posibles Linares/Sánchez/Huaccha) sin verificar aún — pedir si se quieren agregar |
| **Convenios** | `content/investigacion.ts` → `convenios` | `{ institucion, tipo, descripcion, vigencia }` | ⬜ |
| Revistas | `content/investigacion.ts` → `revistas` + `src/pages/investigacion/Revistas.tsx` | `{ nombre, descripcion, issn, doi, periodicidad, indexaciones[], correo, url }` | ✅ | **HECHO** (25-07-2026, editar `src/` autorizado por el usuario para esta página): Agroindustrial Science, revista propia de la UNT. ISSN, DOI, indexaciones (DOAJ, EBSCO, REDIB...) y contacto verificados en revistas.unitru.edu.pe |

# 7. Admisión

Panel lateral flotante + enlaces.

| Dato | Dónde se edita | Formato esperado | Estado | Nota / qué falta |
|---|---|---|---|---|
| Portal de Admisión | `content/admision.ts` → `portalAdmision` | URL | ✅ | `admisionunt.info/carreraDetalle/24` |
| Modalidades de ingreso | `content/admision.ts` → `modalidadesAdmision` | `{ titulo, dirigidoA, vacantes, descripcion }` | ✅ | **6 modalidades** (Reglamento N° 013-2023-DAD/UNT) **con vacantes exactas 2027-I** (09-08-2026, cuadro oficial R.C.U. N° 254-2026/UNT, `admisionunt.info/docs/VACANTES_2027.pdf`, fila código 24): Ordinario **14** (+3 de 5.° secundaria) · CEPUNT **11** · Premios de Excelencia **3** · Discapacidad **1**. Deportistas/Víctimas y Traslados/2.ª Profesión son supernumerarias (sin cifra en el cuadro) |
| Requisitos | `content/admision.ts` → `infoUtilAdmision` | `{ titulo, detalle }` | ✅ | Inscripción (art. 15° del reglamento) + **acreditación de ingresantes** (documentos y S/ 50.00, de `admisionunt.info/acreditacioninfo`) |
| **Fechas** | `content/admision.ts` → `infoUtilAdmision` | `{ titulo, detalle }` | ⬜ | El reglamento no trae el cronograma con fechas concretas (es un documento aparte) |
| **Estadísticas (página propia)** | `content/estadisticas.ts` + `src/pages/admision/Estadisticas.tsx` | `{ anio, porCiclo[], total, egresados, bachilleres }` | ✅ | **HECHO** (09-08-2026, `src/` autorizado): página `/admision/estadisticas` con la **Tabla 0-1 completa 2020–2026**. Estructura: 3 cifras destacadas → gráfico de matriculados por ciclo → gráfico de egresados vs. bachilleres por año → tabla de detalle. Gráficos en CSS puro (sin librerías nuevas). **Color:** dos azules validados para daltonismo y contraste; el dorado no se usa como relleno (1.98:1 sobre blanco, ilegible). El menú de Admisión lleva a las anclas de esta página |
| ~~Estadística: Ingresantes~~ | — | — | ⬜ | **Retirado del menú**: la Tabla 0-1 no mide "ingresantes" (la columna "1ro" es matrícula de primer ciclo, no admitidos). Reponer si aparece la cifra oficial |
| ~~Estadística: Titulados~~ | — | — | ⬜ | **Retirado del menú**: la Tabla 0-1 solo trae Grados de Bachiller; el Título Profesional es un trámite aparte (ver Académico). Reponer si aparece la cifra oficial |
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
| Correo institucional | `content/contacto.ts` → `correo` | Correo | ✅ | `agroindustrial@unitru.edu.pe` (31-07-2026) |
| Horario de atención | `content/contacto.ts` → `horarioAtencion` | Texto | ✅ | Lunes a Viernes, 7:00 a 14:40 hrs (31-07-2026) |
| Redes sociales | `content/contacto.ts` → `redesSociales` | URLs | ⚠️ | Facebook e Instagram cargados. **Sin YouTube ni X** (no reportadas) |
| **Libro de Reclamaciones** | `content/contacto.ts` → `libroReclamacionesUrl` | URL | ⬜ | |

# 9. Recursos gráficos (`profiles/escuela/assets/`)

> **Encuadre de las fotos (31-07-2026).** Las fotos se recortan con `object-cover`. El recorte ya
> **no** es fijo: se ajusta foto por foto desde los datos, sin tocar componentes.
> - Hero → `config/branding.ts` → `heroImages[i].position` (p. ej. `'center 25%'`).
> - Docentes → `content/docentes.ts` → `fotoPosicion`. Comités → `content/comites.ts` → `fotoPosicion`.
>
> Por defecto se usa `'center 20%'` (prioriza el centro-superior, donde está la cabeza). Valores más
> bajos (10%) suben el encuadre; más altos (50%) lo bajan. Si una foto sale mal encuadrada, **se
> corrige solo ese valor**.
>
> El marco de la tarjeta de docente usa **proporción fija 4:5**, no altura fija: las tarjetas cambian
> de ancho según la columna del grid, y con altura fija el marco pasaba de vertical a apaisado según
> la pantalla, moviendo el recorte y cortando cabezas. Las fotos de `personas/` son **400×600 (2:3)**;
> conviene mantener ese formato para las que falten.

| Archivo | Uso | Estado | Nota |
|---|---|---|---|
| `logo-universidad.png` | Navbar + footer | ⚠️ | Existe. Confirmar que es el logo UNT vigente |
| `logo-escuela.png` | Navbar | ⚠️ | Existe. **Confirmar que es el logo de Agroindustrial** y no de otra escuela |
| `logo-bolsa-trabajo.png` | Hero | ⚠️ | Existe |
| `libro-reclamaciones.svg` | Hero | ⚠️ | Existe |
| `hero/hero-1..3` | Fondo del hero | ✅ | Reemplazadas por fotos reales de Agroindustrial (Drive): plana docente (FOTO GENERAL) y estudiantes en laboratorio (ESTUDIANTES). `.webp`, horizontal, encuadre ajustable por `position` |
| `personas/*.webp` (fotos de personas) | Docentes · Dirección · Comités | ⚠️ | **9 cargadas** en la carpeta compartida `assets/personas/`. Faltan 7 docentes (ver sección Organización) |
| Foto del director | Página Dirección | ✅ | Sánchez (escuela) y Ninaquispe (departamento), en `assets/personas/` |
| Imágenes de ambientes | Inicio | ⬜ | Horizontal. La carpeta LABORATORIOS de Drive está vacía |
| `organigrama/mapa-procesos.png` | Estructura organizacional | ⚠️ | Confirmar si corresponde a Agroindustrial |

# 10. Lo más urgente (pendiente)

1. **Entidad acreditadora** — el sello del hero sigue diciendo "Acreditada por la Entidad".
   Es lo más visible que queda sin resolver. La carpeta SINEACE (Drive) está diferida por el usuario.
2. **Sumillas de la malla** — la malla está cargada; falta la descripción de cada curso.
3. **7 fotos de docentes restantes** y **cursos por docente** (`cursoPrincipal`) + condición RENACYT.
4. **Teléfono institucional del programa** — correo y horario ya cargados. Ojo: el (044) 221321 que
   figura en admisionunt.info es de la **Dirección de Admisión**, no del programa; no se usó.
5. **Contenido de Investigación** — faltan proyectos y convenios (líneas y publicaciones ya cargadas).
6. **Noticias, avisos y ambientes/laboratorios** — siguen con texto e imágenes de plantilla.
7. **Órganos de Gobierno**, **Administrativos** y 2 comités (Currículo, Responsabilidad Social) —
   faltan los nombres de los integrantes.

> **Alcance de `src/`:** el usuario ha ido aprobando páginas puntuales — Comités, Revistas,
> Objetivos, Estadísticas y `AutoridadCard` (mostrar foto). El resto de secciones 🚫 siguen
> "En construcción" y requieren aprobación para cada caso.
