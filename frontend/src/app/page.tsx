import { HeroSection } from "./component/Header";
import Footer from "./component/Footer";
import UpcomingEVs from "./component/UpcomingEvs";
import  RecentArticles from "./component/Recent";
import  UpcomingEVsbike from "./component/UpcomingEvsbike";
import ElectricBlogVideo from "./component/ElectricBlogVideo";


export default function Home() {
  return (
    <>
      <HeroSection />
    <UpcomingEVs/>
    <UpcomingEVsbike/>
    <RecentArticles/>
    <ElectricBlogVideo/>
    <Footer/>

  
    </>
  );
}
