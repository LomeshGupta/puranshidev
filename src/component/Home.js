import React from "react";

import Navbar from "../Pages/Homepage/navbar";
import Banner from "../Pages/Homepage/Banner";
import Service from "../Pages/Homepage/services";
import Partners from "../Pages/Homepage/partners";
import Footer from "../Pages/Homepage/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <Partners />
      <Footer />
    </>
  );
};

export default App;
