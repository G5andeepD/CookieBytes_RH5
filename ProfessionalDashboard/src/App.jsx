import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from './USERPROFILE/userprofile';
import GenerateMedicals from './USERPROFILE/generatemedical';
import { AuthProvider } from './Context/AuthContext';
import { DataProvider } from './Context/DataContext';
import SignIN from './USERPROFILE/signin';
import Viewmedicals from './USERPROFILE/viewmedicals';
import EmergencyPage from './USERPROFILE/emergency';

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>


    <Router>
      <Routes>
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/generatemedicals' element={<GenerateMedicals />} />
        <Route path='/' element={<SignIN />} />
        <Route path='/viewmedicals' element={<Viewmedicals />} />
        <Route path='/emergency' element={<EmergencyPage />} />
      </Routes>
    </Router>
      </DataProvider>
    </AuthProvider>
  );
}
