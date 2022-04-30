import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import WhatIsId from "./pages/WhatIsId";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/whatisid" element={<WhatIsId />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/register" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
