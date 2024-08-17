
// src/components/YouTubePlayer.js
import React from 'react';
import ReactPlayer from 'react-player/youtube';

const YouTubePlayer = () => {
  const url =  'https://www.youtube.com/watch?v=oML318lE_bQ';

  return (
    <div style={styles.container}>
      <ReactPlayer
        url={url}
        controls={true}
        playing={true}
        loop={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'left',
    width: '30%',
    height: '30%',
    position: 'absolute',
    top: '50%',
    left: '20%',  //adjust position to the left
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black', // Optional: Add a background color
  },
};

export default YouTubePlayer;



//============================ USAGE============================//
// import React from 'react';
// import YouTubePlayer from './components/YouTubePlayer';

// function App() {
//   return (
//     <div style={styles.app}>
//       <YouTubePlayer />
//     </div>
//   );
// }

// const styles = {
//   app: {
//     height: '100vh',
//     backgroundColor: '#f0f0f0', // Optional: Background color for the entire screen
//     margin: 0,
//   },
// };

// export default App;
//============================ USAGE============================//




// src/components/YouTubePlayer.js
// import React, { useState } from 'react';
// import ReactPlayer from 'react-player/youtube';

// const YouTubePlayer = () => {
//   const [url, setUrl] = useState('');

//   const handleChange = (e) => {
//     setUrl(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter YouTube URL"
//         value={url}
//         onChange={handleChange}
//         style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
//       />
//       <ReactPlayer url={url} controls={true} width="100%" />
//     </div>
//   );
// };

// export default YouTubePlayer;
