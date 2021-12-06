<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex me-auto">
            <ul class="navbar-nav mb-2 mb-lg-0" v-for="(menu, index) in menus" :key="index">
              <li class="nav-item">
                <!-- <a class="nav-link active" aria-current="page" href=menu.routeName>{{ menu.label }}</a> -->
                <router-link class="nav-link active" :to="menu.path">{{ menu.label }}</router-link>
              </li>
            </ul>
          </div>
          <div>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success bg-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "DefaultLayout",
  components: {},
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
};
</script>