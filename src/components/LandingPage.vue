<template>
  <div class="text-container">
    <h2 class="title">I'm a <span>Frontend Developer</span> with a passion for learning new skills.</h2>
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
</template>


<style scoped>
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

.title {
  position: relative;
  font-size: 1.4rem;
  color: whitesmoke;
  text-align: center;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
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
  color: var(--clr-7);
}

.icon-title h3 {
  margin: 0;
  font-size: .6rem;
  color: var(--clr-7);
}

</style>