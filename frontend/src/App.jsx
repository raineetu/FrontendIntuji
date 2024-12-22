import Blogs from "./components/Blogs";
import Companylogo from "./components/Companylogo";
import Features from "./components/Features";
import FrequentlyAsked from "./components/FrequentlyAsked";
import Navbar from "./components/Navbar";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Track from "./components/Track";
import Last from "./components/Last";

function App() {
  return (
    <>
      <Navbar />
      <Companylogo />
      <Portfolio />
      <Track />
      <Last />
      <Features />
      <Testimonals />
      <Blogs />
      <FrequentlyAsked />
      <Footer />
    </>
  );
}

export default App;
