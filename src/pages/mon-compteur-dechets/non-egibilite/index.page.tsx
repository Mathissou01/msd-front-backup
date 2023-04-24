import { useRouter } from "next/router";
import CommonButton from "../../../components/Common/CommonButton/CommonButton";
import "./non-eligibilite-page.scss";

export default function ActualitesPage() {
  const router = useRouter();

  const firstText =
    "Malheuresement, le compteur déchets n'est pas encore disponible pour vous";
  const secondText =
    " mais vous pouvez accéder à dautres services et conseils pour mieux comprendre et améliorer la gestion de vos déchets !";

  const formLabels = {
    submitButtonLabel: "J'accède à l'accueil",
  };

  return (
    <div className="c-NonEligibilitePage">
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
