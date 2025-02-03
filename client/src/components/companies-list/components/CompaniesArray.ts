interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  responsibilities: string[];
  requirements: string[];
  applyBefore: string;
  postedOn: string;
  salary: string;
  categories: string[];
  perks: { title: string; description: string }[];
}

interface Company {
  id: number;
  name: string;
  location: string;
  size: string;
  industries: string[];
  description: string;
  founded: string;
  employees: number;
  techStack: string[];
  contactLinks: { twitter?: string; facebook?: string; linkedin?: string };
  locations: string[];
  jobs: Job[];
}

export const companies: Company[] = [
  {
    id: 1,
    name: "Nomad",
    location: "Paris, France",
    size: "251-500",
    industries: ["Marketing", "Design"],
    description: "Nomad focuses on building creative solutions for marketing.",
    founded: "2015",
    employees: 400,
    techStack: ["HTML5", "CSS3", "JavaScript", "Figma"],
    contactLinks: {
      twitter: "https://twitter.com/nomad",
      linkedin: "https://linkedin.com/company/nomad",
    },
    locations: ["France", "Germany", "United States"],
    jobs: [
      {
        id: 1,
        title: "Social Media Assistant",
        description:
          "Help manage social media platforms, create content, and engage with the community.",
        location: "Paris, France",
        type: "Full-time",
        responsibilities: [
          "Community engagement to ensure representation online.",
          "Focus on social media content development and publication.",
          "Marketing and strategy support.",
          "Stay on top of trends on social media platforms.",
          "Engage with online communities.",
        ],
        requirements: [
          "Energy from people and creating ideal work environments.",
          "Detail-oriented and creative mindset.",
          "Growth marketer with experience running campaigns.",
        ],
        applyBefore: "July 31, 2021",
        postedOn: "July 1, 2021",
        salary: "$75k-$85k USD",
        categories: ["Marketing", "Design"],
        perks: [
          {
            title: "Full Healthcare",
            description: "Comprehensive healthcare.",
          },
          { title: "Remote Working", description: "Work from anywhere." },
          { title: "Unlimited Vacation", description: "Flexible time off." },
          {
            title: "Skill Development",
            description: "Access to courses and learning opportunities.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Dropbox",
    location: "San Francisco, USA",
    size: "1000+",
    industries: ["Marketing", "Design"],
    description:
      "Dropbox simplifies the way people work together with innovative tools.",
    founded: "2007",
    employees: 3000,
    techStack: ["HTML5", "CSS3", "JavaScript", "React"],
    contactLinks: {
      twitter: "https://twitter.com/dropbox",
      facebook: "https://facebook.com/dropbox",
      linkedin: "https://linkedin.com/company/dropbox",
    },
    locations: ["United States", "Canada", "Germany"],
    jobs: [
      {
        id: 2,
        title: "Brand Designer",
        description: "Design creative assets for brand marketing campaigns.",
        location: "San Francisco, USA",
        type: "Full-time",
        responsibilities: [
          "Design marketing materials.",
          "Collaborate with teams.",
        ],
        requirements: ["Proficiency in design tools.", "Attention to detail."],
        applyBefore: "August 15, 2021",
        postedOn: "August 1, 2021",
        salary: "$80k-$90k USD",
        categories: ["Marketing", "Design"],
        perks: [
          { title: "Team Summits", description: "Quarterly team meetings." },
          { title: "Commuter Benefits", description: "Travel reimbursements." },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Terraform",
    location: "Hamburg, Germany",
    size: "500-1000",
    industries: ["Technology"],
    description: "Terraform builds immersive interactive platforms.",
    founded: "2010",
    employees: 800,
    techStack: ["JavaScript", "React", "Node.js"],
    contactLinks: {
      twitter: "https://twitter.com/terraform",
      linkedin: "https://linkedin.com/company/terraform",
    },
    locations: ["Germany", "Netherlands", "United Kingdom"],
    jobs: [
      {
        id: 3,
        title: "Interactive Developer",
        description: "Develop engaging, interactive web experiences.",
        location: "Hamburg, Germany",
        type: "Full-time",
        responsibilities: [
          "Build interactive UI components.",
          "Test and deploy.",
        ],
        requirements: ["Experience in React.", "Strong debugging skills."],
        applyBefore: "September 10, 2021",
        postedOn: "August 25, 2021",
        salary: "$90k-$100k USD",
        categories: ["Technology"],
        perks: [
          {
            title: "Skill Development",
            description: "Learning opportunities.",
          },
          { title: "Flexible Hours", description: "Adjustable work timings." },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Revolut",
    location: "Madrid, Spain",
    size: "500-1000",
    industries: ["Finance", "Marketing"],
    description: "Revolut is transforming financial technology globally.",
    founded: "2013",
    employees: 1000,
    techStack: ["JavaScript", "Python", "Django"],
    contactLinks: {
      twitter: "https://twitter.com/revolut",
      facebook: "https://facebook.com/revolut",
      linkedin: "https://linkedin.com/company/revolut",
    },
    locations: ["Spain", "United Kingdom", "France"],
    jobs: [
      {
        id: 4,
        title: "Email Marketing",
        description:
          "Plan and execute email campaigns to engage and retain customers.",
        location: "Madrid, Spain",
        type: "Internship",
        responsibilities: [
          "Create email templates.",
          "Monitor campaign performance.",
        ],
        requirements: [
          "Basic marketing knowledge.",
          "Strong communication skills.",
        ],
        applyBefore: "August 31, 2021",
        postedOn: "August 1, 2021",
        salary: "€25k-€30k",
        categories: ["Marketing", "Design"],
        perks: [
          { title: "Remote Option", description: "Work remotely if needed." },
          { title: "Skill Growth", description: "Professional development." },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Canva",
    location: "Ankara, Turkey",
    size: "500-1000",
    industries: ["Engineering"],
    description:
      "Canva provides intuitive design tools for creators worldwide.",
    founded: "2012",
    employees: 1500,
    techStack: ["HTML5", "CSS3", "JavaScript", "Vue.js"],
    contactLinks: {
      twitter: "https://twitter.com/canva",
      linkedin: "https://linkedin.com/company/canva",
    },
    locations: ["Turkey", "Australia", "United States"],
    jobs: [
      {
        id: 5,
        title: "Lead Engineer",
        description: "Lead engineering teams to build scalable software.",
        location: "Ankara, Turkey",
        type: "Full-time",
        responsibilities: [
          "Manage engineering teams.",
          "Define technical strategy.",
        ],
        requirements: ["Leadership experience.", "Strong technical expertise."],
        applyBefore: "September 30, 2021",
        postedOn: "September 1, 2021",
        salary: "$120k-$140k USD",
        categories: ["Engineering"],
        perks: [
          {
            title: "Team Events",
            description: "Frequent team-building activities.",
          },
          { title: "Health Benefits", description: "Comprehensive insurance." },
        ],
      },
    ],
  },
];
