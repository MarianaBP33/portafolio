<template>  
    <section id="about-me">
        <div class="content">
            <h1>
                <slot name="heading"></slot>
            </h1>
            <div class="info">
            <div>
                <h4>
                    <slot name="text"></slot>
                </h4>
            </div>
            <div>
                <h3>text</h3>
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
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.info{
  display: flex;
  justify-content: center;
  
}
h1{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--color-heading);
}

h4{
    font-size: 1.2rem;
}
</style>
```