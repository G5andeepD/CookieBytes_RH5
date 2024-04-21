import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import CitizenUserProfile from "./pages/CitizenUserProfile";
import PersonalMedicalRecords from "./pages/PersonalMedicalRecords";
import ComplaintsPage from "./pages/ComplaintsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signuppage":
        title = "";
        metaDescription = "";
        break;
      case "/signinpage":
        title = "";
        metaDescription = "";
        break;
      case "/citizenuserprofile":
        title = "";
        metaDescription = "";
        break;
      case "/personalmedicalrecords":
        title = "";
        metaDescription = "";
        break;
      case "/complaintspage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signuppage" element={<SignUpPage />} />
      <Route path="/signinpage" element={<SignInPage />} />
      <Route path="/citizenuserprofile" element={<CitizenUserProfile />} />
      <Route
        path="/personalmedicalrecords"
        element={<PersonalMedicalRecords />}
      />
      <Route path="/complaintspage" element={<ComplaintsPage />} />
    </Routes>
  );
}
export default App;
