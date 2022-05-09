import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "./logo.svg";
import img01 from "./footer-img01.svg";
import img02 from "./footer-img02.svg";
import aparat from "./footer-aparat.svg";
import instagram from "./footer-instagram.svg";
import twitter from "./footer-twitter.svg";
import {
  URL_ABOUT,
  URL_CONTACT,
  URL_FAQ,
  URL_HOME,
  URL_WHAT_IS_ID,
} from "../../urls";

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
                {FooterLinks("Home", URL_HOME)}
                {FooterLinks("What is ID", URL_WHAT_IS_ID)}
              </div>
              <div className="col-md-6">
                {FooterLinks("About us", URL_ABOUT)}
                {FooterLinks("Contact us", URL_CONTACT)}
                {FooterLinks("FAQ", URL_FAQ)}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 legal-images-box">
                <span className="image-border">
                  <img className="legal-image" src={img01} alt="nemad" />
                </span>
                <span className="image-border">
                  <img className="legal-image" src={img02} alt="melli" />
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

function FooterLinks(text, target) {
  return (
    <div>
      <Link className="footerlink nav-link" to={target}>
        {text}
      </Link>
    </div>
  );
}
