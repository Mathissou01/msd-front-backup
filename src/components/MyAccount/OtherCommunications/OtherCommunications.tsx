import React from "react";
import CommonToggle from "../../Common/CommonToggle/CommonToggle";
import { Communication, User } from "../../../lib/user";
import { Control, Controller, FieldValues } from "react-hook-form";
import "./other-communications.scss";

interface OtherCommunicationsProps {
  user: User | null;
  control: Control<Communication>;
}

const communications = [
  { title: "Enquêtes sociologiques", type: "sociologicalSurveys" },
  { title: "Evolutions des services", type: "evolutionServices" },
];

const OtherCommunications: React.FC<OtherCommunicationsProps> = ({
  user,
  control,
}) => {
  return (
    <div className="c-OtherCommunications">
      <h3>Autre communication par voie électronique</h3>
      {communications.map((key, i) => (
        <div key={i} className="c-OtherCommunications__Content">
          <div className="c-OtherCommunications__Text">
            <h4>{key.title}</h4>
            <p className="c-OtherCommunications__Description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              bianditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias exceptum sint occaecati cupiditate non
              provident
            </p>
          </div>
          <Controller
            control={control}
            name={`${key.type}` as keyof Communication}
            defaultValue={
              user?.communication?.[key.type as keyof Communication] || false
            }
            render={({ field }: { field: FieldValues[keyof FieldValues] }) => (
              <CommonToggle
                checked={field.value}
                onChange={(checked) => field.onChange(checked)}
              />
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default OtherCommunications;
