<template>
  <div>
    <router-view v-slot="{ Component }">
      <TheHeader/>
      <transition name="fade" mode="out-in">
        <component :is="Component" class="transition-component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap");

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  background-color: var(--clr-1);
  color: whitesmoke;
}

:root {
  --clr-1: rgb(21, 21, 21);
  --clr-2: black;
  --clr-3: #0e4b50;
  --clr-4: #2d8f85;
  --clr-5: #637c54;
  --clr-6: #3c3b3f;
  --clr-7: #6a6666;
  --clr-ntr-1: #d2b48c;
  --clr-ntr-2: #FFFFF0;
  --clr-c1: #ffdb58;
  --clr-c2: #cc5500;
  --clr-c3: #e17b34;
  --clr-c4: #e97451;
  --clr-a1: #98ff98;
  --clr-a2: #e0ffff;
  --clr-a3: #967bb6;
  --clr-a4: #d8bfd8;
  --clr-p1: #4eb8a8;
  --clr-p2: #4db8a6;
}

.transition-component {
  background-color: transparent;
}

.fade-enter-active {
  transition: opacity 0.7s ease-out;
}
.fade-leave-active {
  transition: opacity 0.4s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  header {
    background-color: transparent !important;
  }
}
</style>
