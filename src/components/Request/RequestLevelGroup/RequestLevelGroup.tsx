import { useEffect } from "react";
import { ILevel, ILevelDatas } from "../../../lib/request";
import { removeNulls } from "../../../lib/utilities";
import RequestLevelCard from "../RequestLevel/RequestLevelCard";

interface IRequestLevelGroupProps {
  level: ILevel;
  datas: Array<ILevelDatas>;
  handleClickLevel: (level: ILevelDatas) => void;
}

export default function RequestLevelGroup({
  level,
  datas,
  handleClickLevel,
}: IRequestLevelGroupProps) {
  useEffect(() => {
    if (datas.length === 1) {
      void handleClickLevel(datas[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level.id]);

  return (
    <div className="c-RequestPage__LevelGroup">
      {datas
        ?.map((data) => {
          if (data && data.id && data.name)
            return (
              <RequestLevelCard
                key={`${data.name}_${data.id}`}
                name={data.name}
                isSelected={level.id === data.id && level.type === data.type}
                onClick={() => handleClickLevel(data)}
              />
            );
        })
        .filter(removeNulls) ?? []}
    </div>
  );
}
