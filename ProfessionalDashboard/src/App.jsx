import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from './USERPROFILE/userprofile';
import GenerateMedicals from './USERPROFILE/generatemedical';
import SignIN from './USERPROFILE/signin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/generatemedicals' element={<GenerateMedicals />} />
        <Route path='/' element={<SignIN />} />
      </Routes>
    </Router>
  );
}
