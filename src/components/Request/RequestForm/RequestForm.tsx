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

interface IRequestFieldsValues extends FieldValues {
  lat: number;
  long: number;
  requestId: string;
  appointmentSlot: AppointmentSlot;
  attachments: Array<FileList>;
  checkboxes: Array<IRequestBlockValues>;
  commentaries: Array<IRequestBlockValues>;
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
    const attachements = await Promise.all(
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

    const variables = {
      lat: submitData.lat,
      long: submitData.long,
      requestId: submitData.requestId,
      choosenRequestType: submitData.choosenRequestType,
      appointmentSlot: submitData.appointmentSlot,
      attachements,
      userAllowSms: submitData.userAllowSms,
      checkboxes: Array.from(submitData.checkboxes).filter((value) => {
        return value != null;
      }),
      commentaries: Array.from(submitData.commentaries).filter(removeNulls),
      dateChoice: Array.from(submitData.dateChoice)
        .filter((value) => {
          return value != null;
        })
        .map((date) => {
          const dateFormatted = new Date(String(date));
          return `${dateFormatted.getFullYear()}-${dateFormatted.getMonth()}-${dateFormatted.getDay()}`;
        }),
      questionsQCM: Array.from(submitData.questionsQCM).filter(removeNulls),
      questions: Array.from(submitData.questions).filter(removeNulls),
      user: {
        surname: submitData.userSurname,
        name: submitData.userName,
        phonehone: submitData.userPhone,
        email: submitData.userEmail,
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
