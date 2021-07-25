<template>
  <div class="w-full">
    <!-- main section -->
    <bg class="absolute -top-1 right-0 " />
    <section class="w-full text-white">
      <div
        class="py-16 pt-24 lg:py-0 lg:h-screen container mx-auto flex justify-center items-center"
      >
        <div
          class="w-full flex flex-col lg:flex-row-reverse items-center lg:justify-between"
        >
          <img
            src="/img/group5.svg"
            class="w-full px-5 lg:px-0 max-w-[400px] lg:max-w-[500px] xl:w-[650px] xl:max-w-full"
            alt=""
          />
          <div
            class="text-center lg:text-right text-dark lg:text-white flex flex-col space-y-10 px-5 lg:px-0 mt-10 lg:mt-0"
          >
            <div>
              <h1 class="title text-2xl font-extralight lg:text-4xl">
                جایگاهت رو با <strong class="">ربیت وب</strong> تو
                بازار آنلاین پیدا کن!
              </h1>
              <h3 class="opacity-75 lg:text-xl mt-3">
                طراحی انواع سایت های شرکتی، فروشگاهی و تخصصی ‎
              </h3>
            </div>
            <div>
              <nuxt-link
                to="/work-samples"
                class="py-2 px-5 lg:text-lg cursor-pointer rounded-lg bg-white text-main border-2 border-main lg:border-transparent"
              >
                مشاهده نمونه کارها
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- first question section -->
    <section
      class="container mx-auto mt-10 flex flex-col items-center text-center px-5"
    >
      <fa
        :icon="['fas', 'question-circle']"
        class="text-3xl lg:text-5xl text-main"
      />
      <h1 class="text-2xl mt-5 font-bold">
        چرا برای کسب و کار خودمون به یک وب سایت احتیاج داریم ؟
      </h1>
      <p class="mt-5 opacity-75 max-w-[800px]">
        81٪ از افراد قبل از تصمیم گیری در مورد خرید و فروش در یک کسب وکار یا
        خدمات، در اینترنت تحقیق می کنند. داشتن وب سایت مشتریان جدیدی را از
        سرتاسر کشور به سمت کسب و کار شما جذب می‌کند و باعث می‌شود درآمد بیشتری
        کسب کنید. وب سایت بازگشت سرمایه بیشتری دارد و می تواند بسیار مقرون به
        صرفه باشد چون هزینه وب سایت ها نسبت به هر نوع تبلیغات سنتی دیگر پایینتر
        و نتیجه‌اش به مراتب بیشتر است
      </p>
      <nuxt-link to="/" class="mt-10 px-5 py-2 bg-secondary hover:bg-main text-white rounded-lg">ادامه مطلب</nuxt-link>
    </section>
    <!-- second question section -->
    <section class="container mx-auto mt-10 text-center">
      <div class="w-[100px] h-[2px] bg-main mx-auto mb-5"></div>
      <h1 class="text-2xl font-bold">خدمات ربیت وب</h1>
      <div class="w-full flex flex-wrap items-center justify-center mb-16">
        <div class="m-3 flex lg:w-1/5 flex-col items-center">
          <img class="w-[200px]" src="/img/group4.png" alt="" />
          <p class="font-bold opacity-75 text-lg">
            طراحی وبسایت و وب اپلیکیشن بدون محدودیت
          </p>
        </div>
        <div class="m-3 flex lg:w-1/5 flex-col items-center">
          <img class="w-[200px]" src="/img/group5.png" alt="" />
          <p class="font-bold opacity-75 text-lg">
            پیاده سازی قراردادهای هوشمند بر بستر شبکه های بلاکچین
          </p>
        </div>
        <div class="m-3 flex lg:w-1/5 flex-col items-center">
          <img class="w-[200px]" src="/img/group6.png" alt="" />
          <p class="font-bold opacity-75 text-lg">
            تولید محتوای اختصاصی برای شبکه های اجتماعی
          </p>
        </div>
        <div class="m-3 flex lg:w-1/5 flex-col items-center">
          <img class="w-[200px]" src="/img/group7.png" alt="" />
          <p class="font-bold opacity-75 text-lg">
            بهینه سازی سئو بر اساس آخرین الگوریتم های گوگل
          </p>
        </div>
      </div>
      <nuxt-link
        to="/demand"
        class="px-5 py-2 rounded-lg text-white bg-secondary hover:bg-main"
        >چجوری سفارش بدم ؟</nuxt-link
      >
    </section>
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
  mounted() {
    console.log(this.$route, this.$router);
  },
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
#q-box {
  width: 300px;
}
@media (min-width: 1024px) {
  #q-box {
    width: 800px;
  }
  .title {
    line-height: 5.5rem;
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
