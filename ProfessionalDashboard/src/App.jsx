import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from './USERPROFILE/userprofile';
import GenerateMedicals from './USERPROFILE/generatemedical';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/generatemedicals' element={<GenerateMedicals />} />
      </Routes>
    </Router>
  );
}
