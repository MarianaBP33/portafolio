export interface Certification {
  name: string
  issuer: string
  year: number
  details?: string
}

export interface WorkExperience {
  role: string
  company: string
  startDate: string
  endDate: string
  description: string
  stack: string[]
}

export const profile = {
  name: 'Mariana Bojórquez',
  fullName: 'Mariana Bojórquez Pérez',
  role: 'Senior Software Engineer',
  company: 'Virtusa (for Google)',
  stack: ['java', 'kotlin', 'docker', 'python', 'aws', 'qa'],
  location: 'Guadalajara, MX',
  locationUrl: 'https://maps.app.goo.gl/fEWCo527CSHqAn1E9',
  email: 'mariana.bp.33@gmail.com',
  github: 'https://github.com/MarianaBP33',
  linkedin: 'https://www.linkedin.com/in/marianabojorquezp',
}

// Professional experience counted from September 2022
export const careerStart = new Date(2022, 8, 1)

export const workExperiences: WorkExperience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Virtusa',
    startDate: 'June 2026',
    endDate: 'Present',
    description: 'Contractor on a project for Google, working on large-scale backend modernization and services migration. Develop and review Java and Kotlin code to migrate legacy services onto a modern platform.',
    stack: ['java', 'kotlin'],
  },
  {
    role: 'Software Engineer',
    company: 'Oracle Mexico',
    startDate: 'October 2024',
    endDate: 'March 2026',
    description: 'Led testing strategy and automation for critical OCI services. Designed automation frameworks in Java, Python, Bash and Go, and led integration, regression and performance testing across distributed cloud services and RESTful APIs.',
    stack: ['java', 'python', 'golang','qa','sql','docker'],
  },
  {
    role: 'Junior Software Engineer',
    company: 'EPAM Systems Mexico',
    startDate: 'September 2023',
    endDate: 'September 2024',
    description: 'Built RESTful APIs with Java (Spring Boot, Hibernate) and Node.js (Express, TypeScript) for microservices-based systems, developed React and TypeScript interfaces, and deployed applications on AWS (EC2, S3, Lambda).',
    stack: ['java', 'spring-boot', 'node.js', 'typescript', 'javascript', 'react', 'aws','sql'],
  },
  {
    role: 'Software Developer',
    company: 'GE Aerospace',
    startDate: 'September 2022',
    endDate: 'August 2023',
    description: 'Developed full-stack features with Java (Spring Boot, Hibernate) and Vue.js, owning key features end-to-end from design to deployment, and built cloud-based applications on AWS.',
    stack: ['java', 'spring-boot', 'hibernate', 'javascript', 'typescript', 'aws'],
  },
]

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: 2024,
  },
  {
    name: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    year: 2022,
    details: 'Cloud computing fundamentals; data, ML and AI; infrastructure; networking and security in Google Cloud.',
  },
  {
    name: 'Seeds for the Future Mexico',
    issuer: 'Huawei',
    year: 2021,
    details: 'Selected as one of 40 students nationwide.',
  },
]

export const tools = [
  'Java', 'Python', 'Go', 'AWS', 'Docker', 'Spring Boot', 'Spring Security', 'Typescript', 'Javascript', 'Terraform', 'Git', 'MySQL', 'MongoDB', 'CI/CD', 'Mockito', 'JUnit'
]
