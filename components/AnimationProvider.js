// components/AnimationProvider.js
"use client";

import { useEffect } from "react";

export default function AnimationProvider({ children }) {
  useEffect(() => {
    // Initialize AOS
    const AOS = require("aos");
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return <>{children}</>;
}
