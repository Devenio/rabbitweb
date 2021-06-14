<template>
  <div class="w-full">
    <div
      class="bg-pic w-full text-white relative px-5 lg:px-10 pt-24 lg:pt-48 pb-16 lg:pb-48 overflow-hidden"
    >
      <div class="relative z-10">
        <h1 class="text-center text-2xl lg:text-5xl">
          طراحی وبسایت خودتون رو به
          <strong class="text-blue-600">ربیت وب</strong> بسپارید
        </h1>
        <h3 class="hidden lg:block text-center opacity-75 text-xl mt-3">
          لورم اپیسوم متن ساختگی در صنعت گرافیک برای نمایش متن
        </h3>
        <div
          class="flex items-center w-full justify-center mt-5 lg:mt-10 relative z-50"
        >
          <button
            class="ml-3 py-2 px-5 lg:text-xl cursor-pointer bg-white text-blue-600"
          >
            مشاهده نمونه کارها
          </button>
          <button
            class="ml-3 py-2 px-5 lg:text-xl cursor-pointer bg-blue-600 text-white"
          >
            ارتباط با ما
          </button>
        </div>
      </div>
      <div
        class="w-full h-full absolute top-0 right-0 bg-black opacity-75"
        style="z-index: 0"
      ></div>
      <img
        src="/img/group2.png"
        alt=""
        class="absolute z-0 bottom-0 hidden lg:block"
        style="right: -150px;"
      />
      <img
        src="/img/group2.png"
        alt=""
        class="absolute z-0 hidden lg:block"
        style="left: -150px; bottom: -150px;"
      />
    </div>
    <div
      class="rounded-lg bg-white flex flex-col lg:flex-row items-center mx-auto -mt-5 lg:-mt-16 shadow-lg relative z-10"
      id="q-box"
    >
      <div
        class="flex items-center justify-center bg-blue-100 p-5 w-full lg:h-full"
      >
        <img src="/img/logo.png" alt="logo" class="" style="width: 100px;" />
      </div>
      <div class="p-5 text-center lg:text-right">
        <h2 class="font-bold text-lg">
          چرا برای کسب و کار خود به یک وب سایت احتیاج دارید؟
        </h2>
        <p class="opacity-75 mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و
        </p>
        <div class="text-blue-900 mt-5 font-bold underline cursor-pointer">
          همین الان شروع کنیم
          <fa :icon="['fas', 'angle-left']" />
        </div>
      </div>
    </div>
    <div
      class="container mx-auto flex flex-col lg:flex-row-reverse items-center mt-16"
    >
      <img src="/img/group1.svg" alt="" class="px-5" />
      <div class="mt-10 lg:mt-0 text-center lg:text-right">
        <h1 class="text-4xl font-bold">
          چرا ربیت وب ؟
        </h1>
        <p class="opacity-75 mt-5 lg:px-0 px-5 leading-loose">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
        </p>
        <button
          class="py-3 px-10 bg-blue-600 text-white mt-10 lg:mt-16 rounded-lg"
        >
          چطوری سفارش بدیم ؟
        </button>
      </div>
    </div>
    <div class="mt-16 bg-pic2 p-10">
      <div
        class="flex flex-col lg:flex-row lg:justify-center lg:w-[800px] mx-auto rounded-xl items-center relative z-10 text-white text-center overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-full h-full glass bg-black opacity-75"
        ></div>
        <span class="text-2xl font-bold p-5 lg:mx-3">
          تحویل در کوتاه ترین زمان
        </span>
        <div
          class="h-[1px] w-[100px] lg:h-[70px] lg:w-[1px] bg-white opacity-25"
        ></div>
        <span class="text-2xl font-bold p-5 lg:mx-3">
          پشتیبانی به مدت دلخواه
        </span>
        <div
          class="h-[1px] w-[100px] lg:h-[70px] lg:w-[1px] bg-white opacity-25"
        ></div>
        <span class="text-2xl font-bold p-5 lg:mx-3">
          کیفیت کار بالا
        </span>
      </div>
    </div>
    <div class="container mx-auto">
      <h3 class="text-2xl mt-16 font-bold px-5 lg:text-3xl">
        نمونه کارها
      </h3>
      <div class="h-[3px] w-[70px] bg-blue-600 mx-5 mt-3"></div>
    </div>
    <div class="mt-5">
      <div
        class="container lg:w-[1024px] mx-auto flex flex-wrap justify-center items-center"
      >
        <work-samp class="lg:w-[600px]" />
        <work-samp class="lg:w-[300px]" />
        <work-samp class="lg:w-[300px]" />
        <work-samp class="lg:w-[600px]" />
      </div>
      <div class="flex justify-center w-full">
        <button class="mt-5 py-3 px-5 bg-blue-600 text-white rounded-lg">
          مشاهده همه نمونه کارها
        </button>
      </div>
    </div>
    <div class="blog-part mt-16 p-5 py-10 relative w-full overflow-x-hidden">
      <img
        src="/img/group2.png"
        alt=""
        class="absolute z-0 bottom-0 hidden lg:block"
        style="right: -150px;"
      />
      <img
        src="/img/group2.png"
        alt=""
        class="absolute z-0 hidden lg:block"
        style="left: -150px; top: -100px;"
      />
      <div class="container mx-auto">
        <h3 class="text-2xl text-white font-bold px-5 lg:text-3xl">
          آخرین مقالات
        </h3>
        <div class="h-[3px] w-[70px] bg-blue-600 mx-5 mt-3"></div>
        <div class="flex items-center flex-wrap justify-center mt-8">
          <post />
          <post />
          <post />
          <post />
        </div>
        <div class="w-full flex justify-center">
          <button class="mt-5 py-3 px-5 bg-blue-600 text-white rounded-lg">
            مشاهده همه مقالات
          </button>
        </div>
      </div>
    </div>
    <div class="mt-16 p-5 py-10 relative w-full overflow-x-hidden">
      <div class="container mx-auto">
        <h3 class="text-2xl font-bold px-5 lg:text-3xl">
          نظرات مشتریان
        </h3>
        <div class="h-[3px] w-[70px] bg-blue-600 mx-5 mt-3"></div>
      </div>
      <div class="flex items-center overflow-x-auto justify-center mt-5 py-5">
        <comment class="transform rotate-3" />
        <comment class="transform -rotate-3" />
        <comment class="transform rotate-3" />
        <comment class="transform -rotate-3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-pic {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
}
.bg-pic2 {
  background-image: linear-gradient(#00000090, #00000090), url("/img/bg2.jpg");
  background-size: cover;
  background-position: center;
}
#q-box {
  width: 300px;
}
@media (min-width: 1024px) {
  #q-box {
    width: 800px;
  }
}
.glass {
  z-index: -5;
  /* filter: blur(5px); */
}
.blog-part {
  background-image: linear-gradient(to right, #28313b, #485461);
}
</style>
