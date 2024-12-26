import { Link } from "react-router-dom";
import logo from "../assets/logo_dark.svg";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Signin = () => {
  return (
    <div className="max-w-lg mx-auto px-4 my-12">
      <div className="w-[130px]">
        <Link to="/" className="hover:text-blue-500">
          <img src={logo} alt="logo" />
        </Link>
        <p className="text-sm text-right font-semibold text-gray-800">
          Metal Posters
        </p>
      </div>
      <div className="lg:w-1/2 space-y-4 my-6">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm">
          Not a member yet?{" "}
          <Link
            to="/auth/signin/register-user"
            className="text-[#1194f2] font-semibold"
          >
            Create an account
          </Link>
        </p>
      </div>
      <div className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:shadow-lg"
          />
          <label htmlFor="email" className="block text-sm">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:shadow-lg"
          />
        </div>
        <div>
          <Link
            to="/forgot-password"
            className="text-[#1194f2] font-semibold text-sm"
          >
            Forgot my password
          </Link>
        </div>
        <button className="w-full bg-[#1185ed] text-white font-semibold py-2 rounded-md hover:bg-blue-500">
          Login
        </button>
        <div className="relative my-4">
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-white px-2 text-sm font-medium mx-auto w-max">
            Or
          </span>
          <div className="border-t border-gray-300"></div>
        </div>
        <button className="w-full bg-white border text-[#1194f2] border-[#1194f2] flex items-center justify-center font-semibold gap-2 py-2 rounded-md">
          <FaGoogle />
          Log in with Google
        </button>
        <button className="w-full bg-white text-[#1194f2] border border-[#1194f2] flex items-center justify-center gap-2 font-semibold py-2 rounded-md ">
          <FaFacebook />
          Log in with Facebook
        </button>
        <p className="text-xs mt-4">
          By continuing through one of the providers indicated above, I accept
          the{" "}
          <Link
            to="/privacy-policy"
            className="text-[#1194f2] font-bold hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            to="/terms"
            className="text-[#1194f2] font-bold hover:underline"
          >
            Terms of Use
          </Link>
          .
        </p>
        <p className="text-xs mt-4">
          The controller of your personal data is Displate, i.e. GWD Concept Sp.
          z o.o. with a registered office in Warsaw. The data will be processed
          in order to set up and administer your account, as well as for
          analytical and statistical purposes.
        </p>
        <p className="text-xs">
          To see full information on the processing of your personal data,
          including information on your rights,{" "}
          <Link
            to="/data-policy"
            className="text-[#1194f2] font-bold hover:underline"
          >
            click here
          </Link>
          .
        </p>
        <p className="text-xs mt-4">
          This site is protected by reCAPTCHA and the{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1194f2] font-bold hover:underline"
          >
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1194f2] font-bold hover:underline"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default Signin;
