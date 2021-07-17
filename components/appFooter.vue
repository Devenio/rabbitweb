<template>
  <footer
    class="w-full bg-gray-800  lg:px-0 pt-10 mt-10 bg-gradient-to-tl from-main to-blue-900 relative"
  >
    <div
      class="w-[50px] h-[50px] rounded-full bg-white cursor-pointer flex items-center justify-center mx-auto absolute -top-5 right-1/2 transform translate-x-1/2"
      @click="scrollToTop()"
    >
      <fa :icon="['fas', 'angle-up']" class="text-main text-2xl" />
    </div>
    <div class="container mx-auto text-white flex flex-wrap">
      <div class="px-5 w-full lg:w-1/3">
        <h2 class="text-2xl">درباره ما</h2>
        <div class="h-[2px] bg-white w-full opacity-25 mt-3"></div>
        <p class="opacity-75 mt-5">
          گروه نرم افزاری ربیت وب با هدف ورود کسب و کارها به دنیای دیجیتال زیر
          نظر ستاد اقتصاد دیجیتال فعالیت خود را آغاز کرد. تمرکز مجموعه بر روی
          ارائه خدمات بر اساس آخرین نیاز بازار آنلاین با توجه به نوع بیزینس
          مشتریان می‌باشد
        </p>
      </div>
      <div class="px-5 w-full lg:w-1/3 mt-5 lg:mt-0">
        <h2 class="text-2xl">بخش های سایت</h2>
        <div class="h-[2px] bg-white w-full opacity-25 mt-3 mb-5"></div>
        <div class="flex flex-col space-y-5 lg:space-y-3">
          <nuxt-link class="opacity-75" to="/">صفحه اصلی</nuxt-link>
          <!-- <br /> -->
          <nuxt-link class="opacity-75" to="/demand">ثبت سفارش</nuxt-link>
          <!-- <br /> -->
          <nuxt-link class="opacity-75" to="/work-samples"
            >نمونه کارها</nuxt-link
          >
        </div>
      </div>
      <div class="px-5 w-full lg:w-1/3 mt-5 lg:mt-0">
        <h2 class="text-2xl">ارتباط با ما</h2>
        <div class="h-[2px] bg-white w-full opacity-25 mt-3"></div>
        <span
          class="opacity-50 text-sm mt-3 lg:mx-0 flex flex-col items-start space-y-3"
        >
          <a
            href="https://t.me/rabbitwebir"
            target="_blank"
            class="transform hover:scale-110 cursor-pointer"
          >
            <fa class="mx-2 text-xl" :icon="['fab', 'telegram-plane']" />
            <span>@rabbitwebir</span>
          </a>
          <a
            href="https://instagram.com/rabbitweb.ir/"
            target="_blank"
            class="transform hover:scale-110 cursor-pointer"
          >
            <fa class="mx-2 text-xl" :icon="['fab', 'instagram']" />
            <span>rabbitweb.ir</span>
          </a>
          <a
            href="mailto:contact@rabbitweb.ir"
            target="_blank"
            class="transform hover:scale-110 cursor-pointer"
          >
            <fa :icon="['fas', 'envelope']" class="mx-2 text-xl" />
            <span>contact@rabbitweb.ir</span>
          </a>
          <a
            href="tel:09019622899"
            target="_blank"
            class="transform hover:scale-110 cursor-pointer"
          >
            <fa class="mx-2 text-xl" :icon="['fab', 'whatsapp']" />
            <span>09019622899</span>
          </a>
        </span>
      </div>
    </div>
    <!-- copy right section -->
    <div class="w-full bg-dark p-3 mt-10">
      <div
        class="container mx-auto text-center flex flex-col lg:flex-row items-center justify-center text-white"
      >
        <span class="opacity-75 text-center text-sm px-5 lg:px-0">
          کليه حقوق محصولات و محتوای اين سایت متعلق به ربیت وب می باشد و هر گونه
          کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
};
</script>

<style lang="scss" scoped></style>
