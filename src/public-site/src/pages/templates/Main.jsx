import Footer from "../../components/footer/Footer";
import MenuBar from "../../components/MenuBar";

function Main({ children }) {
  return (
    <div className="container">
      <MenuBar />
      {children}
      {children}
      <Footer />
    </div>
  );
}

export default Main;
