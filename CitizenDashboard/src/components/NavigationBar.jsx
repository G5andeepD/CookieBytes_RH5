import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigationbar">
      <b className="home">Home</b>
      <b className="cookiewatch2">
        <span>Cookie</span>
        <span className="watch3">Watch</span>
      </b>
      <b className="contact-us">Contact Us</b>
      <b className="our-team">Our Team</b>
    </div>
  );
};

export default NavigationBar;
