import "./MenuBar.scss";
import logo from "./logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function MenuBar() {
  let [collapsed, setCollapsed] = useState("");

  const handleCollapse = () => {
    if (collapsed === "") {
      setCollapsed("show");
    } else {
      setCollapsed("");
    }
  };
  const className = `collapse navbar-collapse ${collapsed}`;
  const menyItems = [
    { text: "Home", href: "/" },
    { text: "What is ID", href: "/whatisid" },
    { text: "About us", href: "/about" },
    { text: "Contact us", href: "/contact" },
    { text: "FAQ", href: "/faq" },
  ];
  const menuItemsHtml = menyItems.map((x) => (
    <li key={x.text} className="nav-item">
      <Link to={x.href} className="nav-link active">
        {x.text}
      </Link>
    </li>
  ));
  return (
    <div id="menubarparent" className="row">
      <nav
        id="menubar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="imglogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={className} id="navbarContent">
            <ul className=" menuitems navbar-nav me-auto mb-2 mb-lg-0">
              {menuItemsHtml}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className=" loginLink nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" registerLink nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MenuBar;
