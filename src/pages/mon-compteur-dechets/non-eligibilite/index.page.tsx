import { useRouter } from "next/router";
import CommonMeta from "../../../components/Common/CommonMeta/CommonMeta";
import CommonButton from "../../../components/Common/CommonButton/CommonButton";
import "./non-eligibilite-page.scss";

export default function ActualitesPage() {
  /* Static Data */
  const pageTitle = "Non éligibilité";
  const firstText =
    "Malheureusement, le compteur déchets n'est pas encore disponible pour vous";
  const secondText =
    " mais vous pouvez accéder à d'autres services et conseils pour mieux comprendre et améliorer la gestion de vos déchets !";
  const formLabels = {
    submitButtonLabel: "J'accède à l'accueil",
  };

  /* External Data */
  const router = useRouter();

  return (
    <div className="c-NonEligibilitePage">
      <CommonMeta title={pageTitle} />
      <div className="c-NonEligibilitePage__Illustration">
        <div className="c-NonEligibilitePage__Fonctionality">
          <p className="c-NonEligibilitePage__Title">{firstText}</p>
          <div className="c-NonEligibilitePage__ImageSvg" />
          <p className="c-NonEligibilitePage__SecondText">{secondText}</p>
          <div className="c-NonEligibilitePage__Buttons">
            <CommonButton
              type="submit"
              label={formLabels.submitButtonLabel}
              style="primary"
              onClick={() => router.push(`/`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
