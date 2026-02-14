export interface SampleData {
  _token: string;
  name: string;
  email: string;
  phone: string;
  current_job: string;
  address: string;
  nationality: string;
  marital_status: string;
  birth_date: string;
  cv_text_size: number;
  uuid: string;
  education_section_title: string;
  jobs_section_title: string;
  langs_section_title: string;
  skills_section_title: string;
  summary_section_title: string;
  profession_summary: string;
  certs_section_title: string;
  cert: string;
  refs_section_title: string;
  ref: string | null;
  interests_section_title: string;
  customSectionTitle: string | null;
  customSectionDetails: string | null;
  cv_color: string;
  darker_color: string;
  lighter_color: string;
  educations: {
    [key: string]: {
      degree: string;
      university: string;
      education_city: string;
      startYear: string;
      endYear: string;
      details: string | null;
    };
  };
  jobs: {
    [key: string]: {
      job_title: string;
      job_city: string;
      details: string;
      employer: string;
      jobStartYear: string;
      jobEndYear: string;
    };
  };
  language: string | null;
  level: string;
  skill: string | null;
  languages: {
    [key: string]: {
      language: string;
      level: string;
    };
  };
  skills: {
    [key: string]: {
      skill: string;
    };
  };
  interest: string | null;
}