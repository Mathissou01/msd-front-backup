import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import EditoCard from "./EditoCard/EditoCard";
import "./edito-block.scss";
import { EditoBlockEntity } from "../../../graphql/codegen/generated-types";

interface IEditoBlockProps {
  data: EditoBlockEntity;
}

export default function EditoBlock({ data }: IEditoBlockProps) {
  /* Static Data */
  // const titleContent = "Ce mois-ci : limitons le gaspillage alimentaire";
  const defaultImage = "/images/images-temp/default_editoCard.svg";
  const tagLabel = "Actualité";
  const title =
    "Bon à manger ou bon à jeter ? Savoir analyser les produits et les étiquettes";

  /* Local Data */

  return (
    <section className="c-EditoBlock">
      <CommonBlockHeading titleContent={data.attributes?.titleContent ?? ""} />

      <div className="c-EditoBlock__Content">
        <EditoCard
          key="1"
          tagLabel={tagLabel}
          title={title}
          imageUrl={defaultImage}
        />
        <EditoCard
          key="2"
          tagLabel={tagLabel}
          title={title}
          imageUrl={defaultImage}
        />
        <EditoCard
          key="3"
          tagLabel={tagLabel}
          title={title}
          imageUrl={defaultImage}
        />
      </div>
    </section>
  );
}
