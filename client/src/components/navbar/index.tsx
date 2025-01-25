import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import BurgerIcon from "@/assets/icons/burger.svg";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 85) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <>
      <div
        className={`bg-white fixed w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container py-[14px] flex items-center justify-between">
          <div className="flex items-center gap-8 md:gap-12">
            <Logo />
            <ul className="hidden sm:flex gap-2 md:gap-4 lg:gap-8 items-center relative">
              <li className="relative group">
                <Link
                  to={paths.LANDING.JOBS.MAIN}
                  className="block px-2 md:px-3 py-2 text-neutrals80 text-sm md:text-base font-medium leading-[160%] group-hover:text-primary transition"
                >
                  Find Jobs
                </Link>
                <div className="absolute left-0 bottom-[-13.5px] lg:bottom-[-17.5px] h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </li>
              <li className="relative group">
                <Link
                  to={paths.LANDING.COMPANIES.MAIN}
                  className="block px-2 md:px-3 py-2 text-neutrals80 text-sm md:text-base font-medium leading-[160%] group-hover:text-primary transition"
                >
                  Browse Companies
                </Link>
                <div className="absolute left-0 bottom-[-13.5px] lg:bottom-[-17.5px] h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </li>
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
      <div className="h-[64px] sm:h-[76px]" />
    </>
  );
};
