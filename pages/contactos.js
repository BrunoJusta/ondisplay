import { Contacts } from "../components/Contacts";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="flex-col items-center mt-10 w-full max-w-screen-2xl mb-10 mr-auto ml-auto"
    >
      <div className="mt-20 w-full">
        <Contacts />
      </div>
    </motion.div>
  );
}
