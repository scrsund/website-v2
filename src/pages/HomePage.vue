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
        <!-- <h3>check out my projects below:</h3> -->
        <span class="arrow"></span>
        <span class="arrow"></span>
      </div>
    </section>
    <!-- ARROW ANIMATION-->
    <!-- PORTFOLIO PROJECTS-->
     <section class="portfolio-content">
      <h1>My Projects</h1>
      <div class="project-wrapper">
        <div class="project">
          <div class="project-header">
            <h2>Website V1</h2>
            <div class="icon-heading">
              <i class="fa-brands fa-vuejs"></i>
              <i class="fa-brands fa-node-js"></i>
              <i class="fa-solid fa-database"></i>
              <i class="fa-brands fa-git"></i>
            </div>
          </div>
          <p>Website V1 was the first iteration of this website. I had a bigger emphasis on the design and functionality portion of it, but decided that a simplistic design would be better for a portfolio appeal, which led me to create V2. The main difference between the two websites is that I added a HoverCard component through SHAD and connected the contact form to a database using express.js and postgreSQL. </p>
        </div>
        <div class="project">
          <h2>Recipe App</h2>
          <p>The Recipe App was the first Vue.js project I did on my own. Through inspiration from a project in the Udemy Course I was taking, I wanted to challenge my understanding of Vue.js by creating something simple to understand but had more complexity. </p>
        </div>
        <div class="project">
          <h2>Trading Journal (coming soon)</h2>
        </div>
        <div class="project">
          <h2>Turtle Cross</h2>
        </div>
      </div>
    </section>
    <hr>
    <section class="contact">
      <h1>Get in touch!</h1>
      <p>Email me at scr.sund@gmail.com</p>
    </section>
    <!-- CONTACT INFO -->
  </main>
</template>

<script>
import HoverCardAnimation from '../components/HoverCardAnimation.vue';
import LandingPage from '../components/LandingPage.vue';

export default {
  components: {
    HoverCardAnimation,
    LandingPage,
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

/*PROJECT DISPLAY*/
.portfolio-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.portfolio-content h1 {
  font-size: 1.8rem;
  margin-bottom: 2rem;

}

.portfolio-content h2 {
  font-size: 1.5rem;
}

.project-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.project {
  background-color: var(--clr-5);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.project h2 {
  margin-bottom: 1rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-header h2 {
  margin: 0;
}

.icon-heading {
  display: flex;
  gap: .5rem;
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
