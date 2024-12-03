import React from "react";
import AnimatedNavbar from "../components/NavBar";
import EventsCarousel from "../components/EventCarousel";
import CustomCarousel from "../components/CustomCarousel";
import "../styles/Events.css";

const Events = () => {
  return (
    <div style={{ height: "100%", marginTop: "64px" }}>
      <AnimatedNavbar />
      <div className="carousel-background">
        <div className="overlay"></div>
        <CustomCarousel />
        {/* <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}><EventsCarousel /></div> */}
      </div>
    </div>
  );
};

export default Events;
