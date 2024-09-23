<template>
  <main>
    <section class="container">
      <div class="box">
        <HoverCardAnimation />
      </div>
      <!-- BIO -->
      <div class="text-container">
        <h2 class="title">I'm a <span>FrontEnd Developer</span> with a passion for learning new skills.</h2>
        <div class="tech-stack">

          <h2 class="subheading">The tech stack I'm familiar with:</h2>
          <div class="icon-list">
            <div class="icon-title">
              <i class="fa-brands fa-html5"></i>
              <h3>HTML</h3>
            </div>
            <div class="icon-title">
              <i class="fa-brands fa-css3-alt"></i>
              <h3>CSS</h3>
            </div>
            <div class="icon-title">
              <i class="fa-brands fa-js"></i>
              <h3>JavaScript</h3>
            </div>
            <div class="icon-title">
              <i class="fa-brands fa-vuejs"></i>
              <h3>Vue.js</h3>
            </div>
            <div class="icon-title">
              <i class="fa-brands fa-node-js"></i>
              <h3>Express.js</h3>
            </div>
            <div class="icon-title">
              <i class="fa-brands fa-python"></i>
              <h3>Python</h3>
            </div>
            <div class="icon-title">
              <i class="fa-solid fa-database"></i>
              <h3>SQL</h3>
            </div>
            <div class="icon-title">
              <i class="fa-brands fa-git"></i>
              <h3>Git</h3>
            </div>
            <div class="icon-title">
              <i class="fa-brands fa-figma"></i>
              <h3>Figma</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow-container">
        <span class="arrow"></span>
        <span class="arrow"></span>
      </div>
    </section>
    <!-- ARROW ANIMATION-->
    <!-- PORTFOLIO PROJECTS-->
     <section class="portfolio-content">
      <h1>Projects I've worked on:</h1>
      <div class="project-container">
        <div class="project">
          <h2>Website v1</h2>
          <p></p>
        </div>
        <div class="project">
          <h2>Recipe App</h2>
        </div>
        <div class="project">
          <h2>Turtle Cross</h2>
        </div>
        <div class="project">
          <h2>Trading Journal</h2>
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

export default {
  components: {
    HoverCardAnimation,
  },
};
</script>

<style scoped>
main {
  min-height: 74vh;
  padding: 2rem;
}

.container {
  width: 100%;
  min-height: 74vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 0;
  margin-top: 2rem;
  padding-top: 2rem;
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

.text-container {
  margin-top: 3rem;
  width: 25rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title span {
  color: var(--clr-4);
}

.tech-stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

.title {
  position: relative;
  font-size: 1.4rem;
  color: whitesmoke;
  text-align: center;
}

.subtitle {
  font-size: 1.5rem;
  background: #3c3b3f;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  text-align: right;
}

.subheading {
  font-size: 1rem;
}


/*ICON DISPLAY*/

i {
  font-size: 1.5rem;
  color: white;
}


.icon-list {
  display: flex;
  gap: .5rem;
}

.icon-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-title i {
  font-size: 2rem;
  margin-bottom: .5rem;
  color: #6a6666;
}

.icon-title h3 {
  margin: 0;
  font-size: .6rem;
  color: #6a6666;
}

/*ARROW STYLING*/
.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 5px;
  height: 20px;
  border-radius: 5px;
  background-color: white;
  margin: 3px;
  animation: move 1.1s ease-in-out;
}

.arrow:nth-of-type(1){
  transform: rotate(-45deg);
}

.arrow:nth-of-type(2){
  transform: rotate(45deg);
}

@keyframes move{
  0%{margin-top: 0;}
  50%{margin-top: 50px;}
  100%{margin-top: 0;}
}

/*PROJECT DISPLAY*/
.portfolio-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio-content h1 {
  font-size: 1.8rem;

}

.portfolio-content h2 {
  font-size: 1.5rem;
}

.project-content {
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
