const Wishlist = () => {
    return (
      <div className="text-center my-8">
        <h1 className="font-semibold text-3xl">Your wishlist is empty!</h1>
        <p>Explore more and save Displates you like</p>
        <div className="flex justify-center">
          <button className="mt-5 bg-white font-semibold text-[#1185ed] border border-[#1185ed] py-3 px-16 rounded-md shadow-lg flex items-center gap-2">
            <span>Find Displates</span>
          </button>
        </div>
      </div>
    );
};

export default Wishlist;