export const paths = {
  LANDING: {
    MAIN: "/",
    COMPANIES: {
      MAIN: "/companies",
      DETAILS: (id = ":id") => `/companies/${id}`,
    },
    JOBS: {
      MAIN: "/jobs",
      DETAILS: (id = ":id") => `/jobs/${id}`,
    },
  },
  AUTH: {
    JOBSEEKER: {
      REGISTER: "/register/jobseeker",
      LOGIN: "/login/jobseeker",
    },
    COMPANY: {
      REGISTER: "/register/company",
      LOGIN: "/login/company",
    },
  },
  APPLICANT_DASHBOARD: {
    MAIN: "/applicant",
    CHAT: "/applicant/chat",
    APPLICATIONS: "/applicant/applications",
    JOBS: {
      MAIN: "/applicant/jobs",
      DETAILS: (id = ":id") => `/applicant/jobs/${id}`,
    },
    COMPANIES: {
      MAIN: "/applicant/companies",
      DETAILS: (id = ":id") => `/applicant/companies/${id}`,
    },
    PROFILE: "/applicant/profile",
    SETTINGS: {
      MAIN: "/applicant/settings",
      LOGIN_DETAILS: "/applicant/settings/login-details",
      NOTIFICATIONS: "/applicant/settings/notifications",
    },
    HELP_CENTER: "/applicant/help-center",
  },
  COMPANY_DASHBOARD: {
    MAIN: "/company",
    CHAT: "/company/chat",
    PROFILE: "/company/profile",
    APPLICANTS: {
      MAIN: "/company/applicants",
      DETAILS: (id = ":id") => `/company/applicants/${id}`,
      PROFILE: (id = ":id") => `/company/applicants/${id}/profile`,
      RESUME: (id = ":id") => `/company/applicants/${id}/resume`,
      HIRING_PROCESS: (id = ":id") =>
        `/company/applicants/${id}/hiring-process`,
      INTERVIEW_SCHEDULE: (id = ":id") =>
        `/company/applicants/${id}/interview-schedule`,
      POST_JOB: {
        MAIN: "/company/applicants/post-job",
        INFORMATION: "/company/applicants/post-job/job-information",
        DESCRIPTION: "/company/applicants/post-job/job-description",
        PERKS_BENEFITS: "/company/applicants/post-job/perks-benefits",
      },
    },
    JOB_LISTING: {
      MAIN: "/company/job-listing",
      DETAILS: (id = ":id") => `/company/job-listing/${id}`,
      APPLICANTS: (id = ":id") => `/company/job-listing/${id}/applicants`,
      DETAILS_AND_ANALYTICS: (id = ":id") =>
        `/company/job-listing/${id}/details-and-analytics`,
    },
    SCHEDULE: "/company/schedule",
    SETTINGS: {
      MAIN: "/company/settings",
      SOCIAL_LINKS: "/company/settings/social-links",
      TEAM: "/company/settings/team",
    },
    HELP_CENTER: "/company/help-center",
  },
};

export const adminPaths = {
  DASHBOARD: {
    MAIN: "/admin",
  },
};
