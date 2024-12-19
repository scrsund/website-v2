<template>
  <section class="h-screen flex flex-col items-center space-y-14">
    <h1 class="text-center text-2xl">My Projects</h1>
    <div class="lg:w-3/4 flex flex-col space-y-10 p-6">
      <TheCarousel 
        :items="projects"
        @update:index="currentIndex = $event"
      >
        <template #default="{ currentItem: project }">
          <div v-if="project">
            <div class="text-center">
              <h1 v-html="project.title"></h1>
            </div>
            <div class="flex flex-col justify-center items-center lg:flex-row lg:gap-6 p-4">
              <img 
                v-if="project.img" 
                :src="project.img" 
                :alt="project.title" 
                class="sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-5/12 2xl:w-1/3"
              >
              <div class="px-4 py-6 max-w-xl md:px-8 lg:px-0">
                <p class="max-w-lg" v-html="project.description"></p>
                <div class="flex justify-center items-center gap-8 mt-6">
                  <button v-if="project.demoLink" class="w-20">
                    <a :href="project.demoLink" target="_blank">Demo</a>
                  </button>
                  <button v-if="project.gitHubLink" class="w-20">
                    <a :href="project.gitHubLink" target="_blank">GitHub</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </TheCarousel>
    </div>
    <div>
      <TechStack :icons="currentProjectIcons"></TechStack>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import TheCarousel from './TheCarousel.vue'
import TechStack from './TechStack.vue'

export default {
  name: 'ProjectSection',
  components: {
    TheCarousel,
    TechStack
  },
  setup() {
    const store = useStore()
    const currentIndex = ref(0)
    const projects = computed(() => store.state.projects)
    
    const currentProjectIcons = computed(() => {
      const currentProject = projects.value[currentIndex.value]
      if (!currentProject || !currentProject.icons) return []
      return currentProject.icons.map(iconKey => {
        const icon = store.state.icons[iconKey]
        return icon || null
      }).filter(Boolean)
    })

    return {
      projects,
      currentIndex,
      currentProjectIcons
    }
  }
}
</script>
