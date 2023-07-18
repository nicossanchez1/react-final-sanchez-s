import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Aside = () => {
  return (
    <aside className="navCompleta">
      <button className="close-menu" id="close-menu">
        <i className="bi bi-x"></i>
      </button>
      <Header />
      <Footer />
    </aside>
  );
};

export default Aside;
