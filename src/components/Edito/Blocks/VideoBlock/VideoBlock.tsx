import classNames from "classnames";
import parse from "html-react-parser";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { makePublicAssetPath } from "../../../../lib/utilities";
import "./video-block.scss";

interface IVideoBlockProps {
  videoLink: string;
  transcriptText?: string;
  hasMaxWith?: boolean;
}

export default function VideoBlock({
  videoLink,
  transcriptText,
  hasMaxWith,
}: IVideoBlockProps) {
  /* Static Data */
  const labelButtons = {
    displayTranscriptText: "Masquer la transcription textuelle de la vidéo",
    hiddenTranscriptText: "Lire la transcription textuelle de la vidéo",
  };
  const errorMessage = "L'URL de la vidéo est invalide";

  /* Methods */
  function onToggleDisplayVideo() {
    setIsDisplayTranscriptVideo(!isDisplayTranscriptVideo);
  }

  /* Local Data */
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  const [isDisplayTranscriptVideo, setIsDisplayTranscriptVideo] =
    useState<boolean>(false);
  const parsedHtml = transcriptText ? parse(transcriptText, {}) : null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const videoBlockClasses = classNames({
    hasMaxWith: hasMaxWith,
  });
  return ReactPlayer.canPlay(videoLink) ? (
    <div className="c-VideoBlock">
      <div
        className={`c-VideoBlock__WrapperPlayer ${
          videoBlockClasses && "c-VideoBlock_hasMaxWith"
        }`}
      >
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
      {parsedHtml && (
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
              : labelButtons.hiddenTranscriptText}
          </button>
          <div
            className={classNames("c-VideoBlock__TranscriptText", {
              "c-VideoBlock__TranscriptText_toggle": !isDisplayTranscriptVideo,
            })}
          >
            <div className="c-VideoBlock__Line" />
            <div className="c-VideoBlock__Text">{parsedHtml}</div>
          </div>
        </div>
      )}
    </div>
  ) : (
    //TODO A definir par SUEZ
    <span className="c-VideoBlock__BadUrl">{errorMessage}</span>
  );
}
