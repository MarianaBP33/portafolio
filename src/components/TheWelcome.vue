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
      Software Developer at <a href="https://www.oracle.com/latam/" style="color: lightsteelblue;">Oralce Mexico</a></template>
    <template #link1>About Me</template>
    <template #link2>Work Experience</template>
    <template #link3>Guadalajara, Jalisco</template>
  </WelcomeItem>
  <WorkExperience>
    <template #heading>Work Experience</template>
     <template #experience>Kelloggs</template>
      <template #experience1>GEIQ</template>
      <template #experience2>EPAM</template>
  </WorkExperience>
  <AboutMe>
    <template #heading>About Me</template>
    <template #text>I'm a backend-focused software engineer with nearly <span style="font-weight: bold;">3</span>  years of experience building and maintaining web applications, primarily in <span style="font-weight: bold;">Java. </span></template>
    <template #Moretext>I've worked across the full stack, from backend APIs and cloud-based services to frontend development using modern frameworks, and I enjoy taking ideas from design to production.</template>
    <template #Moretext2> I hold a <span style="font-weight: bold;"> Bachelor's degree in Informatics Engineering and Digital Business.</span> I am AWS Cloud Practitioner certified, and was selected as one of 40 students nationwide to participate in <span style="font-weight: bold;"> Huawei Seeds for the Future 2021 program.</span></template>
  </AboutMe>
  </div>
  <FooterComponent>
  </FooterComponent>

</template>
<style scoped>
</style>
