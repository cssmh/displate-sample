import dhl from "../assets/dhl.svg"
import fedex from "../assets/fedex.svg";
import ups from "../assets/ups.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import discover from "../assets/discover.svg";
import amex from "../assets/amex.svg";
import gpay from "../assets/gpay.svg";
import applepay from "../assets/applepay.svg";
import paypal2 from "../assets/paypal2.svg";
import clock from "../assets/return_clock.svg";

const Features = () => {
  return (
    <div className="my-16">
      <div className="max-w-7xl mx-auto px-4 grid gap-6 md:gap-8 md:grid-cols-3">
        <div className="p-7 bg-[#f6f7f8] rounded-lg shadow-lg flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Fast delivery
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            At your door in a few days
          </p>
          <div className="flex space-x-2">
            <img src={dhl} alt="Delivery Icon 1" className="w-16 h-16" />
            <img src={ups} alt="Delivery Icon 2" className="w-16 h-16" />
            <img src={fedex} alt="Delivery Icon 3" className="w-16 h-16" />
          </div>
        </div>
        <div className="p-7 bg-[#f6f7f8] rounded-lg shadow-lg flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Secure payments
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            100% Secure payment with 256-bit SSL Encryption
          </p>
          <div className="grid grid-cols-3 justify-center gap-2">
            <img
              src={visa}
              alt="Visa"
              className="w-16 h-12 object-contain"
            />
            <img
              src={mastercard}
              alt="Pay"
              className="w-16 h-12 object-contain"
            />
            <img
              src={discover}
              alt="GPay"
              className="w-16 h-12 object-contain"
            />
            <img
              src={amex}
              alt="PayPal"
              className="w-16 h-12 object-contain"
            />
            <img
              src={gpay}
              alt="AMEX"
              className="w-16 h-12 object-contain"
            />
            <img
              src={applepay}
              alt="Discover"
              className="w-16 h-12 object-contain"
            />
            <img
              src={paypal2}
              alt="Mastercard"
              className="w-16 h-12 object-contain"
            />
          </div>
        </div>
        <div className="p-7 bg-[#f6f7f8] rounded-lg shadow-lg flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            100 days for return
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Easy return, no questions asked
          </p>
          <img src={clock} alt="Return Icon" className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
};

export default Features;
