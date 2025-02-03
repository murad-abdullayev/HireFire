import WorkerImg from "@/assets/images/worker.png";
import GraphsImg from "@/assets/icons/graphs.svg";
import { Logo } from "@/components/Logo";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import { Input } from "@/components/ui/input";
import UserImg from "@/assets/images/user.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const JobRegister = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col lg:grid lg:grid-cols-2">
      <div className="hidden lg:flex bg-neutrals10 min-h-screen flex-col relative items-start justify-between p-10">
        <Logo />
        <div className="absolute bg-white p-5 flex flex-col top-[170px] left-[70px] z-20">
          <img src={GraphsImg} alt="graphs" className="mb-5 h-10 w-14" />
          <p className="text-acblack font-bold text-xl leading-[100%] mb-2 tracking-[-0.2px]">
            100K+
          </p>
          <p className="text-base leading-[150%] font-normal text-neutrals60">
            People got hired
          </p>
        </div>
        <div className="absolute right-[60px] z-20 bottom-[30px] flex flex-col p-5 bg-white">
          <p className="text-neutrals60 font-semibold leading-[140%] text-sm">
            Adam Sandler
          </p>
          <p className="text-neutrals60 font-normal leading-[140%] text-sm">
            Lead Engineer at Canva
          </p>
          <div className="absolute top-[-40px] right-[25px] bg-primary rounded-full border-8 overflow-hidden border-neutrals10">
            <img src={UserImg} alt="user" />
          </div>
          <p className="w-[197px] ml-10 text-acblack font-semibold leading-[160%] text-base">
            “Great platform for the job seeker that searching for new career
            heights.”
          </p>
        </div>
        <img
          className="absolute bottom-0 right-[100px] h-[550px]"
          src={WorkerImg}
          alt="worker"
        />
      </div>

      <div className="w-full flex flex-col items-center px-5 py-10 lg:py-0 lg:justify-center">
        <div className="lg:hidden mb-5">
          <Logo />
        </div>

        <div className="w-full max-w-[500px] flex flex-col items-center gap-6">
          <div className="flex gap-2">
            <Link
              to={paths.AUTH.JOBSEEKER.REGISTER}
              className="text-primary text-base font-semibold leading-[160%] py-[7px] px-3 bg-[#E9EBFD] cursor-pointer"
            >
              Job Seeker
            </Link>
            <Link
              to={paths.AUTH.COMPANY.REGISTER}
              className="text-primary text-base font-semibold leading-[160%] py-[7px] px-3 hover:bg-[#E9EBFD] cursor-pointer"
            >
              Company
            </Link>
          </div>

          <h3 className="text-[24px] lg:text-[32px] font-semibold text-acblack leading-[120%] text-center">
            Get more opportunities
          </h3>

          <div className="flex items-center gap-[10px] border border-secondary py-3 justify-center w-full">
            <img src={GoogleIcon} alt="google" />
            <p className="text-base font-bold leading-[160%] text-primary">
              Sign Up with Google
            </p>
          </div>

          <div className="items-center gap-x-[10px] sm:gap-x-[25px] grid grid-cols-3 w-full">
            <div className="w-full h-[1px] bg-acblack/20" />
            <p className="text-acblack/50 text-sm leading-[160%] font-normal">
              Or sign up with email
            </p>
            <div className="w-full h-[1px] bg-acblack/20" />
          </div>

          <form className="flex flex-col w-full gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold leading-[160%] text-neutrals80">
                Full Name
              </p>
              <Input
                type="text"
                placeholder="Enter your full name"
                className="w-full"
                name="fullName"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold leading-[160%] text-neutrals80">
                Email Address
              </p>
              <Input
                type="email"
                placeholder="Enter email address"
                className="w-full"
                name="email"
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

            <div className="flex items-center justify-between relative">
              <Button className="w-full">Continue</Button>
              <Popover>
                <PopoverTrigger asChild>
                  <span
                    className="text-primary text-3xl absolute top-[-15px] right-[-15px] font-bold cursor-pointer"
                    title="Terms of Service & Privacy Policy"
                  >
                    *
                  </span>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-4 shadow-md">
                  <p className="text-xs text-neutrals80">
                    By using this platform, you agree to our{" "}
                    <Link to="#" className="text-primary underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-primary underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </PopoverContent>
              </Popover>
            </div>

            <p className="text-sm sm:text-base font-normal leading-[160%] text-acblack/70 text-center">
              Already have an account?{" "}
              <Link
                className="font-semibold text-primary leading-[150%]"
                to={paths.AUTH.JOBSEEKER.LOGIN}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobRegister;
