import React from "react";
import AnimatedNavbar from "../components/NavBar";
import CustomCarousel from "../components/CustomCarousel";
import EventModal from "../components/EventModal";
import { Box, Card, CardContent, Typography, Pagination, Button } from "@mui/material";
import { styled } from "@mui/system";
import eventData from "../data/mock_events_data.json";
import "../styles/Events.css";

const Events = () => {
  const pastEvents = eventData[0].pastEvents;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [openModal, setOpenModal] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(pastEvents.length / itemsPerPage);
  const currentDisplayedEvents = pastEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const handleOpenModal = (id) => {
    const eventIndex = pastEvents.findIndex((event) => event.id === id);
    setCurrentIndex(eventIndex);
    setOpenModal(true);
  }
  // Styled components for card
  const CardStyled = styled(Card)({
    margin: "1rem 1rem",
    width: "100%",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
    cursor: "pointer"
  });

  return (
    <div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AnimatedNavbar />
        <div className="carousel">
          <div className="overlay"></div>
          <CustomCarousel />
        </div>
        <div className="past-events-container">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight={"bold"}
          >
            Past Events
          </Typography>
            {currentDisplayedEvents.map((event) => (
              <CardStyled key={event.id} onClick={() => handleOpenModal(event.id)}>
                <CardContent>
                  <Typography variant="h5">{event.title}</Typography>
                  <Typography>Date: {event.date}</Typography>
                  <Typography>{event.description}</Typography>
                </CardContent>
              </CardStyled>
              
            ))}
            {openModal && currentIndex !== null && (
            <EventModal
              open={openModal}
              onClose={() => setOpenModal(false)}
              title={pastEvents[currentIndex]?.title}
              date={pastEvents[currentIndex]?.date}
              time={pastEvents[currentIndex]?.time}
              content={pastEvents[currentIndex]?.description}
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
          )}
                    
        </div>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </div>
    </div>
  );
};

export default Events;
