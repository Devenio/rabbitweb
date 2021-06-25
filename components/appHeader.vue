<template>
  <header class="w-full fixed top-0 py-3 px-5 z-50" id="header">
    <div class="fixed top-[80px] right-0 w-full lg:hidden">
      <ul class="text-white bg-gray-800" v-if="open">
        <nuxt-link class="w-full justify-center py-5 flex items-center" to="/">
          صفحه اصلی
        </nuxt-link>
        <nuxt-link
          class="w-full justify-center py-5 flex items-center"
          to="/services"
        >
          سرویس ها
        </nuxt-link>
        <nuxt-link
          class="w-full justify-center py-5 flex items-center"
          to="/work-samples"
        >
          نمونه کارها
        </nuxt-link>
      </ul>
    </div>
    <div class="container mx-auto flex items-center justify-between">
      <fa
        :icon="['fas', 'bars']"
        class="text-2xl cursor-pointer text-white lg:hidden"
        @click="open=!open"
      />
      <ul class="text-white hidden lg:flex items-center">
        <nuxt-link class="p-3 mx-2 py-2 rounded-lg flex items-center" to="/">
          صفحه اصلی
        </nuxt-link>
        <nuxt-link
          class="p-3 mx-2 py-2 rounded-lg flex items-center"
          to="/services"
        >
          سرویس ها
        </nuxt-link>
        <nuxt-link
          class="p-3 mx-2 py-2 rounded-lg flex items-center"
          to="/work-samples"
        >
          نمونه کارها
        </nuxt-link>
      </ul>
      <div class="bg-white p-2 rounded-lg opacity-75">
        <img src="/img/logo.png" alt="logo" id="logo" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const header = document.querySelector("#header");
    window.addEventListener("scroll", e => {
      let scrollY = window.scrollY || window.scrollTop || document.scrollTop;
      scrollY > 150
        ? header.classList.add("scroll-pos")
        : header.classList.remove("scroll-pos");
    });
  },
  data() {
    return {
      open: false
    }
  },
};
</script>

<style scoped>
#logo {
  width: 40px;
}
.scroll-pos {
  background-color: #323336;
  @apply shadow-xl;
}
</style>
