<template>
  <div>
    <nav>Nav elements</nav>
    <section>
      <div class="contact-head-section">
        <h1>{{ title }}</h1>
        <h2>{{ caption.subtitle }}</h2>
      </div>
    </section>
    <section>
      <div class="contact-form-section">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: '',
      caption: {
        subtitle: '',
        text: ''
      },
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitText: '',
      contact: {
        title: '',
        street: '',
        city: '',
        postcode: '',
        email: '',
        phone: ''
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

.contact-head-section {

}

.contact-form-section {

}
</style>
