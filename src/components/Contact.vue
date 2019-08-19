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
          <input type="text" v-model="form.name" placeholder="your name">
          <input type="text" v-model="form.email" placeholder="your email">
          <input type="text" v-model="form.message" placeholder="your message">
          <button v-on:click.prevent="postMessage()" class="submit-button">{{ submitText }}</button>
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
  },
  created () {
    this.title = `Let's talk.`
    this.caption.subtitle = 'We are located in Lower Downtown of your city.'
    this.caption.text = 'Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression. Almost unable put piqued talked likely houses her met. Met any nor may through resolve entered. An mr cause tried oh do shade happy.'
    this.submitText = 'Send question'
    this.contact.title = 'Office'
    this.contact.street = '219 E 4th St'
    this.contact.city = 'New York'
    this.contact.postcode = '10001'
    this.contact.email = 'your@email.com'
    this.contact.phone = '+88 (0) 101 0000 000'
  },
  methods: {
    postMessage () {
      if (this.form.name !== '' && this.form.email !== '' && this.form.mesage !== '') {
        superagent.post('api/contact')
          .set('Content-Type', 'application/json')
          .send({ 
            name: this.name, 
            email: this.email, 
            message: this.message })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
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
  display: flex;
  background-color: map-get($main-colors, "primary");
  height: 50vh;
  justify-content: center;
  align-items: center;

  h1 {
    color: map-get($font-basic-colors, "light");
    font: {
      family: $font-primary;
      size: 55px;
      weight: 900;
    }
    line-height: .95;
    text-transform: capitalize;
    width: 30%;
    text-align: center;
    letter-spacing: -2px;
  }
}

.contact-form-section {
  display: flex;
  background-color: map-get($basic-colors, "light");
  width: 35vw;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10vh;
  padding: 80px 10vw 35px 10vw;

  h2 {
    color: map-get($font-basic-colors, "dark");
    font: {
      family: $font-primary;
      size: 35px;
      weight: 300;
    }
    line-height: 1.2;
    margin-bottom: 40px;
    text-align: center;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  h4 {
    color: map-get($font-basic-colors, "grey");
    font: {
      family: $font-secondary;
      size: 18px;
      weight: 300;
    }
    line-height: 1.75;
    margin-bottom: 60px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      font-family: $font-secondary;
      color: map-get($font-basic-colors, "dark");
      font-size: 18px;
      font-weight: 400;
      padding: 16px 30px;
      margin: 10px 0 10px 0;
      width: 30vw;
    }
  }
}

.submit-button {
  @include action-button;
  margin: 40px 0 50px 0;
  font: {
    size: 12px
  }
  text-transform: uppercase;
}

.contact-address-section {
  display: flex;
  background-color: map-get($basic-colors, "light");
  width: 20vw;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 10vw 35px 10vw;
  @include top-border;

  h2 {
    color: map-get($font-basic-colors, "dark");
    font: {
      family: $font-primary;
      size: 35px;
      weight: 300;
    }
    line-height: 1.2;
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    color: map-get($font-basic-colors, "grey");
    font: {
      family: $font-secondary;
      size: 18px;
      weight: 300;
    }
    line-height: 1.5;
    margin: 0;
    text-align: center;
  }
}

.contact-details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 1.9;
  padding-top: 25px;
  margin-top: 25px;

  em {
    color: map-get($font-basic-colors, "grey");
    font: {
      size: 18px;
      weight: 600;
      family: $font-primary;
      style: normal;
    }
    line-height: 2;
    width: 25%;
  }
  p {
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 18px;
      weight: 300;
      family: $font-secondary;
      style: normal;
    }
    line-height: 1.8;
    width: 75%;
  }
}
</style>
