import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./waste-family-items.scss";

interface WasteFamilyProps {
  name: string;
  picto: string;
  alt: string;
  href?: string;
}

export default function WasteFamilyItems({
  name,
  picto,
  alt,
  href,
}: WasteFamilyProps) {
  /* Static data */
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true); // If missing picto
  };
  const defaultpicto = "/"; // TODO : Default picto

  const [hasHref, setHasHref] = useState<boolean>(false);

  useEffect(() => {
    if (href) {
      setHasHref(true);
    } else {
      setHasHref(false);
    }
  }, [href]);
  return (
    <>
      {hasHref ? (
        <Link className="c-WasteFamillyItems" href={href ?? "/"}>
          <div className="c-WasteFamillyItems__Item">
            <span className="c-WasteFamillyItems__Name">{name}</span>
            <div className="o-Blob c-WasteFamillyItems__ContentPicto">
              {!imageError && (
                <Image
                  className="c-WasteFamillyItems__Picto"
                  src={picto || defaultpicto}
                  alt={alt}
                  width={45}
                  height={45}
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
        </Link>
      ) : (
        <div className="c-WasteFamillyItems">
          <div className="c-WasteFamillyItems__Item">
            <span className="c-WasteFamillyItems__Name">{name}</span>
            <div className="o-Blob c-WasteFamillyItems__ContentPicto">
              {!imageError && (
                <Image
                  className="c-WasteFamillyItems__Picto"
                  src={picto || defaultpicto}
                  alt={alt}
                  width={45}
                  height={45}
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
