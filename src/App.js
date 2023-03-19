//https://dashonic-v-light.react.pichforest.com/sales

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Analytics from "./pages/Analytics/Analytics";
import './app.css'
import { useState } from "react";
import NavExpendHook from "./hooks/NavExpandHook";
import Calendar from "./pages/Calender/Calendar"; 
import ChatPage from "./pages/Chat/ChatPage";
import FileManager from "./pages/FileManager/FileManager";

function App() {
  const [sidebarSize, setSidebarSize] = useState(250)
  
  return (
    <BrowserRouter>
       <NavExpendHook.Provider value={{sidebarSize, setSidebarSize}}>
          <Routes>
              <Route path="/react-dashboard" element={<Home /> } />
              <Route path="/analytics" element={ <Analytics />} />
              <Route path="/calendar" element={ <Calendar /> } />
              <Route path="/chat" element={ <ChatPage /> } />
              <Route path="/fileManager" element={ <FileManager /> } />
          </Routes>
       </NavExpendHook.Provider>
    </BrowserRouter>
  );
}

export default App;
