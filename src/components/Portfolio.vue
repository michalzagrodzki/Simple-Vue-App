<template>
  <div>
    <nav>Nav elements</nav>
    <section>
      <div class="portfolio-head-section">
        <h1>{{ header.title }}</h1>
      </div>
    </section>
    <section>
      <div class="portfolio-grid-section">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      header: {
        title: 'Products Portfolio',
        caption: 'Complete list of my products'
      },
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

.portfolio-head-section {
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
</style>
