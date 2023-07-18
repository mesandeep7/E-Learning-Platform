import React, { useState, useEffect, useRef } from 'react';
import './VideoComponent.css';
import video1 from './VID20230629163627 (1).mp4';

function VideoPlayer() {
  const [isPaused, setPaused] = useState(true);
  const [isFullScreen, setFullScreen] = useState(false);
  const [isTheaterMode, setTheaterMode] = useState(false);
  const [isMiniPlayer, setMiniPlayer] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [isCaptionsVisible, setCaptionsVisible] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [volumeLevel, setVolumeLevel] = useState('high');
  const [isScrubbing, setScrubbing] = useState(false);
  const [previewImgSrc, setPreviewImgSrc] = useState('');
  const videoRef = useRef(null);
  const timelineContainerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('loadeddata', () => {
      setTotalTime(video.duration);
    });

    video.addEventListener('timeupdate', () => {
      setCurrentTime(video.currentTime);
    });

    video.addEventListener('volumechange', () => {
      setVolume(video.volume);
      setMuted(video.muted);
      let level;
      if (video.muted || video.volume === 0) {
        level = 'muted';
      } else if (video.volume >= 0.5) {
        level = 'high';
      } else {
        level = 'low';
      }
      setVolumeLevel(level);
    });

    return () => {
      video.removeEventListener('loadeddata', () => {});
      video.removeEventListener('timeupdate', () => {});
      video.removeEventListener('volumechange', () => {});
    };
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setPaused(video.paused);
  }

  function toggleFullScreenMode() {
    const container = videoRef.current?.parentElement;
    if (container) {
      if (!document.fullscreenElement) {
        container.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setFullScreen(!isFullScreen);
    }
  }

  function toggleTheaterMode() {
    setTheaterMode(!isTheaterMode);
  }

  function toggleMiniPlayerMode() {
    const video = videoRef.current;
    if (video) {
      if (!isMiniPlayer) {
        video.requestPictureInPicture();
      } else {
        document.exitPictureInPicture();
      }
      setMiniPlayer(!isMiniPlayer);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  }

  function toggleCaptions() {
    setCaptionsVisible(!isCaptionsVisible);
  }

  function changePlaybackSpeed() {
    let newPlaybackSpeed = playbackSpeed + 0.25;
    if (newPlaybackSpeed > 2) {
      newPlaybackSpeed = 0.25;
    }
    const video = videoRef.current;
    if (video) {
      video.playbackRate = newPlaybackSpeed;
      setPlaybackSpeed(newPlaybackSpeed);
    }
  }

  function handleVolumeChange(event) {
    const newVolume = parseFloat(event.target.value);
    const video = videoRef.current;
    if (video) {
      video.volume = newVolume;
    }
    setVolume(newVolume);
  }

  function handleTimelineClick(event) {
    const timelineWidth = timelineContainerRef.current.offsetWidth;
    const clickPositionX = event.pageX - timelineContainerRef.current.getBoundingClientRect().left;
    const progressPosition = clickPositionX / timelineWidth;
    const video = videoRef.current;
    if (video) {
      video.currentTime = video.duration * progressPosition;
    }
  }

  function handleTimelineMouseMove(event) {
    if (isScrubbing) {
      const timelineWidth = timelineContainerRef.current.offsetWidth;
      const clickPositionX = event.pageX - timelineContainerRef.current.getBoundingClientRect().left;
      const progressPosition = clickPositionX / timelineWidth;
      const video = videoRef.current;
      if (video) {
        video.currentTime = video.duration * progressPosition;
      }
    }
  }

  function handleTimelineMouseDown() {
    setScrubbing(true);
  }

  function handleTimelineMouseUp() {
    setScrubbing(false);
  }

  function handleThumbnailMouseEnter(event) {
    const thumbnailSrc = event.target.getAttribute('data-thumbnail-src');
    setPreviewImgSrc(thumbnailSrc);
  }

  function handleThumbnailMouseLeave() {
    setPreviewImgSrc('');
  }

  return (
    <div className={`video-container${isTheaterMode ? ' theater' : ''}${isFullScreen ? ' full-screen' : ''}`}>
      <video ref={videoRef} className={isPaused ? 'paused' : ''} onClick={togglePlay}>
        <source src={video1} type="video/mp4" />
      </video>

      <div className="video-controls-container">
        <div className="controls">
          <button className="play-btn" onClick={togglePlay}>
            <span className={`play-icon${isPaused ? '' : ' paused'}`}></span>
            <span className={`pause-icon${isPaused ? ' paused' : ''}`}></span>
          </button>
          <button className="full-screen-btn" onClick={toggleFullScreenMode}></button>
          <button className="theater-btn" onClick={toggleTheaterMode}></button>
          <button className="mini-player-btn" onClick={toggleMiniPlayerMode}></button>
          <button className={`volume-btn${isMuted ? ' muted' : ''}`} onClick={toggleMute}></button>
          <div className="volume-container">
            <input
              type="range"
              className="volume-slider"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
          <button className={`captions-btn${isCaptionsVisible ? ' active' : ''}`} onClick={toggleCaptions}></button>
          <button className="playback-speed-btn" onClick={changePlaybackSpeed}>
            {playbackSpeed}x
          </button>
          <div className="duration-container">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(totalTime)}</span>
          </div>
        </div>
        <div
          className="timeline-container"
          ref={timelineContainerRef}
          onClick={handleTimelineClick}
          onMouseMove={handleTimelineMouseMove}
          onMouseDown={handleTimelineMouseDown}
          onMouseUp={handleTimelineMouseUp}
        >
          <div className="timeline">
            <div className="thumb-indicator"></div>
            {previewImgSrc && <img className="preview-img" src={previewImgSrc} alt="Preview" />}
            <div className="timeline-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export default VideoPlayer;
