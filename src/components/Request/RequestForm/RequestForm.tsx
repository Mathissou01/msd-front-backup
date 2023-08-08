import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { removeNulls } from "../../../lib/utilities";
import {
  RequestEntity,
  useValidateRequestMutation,
} from "../../../graphql/codegen/generated-types";
import RequestFields from "../RequestFields/RequestFields";
import { AppointmentSlot } from "../RequestAppointmentSlots/RequestAppointmentSlots";
import "./request-form.scss";

interface IRequestBlockValues {
  name: string;
  content: string | Date | boolean;
}

interface IUserData {
  userSurname: string;
  userName: string;
  userPhone: string;
  userEmail: string;
}

interface ICumbersomeData {
  category: string;
  cumbersomeName: string;
  quantity: number;
  volume: string;
}

interface IRequestFieldsValues extends FieldValues {
  lat: number;
  long: number;
  requestId: string;
  appointmentSlot: AppointmentSlot;
  attachments: Array<FileList>;
  checkboxes: Array<IRequestBlockValues>;
  commentaries: Array<IRequestBlockValues>;
  cumbersome: Array<ICumbersomeData>;
  questions: Array<IRequestBlockValues>;
  questionQCM: Array<IRequestBlockValues>;
  dateChoice: Array<IRequestBlockValues>;
  user: IUserData;
  allowSmsNotification: boolean;
  chosenRequestType: string;
}

interface IRequestFormProps {
  data: RequestEntity;
  pageOnSubmit: () => void;
  currentRequest: RequestEntity;
  currentStep: number;
  setCurrentStep: (steps: number) => void;
  steps: number;
  noBlockSteps: number;
  chosenRequestTypeId: string;
}

export default function RequestForm({
  data,
  pageOnSubmit,
  currentRequest,
  currentStep,
  setCurrentStep,
  steps,
  noBlockSteps,
  chosenRequestTypeId,
}: IRequestFormProps) {
  /* Local data */
  const form = useForm<IRequestFieldsValues>({ mode: "onChange" });
  const { handleSubmit, register } = form;

  const [validateRequest] = useValidateRequestMutation();

  if (currentRequest && currentRequest.id) {
    register("requestId", { value: currentRequest.id ?? "" });
    register("choosenRequestType", { value: chosenRequestTypeId });
  }

  /* Methods */
  function fileToBase64(file: File) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      // Read file content on file loaded event
      reader.onload = function (event) {
        resolve(event?.target?.result);
      };

      reader.readAsDataURL(file);
    });
  }

  async function onSubmit(submitData: IRequestFieldsValues) {
    let attachments = undefined;
    if (submitData.attachments) {
      attachments = await Promise.all(
        Array.from(submitData.attachments)
          .filter(removeNulls)
          .map((fileList: FileList) => {
            return Promise.all(
              Array.from(fileList).map((file: File) => {
                return fileToBase64(file).then((res) => {
                  return {
                    name: file.name,
                    content: res,
                  };
                });
              }),
            );
          }),
      );
    }

    const variables = {
      lat: submitData.lat ?? undefined,
      long: submitData.long ?? undefined,
      requestId: submitData.requestId ?? undefined,
      choosenRequestType: submitData.choosenRequestType ?? undefined,
      appointmentSlot: submitData.appointmentSlot ?? undefined,
      attachments: attachments ?? undefined,
      userAllowSms: submitData.userAllowSms ?? undefined,
      checkboxes: submitData.checkboxes
        ? Array.from(submitData.checkboxes).filter(removeNulls)
        : undefined,
      commentaries: submitData.commentaries
        ? Array.from(submitData.commentaries).filter(removeNulls)
        : undefined,
      cumbersome: submitData.cumbersome
        ? Array.from(submitData.cumbersome).filter(removeNulls)
        : undefined,
      dateChoice: submitData.dateChoice
        ? Array.from(submitData.dateChoice)
            .filter((value) => value != null)
            .map((date) => {
              const dateFormatted = new Date(String(date));
              return `${dateFormatted.getFullYear()}-${dateFormatted.getMonth()}-${dateFormatted.getDay()}`;
            })
        : undefined,
      questionsQCM: submitData.questionsQCM
        ? Array.from(submitData.questionsQCM).filter(removeNulls)
        : undefined,
      questions: submitData.questions
        ? Array.from(submitData.questions).filter(removeNulls)
        : undefined,
      user: {
        surname: submitData.userSurname ?? undefined,
        name: submitData.userName ?? undefined,
        phonehone: submitData.userPhone ?? undefined,
        email: submitData.userEmail ?? undefined,
      },
    };

    validateRequest({
      variables: {
        data: JSON.parse(JSON.stringify(variables)),
      },
    }).then(() => {
      pageOnSubmit();
    });
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
        </form>
      </FormProvider>
    </div>
  );
}
