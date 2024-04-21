import NavigationBar from "../components/NavigationBar";
import BlurredEllipsesIcon from "../components/BlurredEllipsesIcon";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Subheading1 from "../components/Subheading1";
import Subheading from "../components/Subheading";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavigationBar />
      <BlurredEllipsesIcon />
      <Hero />
      <Quote />
      <Subheading1 />
      <Subheading />
      <Footer />
    </div>
  );
};

export default HomePage;
