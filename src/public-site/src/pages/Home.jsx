import Main from "./templates/Main";
import "./home.scss";
import topImage from "./home-top-image.svg";
import topInstagram from "./home-top-instagram.svg";
import topFacebook from "./home-top-facebook.svg";
import topWhatsapp from "./home-top-whatsapp.svg";
import topTelegram from "./home-top-telegram.svg";
import topYoutube from "./home-top-youtube.svg";
import topLinkedIn from "./home-top-linkedin.svg";
import linkImage01 from "./home-links01.png";
import linkImage02 from "./home-links02.png";
import linkImage03 from "./home-links03.png";
import linkImage04 from "./home-links04.png";
import leftArrow from "./home-left-arrow.png";
import rightArrow from "./home-right-arrow.png";
function Home() {
  return (
    <Main title="Home page">
      <div className="home container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-block">
              <h1>
                The only <span className="text-primary">link</span> that you
                need to know
              </h1>
              <p>
                His followed carriage proposal entrance directly had elegance.
                Greater for cottage gay parties natural. Remaining he furniture
                on he discourse suspected perpetual. Power dried her taken place
                day ought the. Four and our ham west miss. Education shameless
                who middleton agreement how. We in found world chief is at means
                weeks smile. Finished her are its honoured drawings nor. Pretty
                see mutual thrown all not edward ten. Particular an boisterous
                up he reasonably frequently. Several any had enjoyed shewing
                studied two. Up intention remainder sportsmen behaviour ye
                happiness. Few again any alone style added abode ask.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="images-parent">
              <img className="top-image" src={topImage} alt="computer desk" />
              <img className="instagram" src={topInstagram} alt="instagram" />
              <img className="facebook" src={topFacebook} alt="facebook" />
              <img className="whatsapp" src={topWhatsapp} alt="whatsapp" />
              <img className="telegram" src={topTelegram} alt="telegram" />
              <img className="youtube" src={topYoutube} alt="youtube" />
              <img className="linkedin" src={topLinkedIn} alt="linkedin" />
              <p className="linkbox"> http://aydi.link/yourname</p>
            </div>
          </div>
        </div>
        <div className="linksimages row">
          <div className="col-md-12">
            <h2>Sample Links</h2>
            <div className="image-container">
              <div className="orange-div">
                <div className="button-left">
                  <img src={leftArrow} alt="left arrow" />
                </div>
                <div className="button-right">
                  <img src={rightArrow} alt="left arrow" />
                </div>
              </div>
              <img className="link-image" src={linkImage01} alt="laptop" />
              <img className="link-image" src={linkImage02} alt="robot" />
              <img className="link-image" src={linkImage03} alt="hand" />
              <img className="link-image" src={linkImage04} alt="circuit" />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;
