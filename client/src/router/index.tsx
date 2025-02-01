import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import { paths } from "../constants/paths";
import LandingPage from "../pages/(user)/(common)/landing";
import FindJobs from "@/pages/(user)/(common)/find-jobs";
import BrowseCompanies from "@/pages/(user)/(common)/browse-companies";
import CompanyDetailsPage from "@/pages/(user)/(common)/browse-companies/[id]";
import JobDetailsPage from "@/pages/(user)/(common)/find-jobs/[id]";

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
]);
