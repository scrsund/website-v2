<template>
  <section class="h-screen">
    <div
      class="relative z-0 flex flex-col justify-center items-center space-y-10 pt-16 md:flex-row md:space-x-6 md:mx-14 lg:space-x-10"
    >
      <div class="md:mt-5">
        <HeroCardAnimation />
      </div>
      <div>
        <div
          class="flex flex-col p-5 text-center font-raleway font-semibold max-w-lg md:mb-4"
        >
          <h2 class="text-2xl">
            Need someone to bring
            <span class="creative">creative ideas</span> to life?
            <span class="font-poppins text-xs"
              >With a passion for pushing the envelope and gaining new skills
              along the way, I might be the
              <span class="text-clr-p1">Front-End Developer</span> you're
              looking for. I'm all about the details and I thrive on learning
              whatever's necessary to get the job done. I even know a little bit
              of back-end too!</span
            >
          </h2>
          <button
            class="items-center w-1/2 py-2 mx-auto mt-10 md:mt-8 lg:mt-10"
          >
            <router-link to="/home#contact" class="text-sm tracking-wider"
              >Let's Connect</router-link
            >
          </button>
        </div>
      </div>
    </div>
    <div class="arrow-container md:mt-20">
      <span class="arrow"></span>
      <span class="arrow"></span>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeroCardAnimation from "./HeroCardAnimation.vue";

export default {
  computed: {
    ...mapState(["icons"]),
  },
  components: {
    HeroCardAnimation,
  },
};
</script>
