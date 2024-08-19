
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const VerticalSliderWithCards = ({ cards, interval = 3000 }) => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);

  // Automatically scroll the container
  useEffect(() => {
    const container = containerRef.current;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;

    const scrollInterval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + clientHeight;

        // Reset to top if the scroll reaches the bottom
        if (newPosition >= scrollHeight) {
          container.scrollTo(0, 0);
          return 0;
        }

        // Scroll to the next position
        container.scrollTo({
          top: newPosition,
          behavior: 'smooth',
        });

        return newPosition;
      });
    }, interval);

    return () => clearInterval(scrollInterval); // Cleanup interval on component unmount
  }, [interval]);

  return (
    <div style={{ height: '400px', width: '300px', position: 'relative', overflow: 'hidden' }}>
      <div
        ref={containerRef}
        style={{ height: '100%', overflowY: 'hidden', overflowX: 'hidden', paddingRight: '15px' }}
      >
        {cards.map((card, index) => (
          <Card key={index} style={{ marginBottom: '10px', width: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

VerticalSliderWithCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  interval: PropTypes.number, // Optional: Allows you to adjust the scroll interval
};

export default VerticalSliderWithCards;

// import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
// import '../styles/vertical_slider.css'; // Make sure to create this file for styling
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// // Define the component and its prop types
// const VerticalSliderWithCards = ({ cards }) => {
//   const [position, setPosition] = useState(0);
//   const containerRef = useRef(null);

//   const handleScroll = () => {
//     const container = containerRef.current;
//     const scrollPercentage = container.scrollTop / (container.scrollHeight - container.clientHeight);
//     setPosition(scrollPercentage * 100);
//   };

//   return (
//     <div style={{ height: '400px', width: '300px', position: 'relative', overflow: 'hidden' }}>
//       <div
//         ref={containerRef}
//         className="vertical-slider-container"
//         onScroll={handleScroll}
//         style={{ height: '100%', overflowY: 'scroll', overflowX: 'hidden' }}
//       >
//         {cards.map((card, index) => (
//           <Card key={index} style={{ margin: '10px', width: '100%' }}>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 {card.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {card.description}
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//       <div
//         className="slider-thumb"
//         style={{
//           position: 'absolute',
//           right: 0,
//           top: `${position}%`,
//           width: '20px',
//           height: '20px',
//           backgroundColor: '#000',
//           transform: 'translateY(-50%)',
//         }}
//       />
//     </div>
//   );
// };

// // Define default props and prop types
// VerticalSliderWithCards.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default VerticalSliderWithCards;



// import React, { useState, useRef } from 'react';
// import '../styles/vertical_slider.css'; // Make sure to create this file for styling
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// const VerticalSliderWithCards = () => {
//   const [position, setPosition] = useState(0);
//   const containerRef = useRef(null);

//   const handleScroll = (event) => {
//     const container = containerRef.current;
//     const scrollPercentage = event.target.scrollTop / (container.scrollHeight - container.clientHeight);
//     setPosition(scrollPercentage * 100);
//   };

//   return (
//     <div style={{ height: '400px', display: 'flex', position: 'relative' }}>
//       <div
//         ref={containerRef}
//         className="vertical-slider-container"
//         onScroll={handleScroll}
//         style={{ width: '200px', overflowY: 'scroll' }}
//       >
//         {[1, 2, 3].map((item) => (
//           <Card key={item} style={{ marginBottom: '10px' }}>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 Card {item}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Some description for card {item}.
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//       <div
//         className="slider-thumb"
//         style={{
//           position: 'absolute',
//           right: 0,
//           top: `${position}%`,
//           width: '20px',
//           height: '20px',
//           backgroundColor: '#000',
//           transform: 'translateY(-50%)',
//         }}
//       />
//     </div>
//   );
// };

// export default VerticalSliderWithCards;
