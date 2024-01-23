<script setup lang="ts">
import AboutMe from './AboutMe.vue';
import FooterComponent from './FooterComponent.vue';
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
   <div class="container">
  <WelcomeItem>
    <template #heading>Welcome to my website!</template>
    <template #subheading>My name is ...</template>
    <template #name>Mariana Bojórquez Pérez</template>
    <template #desc>
      Software Developer at <a href="https://www.epam.com/about" style="color: black;">EPAM Systems Mexico</a></template>
    <template #link1>About Me</template>
    <template #link2>Work Experience</template>
    <template #link3>El Marqués, Querétaro</template>
  </WelcomeItem>
  <AboutMe>
    <template #heading>About Me</template>
    <template #text>My favorites things are watching movies, reading fantasy books and try a new handrcrafting hobbie every month.</template>
  </AboutMe>
  </div>
  <FooterComponent>
  </FooterComponent>

</template>
<style scoped>
</style>
