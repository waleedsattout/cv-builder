export interface CVData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];
  interests: string[];
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  graduationDate: string;
  location: string;
  description: string;
}

export interface Language {
  id: number;
  name: string;
  level: string;
}