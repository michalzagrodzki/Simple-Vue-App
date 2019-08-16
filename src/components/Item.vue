<template>
  <div>
    <nav>Nav elements</nav>
    <section>
      <div class="item-head-section">
        <h1>{{ title }}</h1>
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
    this.getProducts()
  },
  methods: {
    getProducts () {
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
</style>
