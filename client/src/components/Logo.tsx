import CompanyLogo from "../assets/icons/company-logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <img src={CompanyLogo} alt="Logo" />
      <h1 className="font-logo text-neutrals100 text-2xl !font-extrabold leading-[150%] tracking-[-0.24px]">
        HireFire
      </h1>
    </div>
  );
};
