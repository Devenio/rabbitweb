<template>
  <div class="w-full bg-gray-800 px-5 lg:px-0 pt-10">
    <div class="container mx-auto text-white flex flex-wrap">
      <div class="px-5 w-full lg:w-1/3">
        <h2 class="text-2xl">درباره ما</h2>
        <div class="h-[2px] bg-white w-full opacity-25 mt-3"></div>
        <p class="opacity-75 mt-5">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون طراحان
          گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون
        </p>
      </div>
      <div class="px-5 w-full lg:w-1/3 mt-5 lg:mt-0">
        <h2 class="text-2xl">بخش های سایت</h2>
        <div class="h-[2px] bg-white w-full opacity-25 mt-3 mb-5"></div>
        <nuxt-link class="opacity-75" to="/xyz">قوانین و مقررات</nuxt-link
        ><br class="mb-2" />
        <nuxt-link class="opacity-75" to="/xyz">درباره ربیت وب</nuxt-link
        ><br class="mb-2" />
        <nuxt-link class="opacity-75" to="/xyz">ارتباط با ما</nuxt-link>
      </div>
      <div class="px-5 w-full lg:w-1/3 mt-5 lg:mt-0">
        <h2 class="text-2xl">ارتباط با ما</h2>
        <div class="h-[2px] bg-white w-full opacity-25 mt-3"></div>
        <p class="opacity-75 mt-5">
          شما میتوانید با استفاده از یکی از راه‌های زیر با ما ارتباط برقرار کنید
        </p>
        <p class="opacity-75 mt-3 hover:underline">
          <fa :icon="['fas', 'envelope']" class="mr-3" />
          <a href="mailto:contact@rabbitweb.ir">contact@rabbitweb.ir</a>
        </p>
        <p class="opacity-75 hover:underline">
          <fa :icon="['fab', 'telegram-plane']" class="mr-3" />
          <a href="https://t.me/rabbitwebir" target="_blank">@rabbitwebir</a>
        </p>
      </div>
    </div>
    <div class="w-full bg-gray-900 p-5 mt-10">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white"
      >
        <span class="opacity-50 text-center text-sm px-5 lg:px-0"
          >کليه حقوق محصولات و محتوای اين سایت متعلق به راکت می باشد و هر گونه
          کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست</span
        >
        <span class="opacity-50 text-sm mt-3 lg:mx-0 flex items-center">
          <a
            href="https://t.me/rabbitwebir"
            target="_blank"
            class="transform hover:scale-110 cursor-pointer"
          >
            <fa class="mx-2 text-xl" :icon="['fab', 'telegram-plane']" />
          </a>
          <a
            href="https://instagram.com/rabbitweb.ir/"
            target="_blank"
            class="transform hover:scale-110 cursor-pointer"
          >
            <fa class="mx-2 text-xl" :icon="['fab', 'instagram']" />
          </a>
          <a
            href="mailto:contact@rabbitweb.ir"
            target="_blank"
            class="transform hover:scale-110 cursor-pointer"
          >
            <fa :icon="['fas', 'envelope']" class="mx-2 text-xl" />
          </a>
          <a
            href="tel:09019622899"
            target="_blank"
            class="transform hover:scale-110 cursor-pointer"
          >
            <fa class="mx-2 text-xl" :icon="['fab', 'whatsapp']" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
