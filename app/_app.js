// pages/_app.js
import { useEffect } from "react";
import "../styles/globals.css";
// Import AOS styles
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS after the component mounts
    const AOS = require("aos");
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 100, // Offset (in px) from the original trigger point
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
