import React from "react";
import Room from "./room/page";
import HeaderPage from "./header/page";
import ChooseUs from "./ChooseUs/page";
import ContactPage from "./Contact/page";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeaderPage />
      <ChooseUs />
      <Room />
      <ContactPage />
      <Footer />
    </div>
  );
}
