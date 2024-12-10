<template>
  <section>
    <div
      class="relative z-0 flex flex-col justify-center items-center mt-20 space-y-10 md:mt-14 md:flex-row md:space-x-6 md:mx-14"
    >
      <div>
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
              looking for! I'm all about the details and I thrive on learning
              whatever's necessary to get the job done. I even know a little bit
              of back-end too!</span
            >
          </h2>
          <button
            class="items-center w-1/2 py-2 mx-auto mt-10 md:mt-8 lg:mt-10"
          >
            <router-link to="/home#contact" class="text-sm"
              >Let's connect</router-link
            >
          </button>
        </div>
      </div>
    </div>
    <div class="arrow-container">
      <span class="arrow"></span>
      <span class="arrow"></span>
    </div>
    <!-- <div class="tech-stack">
        <ul class="icon-list">
          <li class="icon-container" v-for="icon in icons" :key="icon">
            <i v-if="icon.code" :class="icon.code"></i>
            <img v-else :src="icon.svg" class="svg">
            <h3>{{ icon.name }}</h3>
          </li>
        </ul>
      </div> -->
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

<style scoped>
/*.box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 4rem;
  margin-top: 0.6rem;
}

.box a {
  text-decoration: none;
  padding: 0.5rem;
  font-size: 32px;
  color: var(--clr-ntr-2);
  font-weight: 700;
  font-family: "Raleway", sans-serif;
}

.hero-section {
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
}

.text-container {
  font-family: "Roboto", sans-serif;
  text-align: left;
  font-weight: 600;
}

.title {
  position: relative;
  font-size: 1.6rem;
  color: whitesmoke;
  margin-bottom: 1.3rem;
  font-family: "Raleway", sans-serif;
}

.title .creative-text {
  background-image: linear-gradient(
    43deg,
    var(--clr-c4),
    var(--clr-c1),
    var(--clr-a1),
    var(--clr-a2),
    var(--clr-a3),
    var(--clr-a4),
    var(--clr-ntr-1)
  );
  -webkit-background-clip: text;
  color: transparent;
}

.title .frontend {
  color: var(--clr-p1);
  font-size: 0.8rem;
}

.title .description {
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
}

.title .emoji {
  font-size: 1rem;
}

.call-to-action {
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 1.5rem;
}

/*.subheading {
  font-size: 1rem;
}*/

/*
ul {
  padding: 0;
  margin: 0;
}

.svg {
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  background-image: url('../../public/icons/tailwind.svg');
  background-size: cover;
}

.svg:hover {
  filter: brightness(0) saturate(100%) invert(75%) sepia(100%) saturate(1000%) hue-rotate(1deg) brightness(100%) contrast(90%);
}

.icon-list {
  display: flex;
  gap: 0.5rem;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-container i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.icon-container h3 {
  margin: 0;
  font-size: 0.6rem;
}

.icon-container i,
.icon-container h3 {
  color: var(--clr-7);
  transition: color 0.3s ease-in-out;
}

.icon-container:hover i,
.icon-container:hover h3 {
  color: var(--clr-c1);
  transition-delay: 0.03s;
}

*/

/*
@media (max-width: 1200px) {
  .hero-section {
    width: 28rem;
  }

  .icon-title i {
    font-size: 1.5rem;
  }

  .icon-title h3 {
    font-size: 0.5rem;
  }
}

@media (max-width: 991px){
  .hero-section{
    width: 24rem;
  }
}

@media (max-width: 767px) {
  .hero-section {
    margin: 0;
    margin-left: 3rem;
  }

  .text-container {
    margin: 0;
    margin-top: 3rem;
    text-align: center;
  }

  button {
    margin: 1rem 0;
  }

  .tech-stack {
    margin-top: 1.5rem;
    font-size: 1rem;
    margin-bottom: 2rem;
    align-items: center;
  }

  .icon-list {
    gap: 0.3rem;
  }
}

@media (max-width: 575px) {
  .hero-section {
    align-items: center;
    margin: 0;
    width: 25rem;
  }

  .text-container {
    width: 80%;
  }

  .tech-stack {
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}
*/
</style>
