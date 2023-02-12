import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import Qrgenerate from "./Pages/Qrgenerator";
function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Qrgenerate/>} />
          </Routes>
      </Router>
  );
}

export default App;
