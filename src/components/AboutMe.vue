<template>  
    <section id="about-me">
        <div class="content">
            <h1>
                <slot name="heading"></slot>
            </h1>
            <div class="info">
            <div class="text-section">
              <h4>
                <slot name="text"></slot>
                <br>
                <br>
                <slot name="Moretext"></slot><br><br>
                <slot name="Moretext2"></slot>
              </h4>
            </div>
            <div class="carousel-section">
                <img src="../assets/photos/micara.jpg" alt="Image 2">
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
    height: 70vh;
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
    width: 230px;
    height: 300px;
}

.info{
    margin-top: 2rem;
    margin-bottom: 2rem;
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
    margin-bottom: 2rem;
    color: var(--color-heading);
}

h4{
    font-size: 1.2rem;
    color: white;
}
</style>

