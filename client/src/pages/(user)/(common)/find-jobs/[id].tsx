import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { companies } from "@/components/companies-list/components/CompaniesArray";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const JobDetailsPage = () => {
  const { id } = useParams();
  const company = companies.find((c) => c.id === Number(id));
  const [isOpen, setIsOpen] = useState(false);

  if (!company) {
    return <p>Company not found</p>;
  }

  const job = company.jobs.find((job) => job.id === Number(id));
  if (!job) {
    return <p>Job not found</p>;
  }

  const handleApplyClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

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
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={handleApplyClick}
        >
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
              <li className="text-gray-700">
                <span className="font-medium">Apply Before:</span>{" "}
                {job.applyBefore}
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Job Posted On:</span>{" "}
                {job.postedOn}
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Job Type:</span> {job.type}
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Salary:</span> {job.salary}
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

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-30 z-50" />

        <DialogContent className="fixed z-50 h-[500px] overflow-y-auto bg-white rounded-lg shadow-xl p-6 w-full max-w-lg mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="mb-6">
            <DialogTitle className="text-lg font-semibold text-gray-800">
              {job.title}
            </DialogTitle>
            <p className="text-sm text-gray-500">
              {company.name} • {job.location} • {job.type}
            </p>
          </div>
          <DialogDescription className="text-sm text-gray-600 mb-4">
            Submit your application. The following details are required and will
            only be shared with the company.
          </DialogDescription>
          <form className="space-y-4">
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full"
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="w-full"
            />

            <Input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full"
            />
            <Input
              type="text"
              name="jobTitle"
              placeholder="Current or Previous Job Title"
              className="w-full"
            />
            <Input
              type="url"
              name="linkedin"
              placeholder="LinkedIn URL"
              className="w-full"
            />
            <Input
              type="url"
              name="portfolio"
              placeholder="Portfolio URL"
              className="w-full"
            />
            <textarea
              name="additionalInfo"
              placeholder="Additional Information (500 characters max)"
              maxLength={500}
              className="w-full border rounded-lg p-3 text-sm"
            />
            <div className="flex items-center justify-between">
              <label
                htmlFor="resume"
                className="text-sm font-medium text-gray-700"
              >
                Attach Resume/CV
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="w-full border rounded-lg text-sm"
              />
            </div>
            <Button type="button" className="w-full mt-4">
              Submit Application
            </Button>
          </form>
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            onClick={handleClose}
          >
            ✕
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobDetailsPage;
