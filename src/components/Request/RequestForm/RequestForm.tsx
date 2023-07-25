import { FieldValues, FormProvider, useForm } from "react-hook-form";
import {
  AvailableSlot,
  RequestEntity,
} from "../../../graphql/codegen/generated-types";
import RequestFields from "../RequestFields/RequestFields";
import "./request-form.scss";

interface IRequestFormProps {
  data: RequestEntity;
}

interface IFormFields {
  lat: number;
  long: number;
  slot: AvailableSlot;
  clientName: string;
  requestId: string;
  allowSmsNotification: boolean;
  attachments: Array<FileList>;
}

export default function RequestForm({ data }: IRequestFormProps) {
  /* Local data */
  const form = useForm<IFormFields>({ mode: "onChange" });
  const { handleSubmit } = form;

  /* Methods */
  function onSubmit(submitData: FieldValues) {
    const variables: IFormFields = {
      lat: submitData.lat,
      long: submitData.long,
      slot: submitData.appointmentSlot,
      requestId: data.id ?? "",
      allowSmsNotification: submitData["user-allow-sms"],
      clientName: `${submitData["user-surname"]}`,
      attachments: submitData.attachments,
    };

    return variables;
  }

  return (
    <div className="c-RequestForm">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RequestFields data={data} />
        </form>
      </FormProvider>
    </div>
  );
}
