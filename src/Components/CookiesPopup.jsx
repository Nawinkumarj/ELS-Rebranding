/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="cookiesPopup"
        >
            <h3>Our website uses cookies</h3>
            <p>Our website use cookies. By continuing, we assume your permission to deploy cookies as detailed in out <Link to='/privacy-policy'>Privacy Policy</Link></p>
            <div className='cookiesBtn flex-center'>
                <button onClick={acceptCookies} className='acceptBtn'>
                    Accept all
                </button>
                <button>
                    Manage
                </button>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiesPopup;
