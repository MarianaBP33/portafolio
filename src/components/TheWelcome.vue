<script setup lang="ts">
import AboutMe from './AboutMe.vue';
import FooterComponent from './FooterComponent.vue';
import WorkExperience from './WorkExperience.vue';
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
   <div class="container">
  <WelcomeItem>
    <template #name>Mariana Bojórquez Pérez</template>
    <template #desc>
      Software Developer at <a href="https://www.epam.com/about" style="color: lightblue;">EPAM Systems Mexico</a></template>
    <template #link1>About Me</template>
    <template #link2>Work Experience</template>
    <template #link3>El Marqués, Querétaro</template>
  </WelcomeItem>
  <WorkExperience>
    <template #heading>Work Experience</template>
     <template #text>Kelloggs</template>
      <template #Moretext>GEIQ</template>
  </WorkExperience>
  <AboutMe>
    <template #heading>About Me</template>
    <template #text>I have almost <span style="font-weight: bold;">two</span> years of experience in the IT industry, specializing mainly on <span style="font-weight: bold;">web development in Java.</span> </template>
    <template #Moretext>Some of my achievements include obtaining my<span style="font-weight: bold;"> Bachelor's degree in Informatics Engineering and Digital Business.</span> Also, in 2024 I got certified as <span style="font-weight: bold;">AWS Cloud Practitioner by AWS services.</span></template>
    <template #Moretext2> As a university student, I was one of the 40 Mexican students selected to participate in the<span style="font-weight: bold;"> Huawei Seeds for the Future 2021 program.</span></template>
  </AboutMe>
  </div>
  <FooterComponent>
  </FooterComponent>

</template>
<style scoped>
</style>
