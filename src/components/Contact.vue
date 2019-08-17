<template>
  <div>
    <nav>Nav elements</nav>
    <section>
      <div class="contact-head-section">
        <h1>{{ title }}</h1>
      </div>
    </section>
    <section>
      <div class="contact-form-section">
        <h2>{{ caption.subtitle }}</h2>
        <h4>{{ caption.text }}</h4>
        <form>
          <input type="text" placeholder="your name">
          <input type="text" placeholder="your email">
          <input type="text" placeholder="your message">
          <button class="submit-button">{{ submitText }}</button>
        </form>
      </div>
    </section>
    <section>
      <div class="contact-address-section">
        <h2>{{ contact.title }}</h2>
        <p>{{ contact.street }}</p>
        <p>{{ contact.city }}</p>
        <p>{{ contact.postcode }}</p>
        <div class="contact-details">
          <em>Email:</em>
          <p>{{ contact.email}}</p>
          <em>Phone:</em>
          <p>{{ contact.phone}}</p>
        </div>
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

  h1 {
    
  }
}

.contact-form-section {

  h2 {

  }
  h4 {

  }
}

.contact-address-section {

  h2 {

  }
  p {

  }
}

.contact-details {

  em {

  }
  p {

  }
}
</style>
