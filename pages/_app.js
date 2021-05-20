import "../styles/globals.css";
import { Navbar } from "../components/UI/Navbar";
import { Footer } from "../components/UI/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
