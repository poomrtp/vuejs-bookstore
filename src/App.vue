<template>
  <div id="app">
    <component
      :is="layout"
      :menus="menus">
    </component>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    alert: {
      active: false,
      color: '',
      text: ''
    },
    menus: [
      {
        path: { name: 'home' },
        icon: '',
        label: 'Home',
      },
      {
        path: { name: 'cart' },
        icon: '',
        label: 'Cart',
      },
    ]
  }),
  computed: {
    layout () {
      return this.$route.meta.layout
    }
  },
  created () {},
  methods: {}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
