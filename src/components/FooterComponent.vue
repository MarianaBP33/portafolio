<template>
  <footer class="container">
    <div class="links">
      <a href="mailto:mariana.bp.33@gmailcom" aria-label="Email"><img src="../assets/gmail.png" alt="gmail" class="logo" /></a>
      <a href="https://github.com/MarianaBP33" aria-label="GitHub" target="_blank" rel="noopener"><img src="../assets/github.png" alt="github" class="logo" /></a>
      <a href="https://www.linkedin.com/in/mariana-bojorquez-perez-5556a11b8/" aria-label="LinkedIn" target="_blank" rel="noopener"><img src="../assets/linkedin.png" alt="linkedin" class="logo"/></a>
    </div>
    <p class="credits">© 2026 Mariana Bojórquez Pérez</p>
  </footer>
</template>
<style scoped>
.container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 0; /* reduced height */
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem; /* smaller gap between icon row and credits */
  z-index: 1000;
}

.links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.logo{
    width: 30px;
    height: 30px;
    transition: transform 0.2s, opacity 0.2s;
}

.logo:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

.credits {
  color: #ccc;
  font-size: 0.8rem;
}

@media (min-width: 768px) {
  .logo { width: 60px; height: 60px; }
  .credits { font-size: 0.9rem; }
}
</style>
