//https://dashonic-v-light.react.pichforest.com/sales

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Analytics from "./pages/Analytics/Analytics";
import './app.css'
import { useState } from "react";
import NavExpendHook from "./hooks/NavExpandHook";

function App() {
  const [sidebarSize, setSidebarSize] = useState(250)
  
  return (
    <BrowserRouter>
       <NavExpendHook.Provider value={{sidebarSize, setSidebarSize}}>
          <Routes>
              <Route path="/react-dashboard" element={<Home /> } />
              <Route path="/analytics" element={ <Analytics />} />
          </Routes>
       </NavExpendHook.Provider>
    </BrowserRouter>
  );
}

export default App;
