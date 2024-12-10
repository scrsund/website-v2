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