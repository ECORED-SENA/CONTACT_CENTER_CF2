<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Manejo de contingencias en operaciones BPO
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p(style="background-color: #DAD6F7; padding: 20px;") #[b(style="color: #0F0140;") La palabra “contingencia’’ se define como la posibilidad de que algo suceda o no suceda “riesgo” (RAE, 2020)].
        p Las áreas de #[i Contact Center] y BPO pueden ser todas aquellas estrategias y alternativas que se crean o se diseñan:
        .row.align-items-center.justify-content-center
          .col-1
            figure
              img(src='@/assets/curso/img29.svg', style="width: 80px").m-auto
          .col-8
            p.mb-0 Para poder dar respuesta ante una situación no planeada o proyectada.
            hr.mb-0
        .row.align-items-center.justify-content-center.mt-3
          .col-1
            figure
              img(src='@/assets/curso/img30.svg', style="width: 80px").m-auto
          .col-8
            p.mb-0 El plan de acción que permite fortalecer los procesos internos de las operaciones.
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img28.svg', style="width: 550px").m-auto
    p Por ejemplo, es muy usual que en operaciones de servicio al cliente cuando las interacciones con los clientes se dan por el canal telefónico se observe que los tráficos de llamadas son muy altos y, se corre el riesgo de presentarse el desborde de llamadas o abandonos de las mismas.
    p.mb-5 El plan a aplicar dentro de la operación para esta situación sería enrutar parte del tráfico de llamadas a otras áreas, donde se pueda contar con la cantidad de asesores necesarios para atender todas las llamadas y minimizar el impacto negativo en los indicadores de gestión.  Este ejemplo permite apreciar cómo las contingencias en una empresa de #[i Contact Center] BPO se pueden proyectar no solo en situaciones no planeadas, sino también para eventos repetitivos, pero que no son frecuentes.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-5.bg-color6.p-4
        figure
          img(src='@/assets/curso/img31.svg', style="width: 450px").m-auto
      .col-lg-5.p-4.bg-color7.d-flex
        .row.align-items-center
          .col-12
            p.mb-0.text-white Se debe precisar que antes de pensar en la construcción de un plan de contingencia para una operación de BPO es importante identificar hacia dónde va enrutado, al mismo tiempo que se debe delimitar muy bien su aplicación y los recursos con que se cuenta para la implementación, lo cual obliga a tener en cuenta algunos elementos.
    p Ahora bien, en las compañías de #[i Contact Center] BPO se manejan operaciones que suelen ser muy robustas y complejas, por ello es necesario que estas, a su vez se apalanquen con planes de contingencia que realmente permitan dar respuesta a los diferentes eventos no planeados y que se puedan presentar dentro de las operaciones.
    p.mb-5 Por lo cual, las empresas de #[i Contact Center] BPO están en la obligación de estructurar planes de contingencia que den respuesta a tres frentes fundamentales, los cuales son:
    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
      .carousel-inner
        .carousel-item.active(data-bs-interval='90000')
          .row.align-items-end.justify-content-between.bg-color8.p-5
            .col-lg-3.mb-4.mb-lg-0.ms-0.ms-lg-5
              p(style="background-color: #3E2EA6; padding: 20px;").text-white Contingencia tecnológica
            .col-lg-5.me-0.me-lg-5.p-4.bg-color11
              p.text-white.pb-2 De los eventos tecnológicos se puede decir que estos son los que más afectan las operaciones hoy en día, debido a que estas empresas se caracterizan por implementar infraestructuras tecnológicas fuertes para sus operaciones, esto hace que sus planes de contingencia tengan un enfoque predictivo, para lo cual aplican como estrategia aumentar su inversión en adquisición de herramientas tecnológicas adicionales que tienen como principal función trabajar bajo la figura de clúster, es decir, en caso que de que los sistemas tecnológicos de uso habitual sufran un evento imprevisto y no planeado, el clúster entra en funcionamiento y evita que la operación se detenga o se afecte.
        .carousel-item(data-bs-interval='90000')
          .row.align-items-end.justify-content-between.bg-color9.p-5
            .col-lg-3.mb-4.mb-lg-0.ms-0.ms-lg-5
              p(style="background-color: #3E2EA6; padding: 20px;").text-white Contingencia física
            .col-lg-5.me-0.me-lg-5.p-4.bg-color11
              br
              p.text-white.pb-3 Los eventos físicos generalmente podrían estar más ligados a factores externos de la compañía, como por ejemplo, cortes en el fluido eléctrico o intermitencias en el servicio de telecomunicaciones, etc., los cuales obligan a que al momento de la construcción del plan de contingencia se identifiquen y se analicen dichas causas, de manera tal que el plan de contingencia realmente pueda dar respuesta al evento, garantizando el funcionamiento normal de la operación.
              br
        .carousel-item(data-bs-interval='90000')
          .row.align-items-end.justify-content-between.bg-color10.p-5
            .col-lg-3.mb-4.mb-lg-0.ms-0.ms-lg-5
              p(style="background-color: #3E2EA6; padding: 20px;").text-white Contingencia por talento humano
            .col-lg-5.me-0.me-lg-5.p-4.bg-color11
              br
              br
              p.text-white.pb-0.pb-lg-4 También se hace necesario revisar otros factores que están relacionados con el talento humano y que al presentarse estos eventos generan una doble afectación, ya que por tratarse de situaciones donde no se cuenta con el total de las personas necesarias para el funcionamiento de la operación, afectan los indicadores de gestión.
              br
              br
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    p.mb-0 Por lo anterior, es muy usual que los planes de contingencia que se generen sean de carácter correctivo, es decir, que permitan dar respuesta al momento de la ocurrencia del evento, pero que al mismo tiempo minimicen las probabilidades de una nueva ocurrencia.

</template>

<script>
export default {
  name: 'Tema3',
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
