import Socials from "@/assets/icons/social-media.svg";
import { Logo } from "../Logo";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <div className="bg-neutrals100">
      <div className="container pt-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <Logo textColor="text-white" />
            <p className="text-base font-normal leading-[160%] text-left text-neutrals20 max-w-[376px]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start gap-10 lg:gap-16">
            <div>
              <p className="text-lg font-semibold leading-[160%] text-white mb-4">
                About
              </p>
              <ul className="flex flex-col gap-2 text-base font-normal leading-[160%] text-neutrals20">
                <li>Companies</li>
                <li>Pricing</li>
                <li>Terms</li>
                <li>Advice</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold leading-[160%] text-white mb-4">
                Resources
              </p>
              <ul className="flex flex-col gap-2 text-base font-normal leading-[160%] text-neutrals20">
                <li>Help Docs</li>
                <li>Guide</li>
                <li>Updates</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-lg font-semibold leading-[160%] text-white mb-4">
              Get job notifications
            </p>
            <p className="text-base font-normal leading-[160%] text-neutrals20 max-w-[306px] mx-auto lg:mx-0 mb-6">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Input
                className="bg-white w-full sm:w-auto"
                type="email"
                placeholder="Email Address"
              />
              <Button className="w-full sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-base font-medium leading-[160%] text-neutrals40">
            2025 @ HireFire. All rights reserved.
          </p>
          <img src={Socials} alt="socials" className="h-6 w-auto" />
        </div>
      </div>
    </div>
  );
};
