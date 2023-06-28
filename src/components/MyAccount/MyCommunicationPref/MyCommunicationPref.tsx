import React from "react";
import { useForm } from "react-hook-form";
import { Communication, User } from "../../../lib/user";
import useUpdateUser from "../../../hooks/user/useUpdateUser";
import EmailReminder from "../EmailReminder/EmailReminder";
import MyServices from "../MyServices/MyServices";
import OtherCommunications from "../OtherCommunications/OtherCommunications";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./my-communication-pref.scss";

interface MyCommunicationPrefProps {
  user: User | null;
  refetch: () => void;
}

const MyCommunicationPref: React.FC<MyCommunicationPrefProps> = ({
  user,
  refetch,
}) => {
  const { updateUser } = useUpdateUser(
    process.env.NEXT_PUBLIC_USER_API_URL || "",
    process.env.NEXT_PUBLIC_USER_ID || "",
  );

  const { control, handleSubmit } = useForm<Communication>({
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

  const onSubmit = (data: Communication) => {
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
