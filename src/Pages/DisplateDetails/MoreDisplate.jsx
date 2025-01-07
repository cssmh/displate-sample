import { Link } from "react-router-dom";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

const MoreDisplate = () => {
  const [activeTab, setActiveTab] = useState("bestselling");

  const bestsellingData = [
    {
      id: 1,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-06/27c494dc5fee5ab78ab2b302c608db40_695143690b63d64ae618103abae0dc2f.avif",
      label: "Bestselling",
    },
    {
      id: 2,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.avif",
      label: "Bestselling",
    },
    {
      id: 3,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-03-18/7f78f0d6cc17f834dc39a8b25823a53f_b210e2708025e6921547ac20850277d1.avif",
      label: "Bestselling",
    },
    {
      id: 4,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-03-18/7f78f0d6cc17f834dc39a8b25823a53f_b210e2708025e6921547ac20850277d1.avif",
      label: "Bestselling",
    },
    {
      id: 5,
      imageUrl:
        "https://static.displate.com/230x320/displate/2019-04-25/f1f11a1ea117d1257c670dd124547df1_df19dd10e9015250159f1ea7064edb1e.avif",
      label: "Bestselling",
    },
    {
      id: 6,
      imageUrl:
        "https://static.displate.com/230x320/displate/2023-02-09/4b29d0c61c49bc00ef473c5e5d6365fe_3947dc0bd54c512ce59f6e2d5afd7013.avif",
      label: "Bestselling",
    },
    {
      id: 7,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-18/b72765ac69aaeade349e8aec117280c2_baf065e495b70a307f354a3a67408cda.avif",
      label: "Bestselling",
    },
    {
      id: 8,
      imageUrl:
        "https://static.displate.com/230x320/displate/2022-07-08/f1d2678ede12938b363b6290e0e85b47_126003ad4518720b8455cfc00933c553.avif",
      label: "Bestselling",
    },
    {
      id: 9,
      imageUrl:
        "https://static.displate.com/230x320/displate/2022-07-08/04e6427613f41f03c91240e718f5fc6f_814bb503187ae110bbd896b432b5db84.avif",
      label: "Bestselling",
    },
    {
      id: 10,
      imageUrl:
        "https://static.displate.com/230x320/displate/2019-04-25/f1f11a1ea117d1257c670dd124547df1_df19dd10e9015250159f1ea7064edb1e.avif",
      label: "Bestselling",
    },
    {
      id: 11,
      imageUrl:
        "https://static.displate.com/230x320/displate/2023-02-09/4b29d0c61c49bc00ef473c5e5d6365fe_3947dc0bd54c512ce59f6e2d5afd7013.avif",
      label: "Bestselling",
    },
    {
      id: 12,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-18/b72765ac69aaeade349e8aec117280c2_baf065e495b70a307f354a3a67408cda.avif",
      label: "Bestselling",
    },
    {
      id: 13,
      imageUrl:
        "https://static.displate.com/230x320/displate/2022-07-08/f1d2678ede12938b363b6290e0e85b47_126003ad4518720b8455cfc00933c553.avif",
      label: "Bestselling",
    },
    {
      id: 14,
      imageUrl:
        "https://static.displate.com/230x320/displate/2022-07-08/04e6427613f41f03c91240e718f5fc6f_814bb503187ae110bbd896b432b5db84.avif",
      label: "Bestselling",
    },
  ];

  const trendingData = [
    {
      id: 1,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-05/b617cabbad42d3cb61d468274e5a7f1c_47a89ad5a3600eb06127a9de975280c5.avif",
      label: "Trending",
    },
    {
      id: 2,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-20/0218976e-e940-4108-8982-43bee6425964.avif",
      label: "Trending",
    },
    {
      id: 3,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-21/3ce1d71640c2e4aaa09912e3d9e19d57_cdd51103e8a826dfd621971ad9be79bd.avif",
      label: "Trending",
    },
    {
      id: 4,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-21/3ce1d71640c2e4aaa09912e3d9e19d57_cdd51103e8a826dfd621971ad9be79bd.avif",
      label: "Trending",
    },
    {
      id: 5,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-21/3ce1d71640c2e4aaa09912e3d9e19d57_cdd51103e8a826dfd621971ad9be79bd.avif",
      label: "Trending",
    },
    {
      id: 6,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-21/3ce1d71640c2e4aaa09912e3d9e19d57_cdd51103e8a826dfd621971ad9be79bd.avif",
      label: "Trending",
    },
    {
      id: 7,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-21/3ce1d71640c2e4aaa09912e3d9e19d57_cdd51103e8a826dfd621971ad9be79bd.avif",
      label: "Trending",
    },
    {
      id: 8,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-21/3ce1d71640c2e4aaa09912e3d9e19d57_cdd51103e8a826dfd621971ad9be79bd.avif",
      label: "Trending",
    },
    {
      id: 9,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-21/3ce1d71640c2e4aaa09912e3d9e19d57_cdd51103e8a826dfd621971ad9be79bd.avif",
      label: "Trending",
    },
    {
      id: 10,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-06-21/3ce1d71640c2e4aaa09912e3d9e19d57_cdd51103e8a826dfd621971ad9be79bd.avif",
      label: "Trending",
    },
  ];

  const communityChoiceData = [
    {
      id: 1,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-27/32238c06-d9dc-4e57-abe9-c578ce5c5ab7.avif",
      label: "Community Choice",
    },
    {
      id: 2,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-27/24f5e136-f55c-49cc-927a-0aa9f09e9d87.avif",
      label: "Community Choice",
    },
    {
      id: 3,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-26/377cf842-9010-423a-bc91-75573eefe135.avif",
      label: "Community Choice",
    },
    {
      id: 4,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-27/24f5e136-f55c-49cc-927a-0aa9f09e9d87.avif",
      label: "Community Choice",
    },
    {
      id: 5,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-27/24f5e136-f55c-49cc-927a-0aa9f09e9d87.avif",
      label: "Community Choice",
    },
    {
      id: 6,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-27/32238c06-d9dc-4e57-abe9-c578ce5c5ab7.avif",
      label: "Community Choice",
    },
    {
      id: 7,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-27/32238c06-d9dc-4e57-abe9-c578ce5c5ab7.avif",
      label: "Community Choice",
    },
    {
      id: 8,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-26/377cf842-9010-423a-bc91-75573eefe135.avif",
      label: "Community Choice",
    },
    {
      id: 9,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-25/2fae2bd4-0cf5-49a2-97b1-6b8625e49e8c.avif",
      label: "Community Choice",
    },
    {
      id: 10,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-11-26/377cf842-9010-423a-bc91-75573eefe135.avif",
      label: "Community Choice",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getDataForTab = () => {
    switch (activeTab) {
      case "bestselling":
        return bestsellingData;
      case "trending":
        return trendingData;
      case "community":
        return communityChoiceData;
      default:
        return bestsellingData;
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-8">
      <img
        src="https://static.displate.com/brand/layout/799c0af2-b45a-4a77-9c1b-11ce50dcfd93/avatarStandard1730726236.jpg"
        alt="displate"
        className="w-20 mx-auto rounded-full"
      />
      <h1 className="font-semibold text-center text-4xl my-2">Arcane</h1>
      <p className="text-[#1185ed] font-bold flex items-center gap-5 justify-center mt-2">
        <Link to="/licensed/arcane">76 artworks</Link>
        <span>.</span>
        <button>Follow +</button>
      </p>
      <div className="py-8">
        <div className="flex lg:w-[25%] mx-auto bg-[#eceff4] py-1 rounded-full justify-center mb-6">
          <button
            onClick={() => handleTabChange("popular")}
            className={`p-2 hover:text-[#1788ed] mx-1 font-medium transition-all duration-300 ease-in-out ${
              activeTab === "popular"
                ? "text-[#1788ed] bg-white px-3 rounded-full"
                : "text-[#4f565d]"
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => handleTabChange("similar")}
            className={`p-2 hover:text-[#1788ed] mx-1 font-medium transition-all duration-300 ease-in-out ${
              activeTab === "similar"
                ? "text-[#1788ed] bg-white px-3 rounded-full"
                : "text-[#4f565d]"
            }`}
          >
            Similar
          </button>
          <button
            onClick={() => handleTabChange("bestselling")}
            className={`p-2 hover:text-[#1788ed] text-sm mx-1 font-medium transition-all duration-300 ease-in-out ${
              activeTab === "bestselling"
                ? "text-[#1788ed] bg-white px-3 rounded-full"
                : "text-[#4f565d]"
            }`}
          >
            Community Choice
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-2 md:mx-0">
          {getDataForTab().map((card) => (
            <Link to={`/displate/${card.id}`} key={card.id}>
              <div className="relative bg-white shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105">
                <img
                  src={card.imageUrl}
                  alt={`card-${card.id}`}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <span className="absolute top-2 left-2 bg-[#341bc9] text-white px-2 py-1 text-xs font-semibold">
                  Textra
                </span>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiHeart
                    size={24}
                    className="text-white p-1 bg-gray-600 rounded-full"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="font-bold text-[#449ff1] border border-[#449ff1] bg-white px-3 py-[6px] rounded-md">
            See more posters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreDisplate;
