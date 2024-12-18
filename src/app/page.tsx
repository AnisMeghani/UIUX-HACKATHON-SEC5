import HeroPage from "./Components/heroPage";
import HeadingBar from "./Components/headingBar";
import ProductListing1 from "./Components/productListing1";
import ProductListing2 from "./Components/productListing2";
import ViewAllBtn from "./Components/viewAllBtn";
import Gallery from "./Components/gallery";
import HeadingBar2 from "./Components/headingBar2";
import ProductDetails from "./Components/productdetails";
import Category from "./Components/category";
import YourCart from "./Components/cart";
import ProductCart from "./Components/productCart";

import Reviews from "./Components/reviews";
import BorderLine from "./Components/borderLine";


export default function Home() {
  return (
    <div>
      <HeroPage />
      <HeadingBar />
      <ProductListing1 />
      <ViewAllBtn />
      <BorderLine />
      <ProductListing2 />
      <ViewAllBtn />
      <Gallery />
      <HeadingBar2 />
      <Reviews />
      {/* <ProductDetails /> */}
      {/* <Category /> */}
     {/* <YourCart/> */}
     {/* <ProductCart/> */}
    </div>
  );
}
