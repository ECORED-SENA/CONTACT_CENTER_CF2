<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Equipos y herramientas propias del <i>Contact Center</i> BPO
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 Las herramientas propias y necesarias para la operación de servicios de Contact Center BPO conforman una parte esencial en la infraestructura tecnológica del mismo, las cuales están presentes en todas las actividades cotidianas que realizan las campañas y, la interconexión entre ellas permite registrar, consultar y acceder a la información de los clientes, de los productos y/o servicios disponibles, además logra la interacción directa con los clientes a través de canales de voz (softphone) y de diferentes medios electrónicos, entre otros.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La infraestructura de un Contact Center resulta ser un punto clave para su funcionamiento, independientemente del servicio que ofrezca o atienda, por ende, el hardware que se utilice debe soportar de manera completa las demás herramientas tecnológicas necesarias para la operación.
        p.mb-0 Ahora bien, es importante entender que el hardware hace referencia a toda la parte física o tangible que lo conforma, es decir, son todos aquellos elementos palpables. Algunos de ellos son:
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img25.svg', style="width: 450px").m-auto
    .row.mb-5.justify-content-center
      .col-7.col-lg-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img8.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1(style="color: #EF6C00") 01
              p La computadora y sus componentes físicos.
      .col-7.col-lg-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img9.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1(style="color: #EF6C00") 02
              p El teléfono, el cual se requiere si el centro de contacto no cuenta con un sistema de telefonía por Internet.
      .col-7.col-lg-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img10.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1(style="color: #EF6C00") 03
              p La diadema o dispositivo manos libres, entre otros.
    p Teniendo claras las herramientas de hardware que se necesitan, conozca que el software es el encargado de gestionar la parte lógica y física de un sistema computacional, por lo que administra los recursos y características de las operaciones en las cuales están programados.
    p.mb-5 Existen varios software para Contact Center, los cuales tienen dentro de sus funcionalidades las siguientes:
    .row.bg-color3.px-5
      .col-12
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/img26.svg', style="width: 1150px").m-auto
        .tarjeta.color-acento-contenido.p-4.p-md-5(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
              img(src="@/assets/curso/img27.svg")

            .col-md.col-lg-6
              .titulo-segundo
                h2(style="color: #0F0140") #[i(style="color: #0F0140") Customer Relationship Management] (CRM)
              p.mb-4 En el siguiente PDF encontrará algunos ejemplos de software empleados en un #[i(style="color: #0F0140") Contact Center] BPO.
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank" type="application/pdf")
                span(style="color: #0F0140 !important") Descargar
                i.fas.fa-file-download(style="color: #0F0140 !important")

</template>

<script>
export default {
  name: 'Tema2',
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
