<template>
  <div class="h-[300px] m-3 relative">
    <img src="/img/bg.jpg" alt="" class="object-cover w-full h-full" />
    <div class="absolute w-full h-full bg-black opacity-50 top-0 right-0"></div>
    <div
      class="absolute w-full p-3 bg-black opacity-75 bottom-0 right-0 text-white"
    >
      <h3 class="text-lg inline-block">{{ name }}</h3>
      <span class="inline-block opacity-50 text-sm">({{ desc }})</span>
      <a :href="link" class="block underline">{{ link }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    desc: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
