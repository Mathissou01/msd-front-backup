import React from "react";
import Logo from "public/images/pictos-temp/logo_community.svg";
import Link from "next/link";

export default function LogoCommunity() {
  return (
    <Link className="c-LogoCommunity" href={"/"} data-testid="logo-community">
      <Logo />
    </Link>
  );
}
