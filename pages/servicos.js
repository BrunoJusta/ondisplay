import { Services } from "../components/Services";
import { motion } from "framer-motion";

export default function Service() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="flex items-center mt-10 w-full max-w-screen-2xl mr-auto ml-auto"
    >
      <div className="mt-20">
        <Services />
      </div>
      <style global jsx>{`
        html body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </motion.div>
  );
}
