<template>
  <section id="#projects" class="h-screen flex flex-col items-center space-y-14">
    <h1 class="text-center text-2xl">My Projects</h1>
    <div class="lg:w-3/4 flex flex-col space-y-10 p-6">
      <div class="text-center">
        <h1>E-Commerce Store</h1>
      </div>
      <div class="flex flex-col justify-center items-center lg:flex-row lg:gap-6 p-4">
        <img :src="projects[1].img" alt="E-Commerce Website Demo" class="sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-5/12 2xl:w-1/3">
        <div class="px-4 py-6 max-w-xl md:px-8 lg:px-0">
          <p class="max-w-lg">
            {{ projects[1].description }}
          </p>
          <div class="flex justify-center items-center gap-8 mt-6">
            <button class="w-20">
              <a :href="projects[1].demoLink">Demo</a>
            </button>
            <button class="w-20">
              <a :href="projects[1].gitHubLink">GitHub</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <TechStack></TechStack>
    </div>
  </section>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import TechStack from './TechStack.vue';

export default {
  components: {
    TechStack
  },
  computed: {
    ...mapState(['projects']),
    ...mapGetters(['getProjectIcons'])
  }
}
</script>
