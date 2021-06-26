<template>
  <!-- <header class="w-full py-3 px-5 z-50 bg-gray-800" id="header">
    
    <div class=" right-0 w-full lg:hidden">
      <ul class="text-white bg-gray-800" v-if="open">
        <nuxt-link class="w-full justify-center py-5 flex items-center" to="/">
          صفحه اصلی
        </nuxt-link>
        <nuxt-link
          class="w-full justify-center py-5 flex items-center"
          to="/demand"
        >
          ثبت سفارش
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
          to="/demand"
        >
          ثبت سفارش
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
  </header> -->
  <nav class="w-full bg-gray-800 text-white">
    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div
      class="container relative z-20 px-6 py-4 mx-auto top-0 lg:flex lg:justify-between  lg:items-center"
    >
      <div class="flex items-center justify-between">
        <!-- Mobile menu button -->
        <div @click="isOpen = !isOpen" class="flex lg:hidden">
          <button
            type="button"
            class="hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-10 h-10 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="bg-white p-2 rounded-lg opacity-75">
          <img src="/img/logo.png" alt="logo" id="logo" />
        </div>
      </div>
      <div
        :class="isOpen ? 'flex' : 'hidden'"
        class="flex-col mt-2 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:mt-0"
      >
        <nuxt-link
          to="/work-samples"
          class="link text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:text-main"
          >نمونه کارها</nuxt-link
        >
        <nuxt-link
          to="/demand"
          class="link text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:text-main"
          >ثبت سفارش</nuxt-link
        >
        <nuxt-link
          to="/"
          class="link text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:text-main"
          >صفحه اصلی</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    // const header = document.querySelector("#header");
    // window.addEventListener("scroll", e => {
    //   let scrollY = window.scrollY || window.scrollTop || document.scrollTop;
    //   scrollY > 150
    //     ? header.classList.add("scroll-pos")
    //     : header.classList.remove("scroll-pos");
    // });
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
#logo {
  width: 40px;
}
.scroll-pos {
  /* background-color: #323336; */
  @apply shadow-xl;
}
</style>
