<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 15rem;
  background: var(--clr-2);
  border-radius: 3rem;
  position: relative;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  inset: -0.3rem;
  background: conic-gradient(
    from var(--gradient-angle),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3)
  );
  border-radius: inherit;
  z-index: -1;
  animation: rotation 7s linear infinite;
}

.card::after {
  filter: blur(3.5rem);
}

@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
</style>
