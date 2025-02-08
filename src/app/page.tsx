import HeroPage from "./Components/heroPage";
import HeadingBar from "./Components/headingBar";
import ViewAllBtn from "./Components/viewAllBtn";
import Gallery from "./Components/gallery";
import HeadingBar2 from "./Components/headingBar2";
import Reviews from "./Components/reviews";
import BorderLine from "./Components/borderLine";
import NewArrival from "./Components/newarrival";
import TopSelling from "./Components/topSelling";



export default function Home() {
  return (
    <div>
      <HeroPage />
      <HeadingBar />
      <NewArrival />
      <ViewAllBtn />
      <BorderLine />
      <TopSelling />
       <ViewAllBtn />
      <Gallery />
      <HeadingBar2 />
      <Reviews />
    </div>
  );
}
