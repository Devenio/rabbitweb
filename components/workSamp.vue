<template>
  <div
    class="h-[300px] m-3 relative w-[300px] text-center shadow-xl cursor-pointer transform hover:scale-105"
  >
    <img
      src="/img/pro1.png"
      alt=""
      class="object-cover object-top w-full h-full"
    />
    <!-- <div class="absolute w-full h-full bg-black opacity-50 top-0 right-0"></div> -->
    <div class="absolute w-full p-3 bg-black bottom-0 right-0 text-white">
      <h3 class="text-lg hidden">{{ name }}</h3>
      <span class="hidden opacity-50 text-sm">({{ desc }})</span>
      <a :href="link" target="_blank" rel="nofollow" class="block underline">
        {{ link }}
      </a>
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
