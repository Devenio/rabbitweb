<template>
  <nav
    id="header"
    :class="$route.path !== '/' ? 'bg-main' : ''"
    class="w-full text-white fixed top-0 z-50"
  >
    <div
      class="container relative z-20 px-6 lg:px-0 py-4 mx-auto top-0 lg:flex lg:flex-row-reverse lg:justify-between  lg:items-center"
    >
      <div class="flex items-center justify-between">
        <div @click="isOpen = !isOpen" class="flex lg:hidden">
          <button
            type="button"
            class=" focus:outline-none"
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

        <nuxt-link
          to="/demand"
          class="hidden lg:flex link text-sm font-medium items-center text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:bg-main bg-secondary text-white"
        >
          ثبت سفارش
          <fa :icon="['fas', 'angle-left']" class="mr-3" />
          <fa :icon="['fas', 'angle-left']" />
        </nuxt-link>
        <img
          src="/img/Rabbit-small.png"
          class="w-[70px] block lg:hidden"
          alt=""
        />
      </div>
      <div
        class="flex-col-reverse mt-2 hidden lg:flex space-y-4 lg:space-y-0 lg:flex-row-reverse lg:items-center lg:mt-0"
      >
        <nuxt-link
          to="/work-samples"
          class="link text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:shadow-lg"
        >
          نمونه کارها
        </nuxt-link>

        <nuxt-link
          to="/"
          class="link text-sm font-medium text-center py-3 px-5 rounded-lg transition-colors duration-300 transform hover:shadow-lg"
        >
          صفحه اصلی
        </nuxt-link>
        <img
          src="/img/Rabbit-small.png"
          class="w-[70px] hidden lg:block ml-5"
          alt=""
        />
      </div>

      <div
        class="fixed top-0 right-0 w-screen h-screen bg-black z-40 opacity-50"
        v-if="isOpen"
        @click="isOpen = !isOpen"
      ></div>
      <div
        class="fixed top-0 right-0 w-3/4 h-screen text-black bg-white z-50 flex flex-col items-center"
        :class="isOpen ? 'right-0' : '-right-full'"
      >
        <div class="w-full p-5 flex justify-start">
          <fa
            :icon="['fas', 'times']"
            size="lg"
            class="text-main cursor-pointer"
            @click="isOpen = !isOpen"
          />
        </div>
        <img
          src="/img/Rabbit-small.png"
          class="w-[150px] block lg:hidden"
          alt=""
        />
        <nuxt-link
          class="hover:bg-secondary hover:text-white w-full mx-5 rounded-lg mt-24 text-center py-5 border-b-2 border-gray-200 border-opacity-25"
          to="/"
        >
          صفحه اصلی
        </nuxt-link>
        <nuxt-link
          class="hover:bg-secondary hover:text-white w-full mx-5 rounded-lg text-center py-5 border-b-2 border-gray-200 border-opacity-25"
          to="/work-samples"
        >
          نمونه کارها
        </nuxt-link>
        <nuxt-link
          class="hover:bg-secondary hover:text-white w-full mx-5 rounded-lg text-center py-5 border-b-2 border-gray-200 border-opacity-25"
          to="/blog"
        >
          بلاگ
        </nuxt-link>
        <nuxt-link
          class="hover:bg-secondary hover:text-white w-full mx-5 rounded-lg text-center py-5 border-b-2 border-gray-200 border-opacity-25"
          to="/demand"
        >
          ثبت سفارش
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    const header = document.querySelector("#header");
    window.addEventListener("scroll", e => {
      let scrollY = window.scrollY || window.scrollTop || document.scrollTop;
      scrollY > 50
        ? header.classList.add("scroll-pos")
        : header.classList.remove("scroll-pos");
    });
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
.scroll-pos {
  @apply bg-main;
}
</style>
