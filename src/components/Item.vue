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
  }
}
</script>

<style scoped lang="scss">
@import '../assets/SCSS/mixin.scss';
@import '../assets/SCSS/colors.scss';
@import '../assets/SCSS/fonts.scss';
@import '../assets/SCSS/variables.scss';
</style>
