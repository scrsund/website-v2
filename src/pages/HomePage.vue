<template>
  <main>
    <section class="container">
      <div class="content-wrapper">
      <div class="box">
        <HoverCardAnimation />
      </div>
      <!-- BIO -->
       <LandingPage />
    </div>
      <div class="arrow-container">
        <span class="arrow"></span>
        <span class="arrow"></span>
      </div>
    </section>
    <!-- PORTFOLIO PROJECTS-->
     <PortfolioContent />
    <!-- CONTACT INFO -->
    <section class="contact">
     <hr>
      <h1>Get in touch!</h1>
      <p>Email me at scr.sund@gmail.com</p>
    </section>
  </main>
</template>

<script>
import HoverCardAnimation from '../components/HoverCardAnimation.vue';
import LandingPage from '../components/LandingPage.vue';
import PortfolioContent from '../components/PortfolioContent.vue';

export default {
  components: {
    HoverCardAnimation,
    LandingPage,
    PortfolioContent,
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
}

.box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.box a {
  text-decoration: none;
  padding: 0.5rem;
  font-size: 32px;
  color: whitesmoke;
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
  position: relative
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

.arrow:nth-of-type(1){
  transform: rotate(-45deg);
}

.arrow:nth-of-type(2){
  transform: rotate(45deg);
}

@keyframes move{
  0%{margin-top: 0;}
  50%{margin-top: 35px;}
  100%{margin-top: 0;}
}

/*CONTACT SECTION*/

.contact {
  background-color: var(--clr-6);
  padding: 2rem;
}

/*RESPONSIVE DESIGN*/

@media (max-width: 1000px) {
  .container {
    display: grid;
  }

  .box {
    margin-bottom: 0;
  }

  .text-container {
    margin-top: 4rem;
    text-align: center;
  }

  .title {
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }
}

@media (max-width: 480px) {
  main {
    overflow-x: hidden;
  }
  .container {
    display: grid;
  }

  .box {
    margin-bottom: 0;
  }

  .text-container {
    text-align: center;
    margin-top: 3rem;
  }

  .title {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-right: 1rem;
  }

  i {
    display: none;
  }

  .box a {
    font-size: 28px;
  }
}
</style>
