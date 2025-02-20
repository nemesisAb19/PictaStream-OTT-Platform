// src/components/VideoPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';
import './BossBabyVideoPlayer.css'; // Create this CSS file for styling

const BossBabyVideoPlayer = ({ videoUrl, onBack }) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  /*const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [captionsEnabled, setCaptionsEnabled] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);*/

  // Toggle play/pause
  /*const togglePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  // Handle volume change
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    videoRef.current.volume = event.target.value;
  };

  // Toggle captions
  const toggleCaptions = () => {
    setCaptionsEnabled(!captionsEnabled);
    const tracks = videoRef.current.textTracks;
    if (tracks.length > 0) {
      tracks[0].mode = captionsEnabled ? 'disabled' : 'showing';
    }
  };*/

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
    <div className="bossbaby-video-player">
      <video ref={videoRef} src={"/Videos/bossbaby.mp4"} controls className="bossbaby-video-element">
        {/* <source src={"/Videos/apurva.mp4"} type="video/mp4" /> */}
        {/* Add captions if available */}
        <track label="English" kind="subtitles" srcLang="en" src="/path/to/captions.vtt" />
      </video>

      {/* <div className="video-controls">
        <button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
        <button onClick={toggleCaptions}>{captionsEnabled ? 'Disable Captions' : 'Enable Captions'}</button>
        <button onClick={() => changeResolution('/path/to/video-720p.mp4')}>720p</button>
        <button onClick={() => changeResolution('/path/to/video-1080p.mp4')}>1080p</button>
        <button onClick={() => changeResolution('/path/to/video-4k.mp4')}>4K</button>
        <button onClick={toggleFullscreen}>{fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</button>
        <button onClick={onBack}>Back</button>
        <a href={videoUrl} download>Download</a>
      </div> */}

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

export default BossBabyVideoPlayer;


