export interface Values {
    name: string
    email: string
    phone: string
    site: string
    description: string
    school: string
    schoolMajor: string
    schoolPeriod: string
    schoolContent: string
    job: Job[]
    certificate: Certificate[]
  }
  
  export interface Job {
    company: string
    role: string 
    description: string 
    period: string 
  }
  
  export interface Certificate {
    name: string
    period: string
  }
  