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
                {FooterLinks("Home", "/")}
                {FooterLinks("What is ID", "/whatisid")}
              </div>
              <div className="col-md-6">
                {FooterLinks("About us", "/about")}
                {FooterLinks("Contact us", "/contact")}
                {FooterLinks("FAQ", "/faq")}
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
