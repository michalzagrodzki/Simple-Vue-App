<template>
  <div class="hello">
    <nav>Nav elements</nav>
    <section>
      <div class="head-section">
        <h1>Simple Vue App</h1>
      </div>
    </section>
    <section>
      <div class="message-section">
        <div class="subtitle-field">
          <div class="subtitle-header">
            <h4>VUE APP</h4>
          </div>
          <div class="subtitle-body">
            <h2>This is example app using vue.js</h2>
            <h3>this app shows capabilities of using vue in simple cases</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="products-section">
        <div class="product-field">
          <div class="product-header">
            <h4>Products</h4>
          </div>
          <div class="product-row">
            <div class="product-item">
              <img />
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="products-footer">
        <button class="product-button">MORE PRODUCTS</button>
      </div>
    </section>
    <section>
      <div class="contact-section">
        <div class="contact-header">
          <h4>Contact</h4>
        </div>
        <h2>Take a contact with us</h2>
        <h3>We are working with different people on different projects</h3>
        <form>
          <input type="text" placeholder="your name">
          <input type="text" placeholder="your email">
          <input type="text" placeholder="your message">
          <button class="submit-button">SEND MESSAGE</button>
        </form>
      </div>
    </section>
    <section>
      <div class="footer-section">
        <p>Copyright 2019</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      title: '',
      subtitle: ''
    }
  }
}
</script>

<style scoped lang="scss">
$main-colors: (
  "primary": #181a1c,
  "secondary": #3261f7
  );

$basic-colors: (
  "light": #ffffff,
  "grey": #f0f0f0,
  "dark": #1b1d1f
  );

$font-colors: (
  "primary": #303133,
  "secondary": #006cff
  );

$font-basic-colors: (
  "light": #ffffff,
  "grey": #777,
  "dark": #0e0f10
  );

$font-primary: (
  "Muli", sans-serif
);

$font-secondary: (
  "Literata", serif
);

$border-radius: (
  5px
);

@mixin header {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px 0;
  text-transform: uppercase;
  font-family: $font-primary;
  font-size: 12px;
  letter-spacing: 8px;
}

@mixin action-button {
  font-family: $font-primary;
  font-weight: 600;
  letter-spacing: 2px;
  border: none;
  color: map-get($font-basic-colors, "light");
  background-color: map-get($main-colors, "secondary");
  padding: 15px 50px 15px 50px;
  width: 18vw;
}

@mixin field-shadow {
  box-shadow: 0 30px 60px -30px rgba(0,0,0,.45);
}

@mixin product-shadow {
  box-shadow: 0 30px 60px -30px rgba(0,0,0,.45);
}

.head-section {
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

.message-section {
  display: flex;
  background-color: map-get($basic-colors, "light");
  justify-content: center;
}

.subtitle-field {
  display: flex;
  background-color: map-get($main-colors, "secondary");
  margin-top: -120px;
  margin-bottom: 60px;
  padding: 0 40px 40px 40px;
  color: map-get($font-basic-colors, "light");
  flex-direction: column;
  width: 40vw;
  @include field-shadow;
  border-radius: $border-radius;

  h4 {
    font-family: $font-primary;
    font-size: 12px;
    letter-spacing: 8px;
  }

  h2 {
    font-family: $font-primary;
    font-size: 50px;
    line-height: 1;
    font-weight: 900;
    width: 50%;
    text-align: right;
    margin-left: 15px;
    margin-right: 15px;
    letter-spacing: -0.5px;
    word-spacing: 3px;
  }

  h3 {
    font-family: $font-secondary;
    font-size: 25px;
    line-height: 1.2;
    font-weight: 300;
    width: 50%;
    text-align: left;
    margin-left: 15px;
    margin-right: 15px;
    letter-spacing: 1.3px;
    word-spacing: 3px;
  }
}

.subtitle-header {
  @include header;
}

.subtitle-body {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
}

.products-section {
  display: flex;
  background-color: map-get($main-colors, "primary");
  align-items: center;
  flex-direction: column;
}

.product-field {
  display: flex;
  flex-direction: column;
  background-color: map-get($main-colors, "secondary");
  height: 100%;
  width: 30vw;
  margin-top: 50px;
  margin-bottom: -35vh;
  color: map-get($font-basic-colors, "light");
  justify-content: center;
  padding: 0 40px 40px 40px;
  @include field-shadow;
  border-radius: $border-radius;
}

.product-header {
  @include header;
}

.product-row {
  display: flex;
  flex-direction: row;
}

.product-item {
  @include product-shadow;
  background-color: map-get($basic-colors, "light");
  display: flex;
  width: 340px;
  height: 460px;
}

.products-footer {
  display: flex;
  background-color: map-get($basic-colors, "grey");
  height: 55vh;
  align-items: flex-end;
  justify-content: center;
}

.product-button {
  @include action-button;
  margin-bottom: 65px;
}

.contact-section {
  display: flex;
  background-color: lighten(map-get($main-colors, "primary"), 5%);
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: $font-primary;
    font-weight: 900;
    color: map-get($font-basic-colors, "light");
    font-size: 40px;
    margin: 20px 0 0 0;
  }
  h3 {
    font-family: $font-secondary;
    color: map-get($font-basic-colors, "grey");
    font-size: 20px;
    margin: 10px 0 50px 0;
    width: 25%;
    text-align: center;
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

.contact-header {
  @include header;
  color: map-get($font-basic-colors, "light");
}

.submit-button {
  @include action-button;
  margin: 40px 0 50px 0;
}

.footer-section {
  display: flex;
  background-color: map-get($basic-colors, "dark");
  justify-content: center;
  align-items: center;

  p {
    font-family: $font-primary;
    color: map-get($font-basic-colors, "grey");
    font-size: 16px;
    font-weight: 600;
    margin: 50px 0 50px 0;
  }
}
</style>
