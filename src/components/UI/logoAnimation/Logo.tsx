import { motion } from "framer-motion";
import "./Logo.scss";

const Logo = () => {
  return (
    <h1 className="home-title">
      <section className="section-titles">
        <motion.p
          id="titleMainPower"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Performance in every line
        </motion.p>

        <motion.span
          id="title2Main"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          Power in every detail
        </motion.span>
      </section>
    </h1>
  );
};

export default Logo;
