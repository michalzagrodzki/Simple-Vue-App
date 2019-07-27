<template>
  <div class="hello">
    <nav>Nav elements</nav>
    <section>
      <div class="head-section">
        <h1>TITLE</h1>
      </div>
    </section>
    <section>
      <div class="message-section">
        <div class="subtitle-field">
          <h4>vue app</h4>
          <h2>This is example app using vue.js</h2>
          <h3>this app shows capabilities of using vue in simple cases</h3>
        </div>
      </div>
    </section>
    <section>
      <div class="products-section">
        <div class="product-field">
          <h4>Products</h4>
          <div>
            <div>
              <img />
              <p></p>
            </div>
            <div>
              <img />
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="products-footer">
        <button class="action-button">MORE PRODUCTS</button>
      </div>
    </section>
    <section>
      <div class="contact-section">
        <h4>Contact</h4>
        <h2>Take a contact with us</h2>
        <h3>We are working with different people on different projects</h3>
        <form>
          <input type="text" placeholder="your name">
          <input type="text" placeholder="your email">
          <input type="text" placeholder="your message">
          <button class="action-button">SEND MESSAGE</button>
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

.head-section {
  display: flex;
  background-color: map-get($main-colors, "primary");
  height: 54vh;
  justify-content: center;
  align-items: center;

  h1 {
    color: map-get($font-basic-colors, "light");
    font-size: 16px;
    font-family: $font-primary;
  }
}

.message-section {
  display: flex;
  background-color: map-get($basic-colors, "light");
  height: 10vh;
  justify-content: center;
}

.subtitle-field {
  display: flex;
  background-color: map-get($main-colors, "secondary");
  margin-top: -120px;
  padding: 50px;
  color: map-get($font-basic-colors, "light");

  h4 {
    font-family: $font-primary;
  }

  h2 {
    font-family: $font-primary;
  }

  h3 {
    font-family: $font-secondary;
  }
}

.products-section {
  display: flex;
  background-color: map-get($main-colors, "primary");
  height: 20vh;
  align-items: center;
  flex-direction: column;
}

.product-field {
  display: flex;
  background-color: map-get($main-colors, "secondary");
  height: 100%;
  width: 30vw;
  margin-top: 50px;
  margin-bottom: -20px;
  color: map-get($font-basic-colors, "light");
  justify-content: center;

  h4 {
    font-family: $font-primary;
  }
}

.products-footer {
  display: flex;
  background-color: map-get($basic-colors, "grey");
  height: 20vh;
  align-items: center;
  justify-content: center;
}

.action-button {
  font-family: $font-primary;
  border: none;
  color: map-get($font-basic-colors, "light");
  background-color: map-get($main-colors, "secondary");
  padding: 15px;
}

.contact-section {
  display: flex;
  background-color: lighten(map-get($main-colors, "primary"), 5%);
  align-items: center;
  flex-direction: column;
  h4 {
    font-family: $font-primary;
    color: map-get($font-basic-colors, "light");
    font-size: 16px;
  }
  h2 {
    font-family: $font-primary;
    color: map-get($font-basic-colors, "light");
    font-size: 16px;
  }
  h3 {
    font-family: $font-secondary;
    color: map-get($font-basic-colors, "grey");
    font-size: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      font-family: $font-secondary;
      color: map-get($font-basic-colors, "dark");
    }
  }
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
  }
}
</style>
