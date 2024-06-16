// src/App.js
import React, { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import PatientProfile from "./scenes/patientprofile";
import PatientRecord from "./scenes/patientrecord";
import TestResults from "./scenes/testresults";
import ChatAI from "./scenes/interactivechat";
import Hospitals from "./scenes/hospitals";
import Specialists from "./scenes/specialist";
import PredictiveHealthAnalysis from "./scenes/predictivehealthanalysis";
import GeneticInfoAnalysis from "./scenes/geneticinfoanalysis";
import LifestyleAnalysis from "./scenes/lifestyle";
import Settings from "./scenes/settings";
import Subscription from "./scenes/subscription";
import Logout from "./scenes/logout";
import Dashboard from "./scenes/dashboard";



function App() {
  const [theme, colorMode] = useMode();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex' }}>
          <Sidebar isSidebar={true} />
          <div style={{ flex: 1, marginLeft: 240, transition: 'margin-left 0.3s', paddingTop: '70px' }}>
            <Topbar onSearch={handleSearch} />
            <main style={{ padding: '20px' }}>
              <Routes>
                <Route path="/patientprofile" element={<PatientProfile />} />
                <Route
                  path="/patientrecord"
                  element={<PatientRecord showProfile={true} profilePicture="/assets/user.png" patientName="Ibrahim Hassan" />}
                />
                <Route path="/" element={<Dashboard />} />
                <Route path="/testresults" element={<TestResults />} />
                <Route path="/interactivechat" element={<ChatAI />} />
                <Route path="/hospitals" element={<Hospitals searchQuery={searchQuery} />} />
                <Route path="/specialist" element={<Specialists searchQuery={searchQuery} />} />
                <Route path="/predictivehealthanalysis" element={<PredictiveHealthAnalysis />} />
                <Route path="/geneticinfoanalysis" element={<GeneticInfoAnalysis />} />
                <Route path="/lifestyle" element={<LifestyleAnalysis />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/logout" element={<Logout />} />
                {/* Uncomment the following routes as you create the components */}
                
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;