import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/signuppage");
  }, [navigate]);

  const onHomeDuotoneClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="signinpage">
      <div className="rightpane1">
        <div className="sign-in1">Sign in</div>
        <div className="rightpane-inner">
          <div className="nic-number-or-email-wrapper">
            <div className="nic-number-or">NIC Number or email</div>
          </div>
        </div>
        <div className="frame-parent">
          <div className="nic-number-or-email-wrapper">
            <div className="nic-number-or">Password</div>
          </div>
          <div className="frame-child" />
        </div>
        <div className="sign-up1" onClick={onSignUpTextClick}>
          Sign Up
        </div>
        <div className="dont-have-an">{` Don't have an account yet?  `}</div>
        <div className="forgot-password">Forgot Password?</div>
        <img
          className="home-duotone-icon1"
          alt=""
          src="/home-duotone.svg"
          onClick={onHomeDuotoneClick}
        />
        <div className="hoveringbutton1">
          <div className="hoveringbutton-item" />
          <div className="add-button-text1">Sign In</div>
        </div>
      </div>
      <img
        className="blurredellipses-icon1"
        alt=""
        src="/blurredellipses1.svg"
      />
      <div className="leftpane1">
        <div className="welcome-to-cookiewatch-container1">
          <span>Welcome to Cookie</span>
          <span className="watch1">Watch</span>
        </div>
        <img className="image-icon1" alt="" src="/image@2x.png" />
      </div>
    </div>
  );
};

export default SignInPage;
