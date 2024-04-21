import "./CitizenUserProfile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CitizenUserProfile = () => {

  function releaseToken(){
    localStorage.setItem("token","")
  };

  return (
    <div className="citizenuserprofile">
      <div className="citizenprofile">
        <div className="macbook-air-1">
          <div className="center">
            <div className="profilepane">
              <div className="profilepane-child" />
              <img className="profilepane-item" alt="" src="/group-2.svg" />
              <div className="praveen-sumanasekara">Praveen Sumanasekara</div>
              <div className="material-symbolslocation-on-parent">
                <img
                  className="material-symbolslocation-on-icon"
                  alt=""
                  src="/materialsymbolslocationon.svg"
                />
                <div className="badulla-sri-lanka">Badulla, Sri Lanka</div>
              </div>
              <div className="group-parent">
                <div className="parent">
                  <div className="div">150</div>
                  <div className="weight">Weight</div>
                </div>
                <div className="group">
                  <div className="div1">22.5</div>
                  <div className="bmi">BMI</div>
                </div>
                <div className="container">
                  <div className="div2">180</div>
                  <div className="weight">Height</div>
                </div>
              </div>
              <div className="group-container">
                <div className="rectangle-parent">
                  <div className="group-child" />
                  <b className="edit-profile">Edit profile</b>
                </div>
                <div className="rectangle-group">
                  <div className="group-item" />
                  <div className="add-friends-wrapper">
                    <div className="add-friends">Add friends</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightpanebuttons">
              <div className="group-div">
                <div className="rectangle-parent">
                  <div className="group-inner" />
                  <b className="view-personal-medical">
                    View Personal Medical Records
                  </b>
                </div>
                <div className="rectangle-parent1">
                  <div className="rectangle-div" />
                  <div className="add-friends-container">
                    <div className="add-friends">Add friends</div>
                  </div>
                </div>
              </div>
              <div className="group-parent1">
                <div className="rectangle-parent">
                  <div className="group-inner" />
                  <b className="give-access-to">
                    Give Access to View Personal Medical Records
                  </b>
                </div>
                <div className="rectangle-parent3">
                  <div className="group-child2" />
                  <div className="add-friends-frame">
                    <div className="add-friends">Add friends</div>
                  </div>
                </div>
              </div>
              <div className="group-parent2">
                <div className="rectangle-parent">
                  <div className="group-inner" />
                  <b className="give-access-to">Submit Complaints</b>
                </div>
                <div className="rectangle-parent5">
                  <div className="group-child4" />
                  <div className="frame-div">
                    <div className="add-friends">Add friends</div>
                  </div>
                </div>
              </div>
              <div className="group-parent3" onClick={releaseToken}>
                <Link to="/">
                <div className="rectangle-parent">
                  <div className="group-inner" />
                  <b className="log-out">Log Out</b>
                </div>
                <div className="rectangle-parent7">
                  <div className="group-child6" />
                  <div className="add-friends-wrapper1">
                    <div className="add-friends">Add friends</div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="icons">
            <div className="material-symbolshome-outline-" />
            <img
              className="material-symbolshome-outline-"
              alt=""
              src="/materialsymbolsmarkunreadchataltoutlinerounded.svg"
            />
            <img
              className="material-symbolshome-outline-"
              alt=""
              src="/iconamoonprofilefill.svg"
            />
          </div>
          <img
            className="blurredellipses-icon2"
            alt=""
            src="/blurredellipses2.svg"
          />
          <div className="toppane">
            <img className="toppane-child" alt="" src="/rectangle-27.svg" />
            <div className="healthcare-is-not">
              “Healthcare is not just a service; it's the heartbeat of humanity,
              nourishing lives, and ensuring that every heartbeat counts.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenUserProfile;
