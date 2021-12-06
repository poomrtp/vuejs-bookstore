<template>
  <div id="" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <!-- <div class="carousel-item active" data-bs-interval="10000" v-for="(item, index) in items" :key="index">
        <img :src="item.img" class="w-50">
      </div> -->
      <div class="carousel-item active" data-bs-interval="100">
        <img src="https://cdn3.mangaqube.com/9gzCwzbCbjQoBs5G" class="w-50" alt="...">
        <img src="https://cdn3.mangaqube.com/7aylNgn60YNeSeKB" class="w-50" alt="...">
      </div>

      <!-- <div class="carousel-item active" data-bs-interval="100">
        <img src="https://cdn3.mangaqube.com/9gzCwzbCbjQoBs5G" class="w-50" alt="...">
      </div>
      <div class="carousel-item active" data-bs-interval="100">
        <img src="https://cdn3.mangaqube.com/7aylNgn60YNeSeKB" class="w-50" alt="...">
      </div> -->
      <!-- <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="...">
      </div> -->
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'CarouselBanner',
  components: {},
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>