<template>
  <div class="w-[300px] relative z-10 m-5 py-3">
    <div
      class="w-full h-full bg-white opacity-25 absolute top-0 left-0 rounded-lg"
    ></div>
    <div class="flex relative z-10">
      <img
        src="/img/bg.jpg"
        alt="post"
        class="w-[250px] h-[200px] object-cover object-center rounded-lg transform -translate-y-5"
      />
      <div class="flex flex-col items-center w-full justify-start text-white">
        <fa class="text-2xl my-3 opacity-75" :icon="['fas', 'heart']" />
        <fa class="text-2xl my-3 opacity-75" :icon="['fas', 'share']" />
        <fa class="text-2xl my-3 opacity-75" :icon="['fas', 'ellipsis-v']" />
      </div>
    </div>
    <div class="relative z-10 px-5">
      <h3 class="text-lg font-bold text-white">سیستم مورد نیاز برنامه نویسی</h3>
      <p class="opacity-75 text-white mt-3">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <div class="w-full flex items-center justify-between mt-3 text-white">
          <span class="opacity-75 underline">ادامه مطلب</span>
          <span class="opacity-75">1/5/1356</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
