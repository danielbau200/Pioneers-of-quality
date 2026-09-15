/* =======================================================
   DATOS EXACTOS DE LOS DOCUMENTOS DEL PROYECTO
   (CALIDAD, HERRAMIENTAS, IMPORTANCIA Y PRECURSORES DETALLES)
======================================================= */

// 1. SECCIÓN CALIDAD
const calidadData = {
    queEs: {
        titulo: "¿Qué es la Calidad?",
        subtitulo: "Concepto y definición fundamental",
        descripcion: "Conjunto de características de un producto, servicio o proceso que permiten satisfacer las necesidades y expectativas del cliente. No se trata solamente de que un producto no tenga defectos, sino de que cumpla con los requisitos establecidos y proporcione valor al usuario.",
        puntos: [
            "Satisfacción plena de las necesidades del cliente.",
            "Cumplimiento riguroso de especificaciones y requisitos.",
            "Aporte de valor real y duradero al usuario.",
            "Ausencia de defectos mediante control de procesos."
        ],
        imagen: "img/calidad-que-es.jpg"
    },
    importancia: {
        titulo: "Importancia de la Calidad",
        subtitulo: "Beneficios estratégicos para las organizaciones",
        descripcion: "La implementación de la calidad permite a las organizaciones alcanzar altos estándares de desempeño y sostenibilidad en el mercado:",
        puntos: [
            "Mejorar sus productos y servicios.",
            "Reducir errores y desperdicios.",
            "Disminuir costos.",
            "Aumentar la satisfacción del cliente.",
            "Mejorar continuamente sus procesos.",
            "Incrementar la productividad.",
            "Ser más competitivas."
        ],
        imagen: "img/importancia-empresas.jpg"
    },
    mejoraContinua: {
        titulo: "Mejora Continua",
        subtitulo: "Principio fundamental de la calidad",
        descripcion: "Uno de los principios fundamentales de la calidad es la mejora continua. Esto significa que una organización debe evaluar constantemente sus procesos, identificar problemas y buscar formas de hacerlos mejor.",
        puntos: [
            "Evaluación constante de todos los procesos.",
            "Identificación oportuna de desviaciones y problemas.",
            "Búsqueda permanente de mejores métodos de trabajo.",
            "Cultura participativa enfocada en la excelencia."
        ],
        imagen: "img/calidad-mejora.jpg"
    }
};

// 2. SECCIÓN PRECURSORES (13 PRECURSORES SEGÚN PRECURSORES DETALLES.DOCX)
const precursoresData = [
    {
        id: 1,
        nombre: "Walter A. Shewhart",
        pais: "Estados Unidos",
        epoca: "1891 - 1967",
        fotoLetras: "WS",
        imagen: "img/precursor-shewhart.png",
        quienFue: "Walter Andrew Shewhart fue un físico, ingeniero y estadístico estadounidense. Es conocido como el padre del control estadístico de la calidad y de la aplicación de métodos estadísticos a los procesos industriales.",
        queAporto: "Desarrolló las gráficas de control, una herramienta que permite observar la variación de un proceso y determinar si se encuentra bajo control.",
        importancia: "Su trabajo cambió la forma de entender la calidad, pasando de simplemente inspeccionar productos terminados a controlar y mejorar los procesos que los producen.",
        aportacionPrincipal: "Gráficas de control y control estadístico de procesos."
    },
    {
        id: 2,
        nombre: "W. Edwards Deming",
        pais: "Estados Unidos",
        epoca: "1900 - 1993",
        fotoLetras: "WD",
        imagen: "img/precursor-deming.png",
        quienFue: "William Edwards Deming fue un estadístico, profesor y consultor estadounidense. Es uno de los personajes más importantes en la evolución de la gestión de la calidad y tuvo una gran influencia en la industria japonesa después de la Segunda Guerra Mundial.",
        queAporto: "Desarrolló sus conocidos 14 principios para la gestión, promovió la mejora continua y difundió el uso del ciclo PHVA (Planear-Hacer-Verificar-Actuar).",
        importancia: "Deming consideraba que la calidad debía ser responsabilidad de la administración y de toda la organización, no solamente de los trabajadores encargados de inspeccionar productos.",
        aportacionPrincipal: "14 principios, mejora continua y ciclo PHVA."
    },
    {
        id: 3,
        nombre: "Joseph M. Juran",
        pais: "Rumania / EE.UU.",
        epoca: "1904 - 2008",
        fotoLetras: "JJ",
        imagen: "img/precursor-juran.png",
        quienFue: "Joseph Moses Juran fue un ingeniero y consultor estadounidense de origen rumano. Fue uno de los principales especialistas en administración de la calidad y destacó la importancia de la participación de la dirección.",
        queAporto: "Desarrolló la Trilogía de Juran, formada por: Planificación de la calidad, Control de la calidad y Mejora de la calidad.",
        importancia: "Su enfoque ayudó a las organizaciones a entender que la calidad debía ser planificada y administrada, y no solamente inspeccionada al final del proceso.",
        aportacionPrincipal: "Trilogía de la Calidad."
    },
    {
        id: 4,
        nombre: "Philip B. Crosby",
        pais: "Estados Unidos",
        epoca: "1926 - 2001",
        fotoLetras: "PC",
        imagen: "img/precursor-crosby.png",
        quienFue: "Philip Bayard Crosby fue un empresario, consultor y especialista estadounidense en gestión de la calidad. Se enfocó principalmente en la prevención de errores y en la importancia de hacer correctamente el trabajo desde el inicio.",
        queAporto: "Desarrolló la filosofía de “cero defectos” y defendió la idea de que la calidad consiste en cumplir con los requisitos establecidos.",
        importancia: "Promovió cambiar la idea de que los errores son inevitables. Para Crosby, era mejor prevenir los defectos que corregirlos después.",
        aportacionPrincipal: "Cero defectos y prevención."
    },
    {
        id: 5,
        nombre: "Armand V. Feigenbaum",
        pais: "Estados Unidos",
        epoca: "1922 - 2014",
        fotoLetras: "AF",
        imagen: "img/precursor-feigenbaum.png",
        quienFue: "Armand Vallin Feigenbaum fue un experto estadounidense en calidad y administración. Es reconocido por ampliar el concepto de calidad para involucrar a todas las áreas de una organización.",
        queAporto: "Desarrolló el concepto de Control Total de la Calidad, conocido posteriormente como Gestión de la Calidad Total.",
        importancia: "Estableció que la calidad no depende únicamente del departamento de producción o inspección. Todas las áreas de la empresa influyen en la calidad final.",
        aportacionPrincipal: "Control Total de la Calidad."
    },
    {
        id: 6,
        nombre: "Kaoru Ishikawa",
        pais: "Japón",
        epoca: "1915 - 1989",
        fotoLetras: "KI",
        imagen: "img/precursor-ishikawa.png",
        quienFue: "Kaoru Ishikawa fue un ingeniero químico japonés y uno de los principales impulsores de la calidad en Japón. También promovió la participación de los trabajadores en la mejora de los procesos.",
        queAporto: "Desarrolló el famoso diagrama causa-efecto, conocido como diagrama de Ishikawa o diagrama de espina de pescado. También impulsó los círculos de calidad.",
        importancia: "Sus herramientas permiten identificar las posibles causas de un problema y fomentar la participación de los trabajadores en la solución de problemas.",
        aportacionPrincipal: "Diagrama causa-efecto y círculos de calidad."
    },
    {
        id: 7,
        nombre: "Genichi Taguchi",
        pais: "Japón",
        epoca: "1924 - 2012",
        fotoLetras: "GT",
        imagen: "img/precursor-taguchi.png",
        quienFue: "Genichi Taguchi fue un ingeniero y estadístico japonés reconocido internacionalmente por sus contribuciones al diseño de productos y procesos.",
        queAporto: "Desarrolló métodos de diseño robusto, cuyo objetivo es crear productos y procesos que sean menos afectados por las variaciones. También desarrolló la función de pérdida de calidad.",
        importancia: "Su enfoque permite mejorar la calidad desde la etapa de diseño, reduciendo la variabilidad y los problemas antes de que lleguen al proceso de producción.",
        aportacionPrincipal: "Diseño robusto y función de pérdida de calidad."
    },
    {
        id: 8,
        nombre: "Shigeo Shingo",
        pais: "Japón",
        epoca: "1909 - 1990",
        fotoLetras: "SS",
        imagen: "img/precursor-shingo.png",
        quienFue: "Shigeo Shingo fue un ingeniero industrial japonés y consultor especializado en procesos de producción. Sus ideas tuvieron una gran influencia en el Sistema de Producción Toyota.",
        queAporto: "Desarrolló y difundió el concepto de Poka-Yoke, que busca evitar que se produzcan errores o detectar los errores inmediatamente.",
        importancia: "Su filosofía se basa en que es mejor prevenir un error que corregir un defecto después.",
        aportacionPrincipal: "Poka-Yoke o prevención de errores."
    },
    {
        id: 9,
        nombre: "Taiichi Ohno",
        pais: "Japón",
        epoca: "1912 - 1990",
        fotoLetras: "TO",
        imagen: "img/precursor-ohno.png",
        quienFue: "Taiichi Ohno fue un ingeniero industrial japonés y ejecutivo de Toyota. Es considerado uno de los principales creadores del Sistema de Producción Toyota.",
        queAporto: "Desarrolló y perfeccionó conceptos como Just in Time, eliminación de desperdicios y producción basada en la demanda.",
        importancia: "Su sistema permitió producir utilizando los recursos de manera más eficiente, reduciendo inventarios, tiempos de espera, movimientos innecesarios y otros desperdicios.",
        aportacionPrincipal: "Sistema de Producción Toyota y Just in Time."
    },
    {
        id: 10,
        nombre: "Masaaki Imai",
        pais: "Japón",
        epoca: "1930 - 2023",
        fotoLetras: "MI",
        imagen: "img/precursor-imai.png",
        quienFue: "Masaaki Imai fue un consultor y escritor japonés especializado en gestión empresarial. Es reconocido mundialmente por difundir el concepto japonés de Kaizen.",
        queAporto: "Popularizó la filosofía Kaizen, que significa mejora continua y propone realizar pequeños cambios constantes para mejorar los procesos.",
        importancia: "Demostró que la mejora no necesariamente requiere grandes cambios. Pequeñas mejoras realizadas continuamente pueden generar grandes resultados a largo plazo.",
        aportacionPrincipal: "Kaizen y mejora continua."
    },
    {
        id: 11,
        nombre: "Noriaki Kano",
        pais: "Japón",
        epoca: "1940 - Presente",
        fotoLetras: "NK",
        imagen: "img/precursor-kano.png",
        quienFue: "Noriaki Kano es un profesor e investigador japonés especializado en calidad y satisfacción del cliente.",
        queAporto: "Desarrolló el Modelo Kano, una herramienta que permite clasificar las características de un producto o servicio según el efecto que tienen sobre la satisfacción del cliente.",
        importancia: "Su modelo ayuda a las empresas a comprender qué características son básicas para el cliente, cuáles aumentan su satisfacción y cuáles pueden generar una experiencia más atractiva.",
        aportacionPrincipal: "Modelo Kano y satisfacción del cliente."
    },
    {
        id: 12,
        nombre: "Peter Drucker",
        pais: "Austria / EE.UU.",
        epoca: "1909 - 2005",
        fotoLetras: "PD",
        imagen: "img/precursor-drucker.png",
        quienFue: "Peter Ferdinand Drucker fue un escritor, profesor y consultor austriaco-estadounidense considerado uno de los principales pensadores de la administración moderna.",
        queAporto: "Desarrolló importantes ideas sobre la gestión por objetivos, la administración, el liderazgo y la importancia de las personas dentro de las organizaciones.",
        importancia: "Aunque no fue un especialista en calidad en el mismo sentido que Deming o Juran, sus ideas sobre administración ayudaron a fortalecer la gestión organizacional y la orientación hacia resultados.",
        aportacionPrincipal: "Administración moderna y gestión por objetivos."
    },
    {
        id: 13,
        nombre: "Tom Peters",
        pais: "Estados Unidos",
        epoca: "1942 - Presente",
        fotoLetras: "TP",
        imagen: "img/precursor-peters.png",
        quienFue: "Tom Peters es un escritor y consultor estadounidense reconocido por sus trabajos sobre administración, liderazgo y excelencia empresarial.",
        queAporto: "Promovió la búsqueda de la excelencia en las organizaciones, destacando aspectos como el liderazgo, la innovación, la atención al cliente y la participación de los empleados.",
        importancia: "Sus ideas ayudaron a reforzar la visión de que las organizaciones deben buscar constantemente mejores formas de trabajar y ofrecer valor a sus clientes.",
        aportacionPrincipal: "Excelencia empresarial, liderazgo y orientación al cliente."
    }
];

// 3. SECCIÓN HERRAMIENTAS (SEGÚN CALIDAD, HERRAMIENTAS, IMPORTANCIA.DOCX)
const herramientasData = [
    {
        id: 1,
        numero: "01",
        nombre: "Gráficas de Control",
        autor: "Walter A. Shewhart",
        icono: "",
        descripcionCorta: "Herramientas estadísticas que permiten vigilar el comportamiento de un proceso y detectar variaciones.",
        objetivo: "Mantener los procesos bajo control y detectar cambios anormales.",
        explicacion: "Son herramientas estadísticas que permiten vigilar el comportamiento de un proceso en el tiempo y detectar variaciones anormales que pueden indicar un problema antes de que se produzcan defectos.",
        ejemplo: "Gráficas de control por variables y atributos aplicadas en líneas de producción continua.",
        imagen: "img/herramientas-calidad.jpg"
    },
    {
        id: 2,
        numero: "02",
        nombre: "Ciclo PHVA",
        autor: "W. Edwards Deming",
        icono: "",
        descripcionCorta: "El ciclo Planear-Hacer-Verificar-Actuar (PHVA) es un método estructurado de mejora continua.",
        objetivo: "Mejorar continuamente los procesos.",
        explicacion: "• Planear: identificar el problema y establecer objetivos.\n• Hacer: aplicar la solución propuesta.\n• Verificar: revisar y evaluar los resultados.\n• Actuar: estandarizar la mejora o realizar ajustes.",
        ejemplo: "Ciclo continuo de retroalimentación en proyectos de reducción de mermas.",
        imagen: "img/calidad-mejora.jpg"
    },
    {
        id: 3,
        numero: "03",
        nombre: "Trilogía de la Calidad",
        autor: "Joseph M. Juran",
        icono: "",
        descripcionCorta: "Propuesta de administración de la calidad mediante tres procesos clave: Planificación, Control y Mejora.",
        objetivo: "Establecer los requisitos de calidad, controlar el desempeño y buscar mejores resultados.",
        explicacion: "Juran propuso administrar la calidad mediante tres procesos secuenciales y continuos:\n1. Planificación de la calidad\n2. Control de la calidad\n3. Mejora de la calidad",
        ejemplo: "Planificación estratégica de calidad en nuevos lanzamientos de manufactura.",
        imagen: "img/calidad-que-es.jpg"
    },
    {
        id: 4,
        numero: "04",
        nombre: "Cero Defectos",
        autor: "Philip B. Crosby",
        icono: "",
        descripcionCorta: "Filosofía enfocada en prevenir los errores en lugar de esperar a que ocurran para corregirlos.",
        objetivo: "Hacer las cosas correctamente desde la primera vez.",
        explicacion: "Crosby planteó que la calidad debe enfocarse en la prevención absoluta. El estándar de desempeño es cero defectos, demostrando que cumplir requisitos evita costos innecesarios.",
        ejemplo: "Pautas de control preventivo y aseguramiento en líneas de ensamble crítico.",
        imagen: "img/importancia-actualidad.jpg"
    },
    {
        id: 5,
        numero: "05",
        nombre: "Control Total de la Calidad",
        autor: "Armand V. Feigenbaum",
        icono: "",
        descripcionCorta: "La calidad no es responsabilidad exclusiva de un departamento, sino de todas las áreas de la organización.",
        objetivo: "Integrar la calidad en todas las actividades de la empresa.",
        explicacion: "Establece que todas las áreas de la organización (diseño, compras, manufactura, ventas, atención) influyen directamente en la calidad percibida por el cliente.",
        ejemplo: "Sistemas integrados de gestión que involucran compras, producción y servicio al cliente.",
        imagen: "img/importancia-empresas.jpg"
    },
    {
        id: 6,
        numero: "06",
        nombre: "Diagrama Causa-Efecto",
        autor: "Kaoru Ishikawa",
        icono: "",
        descripcionCorta: "Conocido como diagrama de Ishikawa o diagrama de espina de pescado.",
        objetivo: "Encontrar la causa raíz de un problema.",
        explicacion: "Permite identificar, desglosar y organizar de manera visual todas las posibles causas que originan un problema operativo o de calidad.",
        ejemplo: "Análisis de causas agrupadas en categorías como mano de obra, maquinaria, materiales y métodos.",
        imagen: "img/herramientas-calidad.jpg"
    },
    {
        id: 7,
        numero: "07",
        nombre: "Diseño Robusto",
        autor: "Genichi Taguchi",
        icono: "",
        descripcionCorta: "Diseño de productos y procesos menos sensibles a las variaciones externas.",
        objetivo: "Reducir la variabilidad y pérdidas antes de la etapa de producción.",
        explicacion: "Busca diseñar productos y procesos que mantengan un óptimo desempeño aun ante factores de ruido. Desarrolló además la función de pérdida de calidad.",
        ejemplo: "Optimización paramétrica en la formulación de componentes industriales.",
        imagen: "img/calidad-que-es.jpg"
    },
    {
        id: 8,
        numero: "08",
        nombre: "Poka-Yoke",
        autor: "Shigeo Shingo",
        icono: "",
        descripcionCorta: "Mecanismos a prueba de errores para evitar fallas o detectarlas de inmediato.",
        objetivo: "Prevenir un error antes de que se convierta en un defecto.",
        explicacion: "Son mecanismos o métodos diseñados para evitar que una persona cometa un error involuntario o para alertar inmediatamente si ocurre una anomalía.",
        ejemplo: "Un conector que solamente puede colocarse en una única posición física correcta.",
        imagen: "img/importancia-actualidad.jpg"
    },
    {
        id: 9,
        numero: "09",
        nombre: "Just in Time",
        autor: "Taiichi Ohno",
        icono: "",
        descripcionCorta: "Producir lo necesario, en la cantidad necesaria y en el momento necesario.",
        objetivo: "Reducir inventarios, tiempos de espera y desperdicios.",
        explicacion: "Sistema pilar del modelo Toyota que busca eliminar sobreproducción, esperas, traslados y movimientos innecesarios, alineándose a la demanda real.",
        ejemplo: "Suministro directo de partes a la línea de ensamble sin almacenamiento intermedio.",
        imagen: "img/importancia-empresas.jpg"
    },
    {
        id: 10,
        numero: "10",
        nombre: "Kaizen",
        autor: "Masaaki Imai",
        icono: "",
        descripcionCorta: "Filosofía de mejora continua mediante pequeños cambios constantes.",
        objetivo: "Mejorar continuamente los procesos con participación de todos los colaboradores.",
        explicacion: "Kaizen propone realizar mejoras incrementales y diarias en los puestos de trabajo, demostrando que pequeños cambios acumulados generan enormes resultados.",
        ejemplo: "Reuniones diarias breves en planta para implementar mejoras en el área de trabajo.",
        imagen: "img/calidad-mejora.jpg"
    },
    {
        id: 11,
        numero: "11",
        nombre: "Modelo Kano",
        autor: "Noriaki Kano",
        icono: "",
        descripcionCorta: "Herramienta para comprender y clasificar las características de satisfacción del cliente.",
        objetivo: "Analizar el efecto de los atributos del producto en la percepción del consumidor.",
        explicacion: "Clasifica las características de un producto o servicio según su impacto: básicas (imprescindibles), de desempeño (más es mejor) y de atracción/deleite.",
        ejemplo: "Priorización de funciones en el desarrollo de nuevos productos y servicios.",
        imagen: "img/herramientas-calidad.jpg"
    },
    {
        id: 12,
        numero: "12",
        nombre: "Gestión por Objetivos",
        autor: "Peter Drucker",
        icono: "",
        descripcionCorta: "Alineación y fortalecimiento de la gestión organizacional orientada a resultados.",
        objetivo: "Coordinar esfuerzos hacia metas claras y compartidas.",
        explicacion: "Sus ideas sobre administración, liderazgo y enfoque en las personas fortalecieron la gestión organizacional y la cultura de calidad hacia resultados concretos.",
        ejemplo: "Establecimiento coordinado de indicadores de calidad por departamento.",
        imagen: "img/importancia-empresas.jpg"
    },
    {
        id: 13,
        numero: "13",
        nombre: "Búsqueda de la Excelencia",
        autor: "Tom Peters",
        icono: "",
        descripcionCorta: "Enfoque en el liderazgo, innovación, atención al cliente y participación.",
        objetivo: "Impulsar a las organizaciones a buscar continuamente mejores formas de operar.",
        explicacion: "Promovió una visión donde las organizaciones buscan permanentemente la excelencia, rompiendo rigideces para dar valor extraordinario al cliente.",
        ejemplo: "Empoderamiento del personal para brindar atención excepcional y resolución ágil.",
        imagen: "img/importancia-actualidad.jpg"
    }
];

// 4. SECCIÓN IMPORTANCIA (SEGÚN CALIDAD, HERRAMIENTAS, IMPORTANCIA.DOCX)
// NOTA ESPECÍFICA: En 'EMPRESAS' se colocan exactamente los 6 puntos subrayados/principales del Word.
const importanciaData = {
    empresas: {
        titulo: "En las Empresas",
        subtitulo: "Impacto y beneficios directos en las organizaciones",
        descripcion: "La aplicación de la calidad en las empresas genera ventajas estratégicas fundamentales:",
        // Solo lo subrayado en el Word:
        puntosSubrayados: [
            {
                titulo: "Reducir errores",
                desc: "Permite identificar y prevenir problemas antes de que afecten al cliente."
            },
            {
                titulo: "Reducir costos",
                desc: "Al disminuir desperdicios, retrabajos, devoluciones y productos defectuosos."
            },
            {
                titulo: "Mejorar procesos",
                desc: "Permite analizar cómo se realizan las actividades y encontrar oportunidades de mejora."
            },
            {
                titulo: "Satisfacer al cliente",
                desc: "Ayuda a conocer y cumplir las necesidades y expectativas de los consumidores."
            },
            {
                titulo: "Aumentar la productividad",
                desc: "Procesos mejor organizados permiten aprovechar mejor los recursos."
            },
            {
                titulo: "Generar competitividad",
                desc: "Una empresa que ofrece productos y servicios de calidad puede diferenciarse de sus competidores."
            }
        ],
        imagen: "img/importancia-empresas.jpg"
    },
    precursores: {
        titulo: "Precursores de la Calidad",
        subtitulo: "El legado y base metodológica de la industria",
        descripcion: "Las aportaciones de Shewhart, Deming, Juran, Crosby, Feigenbaum, Ishikawa, Taguchi, Shingo, Ohno, Imai y Kano, entre otros, sentaron las bases de muchas de las prácticas que actualmente utilizan las organizaciones para mejorar su desempeño.",
        puntos: [
            "Crearon las herramientas estadísticas para el control de procesos.",
            "Establecieron la filosofía de prevención y cero defectos.",
            "Involucraron a toda la organización en la mejora continua (Kaizen).",
            "Desarrollaron sistemas de producción eficientes y orientados al cliente."
        ],
        imagen: "img/herramientas-calidad.jpg"
    },
    actualidad: {
        titulo: "La Calidad en la Actualidad",
        subtitulo: "Participación total y gestión moderna",
        descripcion: "Hoy la calidad ya no se considera únicamente una responsabilidad del departamento de calidad. Toda la organización participa en ella.",
        puntos: [
            "Conceptos como mejora continua forman parte de la estrategia diaria.",
            "Satisfacción del cliente como meta prioritaria en todos los niveles.",
            "Prevención sistemática de errores en la fuente.",
            "Reducción de desperdicios y control de procesos en sistemas modernos de gestión."
        ],
        imagen: "img/importancia-actualidad.jpg"
    }
};

/* =======================================================
   INICIALIZACIÓN Y RENDERIZADO
======================================================= */

document.addEventListener("DOMContentLoaded", () => {
    inicializarSeccionCalidad();
    renderizarPrecursores();
    renderizarHerramientas();
    inicializarSeccionImportancia();
    configurarModal();
    inicializarSPA();
});

/* --- 1. SECCIÓN CALIDAD --- */
function inicializarSeccionCalidad() {
    const contenedor = document.getElementById("calidadContenido");
    const botones = document.querySelectorAll(".btn-calidad-tab");

    if (!contenedor || botones.length === 0) return;

    function mostrarCalidad(tipo) {
        const data = calidadData[tipo];
        if (!data) return;

        botones.forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-tab") === tipo);
        });

        contenedor.innerHTML = `
            <div class="interactive-panel fade-in">
                <div class="interactive-info">
                    <h3 class="panel-title">${data.titulo}</h3>
                    <p class="panel-subtitle">${data.subtitulo}</p>
                    <p class="panel-desc">${data.descripcion}</p>
                    <ul class="panel-list">
                        ${data.puntos.map(p => `<li><span class="list-bullet"></span> ${p}</li>`).join("")}
                    </ul>
                </div>
                <div class="interactive-media">
                    <div class="image-wrapper">
                        <img src="${data.imagen}" alt="${data.titulo}" loading="lazy">
                    </div>
                </div>
            </div>
        `;
    }

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            mostrarCalidad(btn.getAttribute("data-tab"));
        });
    });

    mostrarCalidad("queEs");
}

/* --- 2. SECCIÓN PRECURSORES --- */
function renderizarPrecursores() {
    const contenedor = document.getElementById("contenedorPrecursores");
    if (!contenedor) return;

    contenedor.innerHTML = precursoresData.map(p => `
        <div class="precursor-card precursor-horizontal" onclick="abrirModalPrecursor(${p.id})">
            <div class="card-hero-image side-image">
                ${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}" class="hero-precursor-img">` : `<div class="hero-initials">${p.fotoLetras}</div>`}
                <span class="country-pill-overlay">${p.pais}</span>
            </div>
            <div class="card-content-right">
                <div class="card-info">
                    <h3 class="precursor-name">${p.nombre}</h3>
                    <div class="aportacion-tag-box">
                        <span class="aportacion-label">Principal aportación:</span>
                        <p class="aportacion-text">${p.aportacionPrincipal}</p>
                    </div>
                </div>
                <div class="card-action-cue">
                    <span>Ver más</span>
                    <span class="arrow-icon">→</span>
                </div>
            </div>
        </div>
    `).join("");
}

/* --- 3. SECCIÓN HERRAMIENTAS (LISTA ACCORDION MINIMALISTA) --- */
function renderizarHerramientas() {
    const contenedor = document.getElementById("contenedorHerramientas");
    if (!contenedor) return;

    contenedor.innerHTML = herramientasData.map(h => `
        <div class="herramienta-card" id="tool-card-${h.id}">
            <div class="herramienta-list-item" onclick="toggleHerramienta(${h.id})">
                <div class="tool-badge-num">${h.numero}</div>
                <div class="tool-content">
                    <div class="tool-title-row">
                        <h3 class="tool-name">${h.nombre}</h3>
                        <span class="tool-author">${h.autor}</span>
                    </div>
                    <p class="tool-desc">${h.descripcionCorta}</p>
                </div>
                <div class="tool-arrow">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </div>
            </div>
            <div class="herramienta-dropdown-content">
                <div class="dropdown-inner">
                    <div class="dropdown-info">
                        <div class="dropdown-block">
                            <h4 class="dropdown-heading-red">Objetivo:</h4>
                            <p>${h.objetivo}</p>
                        </div>
                        <div class="dropdown-block">
                            <h4 class="dropdown-heading-red">Descripción y Funcionamiento:</h4>
                            <p style="white-space: pre-line;">${h.explicacion}</p>
                        </div>
                        <div class="dropdown-highlight-red">
                            <strong>Ejemplo de aplicación:</strong>
                            <p>${h.ejemplo}</p>
                        </div>
                    </div>
                    <div class="dropdown-media">
                        <img src="${h.imagen}" alt="${h.nombre}" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

function toggleHerramienta(id) {
    const card = document.getElementById(`tool-card-${id}`);
    if (!card) return;

    const isActive = card.classList.contains("active");

    // Cerrar los demás para mantener una experiencia limpia
    document.querySelectorAll(".herramienta-card").forEach(c => {
        if (c !== card) c.classList.remove("active");
    });

    card.classList.toggle("active", !isActive);
}


/* --- 4. SECCIÓN IMPORTANCIA --- */
function inicializarSeccionImportancia() {
    const contenedor = document.getElementById("importanciaContenido");
    const botones = document.querySelectorAll(".btn-importancia-tab");

    if (!contenedor || botones.length === 0) return;

    function mostrarImportancia(tipo) {
        const data = importanciaData[tipo];
        if (!data) return;

        botones.forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-tab") === tipo);
        });

        // Caso EMPRESAS: mostrar exactamente la lista de lo subrayado en el docx
        let contenidoHtml = "";
        if (tipo === "empresas") {
            contenidoHtml = `
                <div class="interactive-panel fade-in">
                    <div class="interactive-info">
                        <h3 class="panel-title">${data.titulo}</h3>
                        <p class="panel-subtitle">${data.subtitulo}</p>
                        <p class="panel-desc">${data.descripcion}</p>
                        <div class="empresas-list-grid">
                            ${data.puntosSubrayados.map(pt => `
                                <div class="empresa-item-box">
                                    <div class="empresa-item-head">
                                        <span class="check-red"></span>
                                        <strong>${pt.titulo}:</strong>
                                    </div>
                                    <p class="empresa-item-desc">${pt.desc}</p>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                    <div class="interactive-media">
                        <div class="image-wrapper">
                            <img src="${data.imagen}" alt="${data.titulo}" loading="lazy">
                        </div>
                    </div>
                </div>
            `;
        } else {
            contenidoHtml = `
                <div class="interactive-panel fade-in">
                    <div class="interactive-info">
                        <h3 class="panel-title">${data.titulo}</h3>
                        <p class="panel-subtitle">${data.subtitulo}</p>
                        <p class="panel-desc">${data.descripcion}</p>
                        <ul class="panel-list">
                            ${data.puntos.map(p => `<li><span class="list-bullet"></span> ${p}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="interactive-media">
                        <div class="image-wrapper">
                            <img src="${data.imagen}" alt="${data.titulo}" loading="lazy">
                        </div>
                    </div>
                </div>
            `;
        }

        contenedor.innerHTML = contenidoHtml;
    }

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            mostrarImportancia(btn.getAttribute("data-tab"));
        });
    });

    mostrarImportancia("empresas");
}

/* =======================================================
   SISTEMA DE MODAL INTERACTIVO
======================================================= */
function configurarModal() {
    const modal = document.getElementById("infoModal");
    const closeBtn = document.getElementById("modalCloseBtn");

    if (!modal) return;

    if (closeBtn) {
        closeBtn.addEventListener("click", cerrarModal);
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) cerrarModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            cerrarModal();
        }
    });
}

function abrirModal(contenidoHtml) {
    const modal = document.getElementById("infoModal");
    const body = document.getElementById("modalBody");
    if (!modal || !body) return;

    body.innerHTML = contenidoHtml;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    const modal = document.getElementById("infoModal");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function abrirModalPrecursor(id) {
    const p = precursoresData.find(item => item.id === id);
    if (!p) return;

    const html = `
        <div class="modal-detail-card modal-horizontal">
            <div class="modal-side-image">
                ${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}" class="hero-precursor-img">` : `<div class="hero-initials">${p.fotoLetras}</div>`}
            </div>
            <div class="modal-content-right">
                <div class="modal-header-top">
                    <div>
                        <span class="modal-tag">${p.pais} • ${p.epoca}</span>
                        <h2 class="modal-person-name">${p.nombre}</h2>
                    </div>
                </div>

                <div class="modal-block">
                    <h4 class="modal-heading-red">¿Quién fue?</h4>
                    <p class="modal-text-content">${p.quienFue}</p>
                </div>

                <div class="modal-block">
                    <h4 class="modal-heading-red">¿Qué aportó?</h4>
                    <p class="modal-text-content">${p.queAporto}</p>
                </div>

                <div class="modal-block">
                    <h4 class="modal-heading-red">Importancia de su aportación:</h4>
                    <p class="modal-text-content">${p.importancia}</p>
                </div>

                <div class="modal-highlight-red">
                    <strong> Aportación principal:</strong>
                    <p>${p.aportacionPrincipal}</p>
                </div>
            </div>
        </div>
    `;
    abrirModal(html);
}

function abrirModalHerramienta(id) {
    const h = herramientasData.find(item => item.id === id);
    if (!h) return;

    const html = `
        <div class="modal-detail-card">
            <div class="modal-header-top">
                <div class="modal-tool-icon">${h.icono}</div>
                <div>
                    <span class="modal-tag">HERRAMIENTA #${h.numero} • ${h.autor}</span>
                    <h2 class="modal-person-name">${h.nombre}</h2>
                </div>
            </div>

            <div class="modal-media-wrap">
                <img src="${h.imagen}" alt="${h.nombre}">
            </div>

            <div class="modal-block">
                <h4 class="modal-heading-red">Objetivo:</h4>
                <p class="modal-text-content">${h.objetivo}</p>
            </div>

            <div class="modal-block">
                <h4 class="modal-heading-red">Descripción y Funcionamiento:</h4>
                <p class="modal-text-content" style="white-space: pre-line;">${h.explicacion}</p>
            </div>

            <div class="modal-highlight-red">
                <strong> Ejemplo de aplicación:</strong>
                <p>${h.ejemplo}</p>
            </div>
        </div>
    `;
    abrirModal(html);
}

function abrirModalCalidad(tipo) {
    const data = calidadData[tipo];
    if (!data) return;

    const html = `
        <div class="modal-detail-card">
            <div class="modal-header-top">
                <div>
                    <span class="modal-tag">FUNDAMENTOS</span>
                    <h2 class="modal-person-name">${data.titulo}</h2>
                </div>
            </div>

            <div class="modal-media-wrap">
                <img src="${data.imagen}" alt="${data.titulo}">
            </div>

            <div class="modal-block">
                <h4 class="modal-heading-red">Concepto:</h4>
                <p class="modal-text-content">${data.descripcion}</p>
            </div>

            <div class="modal-block">
                <h4 class="modal-heading-red">Aspectos Clave:</h4>
                <ul class="panel-list">
                    ${data.puntos.map(p => `<li><span class="list-bullet"></span> ${p}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
    abrirModal(html);
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("open");
    }
}

/* =======================================================
   NAVEGACIÓN POR PANTALLAS SEPARADAS (SPA)
======================================================= */
function navegarAPantalla(id) {
    if (!id) id = "inicio";
    
    // Lista de pantallas válidas
    const pantallasValidas = ["inicio", "calidad", "precursores", "herramientas", "importancia"];
    if (!pantallasValidas.includes(id)) {
        id = "inicio";
    }

    // Actualizar hash en la URL sin salto brusco
    if (window.location.hash !== "#" + id) {
        window.location.hash = id;
    }

    // Ocultar todas las pantallas y mostrar solo la seleccionada
    const todasLasPantallas = document.querySelectorAll(".screen-page");
    todasLasPantallas.forEach(p => {
        p.classList.remove("active");
        p.style.display = "none";
    });

    const pantallaDestino = document.getElementById(id);
    if (pantallaDestino) {
        pantallaDestino.classList.add("active");
        if (id === "inicio") {
            pantallaDestino.style.display = "flex";
        } else {
            pantallaDestino.style.display = "block";
        }
    }

    // Actualizar enlaces del menú
    const navLinks = document.querySelectorAll(".minimalist-nav .nav-link");
    navLinks.forEach(link => {
        link.classList.remove("active");
        const screen = link.getAttribute("data-screen") || link.getAttribute("href")?.replace("#", "");
        if (screen === id) {
            link.classList.add("active");
        }
    });

    // Cerrar menú móvil si está abierto
    const menu = document.getElementById("menu");
    if (menu && menu.classList.contains("open")) {
        menu.classList.remove("open");
    }

    // Subir el scroll suavemente al tope
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Hacer la función global para ser llamada desde botones y onclick en el HTML
window.navegarAPantalla = navegarAPantalla;

function inicializarSPA() {
    // Interceptar clicks en todos los enlaces de navegación con hash (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").replace("#", "");
            if (targetId && document.getElementById(targetId)) {
                e.preventDefault();
                navegarAPantalla(targetId);
            }
        });
    });

    // Escuchar cambios en el hash del navegador (por ejemplo botones atrás/adelante)
    function verificarHash() {
        let hash = window.location.hash.replace("#", "").trim();
        if (!hash) hash = "inicio";
        navegarAPantalla(hash);
    }

    window.addEventListener("hashchange", verificarHash);

    // Cargar pantalla inicial
    verificarHash();
}
