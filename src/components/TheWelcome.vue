<script setup lang="ts">
import NavBar from './NavBar.vue'
import WelcomeItem from './WelcomeItem.vue'
import WorkExperience from './WorkExperience.vue'
import Certifications from './Certifications.vue'
import AboutMe from './AboutMe.vue'
import FooterComponent from './FooterComponent.vue'
</script>

<template>
  <NavBar />
  <main>
    <WelcomeItem />
    <WorkExperience />
    <Certifications />
    <AboutMe />
  </main>
  <FooterComponent />
</template>
