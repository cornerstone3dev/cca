import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

// Styling for the modal box
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const EventModal = ({ open, onClose, title, date, time, location, content, footer }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        {/* Modal Title */}
        {title && (
          <Typography id="modal-title" variant="h4" component="h2">
            {title}
          </Typography>
        )}
        <hr style={{ border: "1px solid #d9d9d9"}}/>
        {date && (
          <Typography id="modal-date" variant="h5" component="h2">
            {date}
          </Typography>
        )}
        {time && (
          <Typography id="modal-time" variant="h6" component="h2">
            {time}
          </Typography>
        )}
        {location && (
          <Typography id="modal-location" variant="subtitle1" component="h2">
            {location}
          </Typography>
        )}

        {/* Modal Content */}
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {content}
        </Typography>

        {/* Footer (e.g., buttons) */}
        <Box sx={{ mt: 3, textAlign: "right" }}>{footer}</Box>
      </Box>
    </Modal>
  );
};

// Prop type validation
EventModal.propTypes = {
  open: PropTypes.bool.isRequired, // Controls the visibility of the modal
  onClose: PropTypes.func.isRequired, // Callback to close the modal
  title: PropTypes.string, // Optional title for the modal
  date: PropTypes.string, // Optional date for the modal
  time: PropTypes.string, // Optional time for the modal
  location: PropTypes.string, // Optional location for the modal
  content: PropTypes.node, // Content for the modal
  footer: PropTypes.node, // Footer for the modal (e.g., buttons)
};

export default EventModal;
