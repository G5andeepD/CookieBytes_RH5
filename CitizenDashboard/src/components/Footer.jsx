import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <b className="pages">Pages</b>
      <b className="actions">Actions</b>
      <b className="contacts">Contacts</b>
      <div className="home-our-team-container">
        <p className="email">Home</p>
        <p className="email">Our Team</p>
        <p className="twitter">Contact Us</p>
      </div>
      <div className="sign-up-sign-container">
        <p className="email">Sign Up</p>
        <p className="twitter">Sign In</p>
      </div>
      <b className="cookiewatch3">
        <span>Cookie</span>
        <span className="watch5">Watch</span>
      </b>
      <div className="email-instagram-linkedin-container">
        <p className="email">Email</p>
        <p className="email">Instagram</p>
        <p className="email">LinkedIn</p>
        <p className="twitter">Twitter</p>
      </div>
      <div className="bottomline" />
    </div>
  );
};

export default Footer;
