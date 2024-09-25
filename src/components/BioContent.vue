<template>
  <section class="text-container">
    <h2 class="title">I'm a <span class="highlight">Frontend Developer</span> with a passion for learning new skills.</h2>
    <div class="tech-stack">
      <h2 class="subheading">The tech stack I'm familiar with:</h2>
      <ul class="icon-list">
        <li class="icon-container" v-for="icon in icons" :key="icon">
          <i :class="icon.code"></i>
          <h3>{{icon.name}}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['icons'])
  }
}

</script>

<style scoped>
.text-container {
  margin-top: 3rem;
  width: 25rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  position: relative;
  font-size: 1.4rem;
  color: whitesmoke;
  text-align: center;
}

.title .highlight {
  color: var(--clr-4);
}

.tech-stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

.subheading {
  font-size: 1rem;
}

ul {
  padding: 0;
  margin: 0;
}

.icon-list {
  display: flex;
  gap: .5rem;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-container i {
  font-size: 2rem;
  margin-bottom: .5rem;
}


.icon-container h3 {
  margin: 0;
  font-size: .6rem;
}

.icon-container i, .icon-container h3{
  color: var(--clr-7);
  transition: color .3s ease-in-out;
}

.icon-container:hover i, .icon-container:hover h3{
  color: var(--clr-c1);
  transition-delay: .03s
}

@media(max-width: 1000px){
  .text-container{
    margin-top: 2rem;
    width: 20rem;
  }

  .icon-title i{
    font-size: 1.5rem;
  }

  .icon-title h3{
    font-size: .5rem;
  }
}

@media(max-width: 480px){
  .text-container{
    margin: 0;
    margin-top: 3rem;
  }
}

</style>