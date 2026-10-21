<template>
    <section id="certifications">
        <div class="content">
            <h2>
                <slot name="heading"></slot>
            </h2>
            <ul class="cert-list">
                <li v-for="cert in certifications" :key="cert.name" class="cert-card">
                    <p class="meta">{{ cert.issuer }} · {{ cert.year }}</p>
                    <h3 class="name">{{ cert.name }}</h3>
                    <p v-if="cert.details" class="details">{{ cert.details }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>
<style scoped>
.content {
  margin: 4rem auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: #fff;
}
.cert-list {
  list-style: none;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.cert-card {
  background: rgba(255,255,255,0.1);
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
}
.meta {
    font: .8rem sans-serif;
    color: #ddd;
}
.name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    margin: 0.25rem 0;
}
.details {
    font-size: .9rem;
    color: #fff;
}

@media (max-width: 768px) {
  .content {
    margin: 2rem auto;
  }
  h2 {
    font-size: 1.75rem;
  }
  .cert-card {
    padding: 1rem;
  }
}
</style>
<script setup lang="ts">
import { certifications } from '@/data/profile'
</script>
