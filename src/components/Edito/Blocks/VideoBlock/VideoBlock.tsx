import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import ReactPlayer from "react-player";
import "./video-block.scss";
import { makePublicAssetPath } from "../../../../lib/utilities";

interface IVideoBlockProps {
  videoLink: string;
  transcriptText?: string;
}

export default function VideoBlock({
  videoLink,
  transcriptText,
}: IVideoBlockProps) {
  /* Static Data */
  const labelButtons = {
    displayTranscriptText: "Masquer la transcription textuelle de la vidéo",
    hidenTranscriptText: "Lire la transcription textuelle de la vidéo",
  };

  /* Local Data */
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  const [isDisplayTranscriptVideo, setIsDisplayTranscriptVideo] =
    useState<boolean>(false);

  function onToggleDisplayVideo() {
    setIsDisplayTranscriptVideo(!isDisplayTranscriptVideo);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return ReactPlayer.canPlay(videoLink) ? (
    <div className="c-VideoBlock">
      <div className="c-VideoBlock__WrapperPlayer">
        {hasWindow && (
          <ReactPlayer
            className="c-VideoBlock__Player"
            url={videoLink}
            width="100%"
            height="100%"
            controls
          />
        )}
      </div>
      {transcriptText && (
        <div className="c-VideoBlock__TranscriptBlock">
          <button
            className="c-VideoBlock__Button"
            onClick={onToggleDisplayVideo}
          >
            <Image
              src={makePublicAssetPath(
                isDisplayTranscriptVideo
                  ? "/images/pictos/view.svg"
                  : "/images/pictos/view-off.svg",
              )}
              alt="picto oeil"
              width="24"
              height="24"
            />
            {isDisplayTranscriptVideo
              ? labelButtons.displayTranscriptText
              : labelButtons.hidenTranscriptText}
          </button>
          <div
            className={classNames("c-VideoBlock__TranscriptText", {
              "c-VideoBlock__TranscriptText_toggle": !isDisplayTranscriptVideo,
            })}
          >
            <div className="c-VideoBlock__Line" />
            <p className="c-VideoBlock__Text">{transcriptText}</p>
          </div>
        </div>
      )}
    </div>
  ) : (
    //TODO A definir par SUEZ
    <span className="c-VideoBlock__BadUrl">
      Url de la video est invalide &#128555;
    </span>
  );
}
