<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <footer id="contact" class="section contact">
    <h2 class="section-cmd">
      <span aria-hidden="true">contact --list</span>
      <span class="sr-only">Contact</span>
    </h2>
    <dl class="links">
      <dt>email</dt>
      <dd><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd>
      <dt>github</dt>
      <dd><a :href="profile.github" target="_blank" rel="noopener">github.com/MarianaBP33</a></dd>
      <dt>linkedin</dt>
      <dd><a :href="profile.linkedin" target="_blank" rel="noopener">linkedin.com/in/mariana-bojorquez-perez</a></dd>
    </dl>
    <p class="credits">© {{ new Date().getFullYear() }} {{ profile.fullName }}</p>
  </footer>
</template>

<style scoped>
.contact {
  padding-bottom: 56px;
}
.links {
  padding-top: 18px;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 10px 22px;
  font-size: 14px;
}
dt {
  color: var(--dim);
}
dd {
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
}
dd a {
  color: var(--teal);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
dd a:hover {
  border-color: var(--teal);
}
.credits {
  margin-top: 40px;
  font-size: 12px;
  color: var(--dim);
}
</style>
