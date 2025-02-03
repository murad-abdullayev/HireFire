import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../Logo";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import BurgerIcon from "@/assets/icons/burger.svg";
import CloseIcon from "@/assets/icons/close.svg";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (basePath: string) => {
    return new RegExp(`^${basePath}(/.*)?$`).test(location.pathname);
  };

  return (
    <>
      <div
        className={`bg-white sticky top-0 w-full z-50 transition-transform duration-300 ${
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
                  className={`block px-2 md:px-3 py-2 text-sm md:text-base font-medium leading-[160%] transition ${
                    isActive(paths.LANDING.JOBS.MAIN)
                      ? "text-primary"
                      : "text-neutrals80 group-hover:text-primary"
                  }`}
                >
                  Find Jobs
                </Link>
                <div
                  className={`absolute left-0 bottom-[-13.5px] lg:bottom-[-17.5px] h-[2px] w-full bg-primary origin-left transition-transform duration-300 ${
                    isActive(paths.LANDING.JOBS.MAIN)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </li>
              <li className="relative group">
                <Link
                  to={paths.LANDING.COMPANIES.MAIN}
                  className={`block px-2 md:px-3 py-2 text-sm md:text-base font-medium leading-[160%] transition ${
                    isActive(paths.LANDING.COMPANIES.MAIN)
                      ? "text-primary"
                      : "text-neutrals80 group-hover:text-primary"
                  }`}
                >
                  Browse Companies
                </Link>
                <div
                  className={`absolute left-0 bottom-[-13.5px] lg:bottom-[-17.5px] h-[2px] w-full bg-primary origin-left transition-transform duration-300 ${
                    isActive(paths.LANDING.COMPANIES.MAIN)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
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
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <img src={BurgerIcon} alt="menu" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-5 flex justify-between items-center border-b">
                <h1
                  className={`font-logo text-neutrals100 text-2xl !font-extrabold leading-[150%] tracking-[-0.24px]`}
                >
                  Menu
                </h1>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={CloseIcon} alt="close" />
                </button>
              </div>
              <div className="flex flex-col p-5 gap-5">
                <Button
                  className="w-full text-lg py-3 text-primary"
                  variant="outline"
                >
                  Login
                </Button>
                <Button className="w-full text-lg py-3">Sign Up</Button>
              </div>
              <nav className="flex flex-col gap-4 mt-6 px-5">
                <div className="relative group">
                  <Link
                    to={paths.LANDING.JOBS.MAIN}
                    className={`block px-4 py-3 text-lg font-medium leading-[160%] transition ${
                      isActive(paths.LANDING.JOBS.MAIN)
                        ? "text-primary"
                        : "text-neutrals80 group-hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Find Jobs
                  </Link>
                  <div
                    className={`absolute left-4 bottom-0 h-[2px] w-[90%] bg-primary origin-left transition-transform duration-300 ${
                      isActive(paths.LANDING.JOBS.MAIN)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </div>
                <div className="relative group">
                  <Link
                    to={paths.LANDING.COMPANIES.MAIN}
                    className={`block px-4 py-3 text-lg font-medium leading-[160%] transition ${
                      isActive(paths.LANDING.COMPANIES.MAIN)
                        ? "text-primary"
                        : "text-neutrals80 group-hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Browse Companies
                  </Link>
                  <div
                    className={`absolute left-4 bottom-0 h-[2px] w-[90%] bg-primary origin-left transition-transform duration-300 ${
                      isActive(paths.LANDING.COMPANIES.MAIN)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
