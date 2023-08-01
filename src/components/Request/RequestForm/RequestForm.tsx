import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { RequestEntity } from "../../../graphql/codegen/generated-types";
import RequestFields from "../RequestFields/RequestFields";
import "./request-form.scss";

interface IRequestFormProps {
  data: RequestEntity;
  pageOnSubmit: () => void;
  currentRequest: RequestEntity;
  currentStep: number;
  setCurrentStep: (steps: number) => void;
  steps: number;
  noBlockSteps: number;
}

export default function RequestForm({
  data,
  pageOnSubmit,
  currentRequest,
  currentStep,
  setCurrentStep,
  steps,
  noBlockSteps,
}: IRequestFormProps) {
  /* Local data */
  const form = useForm({ mode: "onChange" });
  const { handleSubmit, register } = form;

  register("requestId", { value: currentRequest.id });

  /* Methods */
  function onSubmit(submitData: FieldValues) {
    pageOnSubmit();
    const variables = {
      lat: submitData.lat,
      long: submitData.long,
      requestId: submitData.requestId,
      appointmentSlot: submitData.appointmentSlot,
      attachments: Array.from(submitData.attachments).filter((value) => {
        return value !== undefined && value !== null;
      }),
      checkboxes: Array.from(submitData.checkboxes).filter((value) => {
        return value !== undefined && value !== null;
      }),
      commentaries: Array.from(submitData.commentaries).filter((value) => {
        return value !== undefined && value !== null;
      }),
      dateChoice: Array.from(submitData.dateChoice)
        .filter((value) => {
          return value !== undefined && value !== null;
        })
        .map((date) => {
          const dateFormatted = new Date(String(date));
          return `${dateFormatted.getFullYear()}-${dateFormatted.getMonth()}-${dateFormatted.getDay()}`;
        }),
      questionsQCM: Array.from(submitData.questionsQCM).filter((value) => {
        return value !== undefined && value !== null;
      }),
      questions: Array.from(submitData.questions).filter((value) => {
        return value !== undefined && value !== null;
      }),
      userSurname: submitData.userSurname,
      userName: submitData.userName,
      userPhone: submitData.userPhone,
      userEmail: submitData.userEmail,
      userAllowSms: submitData.userAllowSms,
    };

    return variables;
  }

  return (
    <div className="c-RequestForm">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RequestFields
            data={data}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            noBlockSteps={noBlockSteps}
            steps={steps}
          />
          {/*<button type="submit">
              {" "}
              CONSOLE.LOG{" "}
            </button> /*-- KEEP IT FOR KNOW THE DATAS WHILE TESTING */}
        </form>
      </FormProvider>
    </div>
  );
}
