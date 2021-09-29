export default {
  global: {
    componenteFormativo: 'Preparar equipos y herramientas',
    descripcionCurso:
      'A través de este componente formativo el aprendiz debe apropiar los elementos y conceptos necesarios relacionados con las áreas de <i>Contact Center</i> BPO, en conjunto con todos sus procesos y características que le permitan afianzar habilidades y destrezas que garanticen interacciones exitosas con clientes, a través de los diferentes canales propios de este sector.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Contextualización del <i>Contact Center – Business Process Outsourcing</i> (BPO)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto BPO',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Concepto del <i>Contact Center – Call Center</i>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Historia y características',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'El BPO en el mundo y en Colombia',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Infraestructura y organización',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Equipos y herramientas propias del <i>Contact Center</i> BPO',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manejo de contingencias en operaciones BPO',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Enfermedades profesionales propias del <i>Contact Center</i>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Pausas activas',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Avansis. (2021). BPO <i>Business Process Outsourcing</i>. Qué es y cómo funciona. Avansis. ',
      link: 'https://www.avansis.es/outsourcing/que-es-bpo/',
    },
    {
      referencia:
        'Call Center de México. (2018). 5 ventajas de una buena infraestructura en tu <i>Contact Center</i> para mejorar tu servicio de atención al cliente. ',
      link:
        'https://www.callcentermexico.com.mx/blog/5-ventajas-de-una-buena-infraestructura-en-tu-contact-center-para-mejorar-tu-servicio-de-atencion-al-cliente',
    },
    {
      referencia:
        '<i>Call Center</i> de México. (2019). ¿Qué es un <i>Contact Center</i> y cómo impacta al crecimiento de tu negocio? ',
      link:
        'https://www.callcentermexico.com.mx/blog/que-es-un-contact-center-y-como-impacta-al-crecimiento-de-tu-negocio',
    },
    {
      referencia:
        'COPC. (2018). Normas COPC para la optimización de clientes. COPC. ',
      link:
        'https://www.kenwin.net/archivos/Norma%20COPC%20CX%20VMO%20R6.0_esp_oct%2018.pdf',
    },
    {
      referencia:
        'DATACRM. (2021). ¿Qué es CRM y para qué sirve? [Web log post]. Blogspot. ',
      link: 'https://www.datacrm.com/blog/que-es-crm-y-para-que-sirve/',
    },
    {
      referencia:
        'Decreto 1477 de 2014. [Presidente de la República de Colombia]. Por el cual se expide la tabla de enfermedades laborales. Agosto 5 de 2014. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/36482/decreto_1477_del_5_de_agosto_de_2014.pdf/b526be63-28ee-8a0d-9014-8b5d7b299500',
    },
    {
      referencia:
        'Evaluando Software.com. (2021). BPO: ¿qué es <i>Business Process Outsourcing</i>? ',
      link:
        'https://www.evaluandosoftware.com/bpo-que-es-business-process-outsourcing/',
    },
    {
      referencia:
        'Fernández, L. (2011). Historia viva de Internet. Volumen I. Los años de en.red.ando (1996-1998). Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/33490',
    },
    {
      referencia:
        'Formación GCC. (2020) ¿Qué es un <i>Call Center</i> virtual? Cómo funcionan y cuáles son sus beneficios. ',
      link: 'https://formaciongcc.com/call-center-virtual',
    },
    {
      referencia:
        'Portafolio. (2016). La profesionalización de los <i>Contact Center</i>. ',
      link:
        'https://www.portafolio.co/evolucion-contact-centers-colombia-revista-portafolio-497791',
    },
    {
      referencia:
        'Procolombia. (2019). Estudio nacional de sector de tercerización de servicios. Procolombia. ',
      link:
        'https://www.colcob.com/images/pdf2019/2019_resultados_encuesta_tercerizacion_servicios.pdf',
    },
    {
      referencia:
        'Sánchez, J. y Sánchez, Carlos. (2011). Sobre la difusión del teléfono de Bell en sus comienzos (1876-1877). SENA. ',
      link: 'https://www.sectorial.co/informativa-contact-center-y-bpo',
    },
  ],
  glosario: [
    {
      termino: 'ACD',
      significado:
        '<i>Automatical Call Distribution</i> o distribuidor automático de llamada, dispositivo que tiene como función distribuir o enrutar las llamadas entrantes en el centro de contacto para nivelar las cargas de trabajo de los asesores.',
    },
    {
      termino: 'BPO',
      significado:
        '<i>Business Process Outsourcing</i> o tercerización de procesos de negocios.',
    },
    {
      termino: 'CRM',
      significado:
        '<i>Customer Relationship Management</i> se refiere al conjunto de estrategias de negocio y tecnologías enfocadas a la relación con los clientes.',
    },
    {
      termino: 'Diadema',
      significado:
        'dispositivo para escuchar y hablar por teléfono desde una PC, también se conoce como dispositivo manos libres.',
    },
    {
      termino: 'Hardware',
      terminoHtml: '<em>Hardware</em>',
      significado:
        'conjunto de elementos físicos que conforman una computadora.',
    },
    {
      termino: 'Salud ocupacional',
      significado:
        'actividad que promueve la salud de personas laboralmente activas.',
    },
    {
      termino: 'Software',
      terminoHtml: '<em>Software</em>',
      significado:
        'conjunto de programas que permiten a la computadora realizar algunas tareas.',
    },
  ],
  complementario: [
    {
      texto:
        'Lorduy, J. (2021). Las empresas de BPO esperan que este año tengan más de 18.000 empleados nuevos. Diario La República.',
      tipo: 'Artículo',
      link:
        'https://www.larepublica.co/empresas/las-empresas-de-bpo-esperan-hacer-mas-de-18000-contrataciones-3132395',
    },
    {
      texto:
        'Paternina, D. (2011). Los Call Center y su proyección en Colombia.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6578917.pdf',
    },
    {
      texto:
        'Procolombia. (s.f.). Estudio nacional del sector de tercerización de servicios.',
      tipo: 'PDF',
      link:
        'https://www.colcob.com/images/pdf2019/2019_resultados_encuesta_tercerizacion_servicios.pdf',
    },
    {
      texto:
        'Gobierno de Colombia. (2019). Pacto por el crecimiento y para la generación de empleo en el sector de BPO.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo2.pdf',
    },
    {
      texto:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012.',
      tipo: 'Ley',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      texto: 'TutoresVirtual. (2012). Rutina pausas activas [video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_sngkArMb0Y',
    },
    {
      texto:
        'Asturias Corporación Universitaria. (2017). Marco legal y normativo sobre Seguridad y salud en el trabajo: Colombia.',
      tipo: 'PDF',
      link:
        'https://www.centro-virtual.com/recursos/2019a07m06dc@v3p@r@1v3st1g@c10n/gesti@nss.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nadia Patricia Granados Amado',
        cargo: 'Experta técnica - Especialidad <i>Contact Center</i> BPO',
        centro:
          'Centro de Gestión de Mercados, Logística y Tecnologías de la Comunicación - Regional Distrito Capital',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
