<template>
    <section id="work-ex">
        <div class="content">
            <div style="justify-content: center; align-items: center; display: flex;">
                <h1>
                    <slot name="heading"></slot>
                </h1>
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
                            <slot name="item1"></slot>
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
  height: 60vh;
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
    width: 80;
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
  background: url('') no-repeat left center; /* Add your image as the bullet point */
  padding-left: 40px; /* Add padding to the left of the text to make room for the image */
}

img {
    width: 100px;
    height: 100px;
}

.info {
   display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
    
}

h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #fff;
}

h4 {
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
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
<script lang="ts">
import { defineComponent } from 'vue';

interface WorkExperience {
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    tools: Array<string>;
}

export default defineComponent({
    data() {
        return {
            workExperiences: [
                {
                    position: 'Software Developer at Oracle Mexico',
                    startDate: 'October 2024',
                    endDate: 'Present',
                    description: 'Backend Engineer for Cloud services, specializing in test automation and QA engineering.',
                },
                 {
                    position: 'Software Engineer at EPAM Systems Mexico',
                    startDate: 'September 2023',
                    endDate: 'October 2024',
                    description: 'Designed and developed RESTful APIs using Spring Boot. Utilized AWS services to deploy and manage cloud-based microservices.',
                },
                {
                    position: 'Software Developer Intern at GE Aerospace',
                    startDate: 'September 2022',
                    endDate: 'July 2023',
                    description: 'Full-stack developer; implemented feature enhancements that improved system performance and user experience.',

                },
                {
                    position: 'Talent & Change Management Intern at Kelloggs Company',
                    startDate: 'August 2021',
                    endDate: 'January 2022',
                    description: 'Developed and automated Excel macros, reducing data processing time and improving reporting efficiency.',
                }
            ] as WorkExperience[],
            tools: [
                'Java', 'Python', 'Go','AWS',"Docker",'Spring Boot','Spring Security', 'Typescript', 'Javascript', 'Terraform','Git','MySQL','MongoDB', 'CI/CD','Vuejs', 'HTML & CSS', 'Mockito','JUnit','Microsoft Excel'
            ]
        }
    }
});
    
</script>