import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import _ from "lodash";
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
    register,
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
      <div
        className={classNames("c-RequestAttachmentsBlock__Input", {
          "c-RequestAttachmentsBlock__Input_invalid": !!_.get(errors, name),
        })}
      >
        <input
          type="file"
          multiple={attachmentsBlockData.multipleAttachments ?? false}
          {...register(name, {
            required: {
              value: attachmentsBlockData.isMandatory,
              message: labels.mandatoryAttachmentsBlock,
            },
          })}
          accept=".docx,.doc,application/pdf,image/svg,image/png,image/jpg"
          size={10}
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
