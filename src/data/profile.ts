export interface WorkExperience {
  position: string
  startDate: string
  endDate: string
  description: string
}

// Full-time experience counted from September 2023
export const careerStart = new Date(2023, 8, 1)

export const workExperiences: WorkExperience[] = [
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
    position: "Talent & Change Management Intern at Kellogg's Company",
    startDate: 'August 2021',
    endDate: 'January 2022',
    description: 'Developed and automated Excel macros, reducing data processing time and improving reporting efficiency.',
  },
]

export const tools = [
  'Java', 'Python', 'Go', 'AWS', 'Docker', 'Spring Boot', 'Spring Security', 'Typescript', 'Javascript', 'Terraform', 'Git', 'MySQL', 'MongoDB', 'CI/CD', 'Vuejs', 'HTML & CSS', 'Mockito', 'JUnit', 'Microsoft Excel'
]
