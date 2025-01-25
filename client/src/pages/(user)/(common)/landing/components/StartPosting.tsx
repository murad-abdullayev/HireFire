import { Button } from "@/components/ui/button";
import WebsiteScreenshot from "@/assets/images/website-screenshot.png";

export const StartPosting = () => {
  return (
    <div className="py-8 container">
      <div className="bg-primary w-full py-8 px-4 relative flex flex-col items-center lg:flex-row lg:items-center lg:gap-6 lg:px-12 lg:py-16">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight max-w-md lg:max-w-[60%]">
            Start posting jobs today
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-white max-w-sm">
            Start posting jobs for only $10.
          </p>
          <Button variant="secondary" className="w-full lg:w-auto mt-6">
            Sign Up For Free
          </Button>
        </div>

        <div className="relative mt-8 lg:mt-0 lg:ml-auto lg:flex-shrink-0">
          <img
            src={WebsiteScreenshot}
            alt="website-screenshot"
            className="h-48 sm:h-56 lg:h-64 xl:h-[344px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};
