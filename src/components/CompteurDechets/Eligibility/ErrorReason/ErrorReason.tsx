import React from "react";
import "./error-reason.scss";

const ErrorReason = () => {
  return (
    <div className="c-ErrorReason">
      <p className="c-ErrorReason__Text">
        <strong>Il peut y avoir plusieurs raisons à cela</strong>
      </p>
      <ul>
        <li>
          <strong>Une erreur de saisie</strong> dans votre adresse
        </li>
        <li>
          <strong>
            Un membre de votre foyer possède un compte Mon Service Déchet
          </strong>
          {" et l'accès à ce compteur"}
        </li>
        <li>
          <strong>
            {
              "Une autre personne s'est associée par erreur à vos bacs de déchets"
            }
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default ErrorReason;
