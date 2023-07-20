import { useEffect, useState } from "react";
import {
  RequestEntity,
  useGetRequestByIdLazyQuery,
  useGetRequestsByRequestAggregateIdLazyQuery,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import { E_LEVEL_TYPE, ILevel, ILevelDatas } from "../../../lib/request";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonSpinner from "../../Common/CommonSpinner/CommonSpinner";
import RequestLevelGroup from "../RequestLevelGroup/RequestLevelGroup";

interface IRequestLevelsProps {
  firstLevelDatas: Array<ILevelDatas>;
  setAllSelectedCards: (allSelectedCards: boolean) => void;
  setCurrentRequest: (request: RequestEntity) => void;
}

export default function RequestLevels({
  firstLevelDatas,
  setAllSelectedCards,
  setCurrentRequest,
}: IRequestLevelsProps) {
  const labels = {
    requestFirstLevel: "Votre demande concerne *",
    requestSecondLevel: "Merci de préciser *",
    requestThirdLevel: "Type de demande *",
  };

  const [firstLevel, setFirstLevel] = useState<ILevel>({
    id: "",
    levelNumber: -1,
    type: E_LEVEL_TYPE.NOTHING,
  });
  const [secondLevel, setSecondLevel] = useState<ILevel>({
    id: "",
    levelNumber: -1,
    type: E_LEVEL_TYPE.NOTHING,
  });
  const [thirdLevel, setThirdLevel] = useState<ILevel>({
    id: "",
    levelNumber: -1,
    type: E_LEVEL_TYPE.NOTHING,
  });

  const [
    getRequestsByAggregateId,
    { data: requestsData, loading: requestsLoading },
  ] = useGetRequestsByRequestAggregateIdLazyQuery();

  const [getRequestById, { data, loading }] = useGetRequestByIdLazyQuery();

  const handleLevelClick = (idLevel: string, levelType: E_LEVEL_TYPE) => {
    if (
      (firstLevel.id === idLevel && firstLevel.type === levelType) ||
      (secondLevel.id === idLevel && secondLevel.type === levelType)
    ) {
      return;
    }
    switch (levelType) {
      case E_LEVEL_TYPE.AGGREGATE:
        setFirstLevel({ id: idLevel, levelNumber: 1, type: levelType });
        setSecondLevel({ id: "", levelNumber: -1, type: E_LEVEL_TYPE.NOTHING });
        setThirdLevel({ id: "", levelNumber: -1, type: E_LEVEL_TYPE.NOTHING });
        getRequestsByAggregateId({
          variables: { requestAggregateId: idLevel },
        });
        getRequestById({
          variables: { requestId: "-1" },
        });
        setAllSelectedCards(false);
        break;
      case E_LEVEL_TYPE.REQUEST_WITHOUT_AGGREGATE:
        setFirstLevel({ id: idLevel, levelNumber: 1, type: levelType });
        setSecondLevel({ id: "", levelNumber: -1, type: E_LEVEL_TYPE.NOTHING });
        setThirdLevel({ id: "", levelNumber: -1, type: E_LEVEL_TYPE.NOTHING });
        getRequestById({
          variables: { requestId: idLevel },
        });
        setAllSelectedCards(false);
        break;
      case E_LEVEL_TYPE.REQUEST:
        setSecondLevel({ id: idLevel, levelNumber: 2, type: levelType });
        setThirdLevel({ id: "", levelNumber: -1, type: E_LEVEL_TYPE.NOTHING });
        getRequestById({
          variables: { requestId: idLevel },
        });
        setAllSelectedCards(false);
        break;
      case E_LEVEL_TYPE.REQUEST_TYPE:
        setThirdLevel({ id: idLevel, levelNumber: 3, type: levelType });
        setAllSelectedCards(true);
        break;
    }
  };

  useEffect(() => {
    if (
      data &&
      data.request &&
      data.request.data &&
      data.request.data.id &&
      data.request.data.attributes
    ) {
      setCurrentRequest(data.request.data);
    }
  }, [data, setCurrentRequest]);

  return (
    <div className="c-RequestLevels">
      <CommonBlockHeading titleContent={labels.requestFirstLevel} isAlignLeft />
      <RequestLevelGroup
        level={firstLevel}
        handleClickLevel={handleLevelClick}
        datas={firstLevelDatas}
      />
      {requestsData &&
        requestsData.requests &&
        requestsData.requests.data &&
        requestsData.requests.data.length >= 1 &&
        firstLevel &&
        firstLevel.type === E_LEVEL_TYPE.AGGREGATE &&
        firstLevel.id && (
          <>
            {requestsLoading ? (
              <CommonSpinner />
            ) : (
              <>
                <CommonBlockHeading
                  titleContent={labels.requestSecondLevel}
                  isAlignLeft
                />
                <RequestLevelGroup
                  level={secondLevel}
                  handleClickLevel={handleLevelClick}
                  datas={requestsData.requests.data
                    .map((requestData) => {
                      if (
                        requestData &&
                        requestData.id &&
                        requestData.attributes &&
                        requestData.attributes.name
                      )
                        return {
                          id: requestData.id,
                          name: requestData.attributes?.name,
                          type: E_LEVEL_TYPE.REQUEST,
                        };
                    })
                    .filter(removeNulls)}
                />
                {loading ? (
                  <CommonSpinner />
                ) : (
                  <>
                    {data &&
                      data.request &&
                      data.request.data &&
                      data.request.data.id &&
                      data.request.data.attributes &&
                      secondLevel &&
                      secondLevel.type === E_LEVEL_TYPE.REQUEST &&
                      secondLevel.id && (
                        <>
                          <CommonBlockHeading
                            titleContent={labels.requestThirdLevel}
                            isAlignLeft
                          />
                          <RequestLevelGroup
                            level={thirdLevel}
                            handleClickLevel={handleLevelClick}
                            datas={
                              data.request.data.attributes.requestType
                                ?.map((requestType) => {
                                  if (
                                    requestType &&
                                    requestType.id &&
                                    requestType.title
                                  )
                                    return {
                                      id: requestType.id,
                                      name: requestType.title,
                                      type: E_LEVEL_TYPE.REQUEST_TYPE,
                                    };
                                })
                                .filter(removeNulls) ?? []
                            }
                          />
                        </>
                      )}
                  </>
                )}
              </>
            )}
          </>
        )}
      {loading ? (
        <CommonSpinner />
      ) : (
        <>
          {data &&
            data.request &&
            data.request.data &&
            data.request.data.id &&
            data.request.data.attributes &&
            firstLevel &&
            firstLevel.type === E_LEVEL_TYPE.REQUEST_WITHOUT_AGGREGATE &&
            firstLevel.id && (
              <>
                <CommonBlockHeading
                  titleContent={labels.requestThirdLevel}
                  isAlignLeft
                />
                <RequestLevelGroup
                  level={thirdLevel}
                  handleClickLevel={handleLevelClick}
                  datas={
                    data.request.data.attributes.requestType
                      ?.map((requestType) => {
                        if (requestType && requestType.id && requestType.title)
                          return {
                            id: requestType.id,
                            name: requestType.title,
                            type: E_LEVEL_TYPE.REQUEST_TYPE,
                          };
                      })
                      .filter(removeNulls) ?? []
                  }
                />
              </>
            )}
        </>
      )}
    </div>
  );
}
