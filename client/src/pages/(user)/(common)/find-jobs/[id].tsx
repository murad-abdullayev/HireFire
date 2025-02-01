import { Link, useParams } from "react-router-dom";
import { companies } from "@/components/companies-list/components/CompaniesArray";

const JobDetailsPage = () => {
  const { id } = useParams();
  const company = companies.find((c) => c.id === Number(id));

  if (!company) {
    return <p>Company not found</p>;
  }

  const job = company.jobs.find((job) => job.id === Number(id));
  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b pb-8">
        <div>
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="text-gray-500 mt-2">
            <Link
              to={`/companies/${company.id}`}
              className="text-blue-600 hover:underline"
            >
              {company.name}
            </Link>{" "}
            - {job.location} - {job.type}
          </p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Apply
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-700 mt-4">{job.description}</p>

          <h2 className="text-xl font-semibold mt-8">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-8">Who You Are</h2>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">About this role</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Apply Before:</strong> {job.applyBefore}
              </li>
              <li>
                <strong>Job Posted On:</strong> {job.postedOn}
              </li>
              <li>
                <strong>Job Type:</strong> {job.type}
              </li>
              <li>
                <strong>Salary:</strong> {job.salary}
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Categories</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold">Perks & Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {job.perks.map((perk, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg text-center shadow-md"
            >
              <h3 className="text-lg font-semibold">{perk.title}</h3>
              <p className="text-gray-500 mt-2">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold">Similar Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {company.jobs.map((similarJob) => (
            <div
              key={similarJob.id}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{similarJob.title}</h3>
              <p className="text-gray-500">
                <Link
                  to={`/companies/${company.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {company.name}
                </Link>{" "}
                - {similarJob.location}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {similarJob.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
