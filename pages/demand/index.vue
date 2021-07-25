<template>
  <div class="py-10 px-5 container mx-auto text-dark">
    <img src="/img/group2.svg" class="px-5 mt-24 mx-auto max-w-[500px] w-full md:w-auto" alt="">
    <h1 class="text-2xl mt-16 lg:text-4xl text-center font-bold">
      ثبت سفارش خودتون رو در
      <span class="text-secondary">سریع ترین زمان</span> ممکن انجام دهید
    </h1>
    <h5 class="mt-3 text-base lg:text-lg opacity-75 text-center">
      برای ثبت سفارش کافیه اطلاعات لازم رو برای ما ارسال کنید و ما در سریع ترین
      زمان با شما تماس میگیریم
    </h5>
    <div
      class="form-box relative bg-white rounded-lg mt-16 mb-16 border-2 border-gray-100 shadow-lg p-10 lg:w-[500px] mx-auto"
    >
      <div class="w-full mb-2">
        <div class="flex flex-col justify-center">
          <div>نام <span class="text-red-500">*</span> :</div>
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
        class="w-full mt-6 py-2 rounded hover:bg-main bg-secondary text-gray-100 focus:outline-none"
      >
        ارسال
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      PhoneNumber: "",
      workField: ""
    };
  },
  mounted() {},
  methods: {
    sendDemand() {
      
      if (
        !this.description ||
        !this.PhoneNumber ||
        !this.workField ||
        !this.name
      ) {
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
            this.name = this.description = this.PhoneNumber = this.workField =
              "";
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
.form-box::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(3deg);
  @apply bg-secondary;
  z-index: -1;
  border-radius: 10px;
}
.form-box::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(-3deg);
  @apply bg-main;
  z-index: -1;
  border-radius: 10px;
}
</style>
