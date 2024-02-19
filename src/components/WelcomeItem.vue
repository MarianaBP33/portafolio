<template>
  <section id="home">
    <div class="container">
      <div class="welcome">
        <h3>
          <slot name="heading"></slot>
        </h3>
      </div>
      <div class="content">
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
        <img src="../assets/photos/mifoto.jpg"  class="circle-image"/>
      </div>
      <div class="links">
        <h5>
          <a href="#work-ex" style="color:white; font-weight: 500;border: 1px solid white; padding: 10px;"><slot name="link2"></slot></a>
        </h5>
        <h5>
          <a href="#about-me" style="color:white; font-weight: 500;;border: 1px solid white; padding: 10px;"><slot name="link1"></slot></a>
        </h5>
        <h5>
          <a href="https://maps.app.goo.gl/fEWCo527CSHqAn1E9" target="_blank" style="color:white; font-weight: 500;"><slot name="link3"></slot></a>
          <i class="fa fa-location-arrow" style="margin-left: .5rem;"></i>
        </h5>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container{
  margin-bottom: 4rem;
  margin-top: 2rem;
  height: 70vh;
}
.circle-image {
  width: 130px;
  height: 140px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 3rem;
}
.content{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 4rem;
}

.links{
  display: flex;
  justify-content: center;  
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
  color: var(--color-heading);
}
h4{
  font-size: 1.5rem;
  font-weight: 600;
  color:black;
  margin-top: 4rem;
  
}
h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
h5{
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-heading);
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
