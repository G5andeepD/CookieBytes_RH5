import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from './USERPROFILE/userprofile';
import GenerateMedicals from './USERPROFILE/generatemedical';
import { AuthProvider } from './Context/AuthContext';
import { DataProvider } from './Context/DataContext';

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>


    <Router>
      <Routes>
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/generatemedicals' element={<GenerateMedicals />} />
      </Routes>
    </Router>
      </DataProvider>
    </AuthProvider>
  );
}
