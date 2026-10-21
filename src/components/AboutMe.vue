<script setup lang="ts">
import { careerStart } from '@/data/profile'

const yearsOfExperience = Math.floor((Date.now() - careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
</script>

<template>
  <section id="about" class="section">
    <h2 class="section-cmd">
      <span aria-hidden="true">cat about.md</span>
      <span class="sr-only">About me</span>
    </h2>
    <div class="about">
      <div class="text">
        <p>
          I'm a backend-focused software engineer with over <strong>{{ yearsOfExperience }} years</strong> of experience
          building and maintaining web applications, primarily in <strong>Java</strong>.
        </p>
        <p>
          I've worked across the full stack, from backend APIs and cloud-based services to frontend development using
          modern frameworks, and I enjoy taking ideas from design to production.
        </p>
        <p>
          I hold a <strong>Bachelor's degree in Informatics Engineering and Digital Business</strong>. I am AWS Cloud
          Practitioner certified, and was selected as one of 40 students nationwide to participate in
          <strong>Huawei Seeds for the Future 2021</strong>.
        </p>
      </div>
      <img src="../assets/photos/micara.jpg" alt="Mariana Bojórquez Pérez" width="600" height="800" loading="lazy" />
    </div>
  </section>
</template>

<style scoped>
.about {
  padding-top: 22px;
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 40px;
  align-items: start;
}
.text {
  display: grid;
  gap: 14px;
  font-family: var(--font-text);
  font-size: 17px;
  line-height: 1.65;
  color: var(--soft);
  max-width: 64ch;
}
strong {
  color: var(--ink);
  font-weight: 500;
}
img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border: 1px solid var(--line);
  padding: 6px;
  background: var(--panel);
}

@media (max-width: 720px) {
  .about {
    grid-template-columns: 1fr;
  }
  img {
    max-width: 220px;
  }
}
</style>
