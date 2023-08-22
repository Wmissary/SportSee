import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router, useNavigate } from "react-router-dom";
import Profile from "./pages/Profile";

const RedirectToRandomProfile = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const kAvailableProfilesId = [12, 18];
    const randomProfileId = kAvailableProfilesId[Math.floor(Math.random() * kAvailableProfilesId.length)];
    navigate(`/profile/${randomProfileId}`);
  }, []);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {window.location.pathname === "/" && <RedirectToRandomProfile />}
      <Routes>
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
