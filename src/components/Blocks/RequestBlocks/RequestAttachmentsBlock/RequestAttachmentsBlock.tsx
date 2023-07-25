import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ComponentBlocksAttachments } from "../../../../graphql/codegen/generated-types";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonFormErrorText from "../../../Common/CommonFormErrorText/CommonFormErrorText";
import "./request-attachments-block.scss";

interface IRequestAttachmentsBlockProps {
  attachmentsBlockData: ComponentBlocksAttachments;
  name: string;
}

export default function RequestAttachmentsBlock({
  attachmentsBlockData,
  name,
}: IRequestAttachmentsBlockProps) {
  /* Static Data */
  const labels = {
    mandatoryAttachmentsBlock: "Ce champs est obligatoire",
    subInformationFiles: "Format .svg, .png, .jpg, .doc ou .pdf, 10 Mo maximum",
    informativeText:
      "Veuillez joindre à votre demande la ou les pièces demandées. Eco-conception : pensez à réduire la taille et le poids de vos fichiers si possible.",
  };

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const files: FileList = watch(name);

  return (
    <div className="c-RequestAttachmentsBlock">
      <CommonBlockHeading
        titleContent={`${attachmentsBlockData.attachmentLabel}${
          attachmentsBlockData.isMandatory ? " *" : ""
        }`}
        isAlignLeft
      />
      <div className="c-RequestAttachmentsBlock__Input">
        <Controller
          name={name}
          control={control}
          rules={{
            required: {
              value: attachmentsBlockData.isMandatory,
              message: labels.mandatoryAttachmentsBlock,
            },
          }}
          defaultValue={[]}
          render={({ field: { onChange, onBlur } }) => {
            return (
              <input
                type="file"
                multiple={attachmentsBlockData.multipleAttachments ?? false}
                accept=".docx,.doc,application/pdf,image/svg,image/png,image/jpg"
                size={10}
                onChange={(event) => {
                  onChange(event.target.files);
                }}
                onBlur={onBlur}
              />
            );
          }}
        />
        {attachmentsBlockData.multipleAttachments &&
          files &&
          Array.from(files).length > 1 && (
            <div className="c-RequestAttachmentsBlock__AttachmentsList">
              {Array.from(files).map((file, index) => {
                return <p key={index}>{file.name}</p>;
              })}
            </div>
          )}
        <span className="c-RequestAttachmentsBlock__InformativeText">
          {labels.subInformationFiles}
        </span>
        <span className="c-RequestAttachmentsBlock__InformativeText">
          {labels.informativeText}
        </span>
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }: { message: string }) => (
          <CommonFormErrorText message={message} errorId={`${name}_error`} />
        )}
      />
    </div>
  );
}
