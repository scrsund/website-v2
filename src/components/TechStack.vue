<template>
  <div class="tech-stack">
    <ul class="icon-list">
      <li class="icon-container" v-for="icon in icons" :key="icon">
        <i v-if="icon.code" :class="icon.code"></i>
        <img v-else :src="icon.svg" class="svg">
        <h3>{{ icon.name }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["icons"]),
  },
}
</script>

<style scoped>
.tech-stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 1.5rem;
}

.subheading {
  font-size: 1rem;
}

.svg {
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  background-image: url('../../public/icons/tailwind.svg');
  background-size: cover;
}

.svg:hover {
  filter: brightness(0) saturate(100%) invert(75%) sepia(100%) saturate(1000%) hue-rotate(1deg) brightness(100%) contrast(90%);
}

.icon-list {
  display: flex;
  gap: 0.5rem;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-container i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.icon-container h3 {
  margin: 0;
  font-size: 0.6rem;
}

.icon-container i,
.icon-container h3 {
  color: var(--clr-7);
  transition: color 0.3s ease-in-out;
}

.icon-container:hover i,
.icon-container:hover h3 {
  color: var(--clr-c1);
  transition-delay: 0.03s;
}

</style>