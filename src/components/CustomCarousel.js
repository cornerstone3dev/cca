import React, { useState } from "react";
import "../styles/Carousel.css"; // Add styles for the carousel
import eventData from "../data/mock_events_data.json";
import EventModal from "./EventModal";

import { Button } from "@mui/material";

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const futureEvents = eventData[0].futureEvents;
  const [openModal, setOpenModal] = useState(false);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? futureEvents.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === futureEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {futureEvents.map((slide) => (
          <div key={slide.id} className="carousel-item">
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{truncateText(slide.description, 100)}</p>
              <p>
                <i>{slide.date}</i>
              </p>
              <p>{slide.time}</p>
              <Button
                variant="contained"
                color="warning"
                sx={{ borderRadius: "20px" }}
                onClick={() => setOpenModal(true)}
              >
                Learn More
              </Button>
              <EventModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={futureEvents[currentIndex].title}
                time={futureEvents[currentIndex].time}
                location={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${futureEvents[currentIndex].location.address}<br>${futureEvents[currentIndex].location.city}, ${futureEvents[currentIndex].location.state} ${futureEvents[currentIndex].location.zip}`,
                    }}
                  />
                }
                content={futureEvents[currentIndex].description}
                footer={
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </Button>
                }
              />
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default CustomCarousel;
