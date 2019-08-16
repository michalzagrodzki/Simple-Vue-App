<template>
  <div>
    <nav>Nav elements</nav>
    <section>
      <div>
        <div class="item-images-column">
          <div v-for="image in images" class="item-image-item">
            <img src="image" />
            <p>{{ image.description }}</p>
          </div>
        </div>
        <div class="item-description-section">
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

.item-images-column {

}

.item-image-item {

  img {

  }
}

.item-description-section {
  h1 {

  }

  p {

  }
}

.item-details {

  em {

  }

  p {

  }
}
</style>
