import { useState } from "react";

const PopularCollections = () => {
  const [activeTab, setActiveTab] = useState("brands");

  const brandsData = [
    {
      id: 1,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "John Doe",
      userProfession: "Designer",
    },
    {
      id: 2,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Jane Smith",
      userProfession: "Artist",
    },
    {
      id: 3,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Jane Smith",
      userProfession: "Artist",
    },
    {
      id: 4,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Jane Smith",
      userProfession: "Artist",
    },
    {
      id: 5,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Jane Smith",
      userProfession: "Artist",
    },
    {
      id: 6,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Jane Smith",
      userProfession: "Artist",
    },
  ];

  const artistsData = [
    {
      id: 1,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Alice Brown",
      userProfession: "Photographer",
    },
    {
      id: 2,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Bob Green",
      userProfession: "Sculptor",
    },
    {
      id: 3,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Alice Brown",
      userProfession: "Photographer",
    },
    {
      id: 4,
      images: [
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
        "https://static.displate.com/280x392/displate/2024-10-07/4490aa6fbfe0802cfdebd11fd0f97d0e_88df431a1682695db97bed2e71b39701.jpg",
      ],
      userImage: "https://static.displate.com/brand/layout/0c79b37b-b143-4532-8a0f-18a7c5320256/avatarRetina.jpg",
      userName: "Bob Green",
      userProfession: "Sculptor",
    },
  ];

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderCards = (data) => {
    return data.map((card) => (
      <div
        key={card.id}
        className="bg-white rounded-lg hover:border hover:shadow-lg p-4"
      >
        <div className="flex gap-2 mb-4">
          {card.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className="w-[85px] mx-auto h-28 object-cover rounded-md"
            />
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img
            src={card.userImage}
            alt="User"
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <p className="font-semibold">{card.userName}</p>
            <p className="text-sm text-gray-500">{card.userProfession}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Popular collections this week
        </h2>
      </div>
      <div className="flex w-1/3 mx-auto bg-[#eceff4] py-1 rounded-full justify-center mb-6">
        <button
          onClick={() => handleTabChange("brands")}
          className={`p-2 hover:text-[#1788ed] mx-2 font-medium ${
            activeTab === "brands"
              ? "text-[#1788ed] bg-white px-3 rounded-full"
              : "text-[#4f565d]"
          }`}
        >
          Brands
        </button>
        <button
          onClick={() => handleTabChange("artists")}
          className={`p-2 hover:text-[#1788ed] mx-2 font-medium ${
            activeTab === "artists"
              ? "text-[#1788ed] bg-white px-3 rounded-full"
              : "text-[#4f565d]"
          }`}
        >
          Artists
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {activeTab === "brands"
          ? renderCards(brandsData)
          : renderCards(artistsData)}
      </div>
      <div className="flex justify-center mt-10">
        <button className="font-bold text-[#449ff1] border border-[#449ff1] bg-white px-3 py-[6px] rounded-md">
          See all Brands
        </button>
      </div>
    </div>
  );
};

export default PopularCollections;
