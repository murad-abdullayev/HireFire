import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { paths } from "@/constants/paths";

const TeamMemberRegister = () => {
  const { token } = useParams();
  const [isValidToken, setIsValidToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      const response = await fetch(`/api/validate-invitation/${token}`);
      const data = await response.json();
      if (response.ok) {
        setFormData((prev) => ({
          ...prev,
          name: data.name,
          email: data.email,
        }));
        setIsValidToken(true);
      }
      setLoading(false);
    };
    validateToken();
  }, [token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/register-team-member", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, token }),
    });

    if (response.ok) {
      alert("Registration successful!");
      navigate(paths.AUTH.COMPANY.LOGIN);
    } else {
      alert("Registration failed.");
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-medium text-gray-600">
          Validating invitation...
        </p>
      </div>
    );
  }

  if (!isValidToken) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-medium text-red-600">
          Invalid or expired invitation link.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-neutrals10">
      <div className="mb-10">
        <Logo />
      </div>
      <div className="w-full max-w-lg bg-white border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Complete Your Registration
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-600 border-gray-300"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-600 border-gray-300"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-gray-300 focus:ring focus:ring-indigo-200"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 hover:bg-indigo-700 transition duration-150"
          >
            Register
          </Button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Need help?{" "}
          <a href="/contact" className="text-indigo-600 underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default TeamMemberRegister;
