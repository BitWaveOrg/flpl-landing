'use client';

import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default function ShowcaseReel() {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      height: 500,
      width: 400,
      sources: [
        {
          src: '/videos/showcase_reel.mp4',
          type: 'video/mp4',
        },
      ],
    });

    player.volume(0.2);

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin custom-video-size" />
    </div>
  );
}
