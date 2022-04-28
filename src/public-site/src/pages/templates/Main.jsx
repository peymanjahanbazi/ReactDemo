import { Helmet, HelmetProvider } from "react-helmet-async";

import Footer from "../../components/Footer";
import MenuBar from "../../components/MenuBar";

function Main({ children, title }) {
  return (
    <div className="container">
      <HelmetProvider>
        <Helmet>
          <title>{title ? title : "No title"}</title>
        </Helmet>
      </HelmetProvider>
      <MenuBar />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
