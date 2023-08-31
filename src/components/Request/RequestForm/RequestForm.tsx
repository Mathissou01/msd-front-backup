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
  attachments: Array<Array<File>>;
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
  chosenRequestType: string;
}

export default function RequestForm({
  data,
  pageOnSubmit,
  currentRequest,
  currentStep,
  setCurrentStep,
  steps,
  noBlockSteps,
  chosenRequestType,
}: IRequestFormProps) {
  /* Local data */
  const form = useForm<IRequestFieldsValues>({ mode: "onChange" });
  const { handleSubmit, register } = form;

  const [validateRequest] = useValidateRequestMutation();

  if (currentRequest && currentRequest.id) {
    register("requestId", { value: currentRequest.id ?? "" });
  }

  /* Methods */
  async function onSubmit(submitData: IRequestFieldsValues) {
    const attachments = submitData.attachments?.flat();
    const data = new FormData();
    attachments?.forEach((attachment) => {
      data.append("files", attachment);
    });
    const attachmentsUrl = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/attachments`,
      {
        method: "POST",
        body: data,
      },
    )
      .then((res) => res.json())
      .then((res) => {
        return res;
      });

    const attachmentsUrlWithNames = attachments
      ?.flat()
      .map((attachments, index) => {
        return {
          name: attachments.name,
          content: attachmentsUrl[index],
        };
      });

    const variables = {
      lat: submitData.lat,
      long: submitData.long,
      requestId: submitData.requestId,
      chosenRequestType: chosenRequestType,
      appointmentSlot: submitData.appointmentSlot,
      attachments: attachmentsUrlWithNames,
      userAllowSms: submitData.allowSmsNotification ?? {
        name: "",
        content: false,
      },
      checkboxes: submitData.checkboxes
        ? Array.from(submitData.checkboxes).filter(removeNulls)
        : undefined,
      comments: submitData.commentaries
        ? Array.from(submitData.commentaries).filter(removeNulls)
        : undefined,
      cumbersome: submitData.cumbersome
        ? Array.from(submitData.cumbersome)
            .filter(removeNulls)
            .map((cumbersome) => {
              return {
                category: cumbersome.category,
                cumbersomeName: cumbersome.cumbersomeName,
                quantity: cumbersome.quantity.toString(),
                volume: cumbersome.volume,
              };
            })
        : undefined,
      dateChoice: submitData.dateChoice
        ? Array.from(submitData.dateChoice)
            .filter((value) => value != null)
            .map((date) => {
              const dateFormatted = new Date(String(date));
              return `${dateFormatted.getFullYear()}-${dateFormatted.getMonth()}-${dateFormatted.getDay()}`;
            })[0]
        : undefined,
      questionsQCM: submitData.questionsQCM
        ? Array.from(submitData.questionsQCM).filter(removeNulls)
        : undefined,
      questions: submitData.questions
        ? Array.from(submitData.questions).filter(removeNulls)
        : undefined,
      user: {
        surname: submitData.userSurname,
        name: submitData.userName,
        phone: submitData.userPhone,
        email: submitData.userEmail,
      },
      userConsent: true,
    };

    validateRequest({
      variables: {
        data: variables,
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
