<template>
  <div class="carousel-container">
    <button class="nav-button prev" @click="previous">
      <i class="fas fa-chevron-left"></i>
    </button>

    <div class="carousel-content">
      <slot :currentItem="items[currentIndex]"></slot>
    </div>

    <button class="nav-button next" @click="next">
      <i class="fas fa-chevron-right"></i>
    </button>

    <div class="pagination">
      <span
        v-for="(_, index) in items"
        :key="index"
        :class="['dot', { active: currentIndex === index }]"
        @click="goToIndex(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "TheCarousel",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:index"],
  setup(props, { emit }) {
    const currentIndex = ref(0);

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

.carousel-content {
  margin: 0 3rem;
}

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
  gap: 0.5rem;
  margin-top: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--clr-p2);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background: var(--clr-3);
}
</style>
