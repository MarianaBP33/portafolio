<template>
    <section id="about-me">
        <div class="content">
            <h1>
                <slot name="heading"></slot>
            </h1>
            <div class="info">
                <div class="text-section">
                    <h4>
                        <p><slot name="text"></slot></p>
                        <p><slot name="Moretext"></slot></p>
                        <p><slot name="Moretext2"></slot></p>
                    </h4>
                </div>
                <div class="carousel-section">
                    <img src="../assets/photos/micara.jpg" alt="About me">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 90vh;
    margin-bottom: 3rem;
}
.carousel-section{
    display: flex;
    justify-content: center;
    align-items: center;
}
.text-section{
    display: flex;
    justify-content: center;
}

img{
    width: 280px;
    height: auto;
    max-height: 350px;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.4);
    object-fit: cover;
}

.info{
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.text-section, .carousel-section {
  width: 55%; /* Adjust this value as needed */
}
h1{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #fff;
}

@media (max-width: 768px) {
  .info {
    flex-direction: column;
    align-items: center;
  }
  .text-section, .carousel-section {
    width: 100%;
  }
  .carousel-section {
    margin-top: 1rem;
  }
  img {
    width: 200px;
    max-height: none;
    margin-top: 0.5rem;
  }
  h1 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
}

h4{
    font-size: 1.2rem;
    color: #fff;
}
</style>

