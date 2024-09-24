<template>
  <div class="about-container">
    <section class="hero-section">
      <div class="absolute">
        <div class="absolute inset-0 justify-center">
          <div class="bg-shape1 bg-gold opacity-50 bg-blur"></div>
          <div class="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        </div>
        <div class="container-texts">
          <h2 class="fade-in-container">
            <span class="fade-in-word delay-0">Self Motivated.</span>
            <span class="fade-in-word delay-1">Active Learner.</span>
            <span class="fade-in-word delay-2">Perserverant.</span>
          </h2>
          <h1 class="fade-in-container"></h1>
        </div>
      </div>
    </section>
    <section class="about-content">
      <AboutContent></AboutContent>
    </section>
  </div>
</template>

<script>
import AboutContent from "@/components/AboutContent.vue";

export default {
  components: {
    AboutContent,
  },
};
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.hero-section {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100%;
  scroll-behavior: smooth;
}

section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.absolute {
  margin-left: 2rem;
  position: absolute;
  top: 60px !important;
  inset: 0;
  justify-content: left;
  display: inline-flex;
  flex-direction: row;
}

.justify-center {
  justify-content: center;
}

.bg-shape1 {
  width: 400px;
  height: 400px;
  border-radius: 9999px;
  position: relative;
}

.bg-shape2 {
  width: 300px;
  height: 300px;
  border-radius: 9999px;
  position: relative;
}

.opacity-50 {
  opacity: 0.5;
}

.bg-blur {
  filter: blur(90px);
}

.bg-primary {
  background-color: var(--clr-4);
}

.bg-gold {
  background-color: var(--clr-5);
}

.container-texts {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.fade-in-container {
  display: inline-block;
}

.fade-in-word {
  opacity: 0;
  display: inline-block;
  animation: fadeIn 1s ease-in-out forwards;
  margin: 0.5rem 0.25rem;
}

.delay-0 {
  animation-delay: 0s;
}

.delay-1 {
  animation-delay: 0.8s;
}

.delay-2 {
  display: block;
  font-size: 35px;
  animation-delay: 1.8s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 480px) {
  section {
    height: 75vh;
  }

  .fade-in-container {
    font-size: 22px;
  }

  .delay-2 {
    font-size: 33px;
  }
}
</style>