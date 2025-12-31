import { Volume2Icon, VolumeOffIcon } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import mySound from "../images/tablabg.mp3";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = muted;
    if (!audio.paused) return;
    audio.play().catch(() => {});
  }, [muted]);
  // Try to play on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true;
      audio.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <button onClick={() => setMuted((prev) => !prev)}>
        {muted ? <VolumeOffIcon /> : <Volume2Icon />}
      </button>
      <audio id="audio_tag" ref={audioRef} src={mySound} autoPlay loop />
    </>
  );
};

export default AudioPlayer;
