import { BsArrowRightCircle, BsMoonStars } from "react-icons/bs";
import { FaCuttlefish } from "react-icons/fa";
import {
  FaShippingFast,
  FaCrown,
  FaPercent,
  FaPhotoVideo,
  FaBoxOpen,
} from "react-icons/fa";
import img1 from "../assets/add-to-cart.webp"
import img2 from "../assets/join-club.webp"
import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const CLub = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Why do you recommend subscribing to Displate Club?",
      answer:
        "There are a lot of benefits of joining Displate Club! First of all, you get free shipping, special discounts, new Displates of your choice every 12 months, access to custom made Displates and a storage sleeve. Not enough? 😉 You also get an early access to our amazing Limited Edition Displates that sell like hotcakes! :) No more being late to the party! 😉 Please check it out here.",
    },
    {
      question: "How do I join Displate Club and how does it work?",
      answer:
        "It's super easy to join our Displate Club! Just follow the steps below:\n\n1. Add your favorite Displates to your cart.\n\n2. Once you're ready to checkout, tick 'Join Displate Club for mad perks', above the 'Checkout' box.\n\n3. Continue checking out!\n\nYou will be charged a flat fee upfront every month. In the 12th month, you will get a voucher which will show up in your account in the section Displate Club in your Account Settings. Its amount will be equal to the price of your initial order (minus shipping). The voucher will be valid for 90 days from the date of issuing and you won't be able to use it once it expires. Just apply it at checkout under 'I have a discount code'.",
    },
    {
      question: "What is the cost of Displate Club?",
      answer:
        "The cost of Displate Club is a flat monthly fee. Details can be found during checkout.",
    },
    {
      question:
        "How do I get a discount and free shipping on my subsequent orders?",
      answer:
        "You automatically receive free shipping and discounts as a Displate Club member!",
    },
    {
      question: "Can I cancel my Displate Club?",
      answer:
        "Yes, you can cancel your subscription at any time through your account settings.",
    },
    {
      question: "How can I buy a custom Displate?",
      answer:
        "You can create custom Displates using your photos in your account settings.",
    },
    {
      question: "What sizes are available for custom made Displates?",
      answer: "Custom Displates are available in all standard sizes.",
    },
    {
      question: "Can I choose a frame or gloss finish with my custom Displate?",
      answer:
        "Yes, frames and gloss finishes are optional add-ons for custom Displates.",
    },
    {
      question: "What is the price of a custom Displate?",
      answer:
        "The price of a custom Displate depends on its size and finish options.",
    },
  ];

  return (
    <div>
      <div className="flex bg-[#f8f6f8] flex-col lg:flex-row justify-between gap-4 py-6">
        <div className="w-full lg:w-[40%] px-6 lg:px-10 py-8 lg:py-12 rounded-lg flex flex-col justify-between">
          <div className="mb-6">
            <div className="text-2xl mb-2 flex items-center gap-2 mt-8">
              <FaCuttlefish className="text-5xl" />
              <span className="font-semibold">
                Displate <br /> CLub
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium">
              Join Displate Club <br /> & enjoy its benefits!
            </h1>
          </div>
          <p className="text-lg mb-4">
            Watch your collection grow. With benefits like free shipping,
            permanent discounts and new Displates every 12 months it will be
            easy peasy lemon squeezy to surround yourself with your favorite
            passions!
          </p>
          <button className="w-[250px] bg-[#1185ed] font-bold text-white py-3 px-6 rounded-md shadow-lg">
            Complete order and join
          </button>
        </div>
        <div className="w-full lg:w-[60%] relative">
          <video
            className="w-[90%] h-[80%] mt-8 object-cover rounded-lg"
            autoPlay
            loop
            muted
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="bg-white py-8 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What You Get
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2 space-x-4">
              <FaShippingFast className="text-[120px]" />
              <div>
                <h3 className="text-2xl font-semibold">Free Shipping</h3>
                <p>
                  On all orders placed while you’re a member of a Displate Club.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 space-x-4">
              <BsMoonStars className="text-[120px]" />
              <div>
                <h3 className="text-2xl font-semibold">New Displates</h3>
                <p>
                  On the 12th month of joining Displate Club, you’ll get a
                  voucher for your new Displates, equal to the value of your
                  order placed at the time of joining!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  If you bought a Limited Edition at the time of joining, the
                  voucher value will equal an M-size matte Displate.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 space-x-4">
              <FaCrown className="text-[120px]" />
              <div>
                <h3 className="text-2xl font-semibold">
                  Early Access to Limited Editions
                </h3>
                <p>
                  Access, discover, browse, and get Limited Editions before
                  others.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 space-x-4">
              <FaPercent className="text-[120px]" />
              <div>
                <h3 className="text-2xl font-semibold">Permanent Discounts</h3>
                <p>
                  On all purchases, excluding Limited Edition Displates, Lumino,
                  and Textra.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 space-x-4">
              <FaPhotoVideo className="text-[120px]" />
              <div>
                <h3 className="text-2xl font-semibold">
                  Tool to Create Displates
                </h3>
                <p>
                  Create Displates from your own photos. They won’t be published
                  in the store.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 space-x-4">
              <FaBoxOpen className="text-[120px]" />
              <div>
                <h3 className="text-2xl font-semibold">Storage Sleeve</h3>
                <p>To keep your Displates without a scratch!</p>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-semibold my-10">
            How to Join Displate Club
          </h2>
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="flex items-center">
              <div>
                <img src={img1} alt="" />
                <h3 className="text-xl font-semibold">Add to Cart</h3>
                <p>Add Displates that you like to the cart.</p>
              </div>
              <BsArrowRightCircle className="text-6xl" />
            </div>
            <div className="flex items-center">
              <div>
                <img src={img2} alt="" />
                <h3 className="text-xl font-semibold">Join Displate Club</h3>
                <p>Click that you want to join Displate.</p>
              </div>
              <BsArrowRightCircle className="text-6xl" />
            </div>
            <div className="shadow-2xl m-5 p-5">
              <h3 className="text-3xl mb-3 font-semibold">Payments</h3>
              <p>
                The first monthly fee will be added to your order. Next fees
                will be charged from your credit card or PayPal. The monthly fee
                is presented at cart.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 mb-5">
        <h2 className="text-4xl font-semibold mx-2 mb-6">Top FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 p-4 rounded-lg flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 ${
                    openFAQ === index ? "max-h-40" : ""
                  }`}
                >
                  <p className="mt-2 whitespace-pre-line">{faq.answer}</p>
                </div>
              </div>
              <div className="ml-4 text-blue-600">
                {openFAQ === index ? (
                  <IoChevronUpOutline className="text-2xl" />
                ) : (
                  <IoChevronDownOutline className="text-2xl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CLub;
