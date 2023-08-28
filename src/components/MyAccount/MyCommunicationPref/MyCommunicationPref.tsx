import React from "react";
import { useForm } from "react-hook-form";
import { ICommunication, IUser } from "../../../lib/user";
import useUpdateUser from "../../../hooks/user/useUpdateUser";
import EmailReminder from "../EmailReminder/EmailReminder";
import MyServices from "../MyServices/MyServices";
import OtherCommunications from "../OtherCommunications/OtherCommunications";
import CommonButton from "../../Common/CommonButton/CommonButton";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import "./my-communication-pref.scss";

interface MyCommunicationPrefProps {
  user: IUser | null;
  refetch: () => void;
}

const MyCommunicationPref: React.FC<MyCommunicationPrefProps> = ({
  user,
  refetch,
}) => {
  const { currentUser } = useCurrentUser();
  const { updateUser } = useUpdateUser(currentUser?._id || "");

  const { control, handleSubmit } = useForm<ICommunication>({
    defaultValues: {
      alerts: {
        email: user?.communication?.alerts.email || false,
        sms: user?.communication?.alerts.sms || false,
        push: user?.communication?.alerts.push || false,
      },
      tips: {
        email: user?.communication?.tips.email || false,
        sms: user?.communication?.tips.sms || false,
        push: user?.communication?.tips.push || false,
      },
      sociologicalSurveys: user?.communication?.sociologicalSurveys || false,
      evolutionServices: user?.communication?.evolutionServices || false,
    },
  });

  const onSubmit = (data: ICommunication) => {
    updateUser({ communication: data }, refetch);
  };

  return (
    <div className="c-MyCommunicationPref">
      <form onSubmit={handleSubmit(onSubmit)}>
        <EmailReminder user={user} />
        <MyServices control={control} />
        <OtherCommunications user={user} control={control} />
        <div className="c-MyCommunicationPref__Button">
          <CommonButton
            label="Enregistrer les modifications"
            type="submit"
            style="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default MyCommunicationPref;
