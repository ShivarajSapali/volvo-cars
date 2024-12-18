import "../public/css/styles.css";
import React from "react";
import Home from "../src/components/Home";
import "@volvo-cars/css/font-face.css";
import "@volvo-cars/css/tokens.css";
import "@volvo-cars/css/styles_all-media.css";

function HomePage() {
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}

export default HomePage;
