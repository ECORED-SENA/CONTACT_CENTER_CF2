<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Contextualización del Contact Center - <i>Business Process Outsourcing</i> (BPO)
    p.mb-5 La industria del Contact Center BPO en Colombia se muestra como un sector dinámico en sus operaciones y muy innovador en cuanto a su recurso tecnológico, es por esta razón, que se convierte en un aliado para las empresas que requieren de sus servicios y a su vez en un sector que mantiene una alta demanda de talento humano calificado, no solamente en áreas técnicas sino, además, en una serie de habilidades específicas (Sectorial, 2021), como las que se muestran en la siguiente figura.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p Habilidades específicas del talento humano
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/img1.svg', style="width: 1100px").m-auto
        .row.align-items-center.bg-color1.p-4(data-aos="fade-right")
          .col-2
            figure
              img(src='@/assets/curso/img2.svg', style="position: relative; width: 85px;").m-auto
          .col-10
            br
            p.text-white.mb-4 Estas habilidades permiten a las empresas de BPO mantenerse dentro de estándares de calidad y satisfacción respecto a los servicios que ofrece.
    #t_1_1
    .titulo-segundo
      h2 1.1 Concepto BPO
    p.mb-5 Según la empresa de asesoría Evaluando Software.com (2021) el significado de BPO proviene de las siglas en inglés #[i Business Process Outsourcing], que dando una interpretación en español consiste en la tercerización de procesos de negocios.  Lo cual significa que:
    .row.bg-color3.px-5
      .col-12
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/img4.svg', style="width: 900px").m-auto
        .row.justify-content-center.mb-5
          .col-lg-10
            .cajon.color-primario.p-4
              p.mb-0 Una empresa puede contratar a otra compañía especializada en BPO, para que sea esta la que realice los procesos inherentes para el funcionamiento de la compañía, mientras que puede dedicarse a su función misional, depositando en el BPO toda la confianza de la administración de sus procesos.
        p.mb-5 Entonces, #[span.txt-deco1 #[b ¿cuál sería una de las mayores ventajas de este tipo de subcontratación?]]
        p Que representa menores costos para la compañía, debido a que no se requiere invertir en infraestructura física, ni tecnológica y tampoco debe asumir la administración del talento humano, al contrario, se puede recibir un servicio de calidad con gestiones mucho más productivas para las empresas contratantes.
        separador.mb-5
        #t_1_2
        .titulo-segundo
          h2 1.2 Concepto del <i>Contact Center - Call Center</i>
    .row.bg-color4.px-5
      .col-12
        .row.align-items-center.mb-4
          .col-lg-6.mb-4.mb-lg-0
            p.mb-4 De acuerdo con la Empresa Consultora CCM (2019) los #[b #[i Contact Center]] o centros de contacto son unidades de negocio centralizadas, las cuales tienen como principal finalidad generar interacciones con el cliente mediante diferentes canales, los cuales pueden ser:
            .cajon.color-primario.p-4
              ul.lista-ul.ms-3
                li 
                  i.fas.fa-circle(style="color: #3E2EA6" width="1px")
                  | Canales de comunicación presenciales.
                li 
                  i.fas.fa-circle(style="color: #3E2EA6")
                  | De voz (teléfono).
                li 
                  i.fas.fa-circle(style="color: #3E2EA6")
                  | Medios electrónicos (correo, chats, redes sociales, SMS).
          .col-lg-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img6.svg', style="width: 450px").m-auto
        p Todo esto unido a su estrategia de operación, logra que las empresas tengan comunicación permanente con sus clientes de una manera asertiva, eficiente y a tiempo.
        p.mb-5 Dentro de los servicios que puede ofrecer un Contact Center se destacan:
        .row.mb-4.justify-content-center
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img7.svg', style="width: 40px").m-auto
              h3.text-center Atención al cliente
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img8.svg', style="width: 40px").m-auto
              h3.text-center.mb-0 (PQRSF)
              p.text-small.text-center.text-small.mb-0 Servicios de peticiones, quejas, reclamos, sugerencias y felicitaciones
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img8.svg', style="width: 40px").m-auto
              h3.text-center Soporte técnico
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img9.svg', style="width: 35px").m-auto
              h3.text-center Retenciones
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img10.svg', style="width: 35px").m-auto
              h3.text-center Fidelizaciones
        .row.mb-4.mb-lg-5.justify-content-center
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img11.svg', style="width: 50px").m-auto
              h3.text-center Información
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img12.svg', style="width: 45px").m-auto
              h3.text-center Sondeos y encuestas
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img13.svg', style="width: 45px").m-auto
              h3.text-center Ventas
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img14.svg', style="width: 45px").m-auto
              h3.text-center Servicios postventa
          .col-sm-6.col-lg-2.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.p-3.bg-color2
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/img15.svg', style="width: 45px").m-auto
              h3.text-center Cobranza
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img1.png', style="width: 450px").m-auto
          .col-lg-7
            p.mb-4 Por otra parte, los #[b #[i Call Center] o centros de llamadas], también son unidades de negocio centralizadas que tienen como principal objetivo:
            .cajon.color-primario.p-4.mb-4
              p.mb-0 Generar comunicaciones con los clientes, pero particularmente solo lo hacen a través del canal telefónico y generalmente ofrecen los mismos servicios que ofrecen los #[i Contact Center] aplicados solamente a través del teléfono, lo que constituye la principal diferencia entre uno y otro.
            p.mb-0 De acuerdo con lo mencionado anteriormente, se puede decir que los #[i Contact Center] son la evolución de los Call Center y esta evolución se da como respuesta a las necesidades de los clientes y del interés de las empresas por generar experiencias de éxito para ellos.
    separador.mb-5
    #t_1_3
    .titulo-segundo
      h2 1.3 Historia y características
    p.mb-5 Consulte el siguiente recurso para ampliar su conocimiento sobre la historia de la industria de los #[i Contact Center] y los #[i Call Center] en el mundo y en Colombia.
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA
        .row.align-items-start.justify-content-center.my-3
          .col-lg-5.mb-4.mb-lg-0
            h4.mt-2 Historia de la industria y su llegada a Colombia
            p.mb-0 No se podría hablar del origen de los centros de llamada (#[i Call Center]) y posteriormente de los centros de contacto (#[i Contact Center]), sin antes mencionar que la invención del teléfono en 1876 por el científico británico Alexander Graham Bell, daría el inicio a una nueva forma no solo de interacción social, sino de generar negocios (Sánchez y Sánchez, 2011).
          .col-lg-5
            figure
              img(src='@/assets/curso/img2.png', style="width: 450px").m-auto
        .row.align-items-start.justify-content-center.my-3
          .col-lg-5.mb-4.mb-lg-0
            p.mb-0.mt-2 Después de que Graham Bell patentó el invento del teléfono en los Estados Unidos, solamente se necesitaron 25 años para que una de cada 30 personas tuviera uno, lo que generó la aparición de la primera central telefónica en el país americano y cuyo funcionamiento consistía  en que cuando el abonado de origen levantaba el auricular, una operadora tomaba la comunicación para preguntarle con quien deseaba hablar, es allí donde nace la conocida frase en el mundo de los Contact Center “en que le puedo ayudar” (Sánchez y Sánchez, 2011).
          .col-lg-5
            figure
              img(src='@/assets/curso/img3.png', style="width: 450px").m-auto
        .row.align-items-start.justify-content-center.my-3
          .col-lg-5.mb-4.mb-lg-0
            p.mb-0.mt-2 A medida que el tráfico de llamadas persona a persona crecía, la intención de crear interacciones corporativas empieza a surgir y es en este momento es cuando se pone de manifiesto la necesidad de atender cada llamada enfocada a solucionar las necesidades de los clientes,  así lo visionó la empresa automovilística FORD, cuando en 1962 toma la iniciativa de empezar a contactar telefónicamente a sus clientes con el ánimo de facilitar el trabajo de sus empleados, consiguiendo entrevistas para sus vendedores, lo que les permitió incrementar su número de clientes y por ende incrementar las ventas, creando el primer Call Center del mundo y la primera campaña de telemarketing o en español de telemercadeo (Sánchez y Sánchez, 2011).
          .col-lg-5
            figure
              img(src='@/assets/curso/img4.png', style="width: 450px").m-auto
        .row.align-items-start.justify-content-center.my-3
          .col-lg-5.mb-4.mb-lg-0
            p.mt-2 Teniendo en cuenta lo anterior es importante precisar que las operaciones de las centrales telefónicas orientadas al servicio y negocios tuvieron que pasar por una serie de cambios, debido a los avances tecnológicos, relacionados con la telefonía digital y satelital que al mismo tiempo las llevaron a su crecimiento (Sánchez y Sánchez, 2011).
            p Por tal razón, hacia la década de los años 80 aparecen los primeros centros de llamadas y a partir de ese momento se les reconoce como Call Center.  Los primeros que se conocieron en el mundo fueron: Telefónica Movistar, Vodafone, Atento , France Telecom.
            p Las anteriores empresas apostaron sus operaciones principalmente en España, debido al auge que tenía este país en la telefonía móvil.
          .col-lg-5
            figure
              img(src='@/assets/curso/img5.png', style="width: 450px").m-auto
        .row.align-items-start.justify-content-center.my-3
          .col-lg-5.mb-4.mb-lg-0
            p.mb-0.mt-2 Para 1990 el mundo ve cómo aquel gran invento  denominado Internet  empieza a instalarse en las sociedades actuales, permitiendo que los consumidores tuvieran acceso a mucha más información, volviéndolos mucho más exigentes y con mayores necesidades de atención, es allí donde los Call Center apoyados de los diferentes avances tecnológicos encuentran la manera de dar respuesta a los consumidores, implementado más canales de comunicación para dar paso a los que hoy conocemos como Contact Center (Fernández, 2011).
          .col-lg-5
            figure
              img(src='@/assets/curso/img6.png', style="width: 450px").m-auto
        .row.align-items-start.justify-content-center.my-3
          .col-lg-5.mb-4.mb-lg-0
            p.mb-0.mt-2 En cuanto a Colombia, la llegada de las empresas de #[i Call] y #[i Contact] Center data de los años 90, gracias a la excelente ubicación geográfica del país, la mano de obra calificada y los bajos costos de las operaciones, factores que le han permitido al país posisionarse como el número uno en Latinoamérica en exportación e internacionalización de servicios.
          .col-lg-5
            figure
              img(src='@/assets/curso/img7.png', style="width: 450px").m-auto
    p.mb-5 En conclusión, se puede observar que la industria de los Contact Center y BPO en sus diferentes etapas de evolución y reinvención tanto en Colombia como en el mundo ha caminado a la par del auge de la telefonía satelital, digital y móvil, y por supuesto, por la aparición de la Internet, convirtiéndose en el pilar de las empresas, la cuales buscan mayor comunicación con sus clientes, por lo que  valdría la pena hacer la siguiente pregunta: 
    h4.mb-5 ¿Cómo sería el siguiente capítulo de su historia en esta era de cambios sociales y económicos?
    p.mb-5 En este recorrido por la industria del Contact Center BPO se ha podido observar una innovación permanente y el dinamismo que están a la orden del día, y no se podría dejar a un lado las características que este sector ha desarrollado desde su existencia y que resultan fundamentales a la hora de brindar servicios de calidad y excelencia, las más importantes se muestran en la siguiente figura:
    .row.bg-color5.px-5.align-items-center
      .col-12
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/img19.svg', style="width: 750px").m-auto
          .tarjeta.color-acento-botones1.p-3(x="32%" y="2%")
            p.mb-0 Provee a sus clientes corporativos servicios centralizados que garantizan beneficio mutuo.
          .tarjeta.color-acento-botones1.p-3(x="19%" y="30%")
            p.mb-0 La mayor ventaja al contratar los servicios de un Contact Center BPO radica en la disminución de costos y administración de la operación.
          .tarjeta.color-acento-botones1.p-3(x="19%" y="70%")
            p.mb-0 Ofrece servicios inbound o servicios de entrada, en los que el cliente o usuario final es quien genera la interacción.
          .tarjeta.color-acento-botones1.p-3(x="32%" y="98%")
            p.mb-0 Brinda servicios outbound o de salida, en los que las comunicaciones con los usuarios se generan desde el Contact Center.
          .tarjeta.color-acento-botones1.p-3(x="52%" y="99%")
            p.mb-0 Proporciona operaciones híbridas  en las cuales se combina el inbound y el outbound.
          .tarjeta.color-acento-botones1.p-3(x="66%" y="70%")
            p.mb-0 Trabaja mediante estrategias de multicanalidad (utilización de diferentes canales de comunicación por separado) y omnicanalidad (utilización de diferentes canales de comunicación integrados).
    separador.mb-5
    #t_1_4
    .titulo-segundo
      h2 1.4 El BPO en el mundo y en Colombia
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p En el ámbito mundial, la industria del BPO se ha mantenido vigente de acuerdo con todas las necesidades del mercado, generando una mayor cadena de valor entre los servicios que presta, lo que le ha permitido una mayor expansión y sobre todo la posibilidad de responder a las necesidades del mundo globalizado actual, desarrollando diferentes modalidades que garantizan una adecuada y rápida respuesta a sus clientes.
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Estas modalidades se conocen como el “onshore” procesos externalizados en el mismo país y el “offshore” procesos desde y hasta cualquier país.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .p.mb-0 Avansis, 2021
        p De acuerdo con lo anterior, el sector del Business Process Outsourcing es uno de los de mayor crecimiento en el mundo con un tamaño estimado de 23.000 millones de dólares, presentando un crecimiento anual del 19% en los últimos años (Colcob, 2018).
        p.mb-0 Actualmente Colombia es vista en el mundo como la segunda mejor plaza, después de México, para la implementación de negocios BPO. A continuación, se mencionan las principales razones:
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img20.svg', style="width: 500px").m-auto
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0.order-2.order-lg-1
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img21.svg', style="width: 300px").m-auto
      .col-lg-7.mb-4.mb-lg-0.order-1.order-lg-2
        ul.lista-ul
          li 
            i.fas.fa-circle(style="color: #3E2EA6")
            | Su estratégica ubicación geográfica.
          li 
            i.fas.fa-circle(style="color: #3E2EA6")
            | Los bajos costos para las diferentes operaciones.
          li 
            i.fas.fa-circle(style="color: #3E2EA6")
            | La gran cantidad de talento humano calificado.
          li 
            i.fas.fa-circle(style="color: #3E2EA6")
            | El aumento del bilingüismo en la población de jóvenes colombianos.
          li 
            i.fas.fa-circle(style="color: #3E2EA6")
            | El crecimiento exponencial de las empresas prestadoras de servicios de BPO.
          li 
            i.fas.fa-circle(style="color: #3E2EA6")
            | El apoyo gubernamental.
    p.mb-5 Los anteriores elementos permiten concluir que:
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-color1.p-4(data-aos="fade-left")
          .col-2
            figure
              img(src='@/assets/curso/img2.svg', style="position: relative; width: 85px;").m-auto
          .col-10
            br
            p.text-white.mb-4 Este es un sector con una gran proyección a futuro, no solo en márgenes de rendimiento económico, sino también en el incremento de oportunidades de empleo en el sector.
    separador.mb-5
    #t_1_5
    .titulo-segundo
      h2 1.5 Infraestructura y organización
    p La infraestructura del Contact Center BPO resulta ser un elemento fundamental para los ecosistemas de las diferentes campañas y operaciones, ya que de acuerdo con la infraestructura que posea y la forma como se integre depende el éxito del servicio y en el mejor de los casos genera un mayor valor agregado para los clientes consumidores.
    p.mb-5 Los Contact Center cuentan con infraestructura:
    .row.bg-color5.px-5.align-items-center
      .col-12
        .row.justify-content-center
          .col-lg-9
            .tarjeta-avatar-b.mb-5(data-aos="fade-left")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/img22.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones
                .p-4
                  p.mb-0 #[b(style="color: #000000") Tecnológica]: se encuentra lo que se conoce como estructura eléctrica, la cual está conformada por el cableado eléctrico dedicado a los equipos de cómputo, UPS (Uninterruptible power supply) o sistemas de alimentación ininterrumpida, plantas eléctricas de emergencia y los polos a tierra que permiten proteger las instalaciones eléctricas de posibles sobrecargas.
          figure.mb-5(data-aos="fade-right")
            img(src='@/assets/curso/img23.svg', style="width: 900px").m-auto
          .col-lg-9
            .tarjeta-avatar-b(data-aos="fade-left")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/img24.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones
                .p-4
                  p.mb-0 #[b(style="color: #000000") Física]: hace referencia al espacio donde debe estar ubicada la plataforma de operación, por lo que su ventilación debe ser adecuada, de la misma forma la iluminación debe ser en lo posible natural, adicionalmente los puestos de trabajo deben cumplir estándares de ergonomía y salud y seguridad en el trabajo.
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
