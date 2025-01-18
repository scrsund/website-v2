<template>
  <div class="carousel-container bg-clr-2 rounded">
    <div class="p-6">
      <div class="flex flex-col">
        <button class="nav-button prev base-button" @click="previous">
          <i class="fas fa-chevron-left"></i>
        </button>
    
        <div class="sm:mx-10">
          <slot :currentItem="items[currentIndex]"></slot>
        </div>
    
        <button class="nav-button next base-button" @click="next">
          <i class="fas fa-chevron-right"></i>
        </button>
    
        <!-- <div class="pagination">
          <span class="text-clr-7">{{ currentIndex + 1 }}/{{ items.length }}</span>
        </div> -->
      </div>
      <div class="mt-8 flex justify-center">
        <TechStack 
          :current-project-icons="currentProjectIcons"
          :current-index="currentIndex"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useStore } from 'vuex';
import TechStack from "./TechStack.vue";

export default {
  name: "TheCarousel",
  components: {
    TechStack,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:index"],
  setup(props, { emit }) {
    const store = useStore();
    const currentIndex = ref(0);

    const currentProjectIcons = computed(() => {
      const currentProject = props.items[currentIndex.value];
      if (!currentProject?.icons) return [];
      return currentProject.icons
        .map(iconKey => store.state.icons[iconKey])
        .filter(Boolean);
    });

    const next = () => {
      currentIndex.value = (currentIndex.value + 1) % props.items.length;
    };

    const previous = () => {
      currentIndex.value =
        currentIndex.value === 0
          ? props.items.length - 1
          : currentIndex.value - 1;
    };

    const goToIndex = (index) => {
      currentIndex.value = index;
    };

    watch(currentIndex, (newIndex) => {
      emit("update:index", newIndex);
    });

    return {
      currentIndex,
      currentProjectIcons,
      next,
      previous,
      goToIndex,
    };
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

/*.carousel-content {
  margin: 0 3rem;
}*/

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--clr-accent);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: opacity 0.3s;
  color: var(--clr-text);
  z-index: 1;
  margin: 0 1rem;
}

.nav-button:hover {
  opacity: 0.8;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 1rem;
}
</style>

<!-- clr-ntr-2 / clr-7 -->