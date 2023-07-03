import Link from "next/link";
import React from "react";
import UserAvatar from "public/images/pictos/avatar.svg";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import "./header-link-user.scss";

export default function HeaderLinkUser() {
  const { currentUser } = useCurrentUser();

  return (
    <Link
      className="c-HeaderLinkUser"
      href={currentUser ? "/mon-compte" : "/connexion"}
    >
      <div className="c-HeaderLinkUser__Circle">
        <UserAvatar />
      </div>
    </Link>
  );
}
