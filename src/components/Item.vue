<template>
  <div>
    <nav>Nav elements</nav>
    <section>
      <div class="item-container">
        <div class="item-images-column">
          <div v-for="image in images" class="item-image-item">
            <img src="image" />
            <p>{{ image.description }}</p>
          </div>
        </div>
        <div class="item-description-column">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
          <div class="item-details">
            <em>Client</em>
            <p>{{ details.client }}</p>
            <em>Services</em>
            <p>{{ details.services }}</p>
            <em>Year</em>
            <p>{{ details.year }}</p>
            <em>Link</em>
            <p>{{ details.link }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import superagent from 'superagent'

export default {
  name: 'Item',
  props: [ 'id' ],
  data () {
    return {
      title: '',
      description: '',
      images: [],
      details: {
        client: '',
        services: '',
        year: '',
        link: ''
      }
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      superagent.get('/assets/JSON/products.json')
        .then((response) => {
          const idNumber = parseInt(this.id, 10)
          const selectedItem = response.body.find((item) => {
            return item.id === idNumber
          })
          this.title = selectedItem.name
          this.description = selectedItem.description
          this.images = selectedItem.images
          this.details = selectedItem.details
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/SCSS/mixin.scss';
@import '../assets/SCSS/colors.scss';
@import '../assets/SCSS/fonts.scss';
@import '../assets/SCSS/variables.scss';

.item-container {
  display: flex;
  flex-direction: row;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
}

.item-images-column {
  width: 50vw;
}

.item-image-item {
  padding-bottom: 30px;
  height: 570px;
  img {

  }
}

.item-description-column {
  margin-left: 50px;
  width: 20vw;
  h1 {
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 25px;
      weight: 700;
      family: $font-primary;
    }
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }

  p {
    color: map-get($font-basic-colors, "grey");
    font: {
      size: 15px;
      weight: 300;
      family: $font-secondary;
    }
    line-height: 1.75;
    margin: 0;
  }
}

.item-details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 1.9;
  padding-top: 25px;
  margin-top: 25px;
  @include top-border;

  em {
    color: map-get($font-basic-colors, "grey");
    font: {
      size: 15px;
      weight: 600;
      family: $font-primary;
      style: normal;
    }
    min-width: 50%;
    
  }

  p {
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 15px;
      weight: 300;
      family: $font-secondary;
      style: normal;
    }
    min-width: 50%;
  }
}
</style>
