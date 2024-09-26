<template>
  <section class="hero-section">
     <div class="text-container">
      <!-- <h2 class="title">Need someone to bring <span class="creative-text">creative ideas</span> to life? <span class="description">I'm a <span class="frontend">Frontend Developer</span> with a passion for pushing the envelope— and gaining new skills in the process! I'm all about the details and I thrive on learning whatever's necessary to get the job done. I even know a little bit of backend too <span class="emoji">😉</span></span></h2> -->
      <h2 class="title">Need someone to bring <span class="creative-text">creative ideas</span> to life? <span class="description">With a passion for pushing the envelope and gaining new skills in the process, I might be the <span class="frontend">Frontend Developer</span> you're looking for! I'm all about the details and I thrive on learning whatever's necessary to get the job done. I even know a little bit of backend too <span class="emoji">😉</span></span></h2>
      <h3 class="call-to-action">Let's build something together!</h3>
     </div>
    <div class="tech-stack">
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
.hero-section {
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 6rem;
}

.text-container{
  font-family: "Roboto", sans-serif;
  text-align: left;
}

.title {
  position: relative;
  font-size: 1.6rem;
  color: whitesmoke;
  margin-bottom: 1.3rem;
  font-family: "Raleway", sans-serif;
}

.title .creative-text {
  /*background-image: linear-gradient(43deg, var(--clr-ntr-1), var(--clr-7));*/
  background-image: linear-gradient(43deg, var(--clr-c4), var(--clr-c1), var(--clr-a1), var(--clr-a2), var(--clr-a3), var(--clr-a4), var(--clr-ntr-1));
  -webkit-background-clip: text;
  color: transparent;
}

.title .frontend {
  color: var(--clr-p1);
  font-size: .8rem;
}

.title .description {
  font-size: .8rem;
  font-family: "Poppins", sans-serif;
}

.title .emoji {
  font-size: 1rem;
}

.call-to-action {
  font-size: .9rem;
  font-family: "Poppins", sans-serif;
}


.tech-stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 1.5rem;
}

/*.subheading {
  font-size: 1rem;
}*/

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
  .hero-section{
    align-items: center;
    margin: 0;
    width: 25rem;
  }

  .text-container{
    margin: 0;
    margin-top: 3rem;
    text-align: center;
  }

  .tech-stack {
    align-items: center;
  }

  .call-to-action{
    padding: .5rem;
  }

  .icon-list{
    gap: .3rem;
  }
}

</style>