import React from "react";
import Image from "next/image";
import axios from "axios";
import fileDownload from "js-file-download";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./memo-tri-block.scss";

interface IMemoTriBlockProps {
  memoName: string;
  memoDesc: string;
  memoImg: string;
  memoFileName: string;
  memoFileUrl: string;
}

export default function MemoTriBlock({
  memoName,
  memoDesc,
  memoImg,
  memoFileName,
  memoFileUrl,
}: IMemoTriBlockProps) {
  /* Static properties */
  const handleDownload = async () => {
    axios
      .get(memoFileUrl, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, memoFileName);
      });
  };

  return (
    <div className="c-MemoTriBlock">
      <div className="c-MemoTriBlock__CardAstuce">
        <div className="o-Blob c-MemoTriBlock__Image">
          <Image
            src={memoImg ?? ""}
            alt="ImgMemoTri"
            width="232"
            height="158"
            className="c-MemoTriBlock__PreviewImage"
          />
        </div>
        <div className="o-Blob c-MemoTriBlock__ContentDescription">
          <div className="c-MemoTriBlock__Text">
            <h3 className="c-MemoTriBlock__Title">{memoName}</h3>
            <p className="c-MemoTriBlock__Description">{memoDesc}</p>
          </div>
          <div className="c-MemoTriBlock__Button">
            <CommonButton
              label="Télécharger le Mémo-tri"
              onClick={handleDownload}
            />
          </div>
          <div className="o-Blob c-MemoTriBlock__Blob" />
        </div>
      </div>
    </div>
  );
}
