<template>
  <header>
    <nav class="flex justify-between items-center m-8 lg:mx-16 xl:mx-24">
      <router-link link to="/home" class="text-lg">sarahsund</router-link>
      <HamburgerMenu 
      />
      <div class="space-x-4 hidden md:block">
        <router-link to="/home#projects">Projects</router-link>
          <router-link to="/home#contact">Contact</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import HamburgerMenu from '@/components/UI/HamburgerMenu.vue'

  export default {
    components: {
      HamburgerMenu,
    },
  }
</script>

<!-- <style scoped>

header {
  margin: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--clr-1);
}

.logo {
  font-size: 20px;
  color: whitesmoke;
  cursor: pointer;
  text-decoration: none;
}


.right-menu {
  display: flex;
  justify-content: flex-end;
}

.right-menu a {
  text-decoration: none;
  color: whitesmoke;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  position: relative;
}

.right-menu a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 6px;
  background-color: var(--clr-ntr-2);
  transition: width 0.3s ease;
}

.right-menu a:hover::after {
  width: 83%;
}

@media (max-width: 1200px) {
  .right-menu a {
    padding-left: 0.7rem;
    padding-right: 0;
  }
}

@media (max-width: 767px) {
  header {
    margin: 0.5rem 0.7rem;
    padding: 1rem;
  }
}

@media (max-width: 575px) {
  header {
    margin: 0.5rem 0.7rem;
    padding: 1rem;
  }

  .logo {
    font-size: 15px;
  }

  .right-menu a {
    padding-left: 0.5rem;
    padding-right: 0;
    font-size: 0.8rem;
  }
}
</style> -->
