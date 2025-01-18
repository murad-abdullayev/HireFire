import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { paths } from "../../constants/paths";

export const Navbar = () => {
  return (
    <div className="bg-white py-[14px] flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Logo />
        <ul className="flex gap-4 items-center">
          <Link
            to={paths.LANDING.JOBS.MAIN}
            className="text-neutrals80 text-base font-medium leading-[160%] hover:text-neutrals100 transition"
          >
            Find Jobs
          </Link>
          <Link
            to={paths.LANDING.COMPANIES.MAIN}
            className="text-neutrals80 text-base font-medium leading-[160%] hover:text-neutrals100 transition"
          >
            Browse Companies
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Button variant={"ghost"}>Login</Button>
        <span className="h-12 w-[2px] bg-neutrals20" />
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};
