<template>
  <section class="hero-section">
    <div class="text-container">
      <h2 class="title">
        Need someone to bring
        <span class="creative-text">creative ideas</span> to life?
        <span class="description"
          >With a passion for pushing the envelope and gaining new skills along
          the way, I might be the
          <span class="frontend">Front-End Developer</span> you're looking for!
          I'm all about the details and I thrive on learning whatever's
          necessary to get the job done. I even know a little bit of back-end
          too!</span
        >
      </h2>
      <BaseButton>
        <router-link to="/home#contact" class="button-link"
          >Let's connect!</router-link
        >
      </BaseButton>
      <!-- <h3 class="call-to-action">Let's build something together!</h3> -->
    </div>
    <div class="tech-stack">
      <ul class="icon-list">
        <li class="icon-container" v-for="icon in icons" :key="icon">
          <i :class="icon.code"></i>
          <h3>{{ icon.name }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import BaseButton from "./UI/BaseButton.vue";

export default {
  computed: {
    ...mapState(["icons"]),
  },
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
.hero-section {
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 6rem;
}

.text-container {
  font-family: "Roboto", sans-serif;
  text-align: left;
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

ul {
  padding: 0;
  margin: 0;
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

@media (max-width: 1200px) {
  .hero-section {
    margin: 0;
    margin-left: 2rem;
    width: 28rem;
  }

  .icon-title i {
    font-size: 1.5rem;
  }

  .icon-title h3 {
    font-size: 0.5rem;
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
    width: 95%;
  }

  .tech-stack {
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}
</style>
