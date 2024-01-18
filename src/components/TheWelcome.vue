<script setup lang="ts">
import FooterComponent from './FooterComponent.vue';
import WelcomeItem from './WelcomeItem.vue'
import SupportIcon from './icons/IconSupport.vue'

</script>

<template>
  <WelcomeItem>
    <template #heading>Welcome to my website!</template>
    <template #subheading>My name is ...</template>
    <template #name>Mariana Bojórquez Pérez</template>
    <template #desc>
      Software Developer at <a href="https://www.epam.com/about" style="color: black;">EPAM Systems Mexico</a></template>
  </WelcomeItem>
  <FooterComponent>
  </FooterComponent>

</template>
