<template>
  <section>
    <hr />
    <div class="container">
      <h1 class="title">Like what you see?</h1>
      <div class="wrapper">
        <p class="contents">
          If you're interested in discussing job opportunities, collaborations,
          or just want to chat— feel free to reach out. I'd love to hear from
          you!
        </p>
        <p class="email">scr.sund@gmail.com ☀️</p>
        <div class="icons">
          <a
            href="https://github.com/scrsund"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-github"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/sarah-sund-24ab83280/"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a
            href="https://www.facebook.com/sarah.katigbak.7/"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-facebook"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin-left: 3rem;
  padding: 1rem;
  margin-bottom: 2rem;
  height: 18rem;
}

.wrapper p {
  padding: 0.2rem 0;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
}

.title {
  font-size: 1.7rem;
  margin-bottom: 1.3rem;
  font-family: "Raleway", sans-serif;
}

.contents {
  width: 35%;
}

i {
  color: var(--clr-7);
  font-size: 1.6rem;
  padding: 0.4rem;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

i:hover {
  color: var(--clr-ntr-2);
}

@media (max-width: 1000px) {
  .contents {
    width: 50%;
  }
}

@media (max-width: 767px) {
  .container {
    margin: 0;
  }
}

@media (max-width: 575px) {
  .container {
    margin: 0;
  }
  .contents {
    width: 100%;
  }
}
</style>
