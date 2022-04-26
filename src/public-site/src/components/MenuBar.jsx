import "./MenuBar.scss";
import logo from "./logo.svg";

function MenuBar() {
  const menyItems = [
    { text: "Home", href: "" },
    { text: "What is ID", href: "" },
    { text: "About us", href: "" },
    { text: "Contact us", href: "" },
    { text: "FAQ", href: "" },
  ];
  const menuItemsHtml = menyItems.map((x) => (
    <li className="nav-item">
      <a className="nav-link active" href={x.href}>
        {x.text}
      </a>
    </li>
  ));
  return (
    <nav id="menubar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} className="imglogo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className=" menuitems navbar-nav me-auto mb-2 mb-lg-0">
            {menuItemsHtml}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className=" loginLink nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className=" registerLink nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
