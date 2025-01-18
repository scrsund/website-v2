<template>
  <ul class="grid grid-cols-6 gap-2 sm:flex">
    <li 
      v-for="icon in allIcons" 
      :key="icon.key"
      class="icon-container"
      :class="{ 'active': isIconActive(icon) }"
    >
      <i v-if="icon.code" :class="icon.code"></i>
      <img v-else-if="icon.svg" :src="icon.svg" class="svg" :alt="icon.name">
      <h3>{{ icon.name }}</h3>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TechStack',
  props: {
    currentProjectIcons: {
      type: Array,
      required: true,
      default: () => []
    },
    currentIndex: {
      type: Number,
      required: true,
      default: 0
    }
  },
  setup(props) {
    const store = useStore()
    const allIcons = computed(() => {
      const icons = store.state.icons
      return Object.entries(icons).map(([key, icon]) => ({
        ...icon,
        key
      }))
    })

    const isIconActive = (icon) => {
      return props.currentProjectIcons.some(activeIcon => 
        activeIcon.name === icon.name
      )
    }

    return {
      allIcons,
      isIconActive
    }
  }
}
</script>

<style scoped>
.svg {
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  background-size: cover;
  margin-left: 7px;
  filter: brightness(0) saturate(100%) invert(42%) sepia(8%) saturate(173%) hue-rotate(314deg) brightness(94%) contrast(86%);
}

.svg:hover,
.active .svg {
  background-color: inherit;
  filter: brightness(0) saturate(100%) invert(75%) sepia(100%) saturate(1000%) hue-rotate(1deg) brightness(100%) contrast(90%);
}

.icon-container {
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
.icon-container:hover h3,
.icon-container.active i,
.icon-container.active h3 {
  color: var(--clr-c1);
  transition-delay: 0.03s;
}
</style>

<!-- c1 / p1-->