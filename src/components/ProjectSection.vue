<template>
  <section id="#projects" class="h-screen flex flex-col items-center space-y-14">
    <h1 class="text-center text-2xl">My Projects</h1>
    <div class="border w-2/3 h-1/2">
      
    </div>
    <div>
      <TechStack></TechStack>
    </div>
  </section>
</template>

<script>
import TechStack from './TechStack.vue';

export default {
  components: {
    TechStack
  }
}
</script>
