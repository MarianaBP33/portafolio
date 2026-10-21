<script setup lang="ts">
import { tools, workExperiences } from '@/data/profile'
</script>

<template>
  <section id="experience" class="section">
    <h2 class="section-cmd">
      <span aria-hidden="true">git log --career --oneline</span>
      <span class="sr-only">Work experience</span>
    </h2>
    <ol class="log">
      <li v-for="(job, index) in workExperiences" :key="job.company" class="entry">
        <p class="when">
          <b v-if="index === 0">HEAD</b>
          {{ job.startDate }} → {{ job.endDate }}
        </p>
        <div>
          <h3>{{ job.role }} <span class="at">@</span> {{ job.company }}</h3>
          <p class="description">{{ job.description }}</p>
          <p class="stack"><span class="label">stack:</span> {{ job.stack.join(' ') }}</p>
        </div>
      </li>
    </ol>

    <h2 class="section-cmd skills-cmd">
      <span aria-hidden="true">ls ~/skills</span>
      <span class="sr-only">Skills</span>
    </h2>
    <ul class="skills">
      <li v-for="tool in tools" :key="tool">{{ tool }}</li>
    </ul>
  </section>
</template>

<style scoped>
.log {
  list-style: none;
  padding: 0;
}
.entry {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 24px;
  padding: 22px 0;
  border-bottom: 1px dashed var(--line);
}
.when {
  font-size: 12px;
  color: var(--soft);
}
.when b {
  display: block;
  margin-bottom: 4px;
  color: var(--teal);
  font-weight: 600;
}
h3 {
  font-size: 15px;
  font-weight: 600;
}
.at {
  color: var(--dim);
}
.description {
  margin: 6px 0 10px;
  font-family: var(--font-text);
  font-size: 15px;
  color: var(--soft);
  max-width: 70ch;
}
.label {
  color: var(--dim);
}

.skills-cmd {
  margin-top: 40px;
}
.skills {
  list-style: none;
  padding: 18px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 22px;
  font-size: 13px;
}
.skills li {
  color: var(--ink);
}

@media (max-width: 720px) {
  .entry {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
</style>
