import Link from "next/link";
import React from "react";
import UserAvatar from "public/images/pictos/avatar.svg";
import "./header-link-user.scss";

export default function HeaderLinkUser() {
  return (
    <Link className="c-HeaderLinkUser" href={"/"}>
      <div className="c-HeaderLinkUser__Circle">
        <UserAvatar />
      </div>
    </Link>
  );
}
