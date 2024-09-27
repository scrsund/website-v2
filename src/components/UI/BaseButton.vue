<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font-size: .8rem;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  border-radius: .5rem;
  padding: .2rem .6rem;
  font-weight: 500;
  color: whitesmoke;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, #1c1c1c, #2e2e2e
  );
  box-shadow: 0 0 10px rgba(77, 184, 166, 0.5);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background .3s ease-in-out;
  }

button:hover {
  background: linear-gradient(45deg, #00d084, #4db8a6);
  box-shadow: 0 0 10px rgba(0, 208, 132, 0.5);
  transition-delay: .2s;
}
</style>

<!-- 

#333a3f, #1f2428

#1c1c1c, #2e2e2e

#2e2e2e, #3e3e3e
-->