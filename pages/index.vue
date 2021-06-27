<template>
  <div class="w-full">
    <div
      class="bg-pic w-full text-white relative px-5 lg:px-10 pt-24 lg:pt-48 pb-16 lg:pb-48 overflow-hidden"
    >
      <div class="relative z-10">
        <h1 class="text-center text-2xl lg:text-5xl">
          جایگاهت با <strong class="text-blue-500">ربیت وب</strong> تو بازار آنلاین
          پیدا کن!
        </h1>
        <h3 class=" text-center opacity-75 lg:text-xl mt-3">
          طراحی انواع سایت های شرکتی، فروشگاهی و تخصصی ‎
        </h3>
        <div
          class="flex items-center w-full justify-center mt-5 lg:mt-10 relative z-50"
        >
          <nuxt-link
            to="/work-samples"
            class="ml-3 py-3 px-5 rounded-sm lg:text-xl cursor-pointer bg-white text-blue-600"
          >
            مشاهده نمونه کارها
          </nuxt-link>
          <button
            class="ml-3 py-3 px-5 rounded-sm lg:text-xl cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
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
        class="absolute z-0 -bottom-1 hidden lg:block"
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
      class="rounded-lg overflow-hidden bg-white lg:h-[300px] flex flex-col lg:flex-row items-center mx-auto -mt-5 lg:-mt-16 shadow-lg relative z-10"
      id="q-box"
    >
      <div
        class="flex items-center justify-center bg-blue-100 w-full py-5 lg:w-1/3 lg:h-full"
      >
        <img src="/img/logo.png" alt="logo" class="w-[100px]" />
      </div>
      <div class="p-5 text-center lg:text-right lg:w-2/3">
        <h2 class="font-bold text-lg">
          چرا برای کسب و کار خود به یک وب سایت احتیاج دارید؟
        </h2>
        <p class="opacity-75 mt-3">
          81٪ از افراد قبل از تصمیم گیری در مورد خرید و فروش در یک کسب وکار یا
          خدمات، در اینترنت تحقیق می کنند. داشتن وب سایت مشتریان جدیدی را از
          سرتاسر کشور به سمت کسب و کار شما جذب می‌کند و باعث می‌شود درآمد بیشتری
          کسب کنید. وب سایت بازگشت سرمایه بیشتری دارد و می تواند بسیار مقرون به
          صرفه باشد چون هزینه وب سایت ها نسبت به هر نوع تبلیغات سنتی دیگر
          پایینتر و نتیجه‌اش به مراتب بیشتر است
        </p>
        <nuxt-link
          to="/demand"
          class="text-blue-900 mt-3 font-bold underline cursor-pointer"
        >
          همین الان شروع کنیم
          <fa :icon="['fas', 'angle-left']" />
        </nuxt-link>
      </div>
    </div>
    <div
      class="container mx-auto flex flex-col lg:flex-row-reverse lg:justify-evenly items-center mt-16"
    >
      <img src="/img/group1.svg" alt="" id="group1" class="px-5" />
      <div class="mt-10 lg:mt-0 text-center lg:text-right">
        <h1 class="text-4xl font-bold">
          چرا ربیت وب ؟
        </h1>
        <p class="opacity-75 mt-5 lg:px-0 px-5 leading-loose">
          + طراحی وبسایت و وب اپلیکیشن ، بدون محدودیت ! <br />
          + پیاده سازی قراردادهای هوشمند بر بستر شبکه های بلاکچین<br />
          + تولید محتوای اختصاصی برای شبکه های اجتماعی<br />
          + بهینه سازی سئو بر اساس آخرین الگوریتم های گوگل<br />
          + ...
        </p>
        <nuxt-link to="/demand/">
          <button
            class="py-3 px-10 bg-blue-600 text-white mt-10 lg:mt-16 rounded-lg"
          >
            چطوری سفارش بدیم ؟
          </button>
        </nuxt-link>
      </div>
    </div>
    <div class="mt-16 bg-pic2 p-10">
      <h1 class="text-center mb-5 text-3xl text-white">خدمات ربیت وب</h1>
      <div
        class="flex flex-col lg:flex-row lg:justify-center lg:w-[800px] mx-auto rounded-xl items-center relative z-10 text-white text-center overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-full h-full glass bg-black opacity-75"
        ></div>
        <span class="text-2xl font-bold p-5 lg:mx-3">
          تحویل فوری
        </span>
        <div
          class="h-[1px] w-[100px] lg:h-[70px] lg:w-[1px] bg-white opacity-25"
        ></div>
        <span class="text-2xl font-bold p-5 lg:mx-3">
          پشتیبانی 24 ساعته
        </span>
        <div
          class="h-[1px] w-[100px] lg:h-[70px] lg:w-[1px] bg-white opacity-25"
        ></div>
        <span class="text-2xl font-bold p-5 lg:mx-3">
          کیفیت کار بالا
        </span>
      </div>
    </div>
    <!-- <div class="container mx-auto">
      <h3 class="text-2xl mt-16 font-bold px-5 lg:text-3xl">
        نمونه کارها
      </h3>
      <div class="h-[3px] w-[70px] bg-blue-600 mx-5 mt-3"></div>
    </div>
    <div class="mt-5">
      <div
        class="container lg:w-[1024px] mx-auto flex flex-wrap justify-center items-center"
      >
        <work-samp
          class="lg:w-[450px]"
          v-for="sample in samples"
          :key="sample.id"
          :name="sample.name"
          :link="sample.link"
          :desc="sample.description"
        />
      </div>
      <div class="flex justify-center w-full">
        <button class="mt-5 py-3 px-5 bg-blue-600 text-white rounded-lg">
          مشاهده همه نمونه کارها
        </button>
      </div>
    </div> -->
    <!-- <div class="blog-part mt-16 p-5 py-10 relative w-full overflow-x-hidden">
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
    </div> -->
    <!-- <div class="mt-16 p-5 py-10 relative w-full overflow-x-hidden">
      <div class="container mx-auto">
        <h3 class="text-2xl font-bold px-5 lg:text-3xl">
          نظرات مشتریان
        </h3>
        <div class="h-[3px] w-[70px] bg-blue-600 mx-5 mt-3"></div>
      </div>
      <div v-swiper="swiperOption" class="mt-10">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <comment />
          </div>
          <div class="swiper-slide">
            <comment />
          </div>
          <div class="swiper-slide">
            <comment />
          </div>
          <div class="swiper-slide">
            <comment />
          </div>
          <div class="swiper-slide">
            <comment />
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
    </div> -->
    <!-- <div class="container mx-auto px-5">
      <h3 class="text-2xl font-bold lg:text-3xl">
        ثبت سفارش
      </h3>
      <div class="h-[3px] w-[70px] bg-blue-600 mt-3"></div>
    </div>
    <div class="container mx-auto px-5 mt-8 pb-10">
      <div class="w-full mb-2">
        <div class="flex flex-col justify-center">
          <div>نام :</div>
          <input
            type="text"
            placeholder="نام خود را وارد کنید"
            class="px-5 mt-2 w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
            v-model="name"
          />
        </div>
      </div>
      <div class="w-full mb-2">
        <div class="flex flex-col justify-center">
          <div>
            شماره تلفن
            <span class="text-red-500">*</span>
            :
          </div>
          <input
            type="text"
            placeholder="مثال: 09215555555"
            class="px-5 mt-2 w-full border rounded py-2 text-gray-700 focus:outline-none"
            v-model="PhoneNumber"
          />
        </div>
      </div>
      <div class="w-full mb-2 justify-center">
        <div class="flex flex-col items-start">
          <div>
            زمینه کاری
            <span class="text-red-500">*</span>
            :
          </div>
          <input
            type="text"
            placeholder="مثال: حوزه کشاورزی، ورزشی، ..."
            class="px-5 mt-2 w-full border rounded py-2 text-gray-700 focus:outline-none"
            v-model="workField"
          />
        </div>
      </div>
      <div class="w-full mb-2 justify-center">
        <div class="">
          <div>
            توضیحات
            <span class="text-red-500">*</span>
            :
          </div>
          <textarea
            type="text"
            placeholder=""
            class="px-5 mt-2 w-full border rounded py-2 text-gray-700 max-h-[300px] focus:outline-none"
            v-model="description"
          ></textarea>
        </div>
      </div>
      <button
        @click="sendDemand()"
        class="w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none"
      >
        ارسال
      </button>
    </div> -->
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          1536: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          280: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      name: "",
      description: "",
      PhoneNumber: "",
      workField: ""
    };
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/Samples/");

    return {
      samples: data
    };
  },
  mounted() {},
  methods: {
    sendDemand() {
      if (!this.description || !this.PhoneNumber || !this.workField) {
        this.$swal({
          text: "لطفا تمام فیلدهای ستاره دار رو پر کنید",
          icon: "error"
        });
      } else {
        this.$axios
          .post("/Demand/", {
            name: this.name,
            description: this.description,
            PhoneNumber: this.PhoneNumber,
            workField: this.workField
          })
          .then(res => {
            this.$swal({
              text:
                "درخواست شما با موفقیت ثبت شد \nدر کوتاه ترین زمان با شما تماس میگیریم",
              icon: "success"
            });
            this.description = this.PhoneNumber = this.workField = "";
          })
          .catch(err => {
            this.$swal({
              text: "مشکلی در سیستم به وجود آمده. لطفا بعدا دوباره امتحان کنید",
              icon: "error"
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.bg-pic {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
}
.bg-pic2 {
  background-image: linear-gradient(#00000095, #00000095), url("/img/bg2.jpg");
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
#group1 {
  animation: slow-move 3s ease-in-out alternate infinite;
}
@keyframes slow-move {
  from {
    transform: translateY(-15px);
  }
  to {
    transform: translateY(15px);
  }
}
</style>
