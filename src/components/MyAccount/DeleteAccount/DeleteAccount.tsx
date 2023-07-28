import React from "react";
import CommonOverlay from "../../Common/CommonPopover/CommonOverlay";
import useDeleteUser from "../../../hooks/user/useDeleteUser";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import "./delete-account.scss";

export default function DeleteAccount() {
  const { currentUser } = useCurrentUser();
  const { deleteUser } = useDeleteUser();
  const renderContent = () => {
    return (
      <div className="c-CommonOverlay__Content">
        <p className="c-CommonOverlay__Text">
          Souhaitez-vous vraiment demander la suppression de votre compte?
          <br />
          <br />
          Toutes les données rattachées à votre compte seront supprimées et ne
          pourront être récupérées.
        </p>
      </div>
    );
  };

  return (
    <div className="c-DeleteAccount">
      <CommonOverlay
        button={
          <button className="c-DeleteAccount__Text">
            <p>Supprimer mon compte</p>
          </button>
        }
        content={renderContent}
        isCancelButton={true}
        isBottomButton={true}
        bottomButtonLabel="Confirmer"
        onButtonClick={() => {
          currentUser && deleteUser(currentUser.id);
        }}
      />
    </div>
  );
}
