<template>
  <div>
    <nav>Nav elements</nav>
    <section>
      <div class="portfolio-head-section">
        <h1>{{ header.title }}</h1>
      </div>
    </section>
    <section>
      <div class="portfolio-grid-section">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      header: {
        title: 'Products Portfolio',
        caption: 'Complete list of my products'
      },
      products: [
        {
          id: 1,
          name: 'Paper',
          image: ''
        },
        {
          id: 2,
          name: 'Program',
          image: ''
        },
        {
          id: 3,
          name: 'Program',
          image: ''
        },
        {
          id: 4,
          name: 'Program',
          image: ''
        },
        {
          id: 5,
          name: 'Program',
          image: ''
        },
        {
          id: 6,
          name: 'Program',
          image: ''
        },
        {
          id: 7,
          name: 'Program',
          image: ''
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/SCSS/mixin.scss';
@import '../assets/SCSS/colors.scss';
@import '../assets/SCSS/fonts.scss';
@import '../assets/SCSS/variables.scss';

.portfolio-head-section {
  display: flex;
  background-color: map-get($main-colors, "primary");
  height: 80vh;
  justify-content: center;
  align-items: center;

  h1 {
    color: map-get($font-basic-colors, "light");
    font-size: 90px;
    font-weight: 900;
    line-height: .95;
    font-family: $font-primary;
    text-transform: capitalize;
    width: 30%;
    text-align: center;
    letter-spacing: -4px;
  }
}
</style>
