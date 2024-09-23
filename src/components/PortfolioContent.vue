<template>
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
</template>

<style scoped>
/*PROJECT DISPLAY*/

i {
  font-size: 1.3rem;
  color: white;
}

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
</style>