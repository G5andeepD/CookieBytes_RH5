import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="other-01-3" alt="" src="/other-01-3@2x.png" />
      <div className="mainheadline">
        <div className="empowering-health-one">
          Empowering Health, One Click at a Time
        </div>
        <div className="frame1">
          <div className="take-charge-of">
            Take charge of your health journey: manage medical records,
            collaborate with doctors, and receive real-time outbreak alerts for
            peace of mind.
          </div>
          <div className="hoveringbutton2">
            <div className="hoveringbutton-inner" />
            <div className="add-button-text3"><Link to="/signinpage">Sign In</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
