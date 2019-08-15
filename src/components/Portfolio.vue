<template>
  <div>
    <nav>Nav elements</nav>
    <section>
      <div class="portfolio-head-section">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
      </div>
    </section>
    <section>
      <div class="portfolio-grid-section">
        <div class="portfolio-grid-header"></div>
        <div v-for="product in products" v-bind:key="product.id" v-on:click="linkToProduct(product.id)" class="portfolio-product-item">
          <img src="product.image" />
          <p>{{ product.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      title: 'Products Portfolio',
      subtitle: 'Complete list of my products',
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
  methods: {
    linkToProduct: function (itemId) {
      this.$router.push({ name: 'item', params: { id: itemId } })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/SCSS/mixin.scss';
@import '../assets/SCSS/colors.scss';
@import '../assets/SCSS/fonts.scss';
@import '../assets/SCSS/variables.scss';

// shared values
  $side-padding-grid-products-section: 100px;
  $top-padding-grid-products-section: 50px;
  $margin-product-item: 18px;

.portfolio-head-section {
  display: flex;
  background-color: map-get($main-colors, "primary");
  height: 50vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: map-get($font-basic-colors, "light");
    font: {
      size: 65px;
      weight: 700;
      family: $font-primary;
    }
    line-height: .95;
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    letter-spacing: -3px;
  }

  h2 {
    color: map-get($font-basic-colors, "light");
    font: {
      size: 30px;
      weight: 700;
      family: $font-primary;
    }
    line-height: 1.3;
    font-family: $font-primary;
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
  }
}

.portfolio-grid-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: $top-padding-grid-products-section;
  padding-left: $side-padding-grid-products-section;
  padding-right: $side-padding-grid-products-section;
  background-color: map-get($basic-colors, "light");
}

.portfolio-grid-header {

}

.portfolio-product-item {
  margin-left: $margin-product-item;
  margin-right: $margin-product-item;

  img {
    width: 350px;
    height: 230px;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    @include text-link-animation;
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 15px;
      weight: 400;
      family: $font-primary;
    }
    line-height: 1.3;
    text-transform: capitalize;
    margin: 0;
    padding-top: 18px;
    padding-bottom: 36px;
  }
}
</style>
