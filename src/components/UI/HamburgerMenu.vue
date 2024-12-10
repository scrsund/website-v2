<template>
  <div>
    <div @click="toggleButton" :class="['hamburger md:hidden', {'open' : isOpen}]">
      <span class="hamburger-top"></span>
      <span class="hamburger-middle"></span>
      <span class="hamburger-bottom"></span>
    </div>
    <div v-show="isOpen" class="h-screen absolute top-0 right-0 left-0 z-50 bg-clr-1 opacity-90 md:hidden">
      <div class="flex justify-between items-center m-8">
        <router-link link to="/home" class="text-lg">sarahsund</router-link>
        <div @click="toggleButton" :class="['hamburger md:hidden', {'open' : isOpen}]">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </div>
      </div>
      <div class="flex flex-col items-center space-y-8 mt-20 text-xl tracking-wider">
        <router-link @click="toggleButton" to="/home#projects">Projects</router-link>
        <router-link @click="toggleButton" to="/home#contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
        isOpen: false,
      }
    },
    methods: {
      toggleButton(){
        return this.isOpen = !this.isOpen
      }
    }
}

</script>