<template>
  <main>
    <HeroSection />
    <!-- <div class="arrow-container">
      <span class="arrow"></span>
      <span class="arrow"></span>
    </div> -->
    <!-- <PortfolioContent /> -->
    <ContactInfo />
  </main>
</template>

<script>
// import HeroCardAnimation from "../components/HoverCardAnimation.vue";
import HeroSection from "../components/HeroSection.vue";
// import PortfolioContent from "../components/PortfolioContent.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  components: {
    // HeroCardAnimation,
    HeroSection,
    // PortfolioContent,
    ContactInfo,
  },
};
</script>

<style scoped>

/*
.hero-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  padding: 2rem 0;
  margin-top: 5rem;
}*/

/*ARROW STYLING*/
/*
.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 3rem;
  overflow: hidden;
  position: relative;
}

.arrow {
  width: 5px;
  height: 20px;
  border-radius: 5px;
  background-color: whitesmoke;
  margin: 3px;
  top: 0;
  animation: move 1.1s infinite ease-in-out;
}

.arrow:nth-of-type(1) {
  transform: rotate(-45deg);
}

.arrow:nth-of-type(2) {
  transform: rotate(45deg);
}

@keyframes move {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 35px;
  }
  100% {
    margin-top: 0;
  }
}

/*CONTACT SECTION*/

.contact {
  background: linear-gradient(to bottom, var(--clr-6), var(--clr-2));
  padding: 2rem;
}

/*RESPONSIVE DESIGN*/
/*
@media (max-width: 1200px) {
  .content-wrapper{
    margin-left: 4.5rem;
  }

  .arrow-container {
    margin-top: 5rem;
  }

  .portfolio-content {
    margin-top: 1rem;
  }
}

@media(max-width: 991px){
  .content-wrapper{
    margin-left: 2rem;
  }
}

@media (max-width: 767px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-right: 3rem;
  }

  .box{
    margin-right: 1rem;
  }
}

@media (max-width: 575px) {
  .content-wrapper {
    margin: 0;
  }

  .box {
    margin: 0;
    margin-right: .5rem;
  }

  .arrow-container {
    margin-top: 2rem;
  }
}*/
</style>
