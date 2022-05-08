import { Helmet, HelmetProvider } from "react-helmet-async";

import Footer from "../web-parts/Footer";
import MenuBar from "../web-parts/MenuBar";

function Main({ children, title }) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title ? title : "No title"}</title>
        </Helmet>
      </HelmetProvider>
      <MenuBar />
      {children}
      <Footer />
    </>
  );
}

export default Main;
