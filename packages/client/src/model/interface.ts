interface IProfiles {
  network: string //"Twitter",
  username: string //"john",
  url: string //"https://twitter.com/john"
}

export interface IBasics {
  name: string //"John Doe",
  label: string //"Programmer",
  image: string //"",
  email: string //"john@gmail.com",
  phone: string //"(912) 555-4321",
  url: string //"https://johndoe.com",
  summary: string //"A summary of John Doe…",
  location: {
    address: string //"2712 Broadway St",
    postalCode: string //"CA 94115",
    city: string //"San Francisco",
    countryCode: string //"US",
    region: string //"California"
  } 
  profiles: IProfiles[]
}



export interface IWork {
  name: string //"Company",
  position: string // "President",
  url: string // "https://company.com",
  startDate: string // "2013-01-01",
  endDate: string // "2014-01-01",
  summary: string // "Description…",
  highlights: string[] // ["Started the company"]
}

export interface IVolunteer {
  organization: string //"Organization",
  position: string //"Volunteer",
  url: string //"https://organization.com/",
  startDate: string //"2012-01-01",
  endDate: string //"2013-01-01",
  summary: string //"Description…",
  highlights: string[] //["Awarded 'Volunteer of the Month'"]
}

export interface IEducation {
  institution: string // "University",
  url: string // "https://institution.com/",
  area: string // "Software Development",
  studyType: string // "Bachelor",
  startDate: string // "2011-01-01",
  endDate: string // "2013-01-01",
  score: string // "4.0",
  courses: string[] // ["DB1101 - Basic SQL"]
}

export interface IAwards {
  title: string // "Award",
  date: string // "2014-11-01",
  awarder: string // "Company",
  summary: string // "There is no spoon."
}
export interface ICertificates {
  name: string // "Certificate",
  date: string // "2021-11-07",
  issuer: string // "Company",
  url: string // "https://certificate.com",
}

export interface IPublications {
  name: string // "Publication",
  publisher: string // "Company",
  releaseDate: string // "2014-10-01",
  url: string // "https://publication.com",
  summary: string // "Description…"
}

export interface ISkills {
  name: string //"Web Development",
  level: string //"Master",
  keywords: string[] //["HTML","CSS","JavaScript"]
}

export interface ILanguages {
  language: string // "English",
  fluency: string // "Native speaker"
}

export interface IInterests {
  name: string //"Wildlife",
  keywords: string[] //["Ferrets","Unicorns"]
}

export interface IReferences {
  name: string // "Jane Doe",
  reference: string // "Reference…"
}

export interface IProjects {
  name: string // "Project",
  description: string // "Description…",
  highlights: string[] // ["Won award at AIHacks 2016"],
  keywords: string[] // ["HTML"],
  startDate: string // "2019-01-01",
  endDate: string // "2021-01-01",
  url: string // "https://project.com/",
  roles: string[] // ["Team Lead"],
  entity: string // "Entity",
  type: string // "application"
}

export interface IResume {
  basics: IBasics
  work: IWork[]
  volunteer: IVolunteer[]
  education: IEducation[]
  awards: IAwards[] 
  certificates: ICertificates[] 
  publications: IPublications[] 
  skills: ISkills[] 
  languages: ILanguages[]
  interests: IInterests
  references: IReferences[]
  projects: IProjects[]
}
