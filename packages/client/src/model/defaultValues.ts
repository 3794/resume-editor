import { IAwards, IBasics, ICertificates, IEducation, IInterests, ILanguages, IProjects, IPublications, IReferences, IResume, ISkills, IVolunteer, IWork } from './interface'

export const basicsDefaultValue: IBasics = {
  name: '',
  label: '',
  image: '',
  email: '',
  phone: '',
  url: '',
  summary: '',
  location: {
    address: '',
    postalCode: '',
    city: '',
    countryCode: '',
    region: ''
  },
  profiles: [{
    network: '',
    username: '',
    url: ''
  }]
}

export const educationDefaultValue: IEducation = {
  institution: '',
  url: '',
  area: '',
  studyType: '',
  startDate: '',
  endDate: '',
  score: '',
  courses: ['']
}

export const workDefaultValue: IWork = {
  name: '',
  position: '',
  url: '',
  startDate: '',
  endDate: '',
  summary: '',
  highlights: ['']
}

export const volunteerDefaultValue: IVolunteer = {
  organization: '',
  position: '',
  url: '',
  startDate: '',
  endDate: '',
  summary: '',
  highlights: ['']
}

export const awardsDefaultValue: IAwards = {
  title: '',
  date: '',
  awarder: '',
  summary: ''
}

export const certificatesDefaultValue: ICertificates = {
  name: '',
  date: '',
  issuer: '',
  url: ''
}

export const publicationsDefaultValues: IPublications = {
  name: '',
  publisher: '',
  releaseDate: '',
  url: '',
  summary: ''
}

export const skillsDefaultValues: ISkills = {
  name: '',
  level: '',
  keywords: ['']
}

export const languagesDefaultValues: ILanguages = {
  language: '',
  fluency: ''
}

export const interestsDefaultValues: IInterests = {
  name: '',
  keywords: ['']
}

export const referencesDefaultValues: IReferences = {
  name: '',
  reference: ''
}

export const projectsDefaultValues: IProjects = {
  name: '',
  description: '',
  highlights: [''],
  keywords: [''],
  startDate: '',
  endDate: '',
  url: '',
  roles: [''],
  entity: '',
  type: ''
}

export const resumeDefaultValues: IResume = {
  basics: basicsDefaultValue,
  work: [workDefaultValue],
  volunteer: [volunteerDefaultValue],
  education: [educationDefaultValue],
  awards: [awardsDefaultValue],
  certificates: [certificatesDefaultValue],
  publications: [publicationsDefaultValues],
  skills: [skillsDefaultValues],
  languages: [languagesDefaultValues],
  interests: interestsDefaultValues,
  references: [referencesDefaultValues],
  projects: [projectsDefaultValues]
}
