import Link from "next/link";
import React from "react";
import Image from "next/image";
import { makePublicAssetPath } from "../../../../lib/utilities";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import "./header-link-user.scss";

export default function HeaderLinkUser() {
  const { currentUser } = useCurrentUser();
  const userIcon = {
    source: "images/pictos/avatar.svg",
    alternativeText: "Mon compte",
    ariaLabel: "Mon compte",
  };
  return (
    <Link
      className="c-HeaderLinkUser"
      href={currentUser ? "/mon-compte" : "/connexion"}
    >
      <div className="c-HeaderLinkUser__Circle">
        <Image
          src={makePublicAssetPath(userIcon.source)}
          alt={userIcon.alternativeText}
          aria-label={userIcon.ariaLabel}
          width={20}
          height={24}
        />
      </div>
    </Link>
  );
}
