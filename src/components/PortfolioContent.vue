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
          <BaseButton v-if="project.demoLink"><a :href="project.demoLink" target="_blank" rel="noopener noreferrer">Live Demo</a></BaseButton>
          <BaseButton><a :href="project.gitHubLink" target="_blank" rel="noopener noreferrer">GitHub</a></BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BaseButton from './UI/BaseButton.vue';

export default {
  computed: {
    ...mapState(["projects"]),
    ...mapGetters(['getProjectIcons'])
  },
  components: {
    BaseButton,
  }
}
</script>

<style scoped>
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
  font-family: "Raleway", sans-serif;
}

.portfolio-content h2 {
  font-size: 1.5rem;
}

.project-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  margin-bottom: 3rem;
  gap: 3.5rem;
} 

.project-card {
  position: relative;
  width: 25rem;
  padding: 1.5rem;
  background-color: var(--clr-1);
  border: 1px solid var(--clr-6);
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform .4s ease-in-out;
  z-index: 1;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1.5rem;
  padding: 1px;
  background: linear-gradient(43deg, var(--clr-ntr-2), var(--clr-ntr-1)); 
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: exclude;
  z-index: -1;
}

.project-card:hover {
  transform: scale(1.07);
  transition-delay: .23s;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  gap: .3rem;
  flex-shrink: 0;
  margin-top: .2rem;
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
  gap: 1.5rem;
}

/*a {
  text-decoration: none;
  padding: .2rem .6rem;
  font-family: "Poppins", sans-serif;
  font-size: .8rem;
  font-weight: 500;
  color: whitesmoke;
  transition: color .3s ease-in-out;
  border-radius: .5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    to bottom, 
    var(--clr-p2), 
    var(--clr-3)
    );
  border: 1px solid var(--clr-3);
  }

a:hover {
  background: linear-gradient(
    to bottom, 
    var(--clr-3), 
    var(--clr-p2) 
    );
  border-color: var(--clr-4);
}*/

@media(max-width: 1000px){
  .project-card{
    width: 18rem;
  }

  .icon-list{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .3rem;
    margin-top: .6rem;
  }

  .project-header{
    padding: 0;
  }

  .project-header h2{
    padding: .5rem 1rem;
    font-size: 1.3rem;
  }
}

@media(max-width: 480px){

  .project-wrapper{
    display: flex;
    flex-direction: column;
  }

  .project-card{
    width: 20rem;
  }

  .icon-list{
    display: flex;
    margin-top: .6rem;
  }

  i{
    font-size: 1.2rem;
  }
}

</style>