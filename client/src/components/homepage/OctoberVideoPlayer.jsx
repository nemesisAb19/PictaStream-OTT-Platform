// src/components/VideoPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';
import './OctoberVideoPlayer.css'; // Create this CSS file for styling

const OctoberVideoPlayer = ({ videoUrl, onBack }) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  // Handle resolution change
  /*const changeResolution = (resolutionUrl) => {
    const currentTime = videoRef.current.currentTime;
    videoRef.current.src = resolutionUrl;
    videoRef.current.currentTime = currentTime;
    videoRef.current.play();
  };*/

  // Handle keyboard events for fullscreen and escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);


  return (
    <div className="october-video-player">
      <video ref={videoRef} src={"/Videos/october.mp4"} controls className="october-video-element">
        {/* <source src={"/Videos/apurva.mp4"} type="video/mp4" /> */}
        {/* Add captions if available */}
        <track label="English" kind="subtitles" srcLang="en" src="/path/to/captions.vtt" />
      </video>

      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        <i className="fas fa-arrow-left"></i>
      </button>

      {/* Fullscreen Button */}
      <button className="fullscreen-button" onClick={toggleFullscreen}>
        {isFullscreen ? <i className="fas fa-compress"></i> : <i className="fas fa-expand"></i>}
      </button>
      
    </div>
  );
};

export default OctoberVideoPlayer;
