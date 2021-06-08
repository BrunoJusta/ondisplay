import "../styles/globals.css";
import { Navbar } from "../components/UI/Navbar";
import { Footer } from "../components/UI/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence existBeforeEnter>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
