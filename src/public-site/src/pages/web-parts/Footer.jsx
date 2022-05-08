import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "./logo.svg";
import img01 from "./footer-img01.svg";
import img02 from "./footer-img02.svg";
import aparat from "./footer-aparat.svg";
import instagram from "./footer-instagram.svg";
import twitter from "./footer-twitter.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div>
                  <Link className="footerlink nav-link" to="/">
                    Home
                  </Link>
                </div>
                <div>
                  <Link className="footerlink nav-link" to="/whatisid">
                    What is ID
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <Link className="footerlink nav-link" to="/about">
                    About us
                  </Link>
                </div>
                <div>
                  <Link className="footerlink nav-link" to="/contact">
                    Contact us
                  </Link>
                </div>
                <div>
                  <Link className="footerlink nav-link" to="/faq">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 top-images">
                <span className="image-border">
                  <img className="footer-image" src={img01} alt="nemad" />
                </span>
                <span className="image-border">
                  <img className="footer-image" src={img02} alt="melli" />
                </span>
              </div>
              <div className="col-12 followus">
                Follow us on thesocial media
              </div>
              <div className="col-12 social-media-parent">
                <span className="social-media">
                  <img className="footer-image" src={aparat} alt="aparat" />
                  Aparat
                </span>
                <span className="social-media">
                  <img
                    className="footer-image"
                    src={instagram}
                    alt="instagram"
                  />
                  Instaram
                </span>
                <span className="social-media">
                  <img className="footer-image" src={twitter} alt="twitter" />
                  Twitter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="row">
          <div className="col-12">
            © 2022 My Company, Inc. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
