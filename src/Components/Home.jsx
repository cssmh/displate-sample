import PopularCollections from "../Pages/PopularCollections";
import AwesomeSpaces from "./AwesomeSpaces";
import Community from "./Community";
import HolidayDeals from "./HolidayDeals";
import HottestPicks from "./HottestPicks";
import LicensedArtworks from "./LicensedArtworks";
import MatchMore from "./MatchMore";
import Newsletter from "./Newsletter";
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
    </>
  );
};

export default Home;
