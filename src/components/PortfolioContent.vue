<template>
  <section class="portfolio-content">
    <div class="title">
      <h1>My Projects</h1>
    </div>
    <div class="project-wrapper">
      <div class="project-card" v-for="(project) in projects" :key="project.title">
        <div class="project-header">
          <h2 v-html="project.title"></h2>
          <div class="icon-list">
            <i v-for="icon in getProjectIcons(project)" :key="icon" :class="icon"></i>
          </div>
        </div>
        <hr>
        <p v-html="project.description" class="description"></p>
        <div class="link">
          <a :href="project.demoLink" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a :href="project.gitHubLink" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(["projects"]),
    ...mapGetters(['getProjectIcons'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.portfolio-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, var(--clr-1), var(--clr-6));
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  
}

.portfolio-content h1 {
  font-size: 1.8rem;
}

.portfolio-content h2 {
  font-size: 1.5rem;
}

.project-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin-bottom: 3rem;
}

.project-card {
  padding: 1.5rem;
  background-color: var(--clr-1);
  border: 1px solid var(--clr-6);
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  margin-top: 1rem;
}

.project-header h2 {
  margin: 0;
}

i {
  font-size: 1.4rem;
  color: var(--clr-7);
}

.icon-list {
  display: flex;
  gap: .5rem;
}

hr {
  margin: 2rem 1.5rem;
  width: 5rem;
}

.description {
  padding: 1.5rem;
  padding-top: 0;
  font-family: 'Poppins', sans-serif;
  font-size: .9rem;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

a {
  text-decoration: none;
  padding: .5rem 1rem;
  color: whitesmoke;
  transition: color .2s ease-in;
  border: 1px solid var(--clr-6);
  border-radius: 1rem;
  background: linear-gradient(
    to bottom, 
    var(--clr-3), 
    var(--clr-4)
    );
}

a:hover {
  color: var(--clr-6);
}

</style>