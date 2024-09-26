<template>
  <main>
    <section class="container">
      <div class="content-wrapper">
        <section class="box">
          <HoverCardAnimation />
        </section>
        <section class="bio">
          <BioContent />
        </section>
      </div>
      <div class="arrow-container">
        <span class="arrow"></span>
        <span class="arrow"></span>
      </div>
    </section>
    <section id="projects" class="portfolio-content">
      <PortfolioContent />
    </section>
    <section class="contact" id="contact">
      <ContactInfo />
    </section>
  </main>
</template>

<script>
import HoverCardAnimation from "../components/HoverCardAnimation.vue";
import BioContent from "../components/BioContent.vue";
import PortfolioContent from "../components/PortfolioContent.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  components: {
    HoverCardAnimation,
    BioContent,
    PortfolioContent,
    ContactInfo,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 74vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  padding: 2rem 0;
  margin-top: 5rem;
}

.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
  margin-left: 5rem;
}

.box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 4rem;
  margin-top: .6rem;
}

.box a {
  text-decoration: none;
  padding: 0.5rem;
  font-size: 32px;
  color: var(--clr-ntr-2);
  font-weight: 700;
  font-family: "Raleway", sans-serif;
}

/*ARROW STYLING*/
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
@media(max-width: 1000px){
  .arrow-container{
    margin-top: 5rem;
  }

  .portfolio-content{
    margin-top: 1rem;
  }
}

@media(max-width: 480px){
  .content-wrapper{
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
  
  .box {
    margin: 0;

  }

  .arrow-container{
    margin-top: 2rem;
  }
}
</style>
