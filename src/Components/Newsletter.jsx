import newsletter_discount from "../assets/newsletter_discount.avif";

const Newsletter = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto my-16">
      <div className="flex flex-wrap lg:flex-nowrap items-center border shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2">
          <img
            src={newsletter_discount}
            alt="Newsletter Discount"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-full lg:w-1/2 bg-[#e3e9ff] p-8 lg:p-12 text-gray-800"
          style={{ backgroundColor: "#e3e9ff" }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug mb-4">
            Sign up <br /> and never <br />
            miss a deal
          </h2>
          <p className="text-sm lg:text-base mb-6">
            Join our newsletter for the latest discounts and Displate goodies.
          </p>
          <form className="flex items-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="p-3 bg-[#1185ed] text-white rounded-r-lg transition"
            >
              Sign up
            </button>
          </form>
          <p className="text-xs text-gray-600">
            By clicking “Sign up”, you agree to receiving emails and to
            processing of your personal data in accordance with the{" "}
            <b>Privacy policy</b>. The data will be processed to customize the
            newsletter content according to your personal preferences. The
            controller of your personal data is <b>Displate</b>, i.e. GWD
            Concept Sp. z o. o. with a registered office in Warsaw. You can
            unsubscribe at any time by clicking the “Unsubscribe” button in the
            email footer, unchecking your consent in the “Basic Info” tab of the
            customer panel, or sending a request to{" "}
            <a
              href="mailto:support@displate.com"
              className="text-blue-500 underline"
            >
              support@displate.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
