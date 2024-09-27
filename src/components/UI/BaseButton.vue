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
  border-radius: .3rem;
  padding: .2rem .6rem;
  font-weight: 500;
  color: whitesmoke;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, var(--clr-p2), var(--clr-p3));
  
  border: 1px solid var(--clr-3);
  cursor: pointer;
  transition: background .3s ease-in-out;
  }

button:hover {
  background: linear-gradient(45deg, #00d084, #4db8a6);
  box-shadow: 0 0 15px rgba(0, 208, 132, 0.5);
}
</style>