import React from "react";
import "./error-reason.scss";
interface ErrorReasonProps {
  isNoBinsLinked: boolean;
}

const ErrorReason: React.FC<ErrorReasonProps> = ({
  isNoBinsLinked = false,
}) => {
  return (
    <div className="c-ErrorReason">
      <p className="c-ErrorReason__Text">
        <strong>Il peut y avoir plusieurs raisons à cela :</strong>
      </p>
      {isNoBinsLinked ? (
        <ul>
          <li>
            Vos bacs n&apos;ont pas encore &eacute;t&eacute;
            &eacute;quip&eacute;s de capteurs
          </li>
          <li>
            <strong>
              Votre adresse n&apos;est pas encore correctement
              r&eacute;f&eacute;renc&eacute;e
            </strong>
            {` par nos services`}
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <strong>Une erreur de saisie</strong> dans votre adresse
          </li>
          <li>
            <strong>
              Un membre de votre foyer possède un compte Mon Service Déchet
            </strong>
            {` et l'accès à ce compteur`}
          </li>
          <li>
            <strong>
              Une autre personne s&apos;est associ&eacute;e par erreur &agrave;
              vos bacs de d&eacute;chets
            </strong>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ErrorReason;
