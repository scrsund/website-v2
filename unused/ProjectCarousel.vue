<template>
  <div class="carousel-container">
    <button 
      class="nav-button prev" 
      @click="previousProject"
      :disabled="currentIndex === 0"
    >
      <i class="fas fa-chevron-left"></i>
    </button>

    <div class="project-card" v-if="currentProject">
      <h2 v-html="currentProject.title"></h2>
      
      <div class="icons-container">
        <div v-for="icon in projectIcons" :key="icon.code" class="icon">
          <img v-if="icon.svg" :src="icon.svg" :alt="icon.name" class="tech-icon">
          <i v-else :class="icon.code"></i>
        </div>
      </div>

      <p v-html="currentProject.description"></p>

      <div class="links">
        <a 
          v-if="currentProject.demoLink" 
          :href="currentProject.demoLink" 
          target="_blank" 
          class="demo-link"
        >
          Live Demo
        </a>
        <a 
          v-if="currentProject.gitHubLink" 
          :href="currentProject.gitHubLink" 
          target="_blank" 
          class="github-link"
        >
          GitHub
        </a>
      </div>

      <img 
        v-if="currentProject.img" 
        :src="currentProject.img" 
        :alt="currentProject.title" 
        class="project-image"
      >
    </div>

    <button 
      class="nav-button next" 
      @click="nextProject"
      :disabled="currentIndex === projects.length - 1"
    >
      <i class="fas fa-chevron-right"></i>
    </button>

    <div class="pagination">
      <span 
        v-for="(_, index) in projects" 
        :key="index"
        :class="['dot', { active: currentIndex === index }]"
        @click="goToProject(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ProjectCarousel',
  setup() {
    const store = useStore()
    const currentIndex = ref(0)

    const projects = computed(() => store.state.projects)
    const currentProject = computed(() => projects.value[currentIndex.value])
    const projectIcons = computed(() => 
      store.getters.getProjectIcons(currentProject.value)
    )

    const nextProject = () => {
      if (currentIndex.value < projects.value.length - 1) {
        currentIndex.value++
      }
    }

    const previousProject = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--
      }
    }

    const goToProject = (index) => {
      currentIndex.value = index
    }

    return {
      currentIndex,
      projects,
      currentProject,
      projectIcons,
      nextProject,
      previousProject,
      goToProject
    }
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.project-card {
  background: var(--clr-bg2);
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--clr-accent);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: opacity 0.3s;
  color: var(--clr-text);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

.icons-container {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.tech-icon {
  width: 24px;
  height: 24px;
}

.links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.demo-link, .github-link {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  background: var(--clr-accent);
  color: var(--clr-text);
  transition: opacity 0.3s;
}

.demo-link:hover, .github-link:hover {
  opacity: 0.8;
}

.project-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 1rem;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--clr-p2);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background: var(--clr-accent);
}
</style> 