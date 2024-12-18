import PopularCollections from "../Pages/PopularCollections";
import AwesomeSpaces from "./AwesomeSpaces";
import Community from "./Community";
import Features from "./Features";
import HolidayDeals from "./HolidayDeals";
import HottestPicks from "./HottestPicks";
import LicensedArtworks from "./LicensedArtworks";
import MatchMore from "./MatchMore";
import Newsletter from "./Newsletter";
import PopularSearches from "./PopularSearches";
import SquidGame from "./SquidGame";

const Home = () => {
  return (
    <>
      <HolidayDeals />
      <LicensedArtworks />
      <HottestPicks />
      <AwesomeSpaces />
      <PopularCollections />
      <SquidGame />
      <MatchMore />
      <Community />
      <Newsletter />
      <Features />
      <PopularSearches />
    </>
  );
};

export default Home;
