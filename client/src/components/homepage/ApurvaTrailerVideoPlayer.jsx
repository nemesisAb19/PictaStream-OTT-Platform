import React, { useRef, useEffect } from 'react';
import './ApurvaTrailerVideoPlayer.css';

const VideoPlayer = ({ videoUrl, onBack }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="apurva-trailer-video-player">
      <video ref={videoRef} controls>
        <source src={"/Videos/apurva.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onBack} className="back-button">Back</button>
    </div>
  );
};

export default VideoPlayer;

