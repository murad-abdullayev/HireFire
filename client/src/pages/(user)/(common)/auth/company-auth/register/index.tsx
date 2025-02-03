import WorkerImg from "@/assets/images/worker.png";
import GraphsImg from "@/assets/icons/graphs.svg";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import UserImg from "@/assets/images/ceo.png";
import { paths } from "@/constants/paths";
import { Checkbox } from "@/components/ui/checkbox";

const CompanyRegister = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col lg:grid lg:grid-cols-2">
      <div className="hidden lg:flex bg-neutrals10 min-h-screen flex-col relative items-start justify-between p-10">
        <Logo />
        <div className="absolute bg-white p-5 flex flex-col top-[170px] left-[70px] z-20">
          <img src={GraphsImg} alt="graphs" className="mb-5 h-10 w-14" />
          <p className="text-acblack font-bold text-xl leading-[100%] mb-2 tracking-[-0.2px]">
            80+
          </p>
          <p className="text-base leading-[150%] font-normal text-neutrals60">
            Companies hiring
          </p>
        </div>
        <img
          className="absolute bottom-0 right-[100px] h-[550px]"
          src={WorkerImg}
          alt="worker"
        />
        <div className="absolute right-[60px] bottom-[30px] flex flex-col p-5 bg-white">
          <p className="text-neutrals60 font-semibold leading-[140%] text-sm">
            Ilon Musk
          </p>
          <p className="text-neutrals60 font-normal leading-[140%] text-sm">
            CEO at Tesla
          </p>
          <div className="absolute top-[-40px] right-[25px] bg-primary rounded-full border-8 overflow-hidden border-neutrals10">
            <img
              src={UserImg}
              alt="user"
              className="w-[60px] h-[60px] object-cover object-left"
            />
          </div>
          <p className="w-[197px] ml-10 text-acblack font-semibold leading-[160%] text-base">
            “Found the absolute giga-brain for my company using this platform.
            10/10 would hire again 🚀🔥.”
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-5 py-10 lg:py-0 lg:justify-center">
        <div className="lg:hidden mb-5">
          <Logo />
        </div>

        <div className="w-full max-w-[500px] flex flex-col items-center gap-6">
          <div className="flex gap-2">
            <Link
              to={paths.AUTH.JOBSEEKER.REGISTER}
              className="text-primary text-base font-semibold leading-[160%] py-[7px] px-3 hover:bg-[#E9EBFD] cursor-pointer"
            >
              Job Seeker
            </Link>
            <Link
              to={paths.AUTH.COMPANY.REGISTER}
              className="text-primary text-base font-semibold leading-[160%] py-[7px] px-3 bg-[#E9EBFD] cursor-pointer"
            >
              Company
            </Link>
          </div>

          <h3 className="text-[24px] lg:text-[32px] font-semibold text-acblack leading-[120%] text-center">
            Register Your Company
          </h3>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold leading-[160%] text-neutrals80">
                Company Name
              </p>
              <Input
                type="text"
                placeholder="Enter your company name"
                className="w-full"
                name="companyName"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold leading-[160%] text-neutrals80">
                Company Email
              </p>
              <Input
                type="email"
                placeholder="Enter company email address"
                className="w-full"
                name="companyEmail"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold leading-[160%] text-neutrals80">
                Company Website
              </p>
              <Input
                type="url"
                placeholder="Enter company website"
                className="w-full"
                name="companyWebsite"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold leading-[160%] text-neutrals80">
                Password
              </p>
              <Input
                type="password"
                placeholder="Create a password"
                className="w-full"
                name="password"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold leading-[160%] text-neutrals80">
                Confirm Password
              </p>
              <Input
                type="password"
                placeholder="Confirm your password"
                className="w-full"
                name="confirmPassword"
              />
            </div>

            <div className="flex items-center gap-x-4 col-span-2">
              <Checkbox className="bg-neutrals10" />
              <p className="text-base font-normal leading-[160%] text-neutrals80">
                I agree to the{" "}
                <Link to="#" className="text-primary underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-primary underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div className="col-span-2">
              <Button className="w-full">Register</Button>
            </div>
          </form>

          <p className="text-sm sm:text-base font-normal leading-[160%] text-acblack/70 text-center">
            Already have an account?{" "}
            <Link
              className="font-semibold text-primary leading-[150%]"
              to={paths.AUTH.COMPANY.LOGIN}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;
