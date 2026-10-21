<script setup lang="ts">
import { profile } from '@/data/profile'

const [firstName, lastName] = profile.name.split(' ')
</script>

<template>
  <section id="top" class="hero">
    <div class="intro">
      <p class="prompt" aria-hidden="true">
        <span class="user">mariana@gdl</span> $ <span class="cmd">whoami --verbose</span><span class="caret"></span>
      </p>
      <h1>{{ firstName }}<br />{{ lastName }}</h1>
      <dl class="output">
        <dt>role</dt>
        <dd>{{ profile.role }}</dd>
        <dt>company</dt>
        <dd>{{ profile.company }}</dd>
        <dt>stack</dt>
        <dd>{{ profile.stack.join(' · ') }}</dd>
        <dt>location</dt>
        <dd>
          <a class="location" :href="profile.locationUrl" target="_blank" rel="noopener">● {{ profile.location }}</a>
        </dd>
      </dl>
    </div>
    <figure class="photo">
      <img src="../assets/photos/mifoto.jpg" :alt="profile.fullName" width="400" height="444" />
      <figcaption aria-hidden="true">mariana.jpg&nbsp;&nbsp;33KB</figcaption>
    </figure>
  </section>
</template>

<style scoped>
.hero {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: clamp(48px, 9vw, 96px) var(--gutter) 48px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: end;
}

.prompt {
  font-size: 14px;
  color: var(--soft);
  margin-bottom: 18px;
  white-space: nowrap;
}
.user {
  color: var(--teal);
}
.cmd {
  color: var(--ink);
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  width: 16ch;
  animation: type 1.2s steps(16) 0.3s both;
}
.caret {
  display: inline-block;
  width: 9px;
  height: 17px;
  margin-left: 4px;
  vertical-align: -3px;
  background: var(--indigo);
  box-shadow: 0 0 10px var(--indigo);
  animation: blink 1.1s steps(1) infinite;
}
@keyframes type {
  from { width: 0; }
}
@keyframes blink {
  50% { opacity: 0; }
}

h1 {
  font-size: clamp(40px, 8vw, 84px);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--ink);
}

.output {
  margin-top: 26px;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6px 18px;
  font-size: 14px;
}
dt {
  color: var(--dim);
}
dd {
  margin: 0;
}
.location {
  color: var(--teal);
}
.location:hover {
  text-decoration: underline;
}

.photo {
  margin: 0 0 22px;
  width: 220px;
  padding: 6px;
  border: 1px solid rgba(109, 93, 252, 0.45);
  background: var(--panel);
  box-shadow: 0 0 50px -12px var(--indigo);
  position: relative;
}
.photo img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center 25%;
}
figcaption {
  position: absolute;
  left: 6px;
  bottom: -22px;
  font-size: 11px;
  color: var(--dim);
}

@media (max-width: 720px) {
  .hero {
    grid-template-columns: 1fr;
    align-items: start;
  }
  .photo {
    order: -1;
    width: 150px;
  }
  .output {
    font-size: 13px;
  }
}
</style>
