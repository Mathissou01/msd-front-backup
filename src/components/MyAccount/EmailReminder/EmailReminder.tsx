import React from "react";
import { IUser } from "../../../lib/user";
import "./email-reminder.scss";
import { useRouter } from "next/router";
interface EmailReminderProps {
  user: IUser | null;
}

const EmailReminder: React.FC<EmailReminderProps> = ({ user }) => {
  const router = useRouter();
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
        Vous pouvez modifier vos coordonn&eacute;es dans l&apos;onglet:{" "}
        <button
          className="c-EmailReminder__Link"
          onClick={() =>
            router.push("/mon-compte/?tab=mes-informations-personnelles")
          }
        >
          Mes informations personnelles
        </button>
      </div>
    </div>
  );
};

export default EmailReminder;
