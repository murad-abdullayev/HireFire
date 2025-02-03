import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import { paths } from "../constants/paths";
import LandingPage from "../pages/(user)/(common)/landing";
import FindJobs from "@/pages/(user)/(common)/find-jobs";
import BrowseCompanies from "@/pages/(user)/(common)/browse-companies";
import CompanyDetailsPage from "@/pages/(user)/(common)/browse-companies/[id]";
import JobDetailsPage from "@/pages/(user)/(common)/find-jobs/[id]";
import JobRegister from "@/pages/(user)/(common)/auth/job-seeker-auth/register";
import CompanyRegister from "@/pages/(user)/(common)/auth/company-auth/register";
import JobLogin from "@/pages/(user)/(common)/auth/job-seeker-auth/login";
import CompanyLogin from "@/pages/(user)/(common)/auth/company-auth/login";
import TeamMemberRegister from "@/pages/(user)/(common)/auth/company-auth/team-member-register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: paths.LANDING.MAIN,
        element: <LandingPage />,
      },
      {
        path: paths.LANDING.JOBS.MAIN,
        element: <FindJobs />,
      },
      {
        path: paths.LANDING.JOBS.DETAILS(),
        element: <JobDetailsPage />,
      },
      {
        path: paths.LANDING.COMPANIES.MAIN,
        element: <BrowseCompanies />,
      },
      {
        path: paths.LANDING.COMPANIES.DETAILS(),
        element: <CompanyDetailsPage />,
      },
    ],
  },
  {
    path: paths.AUTH.JOBSEEKER.REGISTER,
    element: <JobRegister />,
  },
  {
    path: paths.AUTH.JOBSEEKER.LOGIN,
    element: <JobLogin />,
  },
  {
    path: paths.AUTH.COMPANY.REGISTER,
    element: <CompanyRegister />,
  },
  {
    path: paths.AUTH.COMPANY.LOGIN,
    element: <CompanyLogin />,
  },
  {
    path: paths.AUTH.TEAM_MEMBER.REGISTER(),
    element: <TeamMemberRegister />,
  },
]);
