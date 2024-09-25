<template>
  <header>
    <router-link link to="/home" class="logo">sarahsund</router-link>
    <div class="right-menu">
      <!-- <router-link to="/home">Home</router-link> -->
      <router-link to="/home#projects">Projects</router-link>
      <router-link to="/home#contact">Contact</router-link>
    </div>
  </header>
</template>

<style scoped>
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
}

.right-menu a {
  text-decoration: none;
  color: whitesmoke;
  display: flex;
  align-items: center;
  transition: 0.3s;
  padding: 0 .5rem;
}

.right-menu a:hover {
  color: #bcbcbc;
}

@media (max-width: 480px){
  header {
    margin: .5rem 0;
  }
}
</style>
