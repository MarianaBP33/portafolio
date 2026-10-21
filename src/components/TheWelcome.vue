<script setup lang="ts">
import AboutMe from './AboutMe.vue';
import FooterComponent from './FooterComponent.vue';
import WorkExperience from './WorkExperience.vue';
import WelcomeItem from './WelcomeItem.vue'
import { careerStart } from '@/data/profile'

const yearsOfExperience = Math.floor((Date.now() - careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
</script>

<template>
   <div class="container">
  <WelcomeItem>
    <template #name>Mariana Bojórquez Pérez</template>
    <template #desc>
      Senior Software Engineer at <a href="https://www.virtusa.com/" class="company-link">Virtusa</a></template>
    <template #link1>About Me</template>
    <template #link2>Work Experience</template>
    <template #link3>Guadalajara, Jalisco</template>
  </WelcomeItem>
  <WorkExperience>
    <template #heading>Work Experience</template>
  </WorkExperience>
  <AboutMe>
    <template #heading>About Me</template>
    <template #text>I'm a backend-focused software engineer with over <strong>{{ yearsOfExperience }}</strong> years of experience building and maintaining web applications, primarily in <strong>Java. </strong></template>
    <template #Moretext>I've worked across the full stack, from backend APIs and cloud-based services to frontend development using modern frameworks, and I enjoy taking ideas from design to production.</template>
    <template #Moretext2> I hold a <strong>Bachelor's degree in Informatics Engineering and Digital Business.</strong> I am AWS Cloud Practitioner certified, and was selected as one of 40 students nationwide to participate in <strong>Huawei Seeds for the Future 2021 program.</strong></template>
  </AboutMe>
  </div>
  <FooterComponent />

</template>
<style scoped>
.company-link {
  color: lightsteelblue;
}
strong {
  font-weight: bold;
}
</style>
