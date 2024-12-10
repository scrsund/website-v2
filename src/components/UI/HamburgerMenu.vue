<template>
  <div>
    <div @click="toggleButton" :class="['hamburger md:hidden', {'open' : isOpen}]">
      <span class="hamburger-top"></span>
      <span class="hamburger-middle"></span>
      <span class="hamburger-bottom"></span>
    </div>
    <div v-show="isOpen" class="h-screen absolute top-0 right-0 left-0 z-50 bg-clr-1 opacity-95 md:hidden">
      <div class="flex justify-between items-center m-8">
        <router-link link to="/home" class="text-lg">sarahsund</router-link>
        <div @click="toggleButton" :class="['hamburger md:hidden', {'open' : isOpen}]">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </div>
      </div>
      <div class="flex flex-col items-center space-y-10 mt-16 text-2xl tracking-widest">
        <router-link @click="toggleButton" to="/home#projects">Projects</router-link>
        <hr class="w-24 border-white opacity-50">
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