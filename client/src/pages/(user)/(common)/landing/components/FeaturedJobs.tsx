import { Button } from "@/components/ui/button";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import CanvaIcon from "@/assets/images/Canva.png";
import CircleIcon from "@/assets/icons/circle-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type Job = {
  id: number;
  company: string;
  title: string;
  location: string;
  type: string;
  categories: string[];
};

export const FeaturedJobs = () => {
  const jobs: Job[] = [
    {
      id: 1,
      company: "Revolut",
      title: "Email Marketing",
      location: "Madrid, Spain",
      type: "Full Time",
      categories: ["Marketing", "Design"],
    },
    {
      id: 2,
      company: "Dropbox",
      title: "Brand Designer",
      location: "San Francisco, US",
      type: "Full Time",
      categories: ["Design", "Business"],
    },
    {
      id: 3,
      company: "Pitch",
      title: "Email Marketing",
      location: "Berlin, Germany",
      type: "Full Time",
      categories: ["Marketing"],
    },
    {
      id: 4,
      company: "Blinklist",
      title: "Visual Designer",
      location: "Granada, Spain",
      type: "Full Time",
      categories: ["Design"],
    },
    {
      id: 5,
      company: "ClassPass",
      title: "Product Designer",
      location: "Manchester, UK",
      type: "Full Time",
      categories: ["Marketing", "Design"],
    },
    {
      id: 6,
      company: "Canva",
      title: "Lead Designer",
      location: "Ontario, Canada",
      type: "Full Time",
      categories: ["Design", "Business"],
    },
    {
      id: 7,
      company: "GoDaddy",
      title: "Brand Strategist",
      location: "Marseille, France",
      type: "Full Time",
      categories: ["Marketing", "Business"],
    },
    {
      id: 8,
      company: "Twitter",
      title: "Data Analyst",
      location: "San Diego, US",
      type: "Full Time",
      categories: ["Technology"],
    },
  ];

  const categoryColors: Record<string, string> = {
    Marketing: "text-acyellow bg-acyellow/10",
    Design: "text-acgreen bg-acgreen/10",
    Business: "text-primary bg-primary/10",
    Technology: "text-acred bg-acred/10",
    Engineering: "text-acblue bg-acblue/10",
  };

  const getCategoryColor = (category: string): string => {
    const predefinedColors: Record<string, string> = {
      acyellow: "text-acyellow bg-acyellow/10",
      acgreen: "text-acgreen bg-acgreen/10",
      primary: "text-primary bg-primary/10",
      acred: "text-acred bg-acred/10",
      acblue: "text-acblue bg-acblue/10",
    };

    if (categoryColors[category]) {
      return categoryColors[category];
    }

    const colorKeys = Object.keys(predefinedColors);
    const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    return predefinedColors[randomKey];
  };

  return (
    <div className="container py-[72px]">
      <div className="flex justify-between items-center mb-8 sm:mb-12">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[110%] text-neutrals100">
          Featured <span className="text-acblue">jobs</span>
        </h2>
        <Button
          variant={"ghost"}
          className="group flex items-center gap-2 text-sm sm:text-base"
        >
          Show all jobs
          <img
            src={ArrowLeft}
            alt="arrow-left"
            className="opacity-100 group-hover:opacity-80 transition-opacity"
          />
        </Button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        loop={true}
        className="pb-10"
      >
        {jobs.map((job) => (
          <SwiperSlide key={job.id}>
            <div className="p-6 flex flex-col gap-4 border border-neutrals20">
              <div className="flex items-center justify-between">
                <img
                  className="w-12 h-12"
                  src={CanvaIcon}
                  alt={`${job.company} Logo`}
                />
                <div className="py-1 px-3 border border-primary text-primary w-fit">
                  {job.type}
                </div>
              </div>
              <div>
                <p className="text-neutrals100 text-lg font-semibold leading-[160%] mb-[2px]">
                  {job.title}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-normal text-neutrals80 leading-[160%]">
                    {job.company}
                  </p>
                  <img src={CircleIcon} alt="circle-icon" />
                  <p className="text-base font-normal text-neutrals80 leading-[160%]">
                    {job.location}
                  </p>
                </div>
              </div>
              <p className="text-base font-normal text-neutrals60 leading-[160%]">
                This company is hiring for a {job.title.toLowerCase()} position.
              </p>
              <div className="flex items-center gap-2">
                {job.categories.map((category) => (
                  <div
                    key={category}
                    className={`text-base font-semibold leading-[160%] rounded-[80px] px-4 w-fit py-1 ${getCategoryColor(
                      category
                    )}`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
