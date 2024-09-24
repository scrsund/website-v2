<template>
  <section class="portfolio-content">
    <div class="title">
      <h1>My Projects</h1>
    </div>
    <div class="project-wrapper">
      <div class="project" v-for="(project) in projects" :key="project.title">
        <div class="project-header">
          <h2>{{project.title}}</h2>
          <div class="icon-heading">
            <i v-for="icon in getProjectIcons(project)" :key="icon" :class="icon"></i>
          </div>
        </div>
        <p>{{project.description}}</p>
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
/*PROJECT DISPLAY*/

.portfolio-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom var(--clr-1), white);
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  background-color: var(--clr-1);
  border: 2px solid var(--clr-6);
  
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
  gap: 2rem;
  width: 70%;
  max-width: 1200px;
}

i {
  font-size: 1.3rem;
  color: white;
}




.project {
  background-color: var(--clr-6);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--clr-1);
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

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

a {
  text-decoration: none;
  padding: .5rem 1rem;
  color: white;
  transition: color .2s ease-in;
  border: 1px solid white;
  border-radius: 1rem;
}

a:hover {
  color: var(--clr-6);
}

</style>