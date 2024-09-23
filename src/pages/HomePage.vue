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
    </section>
    <!-- ARROW ANIMATION-->
    <!-- PORTFOLIO PROJECTS-->
     <section class="portfolio-content">
      <h1>Projects I've worked on:</h1>
      <div class="project">
        <h2>Website v1</h2>
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
      <hr>
    </section>
    <section class="contact">
      <h1>Get in touch!</h1>
      <p>Email me at scr.sund@gmail.com</p>
    </section>
    <!-- CONTACT INFO -->
  </main>
</template>

<script>
import { mapState } from "vuex";
// import AboutPage from '@/pages/AboutPage.vue';
import HoverCardAnimation from '../components/HoverCardAnimation.vue';

export default {
  components: {
    // AboutPage,
    HoverCardAnimation,
  },
  computed: {
    ...mapState(["iconList"]),
  },
  methods: {
    getIconClass(index) {
      return `icon-position-${index} ${this.iconState}`;
    },
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
  min-height: 74vh; /* Changed from height: 100vh */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Changed from center */
  position: relative;
  z-index: 0;
  margin-top: 2rem; /* Added to give some space below the header */
  padding-top: 2rem; /* Added to push content down a bit */
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

/*
CIRCLE CALCULATION

center (450%, -700%)

findPoints() {
      const C_x = 450; // Center x-coordinate in percentage
      const C_y = -700; // Center y-coordinate in percentage
      const Point1 = { x: -250, y: -700 }; // Given point1
      const n = 5; // Total number of points

      // Calculate the radius of the circle
      const r = Math.abs(C_x - Point1.x); // Since Point1 and Point2 lie on the same horizontal line

      // Calculate the angles for the given points
      const angle1 = Math.atan2(Point1.y - C_y, Point1.x - C_x);

      // Calculate the angular step between each point
      const step = (2 * Math.PI) / n;

      const points = [];

      for (let i = 0; i < n; i++) {
        const angle = angle1 + i * step;
        const x = C_x + r * Math.cos(angle);
        const y = C_y + r * Math.sin(angle);
        points.push({ x, y });
      }

      this.points = points;
      console.log(this.points);
    },

original -
.title {
  position: absolute;
  top: 41%;
  right: 20%;
  font-size: 2rem;
  color: whitesmoke;
}

.subtitle {
  position: absolute;
  top: 49%;
  right: 15%;
  font-size: 1.5rem;
  background: #3c3b3f;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
  */
</style>
