<template>
  <section id="home">
    <div class="container">
      <div class="welcome">
        <h3>
          <slot name="heading"></slot>
        </h3>
      </div>
      <div class="content">
        <img src="../assets/photos/mifoto.jpg"  class="circle-image"/>
        <div class="item">
          <h4>
            <slot name="subheading"></slot>
          </h4>
          <h3>
            <slot name="name"></slot>
          </h3>
          <div>
            <h2>
              <slot name="desc"></slot>
            </h2>
          </div>      
        </div>
      </div>
      <div class="links">
        <h5>
          <a class="hero-link" href="#work-ex"><slot name="link2"></slot></a>
        </h5>
        <h5>
          <a class="hero-link" href="#about-me"><slot name="link1"></slot></a>
        </h5>
        <h5>
          <a class="hero-link" href="https://maps.app.goo.gl/fEWCo527CSHqAn1E9" target="_blank"><slot name="link3"></slot></a>
          <i class="fa fa-location-arrow" style="margin-left: .5rem;"></i>
        </h5>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* modern hero styles */
.container{
  margin-bottom: 4rem;
  margin-top: 2rem;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);

@media (max-width: 768px) {
  min-height: auto;
  padding: 1.5rem 1rem;
}
}
.circle-image {
  width: 150px;
  height: 160px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 20px;
}
.content{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    margin-top: 1rem;
  }
  .circle-image {
    margin-left: 0;
    margin-bottom: 1rem;
  }
}

.links{
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.hero-link{
  color: white;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.9);
  padding: 0.5rem 0.8rem;
  display: inline-block;
  border-radius: 6px;
}
.hero-link:hover{ background: rgba(255,255,255,0.05); }

@media (max-width: 768px) {
  .links { gap: 0.4rem; }
  .hero-link{ padding: 0.4rem 0.5rem; font-size: 0.9rem; }
  h5 {
    margin-top: 0.4rem;
    padding: 0.2rem 0;
  }
}
.item {
  margin-top: 0rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

h3 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.6);
}

@media (max-width: 768px) {
  h3 {
    font-size: 1.5rem;
  }
  h4{
    font-size: 1rem;
  }
  h2{
    font-size: 0.9rem;
  }
}
h4{
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-top: 4rem;
  
}
h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #ffffff;
}
h5{
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-top: 1rem;
  padding: 2rem;
}
.welcome{
  display: flex;
  justify-content: center;
  align-items: center;
}


@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
  
  .item:before {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }
  
  .item:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }
  
  .item:first-of-type:before {
    display: none;
  }
  
  .item:last-of-type:after {
    display: none;
  }
}
</style>
