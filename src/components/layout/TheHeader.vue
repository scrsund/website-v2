<template>
  <header>
    <router-link link to="/home" class="logo">sarahsund</router-link>
    <div class="right-menu">
      <!-- <router-link to="/home">Home</router-link> -->
      <router-link to="/about">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
}

.logo {
  font-size: 20px;
  color: whitesmoke;
  cursor: pointer;
  text-decoration: none;
  margin-left: 2rem;
}

.right-menu {
  display: flex;
  gap: 30px;
  margin-right: 2rem;
}

.right-menu a {
  text-decoration: none;
  color: whitesmoke;
  display: flex;
  align-items: center;
  transition: 0.3s;
}

.right-menu a:hover {
  color: #bcbcbc;
}
</style>
