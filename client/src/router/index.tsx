import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "./components/shared/RootLayout";
// import AuthLayout from "./components/shared/AuthLayout";
// import ApplicantDashboardLayout from "./components/shared/ApplicantDashboardLayout";
// import CompanyDashboardLayout from "./components/shared/CompanyDashboardLayout";
// import AdminDashboardLayout from "./components/shared/AdminDashboardLayout";
// import LandingPage from "./pages/landing/Main";
// import CompaniesPage from "./pages/landing/Companies";
// import CompanyDetailsPage from "./pages/landing/CompanyDetails";
// import JobsPage from "./pages/landing/Jobs";
// import JobDetailsPage from "./pages/landing/JobDetails";
// // Applicant Pages
// import ApplicantChatPage from "./pages/applicant/Chat";
// import ApplicantApplicationsPage from "./pages/applicant/Applications";
// import ApplicantJobsPage from "./pages/applicant/Jobs";
// import ApplicantCompaniesPage from "./pages/applicant/Companies";
// import ApplicantProfilePage from "./pages/applicant/Profile";
// // Company Pages
// import CompanyChatPage from "./pages/company/Chat";
// import CompanyProfilePage from "./pages/company/Profile";
// import CompanyApplicantsPage from "./pages/company/Applicants";
// import CompanySchedulePage from "./pages/company/Schedule";
// import CompanyJobListingPage from "./pages/company/JobListing";
// // Admin Pages
// import AdminDashboardPage from "./pages/admin/Dashboard";
import { paths } from "../constants/paths";
import LandingPage from "../pages/(user)/(common)/landing";
import FindJobs from "@/pages/(user)/(common)/find-jobs";
import BrowseCompanies from "@/pages/(user)/(common)/browse-companies";

export const router = createBrowserRouter([
  {
    path: paths.LANDING.MAIN,
    element: <LandingPage />,
  },
  {
    path: paths.LANDING.JOBS.MAIN,
    element: <FindJobs />,
  },
  {
    path: paths.LANDING.COMPANIES.MAIN,
    element: <BrowseCompanies />,
  },

  //   {
  //     path: paths.LANDING.MAIN,
  //     element: <RootLayout />,
  //     children: [
  //       { path: paths.LANDING.MAIN, element: <LandingPage /> },
  //       { path: paths.LANDING.COMPANIES.MAIN, element: <CompaniesPage /> },
  //       {
  //         path: paths.LANDING.COMPANIES.DETAILS(),
  //         element: <CompanyDetailsPage />,
  //       },
  //       { path: paths.LANDING.JOBS.MAIN, element: <JobsPage /> },
  //       { path: paths.LANDING.JOBS.DETAILS(), element: <JobDetailsPage /> },
  //     ],
  //   },
  //   {
  //     path: paths.AUTH.JOBSEEKER.REGISTER,
  //     element: <AuthLayout />,
  //     children: [
  //       {
  //         path: paths.AUTH.JOBSEEKER.REGISTER,
  //         element: <div>Register Page</div>,
  //       },
  //       { path: paths.AUTH.JOBSEEKER.LOGIN, element: <div>Login Page</div> },
  //     ],
  //   },
  //   {
  //     path: paths.APPLICANT_DASHBOARD.MAIN,
  //     element: <ApplicantDashboardLayout />,
  //     children: [
  //       { path: paths.APPLICANT_DASHBOARD.CHAT, element: <ApplicantChatPage /> },
  //       {
  //         path: paths.APPLICANT_DASHBOARD.APPLICATIONS,
  //         element: <ApplicantApplicationsPage />,
  //       },
  //       {
  //         path: paths.APPLICANT_DASHBOARD.JOBS.MAIN,
  //         element: <ApplicantJobsPage />,
  //       },
  //       {
  //         path: paths.APPLICANT_DASHBOARD.COMPANIES.MAIN,
  //         element: <ApplicantCompaniesPage />,
  //       },
  //       {
  //         path: paths.APPLICANT_DASHBOARD.PROFILE,
  //         element: <ApplicantProfilePage />,
  //       },
  //     ],
  //   },
  //   {
  //     path: paths.COMPANY_DASHBOARD.MAIN,
  //     element: <CompanyDashboardLayout />,
  //     children: [
  //       { path: paths.COMPANY_DASHBOARD.CHAT, element: <CompanyChatPage /> },
  //       {
  //         path: paths.COMPANY_DASHBOARD.PROFILE,
  //         element: <CompanyProfilePage />,
  //       },
  //       {
  //         path: paths.COMPANY_DASHBOARD.APPLICANTS.MAIN,
  //         element: <CompanyApplicantsPage />,
  //       },
  //       {
  //         path: paths.COMPANY_DASHBOARD.SCHEDULE,
  //         element: <CompanySchedulePage />,
  //       },
  //       {
  //         path: paths.COMPANY_DASHBOARD.JOB_LISTING.MAIN,
  //         element: <CompanyJobListingPage />,
  //       },
  //     ],
  //   },
  //   {
  //     path: adminPaths.DASHBOARD.MAIN,
  //     element: <AdminDashboardLayout />,
  //     children: [
  //       { path: adminPaths.DASHBOARD.MAIN, element: <AdminDashboardPage /> },
  //     ],
  //   },
]);
