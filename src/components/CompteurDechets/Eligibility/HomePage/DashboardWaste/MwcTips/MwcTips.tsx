import React from "react";
import "./mwc-tips.scss";
import { useGetThreeRandomTipsQuery } from "../../../../../../graphql/codegen/generated-types";
import CommonBlockHeading from "../../../../../Common/CommonBlockHeading/CommonBlockHeading";
import { EEditoTypeRoutes } from "../../../../../../lib/edito-content";
import TipCard from "../../../../../Blocks/QuizAndTipsBlock/TipCard/TipCard";
import { useContract } from "../../../../../../hooks/useContract";

export default function MwcTips() {
  const { contractId } = useContract();

  const { data } = useGetThreeRandomTipsQuery({
    variables: {
      contractId: contractId,
    },
  });

  return (
    <>
      {data?.getThreeRandomTips && data?.getThreeRandomTips?.length > 0 && (
        <div className="c-MwcTips">
          <div className="c-MwcTips__Title">
            <CommonBlockHeading titleContent="Astuces" />
          </div>
          <div className="c-MwcTips__Tips">
            {data?.getThreeRandomTips?.map((tip, index) => (
              <TipCard
                key={index}
                href={`/${EEditoTypeRoutes.tip}/${tip?.originalId || ""}`}
                content={tip?.shortDescription || ""}
                linkLabel="En savoir plus"
                pictoUrl={tip?.image?.url || ""}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
