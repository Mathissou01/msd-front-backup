import React, { Dispatch, SetStateAction } from "react";
import { IUser } from "../../../lib/user";
import "./email-reminder.scss";

interface EmailReminderProps {
  user: IUser | null;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const EmailReminder: React.FC<EmailReminderProps> = ({
  user,
  setActiveTab,
}) => {
  return (
    <div className="c-EmailReminder">
      <div className="c-EmailReminder__Content">
        <div className="c-EmailReminder__Text">
          {user?.email ? (
            <p>
              Vous recevrez vos alertes &aacute; l&apos;adresse suivante:{" "}
              <strong>{user.email}</strong>
            </p>
          ) : (
            <strong>
              Vous n&apos;avez pas renseign&eacute; d&apos;adresse email
            </strong>
          )}
        </div>
        <div className="c-EmailReminder__Text">
          {user?.phone ? (
            <p>
              Vous recevrez vos sms au numéro suivant:{" "}
              <strong>{user.phone}</strong>
            </p>
          ) : (
            <strong>
              Vous n&apos;avez pas renseigné de numéro de téléphone
            </strong>
          )}
        </div>
      </div>
      <div className="c-EmailReminder__Text">
        Vous pouvez modifier vos coordonn&eacute;es dans l&apos;onglet:
        <button
          className="c-EmailReminder__Link"
          onClick={() => setActiveTab(0)}
        >
          {" Mes informations personnelles"}
        </button>
      </div>
    </div>
  );
};

export default EmailReminder;
