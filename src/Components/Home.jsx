import PopularCollections from "../Pages/PopularCollections";
import AwesomeSpaces from "./AwesomeSpaces";
import HolidayDeals from "./HolidayDeals";
import HottestPicks from "./HottestPicks";
import LicensedArtworks from "./LicensedArtworks";

const Home = () => {
  return (
    <>
      <HolidayDeals />
      <LicensedArtworks />
      <HottestPicks />
      <AwesomeSpaces />
      <PopularCollections />
    </>
  );
};

export default Home;
