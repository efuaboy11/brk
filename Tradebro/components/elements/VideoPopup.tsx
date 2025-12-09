'use client';

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type VideoModalProps = {
  src: string;
};

export default function VideoModal({ src }: VideoModalProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Wait until component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const popupContent = (
    <section className="video-popup-section">
      <div className="video-container">
        <iframe
          src={src}
          title="my video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        <button
          onClick={() => setIsOpen(false)}
          className="close-btn"
          aria-label="Close Video"
        >
          ✕
        </button>
      </div>
    </section>
  );

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="play-btn" aria-label="Play Video">
        <span className="fa fa-play"></span>
        <i className="ripple"></i>
      </div>

      {mounted && isOpen && createPortal(popupContent, document.body)}
    </>
  );
}
