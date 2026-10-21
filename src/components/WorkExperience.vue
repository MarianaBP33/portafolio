<template>
    <section id="work-ex">
        <div class="content">
            <div class="heading">
                <h2>
                    <slot name="heading"></slot>
                </h2>
            </div>
            <div class="info">
                <div class="work-experience-component">
                        <ul class="custom-bullet">
                        <li  v-for="(item, index) in workExperiences" :key="index" class="list-element">
                            <p class="date">{{ item.startDate }} - {{ item.endDate }}</p>
                            <h3 class="position">{{ item.position }}</h3>
                            <p class="description">{{ item.description }}</p>
                            </li>
                        </ul>
                        <div class ="tags">
                            <span class="tag" v-for="tool in tools" :key="tool" >{{ tool }}</span>
                        </div>
                    </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
/* modern card for work experience */
.content {
  margin-top: 2rem;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.work-experience-component {
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
  max-width: 800px;
  width: 100%;
  margin-top: 4rem;
}
.tags{
    margin-left: 2rem;

}
.tag {
  background-color: #55555555;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px; 
  margin-left: 10px;
  font-size: 0.8em; 
  min-width: 50px;
  display: inline-block; 
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 
}
.description {
    font-size: .9rem;
    color: #fff;
    margin-bottom: 0.5rem;
}
.date{
    font: .8rem sans-serif;
    color: #ddd;
}
.list-element {
    margin-bottom: 2rem;
    margin-top: 1rem;
}
.position {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
}
.custom-bullet {
  list-style: none; /* Remove default bullet points */
  padding-left: 0; /* Remove default padding */
}

.custom-bullet li {
  padding-left: 40px;
}

.info {
   display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
    
}

.heading {
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #fff;
}

@media (max-width: 768px) {
  .content {
    height: auto;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column; /* stack title and block */
    align-items: stretch;
  }

  /* ensure the title sits on top */
  .content > div:first-child {
    display: block;
    text-align: left;
    padding-left: 0.5rem;
  }

  .info {
    display: flex;
    flex-direction: column; /* make the experience a block under the title */
    align-items: stretch;
    width: 100%;
  }

  .work-experience-component {
    padding: 1rem;
    box-shadow: none;
    width: 100%;
    max-width: none;
    margin-top: 0.75rem;
  }

  .position {
    font-size: 1rem;
  }
  .description {
    font-size: 0.95rem;
  }
  .date {
    font-size: 0.85rem;
  }
  .tags{
    width: 100%;
    margin-left: 0;
    margin-top: 0.5rem;
  }
  .custom-bullet li { padding-left: 20px; }
}
</style>
<script setup lang="ts">
import { tools, workExperiences } from '@/data/profile'
</script>
