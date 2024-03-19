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
.content {
  margin-top: 2rem;
  height: 60vh;
}
.tags{
    width: 100vh;
    margin-left: 2rem;

}
.tag {
  background-color: #f0f0f0;
  color: #000;
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
    color: var(--color-heading);
    margin-bottom: 0.5rem;
}
.date{
    font: .8rem sans-serif;
}
.list-element {
    margin-bottom: 2rem;
    margin-top: 1rem;
}
.position {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-heading);
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
    color: var(--color-heading);
}

h4 {
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
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
                    position: 'Junior Software Engineer at EPAM Systems Mexico',
                    startDate: 'September 2023',
                    endDate: 'present',
                    description: 'Junior Java Developer working with Spring technologies and AWS services.',
                },
                {
                    position: 'Software Developer Intern at GE Aerospace',
                    startDate: 'September 2022',
                    endDate: 'July 2023',
                    description: 'Full stack developer with hands on experience on coding, testing and debugging.',

                },
                {
                    position: 'Talent & Change Management Intern at Kelloggs Company',
                    startDate: 'September 2021',
                    endDate: 'Decebmer 2021',
                    description: 'Worked as IT aid in creating Macros in Microsoft Excel for automation purposes.',
                }
            ] as WorkExperience[],
            tools: [
                'Java', 'Spring Security','Spring Boot', 'AWS DynamoDB','AWS RDS','AWS EC2','AWS S3',"Docker","Git", "VS Code",'MySQL','MongoDB','Vuejs', 'Typescript', 'Javascript', 'HTML & CSS', 'Mockito','JUnit','Microsoft Excel'
            ]
        }
    }
});
    
</script>