import React from "react";
import Image from "next/image";
import router from "next/router";
import { makePublicAssetPath } from "../../../../lib/utilities";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import { usePopinContext } from "../../PopinContext/PopinContext";
import "./header-link-user.scss";

export default function HeaderLinkUser() {
  const { currentUser } = useCurrentUser();
  const { logout } = useCurrentUser();
  const { openPopinUser, isPopinUserOpen } = usePopinContext();

  const userIcon = {
    source: "/images/pictos/avatar.svg",
    alternativeText: "Mon compte",
    ariaLabel: "Mon compte",
  };

  return (
    <>
      <div
        className="c-HeaderLinkUser"
        onClick={() => {
          openPopinUser();
        }}
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
      </div>
      <div
        className={`c-HeaderLinkUser__PopUp ${
          isPopinUserOpen ? "Visible" : ""
        }`}
      >
        <div className="c-HeaderLinkUser__PopUpHead"></div>
        <div className="c-HeaderLinkUser__PopUpContent">
          <CommonButton
            label={
              currentUser && currentUser !== null ? "Mon profil" : "Connexion"
            }
            style="primary"
            onClick={() => {
              openPopinUser();
              router.push("/mon-compte");
            }}
          />
          {currentUser && currentUser !== null && (
            <CommonButton
              label="Déconnexion"
              onClick={() => {
                logout();
                openPopinUser();
                router.push("/connexion");
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
