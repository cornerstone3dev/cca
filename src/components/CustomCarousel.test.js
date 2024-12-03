import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import CustomCarousel from "./CustomCarousel";
import eventData from "../data/mock_events_data.json";

// Mock EventModal to simplify testing
jest.mock("./EventModal", () => (props) => {
  return props.open ? (
    <div data-testid={`modal-${props.id}`}>
      <h1>{`test-${props.title}`}</h1>
      <p>{`test-${props.content}`}</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  ) : null;
});

describe("CustomCarousel Component", () => {
  const futureEvents = eventData[0].futureEvents;

  test("renders the carousel with the first event", () => {
    render(<CustomCarousel />);

    // Check the first event's title and description are rendered
    expect(screen.getByText(futureEvents[0].title)).toBeInTheDocument();
    expect(screen.getByText(futureEvents[0].date)).toBeInTheDocument();
    expect(screen.getByText(futureEvents[0].time)).toBeInTheDocument();
  });

  test("navigates to the next slide on 'Next' button click", () => {
    render(<CustomCarousel />);

    // Click the "Next" button
    fireEvent.click(screen.getByText("›"));

    // Check that the second event is displayed
    expect(screen.getByText(futureEvents[1].title)).toBeInTheDocument();
    expect(
      screen.getByText(futureEvents[1].description.slice(0, 100) + "...")
    ).toBeInTheDocument();
  });

  test("navigates to the previous slide on 'Prev' button click", () => {
    render(<CustomCarousel />);

    // Click the "Prev" button
    fireEvent.click(screen.getByText("‹"));

    // Check that the last event is displayed (circular navigation)
    const lastEvent = futureEvents[futureEvents.length - 1];
    expect(screen.getByText(lastEvent.title)).toBeInTheDocument();
    expect(
      screen.getByText(lastEvent.description.slice(0, 100) + "...")
    ).toBeInTheDocument();
  });

  test("opens the modal when 'Learn More' is clicked", async () => {
    render(<CustomCarousel />);
  
    // Click the "Learn More" button for the first slide
    fireEvent.click(screen.getByTestId("learn-more-button-0"));

    // Wait for the modal to appear
    const modal = await screen.findByTestId("modal-0");

    // Verify the modal contains the correct content
    expect(modal).toContainElement(screen.getByText("test-" + futureEvents[0].title));
    expect(modal).toContainElement(screen.getByText("test-" + futureEvents[0].description));
  });
  
  test("closes the modal when 'Close' button is clicked", () => {
    render(<CustomCarousel />);
  
    // Open the modal
    fireEvent.click(screen.getByTestId("learn-more-button-0"));
  
    // Close the modal
    fireEvent.click(screen.getByText("Close"));
  
    // Check that the modal is no longer displayed
    expect(screen.queryByTestId("modal-0")).not.toBeInTheDocument();
  });
  
});
