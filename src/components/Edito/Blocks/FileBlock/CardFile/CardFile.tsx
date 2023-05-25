import React from "react";
import Image from "next/image";
import axios from "axios";
import fileDownload from "js-file-download";
import "./card-file.scss";

interface ICardProps {
  title: string;
  extension: string;
  size: string;
  url: string;
}

export default function CardFile({ title, extension, size, url }: ICardProps) {
  const handleDownload = async () => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, title);
      });
  };

  return (
    <div className="c-CardFile">
      <div className="c-CardFile__Informations">
        <div className="c-CardFile__InformationsTitle">{title}</div>
        <div className="c-CardFile__InformationsDetails">
          {extension.slice(1, extension.length)}, {size}
        </div>
      </div>

      <button className="c-CardFile__Button" onClick={handleDownload}>
        <Image
          src={"/images/pictos/download.svg"}
          alt={"picto download"}
          width={38}
          height={39}
        />
      </button>
    </div>
  );
}
