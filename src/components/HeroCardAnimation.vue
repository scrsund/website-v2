<template>
  <hover-card>
    <hover-card-trigger>
      <home-card>
        <div class="the-card" :class="{ flipped: isFlipped }">
          <div class="frontside">
            <router-link to="/home">Hi, I'm Sarah 👋</router-link>
          </div>
          <div class="backside">
            <img src="/me4.jpg" />
          </div>
        </div>
      </home-card>
    </hover-card-trigger>
    <!-- <hover-card-content>
    <div class="icon-container">
      <i
        class="fa-solid fa-music"
        :class="['hidden-load', getIconClass(1)]"
      ></i>
      <i
        class="fa-solid fa-graduation-cap"
        :class="getIconClass(2)"
      ></i>
      <i class="fa-solid fa-dumbbell" :class="getIconClass(3)"></i>
      <i class="fa-solid fa-trophy" :class="getIconClass(4)"></i>
      <i class="fa-solid fa-people-group" :class="getIconClass(5)"></i>
      <i class="fa-solid fa-code" :class="getIconClass(6)"></i>
      <i class="fa-solid fa-drum" :class="getIconClass(7)"></i>
    </div>
  </hover-card-content> -->
  </hover-card>
</template>

<script>
import HomeCard from "../components/UI/HomeCard.vue";
import {
  HoverCard,
  // HoverCardContent,
  HoverCardTrigger,
} from "@/components/UI/hover-card";
import { mapState } from "vuex";

export default {
  components: {
    HomeCard,
    HoverCard,
    // HoverCardContent,
    HoverCardTrigger,
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  mounted() {
    this.flipInterval = setInterval(() => {
      this.isFlipped = !this.isFlipped;
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.flipInterval);
  },
  computed: {
    ...mapState(["iconList"]),
  },
  methods: {
    getIconClass(index) {
      return `icon-position-${index} ${this.iconState}`;
    },
  },
};
</script>

<style scoped>
.the-card {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4.5rem;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
}
.flipped {
  transform: rotateY(180deg);
}

.backside img {
  width: 97%;
  height: 97%;
  object-fit: cover;
  object-position: 0% 20%;
  border-radius: 3rem;
}

.frontside,
.backside {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4.5rem;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backside {
  transform: rotateY(180deg);
}

a {
  text-decoration: none;
  font-size: 28px;
  color: whitesmoke;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
}

/*ORIGINAL STYLING*/
/*@keyframes slideOut1 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-1000%, 630%);
  }
}

@keyframes slideIn1 {
  0% {
    opacity: 1;
    transform: translate(-1000%, 630%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes slideOut2 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-1080%, 100%);
  }
}

@keyframes slideIn2 {
  0% {
    opacity: 1;
    transform: translate(-1080%, 100%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes slideOut3 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-1040%, -500%);
  }
}

@keyframes slideIn3 {
  0% {
    opacity: 1;
    transform: translate(-1040%, -500%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes slideOut4 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-570%, -750%);
  }
}

@keyframes slideIn4 {
  0% {
    opacity: 1;
    transform: translate(-570%, -750%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes slideOut5 {
  0% {
    opacity: 0;
    transform: translate(-500%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-0%, -530%);
  }
}

@keyframes slideIn5 {
  0% {
    opacity: 1;
    transform: translate(-0%, -530%);
  }
  100% {
    opacity: 0;
    transform: translate(-500%, -50%);
  }
}

@keyframes slideOut6 {
  0% {
    opacity: 0;
    transform: translate(-500%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(70%, 60%);
  }
}

@keyframes slideIn6 {
  0% {
    opacity: 1;
    transform: translate(70%, 60%);
  }
  100% {
    opacity: 0;
    transform: translate(-500%, -50%);
  }
}

@keyframes slideOut7 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-250%, 610%);
  }
}

@keyframes slideIn7 {
  0% {
    opacity: 1;
    transform: translate(-250%, 610%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}*/

/*important
.icon-container {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.box:hover .icon-container {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}

.box:not(:hover) .icon-container {
  animation: fadeOut 1s forwards;
}

i {
  position: absolute;
  font-size: 28px;
  color: rgba(245, 245, 245, 0.618);
  opacity: 0;
  transition: all 0.4s ease;
}

.box:hover .icon-position-1 {
  animation: slideOut1 1.8s ease forwards;
}

.box:hover .icon-position-2 {
  animation: slideOut2 1.8s ease forwards;
}

.box:hover .icon-position-3 {
  animation: slideOut3 1.8s ease forwards;
}

.box:hover .icon-position-4 {
  animation: slideOut4 1.8s ease forwards;
}

.box:hover .icon-position-5 {
  animation: slideOut5 1.8s ease forwards;
}

.box:hover .icon-position-6 {
  animation: slideOut6 1.8s ease forwards;
}

.box:hover .icon-position-7 {
  animation: slideOut7 1.8s ease forwards;
}

.box .icon-position-1 {
  animation: slideIn1 1s ease forwards;
}

.box .icon-position-2 {
  animation: slideIn2 1s ease forwards;
}

.box .icon-position-3 {
  animation: slideIn3 1s ease forwards;
}

.box .icon-position-4 {
  animation: slideIn4 1s ease forwards;
}

.box .icon-position-5 {
  animation: slideIn5 1s ease forwards;
}

.box .icon-position-6 {
  animation: slideIn6 1s ease forwards;
}

.box .icon-position-7 {
  animation: slideIn7 1s ease forwards;
}
*/

/*

@media (max-width: 1000px) {
  .container {
    display: grid;
  }

  .box {
    margin-bottom: 0;
  }

  .text-container {
    margin-top: 4rem;
    text-align: center;
  }

  .title {
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }
}*/
</style>
