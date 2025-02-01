import NomadLogo from "@/assets/images/CompanyLogo.png";

const companies = [
  {
    id: 1,
    name: "Nomad",
    description:
      "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
    categories: ["Business Service"],
    jobsCount: 3,
  },
  {
    id: 2,
    name: "Discord",
    description:
      "We'd love to work with someone like you. We care about creating a delightful experience.",
    categories: ["Business Service"],
    jobsCount: 3,
  },
  {
    id: 3,
    name: "Maze",
    description:
      "We're a passionate bunch working to build the future of rapid testing together.",
    categories: ["Business Service"],
    jobsCount: 3,
  },
  {
    id: 4,
    name: "Udacity",
    description:
      "Udacity is a new type of online university that teaches the actual programming skills.",
    categories: ["Business Service"],
    jobsCount: 3,
  },
  {
    id: 5,
    name: "Webflow",
    description:
      "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
    categories: ["Business Service", "Technology"],
    jobsCount: 3,
  },
  {
    id: 6,
    name: "Foundation",
    description:
      "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
    categories: ["Business Service", "Crypto"],
    jobsCount: 3,
  },
];

export const RecommendedCompanies = () => {
  return (
    <div className="container mx-auto pt-16 px-4 md:px-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold">Recommended Companies</h3>
        <p className="text-gray-600">
          Based on your profile, company preferences, and recent activity
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-4">
              <img
                className="w-12 h-12"
                src={NomadLogo}
                alt={`${company.name} Logo`}
              />
              <span className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-full">
                {company.jobsCount} Jobs
              </span>
            </div>
            <h4 className="text-lg font-semibold">{company.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{company.description}</p>
            <div className="flex flex-wrap gap-2">
              {company.categories.map((category) => (
                <span
                  key={category}
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
