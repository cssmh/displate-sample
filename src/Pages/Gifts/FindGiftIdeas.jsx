const FindGiftIdeas = () => {
  const giftIdeas = [
    "Valentine's Day Gifts",
    "Birthday Gifts for Girlfriend",
    "Valentine's Day Gifts for Girlfriend",
    "Birthday Gifts",
    "Anniversary Gifts",
    "Father's Day Gifts",
    "Unique Gifts for Girlfriend",
    "Mother's Day Gifts",
    "Christmas Gifts",
    "Christmas Gifts for Couples",
    "Birthday Gifts for Couples",
    "Unique Gifts for Couples",
    "Unique Gifts for Him",
    "Cute Gifts for Couples",
    "Best Gifts for Couples",
    "Christmas Gifts for Girlfriend",
    "Cute Gifts for Girlfriend",
    "Best Gifts for Girlfriend",
    "Christmas Gifts for Her",
    "Birthday Gifts for Her",
    "Unique Gifts for Her",
    "Cute Gifts for Her",
    "Valentine's Day Gifts for Her",
    "Best Gifts for Her",
    "Christmas Gifts for Girls",
    "Birthday Gifts for Girls",
    "Unique Gifts for Girls",
    "Cute Gifts for Girls",
    "Valentine's Day Gifts for Girls",
    "Cute Gifts for Women",
    "Best Gifts for Girls",
    "Christmas Gifts for Women",
    "Christmas Gifts for Mom",
    "Birthday Gifts for Mom",
    "Unique Gifts for Mom",
    "Birthday Gifts for Boyfriend",
    "Cute Gifts for Mom",
    "Best Gifts for Mom",
    "Birthday Gifts for Women",
    "Unique Gifts for Women",
    "Valentine's Day Gifts for Women",
    "Best Gifts for Women",
    "Christmas Gifts for Friends",
    "Birthday Gifts for Friends",
    "Christmas Gifts for Boyfriend",
    "Unique Gifts for Friends",
    "Cute Gifts for Friends",
    "Best Gifts for Friends",
    "Unique Gifts for Boyfriend",
    "Cute Gifts for Boyfriend",
    "Valentine's Day Gifts for Boyfriend",
    "Best Gifts for Boyfriend",
    "Christmas Gifts for Him",
    "Birthday Gifts for Him",
    "Anniversary Gifts for Him",
    "Valentine's Day Gifts for Him",
    "Birthday Gifts for Boys",
    "Christmas Gifts for Boys",
    "Best Gifts for Him",
    "Valentine's Day Gifts for Boys",
    "Unique Gifts for Boys",
    "Christmas Gifts for Husband",
    "Best Gifts for Boys",
    "Christmas Gifts for Dad",
    "Unique Gifts for Men",
    "Birthday Gifts for Dad",
    "Best Gifts for Dad",
    "Valentine's Day Gifts for Men",
    "Christmas Gifts for Men",
    "Unique Gifts for Dad",
    "Cute Gifts for Dad",
    "Birthday Gifts for Men",
    "Best Gifts for Men",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-11">
      <div className="text-left mb-7">
        <h1 className="text-2xl font-semibold text-gray-800">
          Find Gift Ideas by Themes
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {giftIdeas.map((idea, index) => (
          <a
            key={index}
            href="#"
            className="hover:underline"
          >
            {idea}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FindGiftIdeas;
