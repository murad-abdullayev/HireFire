import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import BurgerIcon from "@/assets/icons/burger.svg";

export const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="container py-[14px] flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Logo />
          <ul className="hidden sm:flex gap-4 items-center">
            <Link
              to={paths.LANDING.JOBS.MAIN}
              className="text-neutrals80 text-sm md:text-base font-medium leading-[160%] hover:text-neutrals100 transition"
            >
              Find Jobs
            </Link>
            <Link
              to={paths.LANDING.COMPANIES.MAIN}
              className="text-neutrals80 text-sm md:text-base font-medium leading-[160%] hover:text-neutrals100 transition"
            >
              Browse Companies
            </Link>
          </ul>
        </div>
        <div className="items-center gap-2 md:gap-4 hidden sm:flex">
          <Button className="text-sm md:text-base" variant={"ghost"}>
            Login
          </Button>
          <span className="h-12 w-[2px] bg-neutrals20" />
          <Button className="text-sm md:text-base">Sign Up</Button>
        </div>
        <Button
          size={"icon"}
          className="bg-white sm:hidden rounded-full flex items-center hover:bg-neutrals20 border border-neutrals20"
          variant={"secondary"}
        >
          <img src={BurgerIcon} alt="burger" />
        </Button>
      </div>
    </div>
  );
};
