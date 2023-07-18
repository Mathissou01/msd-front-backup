import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { RequestEntity } from "../../../graphql/codegen/generated-types";
import RequestFields from "../RequestFields/RequestFields";
import "./request-form.scss";

interface IRequestFormProps {
  data: RequestEntity;
}

interface IFormFields {
  lat: number;
  long: number;
}

export default function RequestForm({ data }: IRequestFormProps) {
  /* Local data */
  const form = useForm<IFormFields>({ mode: "onChange" });
  const { handleSubmit } = form;

  /* Methods */
  function onSubmit(submitData: FieldValues) {
    return submitData;
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
