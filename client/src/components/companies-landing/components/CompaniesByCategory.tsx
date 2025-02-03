import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const categories = [
  {
    id: 1,
    label: "Design",
    companies: [
      "Pentagram",
      "Wolff Olins",
      "Clay",
      "MediaMonks",
      "Square",
      "Divvy",
      "WebFlow",
    ],
  },
  {
    id: 2,
    label: "Fintech",
    companies: ["Revolut", "Stripe", "Plaid", "Wise", "Robinhood"],
  },
  {
    id: 3,
    label: "Hosting",
    companies: [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Heroku",
      "DigitalOcean",
    ],
  },
  {
    id: 4,
    label: "Business Service",
    companies: ["Deloitte", "PwC", "McKinsey & Co.", "Bain & Co.", "EY"],
  },
  {
    id: 5,
    label: "Developer",
    companies: [
      "GitHub",
      "GitLab",
      "JetBrains",
      "Visual Studio",
      "Stack Overflow",
    ],
  },
];

export const CompaniesByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const categoryContainerRef = useRef<HTMLDivElement | null>(null);
  const firstCategoryRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (firstCategoryRef.current) {
      firstCategoryRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h3 className="text-2xl font-bold text-center mb-8">
        Companies by Category
      </h3>

      <div
        ref={categoryContainerRef}
        className="flex justify-start gap-4 mb-8 overflow-x-auto scrollbar-hide pl-4 pr-4"
      >
        {categories.map((category, index) => (
          <button
            key={category.id}
            ref={index === 0 ? firstCategoryRef : null}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory.id === category.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category.label}
          </button>
        ))}
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
          1024: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {selectedCategory.companies.map((company, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 border rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-gray-200 flex items-center justify-center rounded-full">
                <span className="text-lg font-bold">{company[0]}</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{company}</h4>
              <p className="text-gray-600 text-sm">
                This company specializes in{" "}
                {selectedCategory.label.toLowerCase()} services.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
