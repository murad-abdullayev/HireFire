import { useParams } from "react-router-dom";
import { companies } from "@/components/companies-list/components/CompaniesArray";

const CompanyDetail = () => {
  const { id } = useParams();
  const company = companies.find((c) => c.id === Number(id));

  if (!company) {
    return <p className="text-center text-2xl mt-10">Company not found</p>;
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-6 rounded-lg text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={`/assets/logos/${company.name.toLowerCase()}.png`}
            alt={company.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
          />
          <div className="ml-4 mt-4 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold">{company.name}</h1>
            <a
              href={`https://${company.name.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl underline hover:text-gray-200"
            >
              Visit Website
            </a>
            <p className="text-sm mt-2">
              Founded: <strong>July 31, 2011</strong>
            </p>
            <p className="text-sm">
              Employees: <strong>4000+</strong> | Locations:{" "}
              <strong>20 Countries</strong>
            </p>
            <p className="text-sm">
              Industry: <strong>{company.industries.join(", ")}</strong>
            </p>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Company Profile</h2>
        <p className="mt-4 text-gray-700">{company.description}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {["HTML5", "CSS3", "JavaScript", "Ruby", "Mixpanel", "Framer"].map(
            (tech) => (
              <div
                key={tech}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="flex gap-4 mt-4">
          <a
            href="https://twitter.com/company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com/company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Office Locations</h2>
        <ul className="list-disc pl-5 mt-4">
          {["United States", "England", "Japan", "Australia", "China"].map(
            (location) => (
              <li key={location} className="text-gray-700">
                {location}
              </li>
            )
          )}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            "Celestin Gardinier",
            "Reynaud Colbert",
            "Arienne Lyon",
            "Bernard Alexander",
          ].map((member) => (
            <div
              key={member}
              className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <p className="mt-2 font-semibold">{member}</p>
              <p className="text-sm text-gray-500">Managing Director</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Perks & Benefits</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {company.jobs[0].perks.map((perk) => (
            <div
              key={perk.title}
              className="bg-gray-50 p-4 shadow-md rounded-lg flex items-center"
            >
              <p className="font-semibold">{perk.title}</p>
              <p className="text-sm text-gray-500 mt-1">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Open Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {company.jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.location}</p>
              <a
                href={`/jobs/${job.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CompanyDetail;
