import Helmet from "react-helmet";

import Footer from "../../components/Footer";
import MenuBar from "../../components/MenuBar";

function Main({ children, title }) {
  return (
    <div className="container">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MenuBar />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
