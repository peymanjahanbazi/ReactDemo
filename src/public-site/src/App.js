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
import {
  URL_ABOUT,
  URL_FAQ,
  URL_FORGET_PASSWORD,
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
  URL_WHAT_IS_ID,
} from "./urls";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={URL_HOME} element={<Home />} />
          <Route path={URL_ABOUT} element={<AboutUs />} />
          <Route path={URL_WHAT_IS_ID} element={<WhatIsId />} />
          <Route path={URL_FAQ} element={<FAQ />} />
          <Route path={URL_LOGIN} element={<Login />} />
          <Route path={URL_FORGET_PASSWORD} element={<ForgetPassword />} />
          <Route path={URL_REGISTER} element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
