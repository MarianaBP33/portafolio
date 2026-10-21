<script setup lang="ts">
import { certifications } from '@/data/profile'
</script>

<template>
  <section id="certifications" class="section">
    <h2 class="section-cmd">
      <span aria-hidden="true">ls ~/certifications</span>
      <span class="sr-only">Certifications</span>
    </h2>
    <ul class="certs">
      <li v-for="cert in certifications" :key="cert.name" class="cert">
        <p class="meta">{{ cert.year }} · {{ cert.issuer }}</p>
        <h3>{{ cert.name }}</h3>
        <p v-if="cert.details" class="details">{{ cert.details }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.certs {
  list-style: none;
  padding: 18px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
}
.cert {
  padding: 18px 20px;
  border: 1px solid var(--line);
  background: var(--panel);
  transition: border-color 0.25s;
}
.cert:hover {
  border-color: rgba(109, 93, 252, 0.6);
}
.meta {
  font-size: 12px;
  color: var(--teal);
}
h3 {
  margin-top: 4px;
  font-size: 15px;
  font-weight: 600;
}
.details {
  margin-top: 8px;
  font-family: var(--font-text);
  font-size: 14px;
  color: var(--soft);
}
</style>
