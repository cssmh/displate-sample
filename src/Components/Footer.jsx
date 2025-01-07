import cyberpunk from "../assets/cyb.png";
import callDuty from "../assets/logo_call-of-duty.png";
import dcComics from "../assets/logo_dc-comics.png";
import destiny from "../assets/logo_destiny.png";
import elden from "../assets/logo_elden-ring.png";
import legends from "../assets/logo_league-of-legends.png";
import marvel from "../assets/logo_marvel.png";
import stranger from "../assets/logo_stranger-things.png";
import wizarding from "../assets/logo_wizarding-world.png";
import wars from "../assets/star-wars.png";

import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import discover from "../assets/discover.svg";
import amex from "../assets/amex.svg";
import gpay from "../assets/gpay.svg";
import applepay from "../assets/applepay.svg";
import paypal2 from "../assets/paypal2.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <footer className="py-12 px-6">
        <div className="max-w-[1250px] mx-auto flex flex-wrap gap-8">
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Check order status</li>
              <li>Shipping & Returns</li>
              <li>Help/FAQ</li>
              <li>Terms of use</li>
              <li>Mounting instructions</li>
              <li>Contact us</li>
              <li>Copyrights</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-600">
              <li>What&apos;s a Displate?</li>
              <li>Displate Club</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-lg mb-4">Earn with Displate</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Sell your art</li>
            </ul>
            <h3 className="font-semibold text-lg mt-6 mb-4">Gifts</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Gift Card</li>
              <li>Gifts inspirations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Find us</h3>
            <div className="grid grid-cols-3 gap-4 text-gray-600">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <FaPinterest className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
          <div className="flex-[2] min-w-[200px]">
            <h3 className="font-semibold text-lg mb-4">Partners</h3>
            <div className="grid grid-cols-5">
              <img
                src={cyberpunk}
                alt="Cyberpunk"
                className="h-10 w-auto object-contain"
              />
              <img
                src={callDuty}
                alt="Call of Duty"
                className="h-10 w-auto object-contain"
              />
              <img
                src={dcComics}
                alt="DC Comics"
                className="h-10 w-auto object-contain"
              />
              <img
                src={destiny}
                alt="Destiny"
                className="h-10 w-auto object-contain"
              />
              <img
                src={elden}
                alt="Elden Ring"
                className="h-10 w-auto object-contain"
              />
              <img
                src={legends}
                alt="League of Legends"
                className="h-10 w-auto object-contain"
              />
              <img
                src={marvel}
                alt="Marvel"
                className="h-10 w-auto object-contain"
              />
              <img
                src={stranger}
                alt="Stranger Things"
                className="h-10 w-auto object-contain"
              />
              <img
                src={wizarding}
                alt="Wizarding World"
                className="h-10 w-auto object-contain"
              />
              <img
                src={wars}
                alt="Star Wars"
                className="h-10 w-auto object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg mt-16 mb-4">
              Secure payments
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
              <img src={visa} alt="Visa" className="w-12 h-10 object-contain" />
              <img
                src={mastercard}
                alt="Mastercard"
                className="w-12 h-10 object-contain"
              />
              <img
                src={discover}
                alt="Discover"
                className="w-12 h-10 object-contain"
              />
              <img src={amex} alt="Amex" className="w-12 h-10 object-contain" />
              <img
                src={gpay}
                alt="Google Pay"
                className="w-12 h-10 object-contain"
              />
              <img
                src={applepay}
                alt="Apple Pay"
                className="w-12 h-10 object-contain"
              />
              <img
                src={paypal2}
                alt="PayPal"
                className="w-12 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="max-w-[1250px] mx-auto">
        <p className="text-xs text-gray-500 py-2 border-t border-[#d2d2d2]">
          © Displate. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
