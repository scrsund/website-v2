<template>
  <section>
    <hr>
    <div class="container">
      <h1 class="title">Like what you see?</h1>
      <div class="wrapper">
        <p class="contents">If you're interested in discussing job opportunities, collaborations, or just want to chat— feel free to reach out. I'd love to hear from you!</p>
        <p class="email">scr.sund@gmail.com ☀️</p>
        <div class="icons">
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-facebook"></i>
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
  padding: .2rem 0;
  font-family: 'Poppins', sans-serif;
  font-size: .9rem;
}

.title {
  font-size: 1.7rem;
  margin-bottom: 1.3rem;
}

.contents{
  width: 35%;
}

i{
  color: rgb(96, 96, 96);
  font-size: 1.6rem;
  padding: .4rem;
  text-decoration: none;
  cursor: pointer;
}

i:hover{
  color: #ddd;
}

@media(max-width: 1000px){
  .contents{
    width: 50%;
  }
}

@media(max-width: 480px){
  .container{
    margin: 0;
  }
  .contents{
    width: 100%;
  }
}
</style>