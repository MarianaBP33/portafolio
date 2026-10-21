<template>
  <header class="nav">
    <div class="nav-inner">
      <a href="#top" class="home"><b>~/mariana</b> on main</a>
      <nav aria-label="Sections">
        <ul>
          <li><a href="#experience">experience</a></li>
          <li><a href="#certifications">certs</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--bg);
  border-bottom: 1px dashed var(--line);
}
.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 14px var(--gutter);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px 24px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--soft);
}
.home b {
  color: var(--teal);
  font-weight: 600;
}
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;
  list-style: none;
  padding: 0;
}
li a {
  transition: color 0.2s;
}
li a::before {
  content: './';
  color: var(--dim);
}
li a:hover {
  color: var(--ink);
}

@media (max-width: 520px) {
  .home {
    display: none;
  }
  .nav-inner {
    justify-content: center;
  }
}
</style>
