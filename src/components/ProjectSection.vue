<template>
  <section class="flex flex-col items-center">
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
            <div class="flex flex-col justify-center items-center p-4">
              <div class="flex flex-col justify-center items-center xl:grid xl:grid-cols-2 xl:gap-5 xl:justify-start xl:items-start">
                <img 
                  v-if="project.img" 
                  :src="project.img" 
                  :alt="project.title" 
                  class="my-auto w-3/4 xl:w-full"
                >
                <div class="px-4 py-6 max-w-xl text-center xl:text-left">
                  <p class="max-w-lg" v-html="project.description"></p>
                </div>
              </div>
              <div class="flex justify-center items-center gap-8 mt-6">
                <button v-if="project.demoLink" class="w-20 base-button">
                  <a :href="project.demoLink" target="_blank">Demo</a>
                </button>
                <button v-if="project.gitHubLink" class="w-20 base-button">
                  <a :href="project.gitHubLink" target="_blank">GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </template>
      </TheCarousel>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import TheCarousel from './TheCarousel.vue'

export default {
  name: 'ProjectSection',
  components: {
    TheCarousel
  },
  setup() {
    const store = useStore()
    const currentIndex = ref(0)
    const projects = computed(() => store.state.projects)

    return {
      projects,
      currentIndex
    }
  }
}
</script>
