import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_dark.svg";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Register = () => {
  const [isArtist, setIsArtist] = useState(false);

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
      <div className="space-y-2 my-6">
        <h1 className="text-2xl font-semibold">
          {isArtist ? "Create new Artist account" : "Create new account"}
        </h1>
        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/auth/signin" className="text-[#1194f2] font-semibold">
            Login
          </Link>
        </p>
      </div>
      <div className="flex justify-between bg-[#eceff4] py-1 rounded-full mb-6">
        <button
          onClick={() => setIsArtist(false)}
          className={`p-1 text-[#1788ed] mx-1 px-16 font-medium transition-all duration-300 ease-in-out ${
            !isArtist
              ? "text-[#1788ed] bg-white rounded-full"
              : "text-[#4f565d]"
          }`}
        >
          I&apos;m a Customer
        </button>
        <button
          onClick={() => setIsArtist(true)}
          className={`p-1 text-[#1788ed] mx-1 px-16 font-medium transition-all duration-300 ease-in-out ${
            isArtist ? "text-[#1788ed] bg-white rounded-full" : "text-[#4f565d]"
          }`}
        >
          I&apos;m an Artist
        </button>
      </div>
      <div className="space-y-5">
        {isArtist && (
          <div className="space-y-2">
            <label htmlFor="nick" className="block text-sm">
              Nick
            </label>
            <input
              type="text"
              placeholder="Nick"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:shadow-lg"
            />
            <p className="text-xs text-gray-600">
              This will be your Displate Shop&apos;s name and URL.
            </p>
          </div>
        )}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:shadow-lg"
          />
          <label htmlFor="password" className="block text-sm">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:shadow-lg"
          />
          <div className="space-y-3 mt-2 text-sm">
            <p className="text-gray-600 flex items-center gap-1">
              <span className="text-xs bg-gray-200 p-[2px] rounded-full">
                <RxCross2 />
              </span>{" "}
              10 characters minimum
            </p>
            <p className="text-gray-600 flex items-center gap-1">
              <span className="text-xs bg-gray-200 p-[2px] rounded-full">
                <RxCross2 />
              </span>{" "}
              1 special character (e.g. # or %)
            </p>
            <p className="text-gray-600 flex items-center gap-1">
              <span className="text-xs bg-gray-200 p-[2px] rounded-full">
                <RxCross2 />
              </span>{" "}
              1 uppercase character
            </p>
            <p className="text-gray-600 flex items-center gap-1">
              <span className="text-xs bg-gray-200 p-[2px] rounded-full">
                <RxCross2 />
              </span>{" "}
              1 lowercase character
            </p>
            <p className="text-gray-600 flex items-center gap-1">
              <span className="text-xs bg-gray-200 p-[2px] rounded-full">
                <RxCross2 />
              </span>{" "}
              1 digit
            </p>
          </div>
        </div>
        {!isArtist && (
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="newsletter"
              className="w-4 h-4 text-[#1185ed] border-gray-300 rounded focus:ring-[#1185ed]"
            />
            <label
              htmlFor="newsletter"
              className="text-sm text-gray-800 font-medium"
            >
              Sign me up for the Displate newsletter with exclusive offers and a
              welcome 20% OFF
            </label>
          </div>
        )}
        <button className="w-full bg-[#1185ed] text-white font-semibold py-2 rounded-md hover:bg-blue-500">
          Create an account
        </button>
        {!isArtist && (
          <>
            <div className="relative my-4">
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-white px-2 text-sm font-medium mx-auto w-max">
                Or
              </span>
              <div className="border-t border-gray-300"></div>
            </div>
            <button className="w-full bg-white border text-[#1194f2] border-[#1194f2] flex items-center justify-center font-semibold gap-2 py-2 rounded-md">
              <FaGoogle />
              Sign up with Google
            </button>
            <button className="w-full bg-white text-[#1194f2] border border-[#1194f2] flex items-center justify-center gap-2 font-semibold py-2 rounded-md ">
              <FaFacebook />
              Sign up with Facebook
            </button>
          </>
        )}
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

export default Register;
