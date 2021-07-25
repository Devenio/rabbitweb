<template>
  <div class="container mx-auto px-5 pt-16 lg:px-0">
    <img src="/img/group3.svg" class="mx-auto w-full md:w-auto max-w-[500px] px-5 mt-24 mb-5" alt="">
    <h1 class="text-2xl lg:text-4xl text-center font-bold">
      به بخش نمونه کارهای <span class="text-secondary">ربیت وب</span> خوش اومدید
    </h1>
    <h5 class="mt-3 text-base lg:text-lg opacity-75 text-center">
      برای مشاهده جزییات هر نمونه کار روی اون کلیک کنید
    </h5>
    <div class="h-[2px] w-[300px] bg-blue-600 mx-auto mt-3"></div>
    <div
      class="mt-10 flex flex-wrap items-center justify-center space-x-3 space-y-3 lg:space-y-0 mb-16 w-full"
    >
      <work-samp
        class=""
        v-for="sample in samples"
        :key="sample.id"
        :name="sample.name"
        :link="sample.link"
        :desc="sample.description"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/Samples/");

    return {
      samples: data
    };
  }
};
</script>

<style lang="scss" scoped></style>
