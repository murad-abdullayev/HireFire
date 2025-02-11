import CompanyLogo from "@/assets/icons/company-logo.svg";
import { paths } from "@/constants/paths";
import { Link } from "react-router-dom";

interface LogoProps {
  textColor?: string;
}

export const Logo = ({ textColor = "text-neutrals100" }: LogoProps) => {
  return (
    <Link to={paths.LANDING.MAIN}>
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={CompanyLogo} alt="Logo" />
        <h1
          className={`font-logo ${textColor} text-2xl !font-extrabold leading-[150%] tracking-[-0.24px]`}
        >
          HireFire
        </h1>
      </div>
    </Link>
  );
};
