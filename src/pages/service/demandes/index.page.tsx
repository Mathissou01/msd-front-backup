import { useState } from "react";
import { GetStaticProps } from "next";
import client from "../../../graphql/client";
import {
  GetRequestsLevelsDocument,
  GetRequestsLevelsQuery,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import { E_LEVEL_TYPE, ILevelDatas } from "../../../lib/request";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import RequestLevels from "../../../components/Request/RequestLevels/RequestLevels";
import "./demandes-page.scss";

interface IRequestLevelProps {
  requestLevels: Array<ILevelDatas>;
}

export default function ServiceDemandesPage({
  requestLevels,
}: IRequestLevelProps) {
  const [allSelectedCards, setAllSelectedCards] = useState<boolean>(false);
  const labels = {
    mandatoryFields: "*Les champs marqués d’une astérisque sont obligatoires.",
  };

  return (
    <section className="c-RequestPage">
      <CommonBreadcrumb
        pages={[
          { label: "Accueil" },
          { label: "Faire une demande", slug: "demandes" },
        ]}
      />

      <div className="c-RequestPage__FirstLevel">
        <p className="c-RequestPage__MandatoryFieldsLabel">
          {labels.mandatoryFields}
        </p>
        {requestLevels && requestLevels.length > 0 ? (
          <RequestLevels
            firstLevelDatas={requestLevels}
            setAllSelectedCards={setAllSelectedCards}
          />
        ) : null}
        {allSelectedCards && <>{/* TODO IN NEXT USs*/}</>}
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps<IRequestLevelProps> = async () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const { data } = await client.query<GetRequestsLevelsQuery>({
    query: GetRequestsLevelsDocument,
    variables: { contractId },
  });

  /* Get all requestAggregates for the contract */
  const requestAggregates =
    data.requestAggregates?.data
      .map((requestAggregate) => {
        if (
          requestAggregate &&
          requestAggregate.id &&
          requestAggregate.attributes &&
          requestAggregate.attributes.name
        )
          return {
            id: requestAggregate.id,
            name: requestAggregate.attributes.name,
            type: E_LEVEL_TYPE.AGGREGATE,
          };
      })
      .filter(removeNulls) ?? [];

  const requests =
    data.requests?.data
      .map((request) => {
        if (
          request &&
          request.id &&
          request.attributes &&
          request.attributes.name
        )
          return {
            id: request.id,
            name: request.attributes.name,
            type: E_LEVEL_TYPE.REQUEST_WITHOUT_AGGREGATE,
          };
      })
      .filter(removeNulls) ?? [];

  const requestLevels = [...requestAggregates, ...requests];

  return {
    props: {
      requestLevels,
    },
  };
};
