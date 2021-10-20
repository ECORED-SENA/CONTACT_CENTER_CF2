<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p A través de este componente formativo apropiará los elementos y conceptos necesarios relacionados con las áreas de #[i Contact Center] BPO, con todos sus procesos y características, los cuales le permitirán afianzar habilidades y destrezas que garanticen interacciones exitosas con clientes a través de los diferentes canales propios de este sector.
    p.mb-5 Para conocer un poco más sobre la temática a trabajar en este componente formativo vea el siguiente video.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tkgzyk-EcFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
