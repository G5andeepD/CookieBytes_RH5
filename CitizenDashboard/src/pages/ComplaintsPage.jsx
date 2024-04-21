import "./ComplaintsPage.css";
import { Link } from "react-router-dom";

export function getUserID(email){
  let user_str_db = localStorage.getItem(email)

  function extractName(string_obj){
    let user_nonstr_db = JSON.parse(string_obj)
    return user_nonstr_db;
  };
    return extractName(user_str_db);
  };

const ComplaintsPage = () => {

  return (
    <div className="complaintspage">
      <div className="rightpane3">
        <div className="complaints">Complaints</div>
        <div className="inputfield6">
          <div className="enter-your-complaint-here-wrapper">
            <div className="enter-your-complaint">
              Enter your complaint here
            </div>
          </div>
        </div>
        <div className="buttonsubmit">
          <Link to="/citizenuserprofile">
          <div className="buttonsubmit-child" />
          <div className="submit">Submit</div>
          </Link>
        </div>
      </div>
      <img
        className="blurredellipses-icon4"
        alt=""
        src="/blurredellipses1.svg"
      />
      <div className="leftpane3">
        <div className="cookiewatch1">
          <span>Cookie</span>
          <span className="watch2">Watch</span>
        </div>
        <img className="image-icon2" alt="" src="/image@2x.png" />
      </div>
    </div>
  );
};

export default ComplaintsPage;
