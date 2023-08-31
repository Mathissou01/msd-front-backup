import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import _ from "lodash";
import { ComponentBlocksAttachments } from "../../../../graphql/codegen/generated-types";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonFormErrorText from "../../../Common/CommonFormErrorText/CommonFormErrorText";
import CommonButton from "../../../Common/CommonButton/CommonButton";
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
    explanatoryText:
      "Veuillez joindre à votre demande la ou les pièces demandées. Eco-conception : pensez à réduire la taille et le poids de vos fichiers si possible.",
    exceededFileSizeCapacity: "Attention, vous dépassez la limite de 10 Mo.",
  };

  const imageStaticData = {
    src: "/images/pictos/bin.svg",
    alt: "Suppression d'un fichier",
  };

  const maxFilesSize = 10485760; // 1024 x 1024 x 10 (10 Mo)

  /* Methods */
  function isFileAddable(newFile: File): boolean {
    let filesCapacity = 0;

    if (multipleFiles && multipleFiles.length > 0) {
      multipleFiles.forEach((file) => (filesCapacity += file.size));
    }

    return filesCapacity + newFile.size <= maxFilesSize;
  }

  function fileConvertSize(aSize: number) {
    const aSizeInt = Math.abs(parseInt(aSize.toString(), 10));
    const def = [
      [1, "octets"],
      [1024, "ko"],
      [1024 * 1024, "Mo"],
      [1024 * 1024 * 1024, "Go"],
      [1024 * 1024 * 1024 * 1024, "To"],
    ];
    for (let i = 0; i < def.length; i++) {
      if (aSizeInt < parseInt(String(def[i][0])))
        return `${(aSizeInt / parseInt(String(def[i - 1][0]))).toFixed(2)} ${
          def[i - 1][1]
        }`;
    }
  }

  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [multipleFiles, setMultipleFiles] = useState<Array<File>>([]);

  useEffect(() => {
    setValue(
      name,
      multipleFiles && multipleFiles.length > 0 ? multipleFiles : undefined,
    );
  }, [multipleFiles, name, setValue]);

  return (
    <div className="c-RequestAttachmentsBlock">
      <CommonBlockHeading
        titleContent={`${attachmentsBlockData.attachmentLabel}${
          attachmentsBlockData.isMandatory ? " *" : ""
        }`}
        isAlignLeft
      />
      <span className="c-RequestAttachmentsBlock__ExplanatoryText">
        {labels.explanatoryText}
      </span>
      <Controller
        control={control}
        name={name}
        rules={{
          required: {
            value: attachmentsBlockData.isMandatory,
            message: labels.mandatoryAttachmentsBlock,
          },
        }}
        render={() => {
          return (
            <div
              className={classNames(
                "c-RequestAttachmentsBlock__MultipleFiles",
                {
                  "c-RequestAttachmentsBlock__MultipleFiles_invalid": !!_.get(
                    errors,
                    name,
                  ),
                },
              )}
            >
              {multipleFiles && multipleFiles.length > 0 && (
                <div className="c-RequestAttachmentsBlock__AddedFilesList">
                  {multipleFiles.map((file, index) => {
                    const fileIndex = index;
                    return (
                      <div
                        key={fileIndex}
                        className="c-RequestAttachmentsBlock__AddedFile"
                      >
                        {`${file.name} (${fileConvertSize(file.size)})`}
                        <button
                          type="button"
                          onClick={() =>
                            setMultipleFiles(
                              multipleFiles.filter(
                                (_, index) => index !== fileIndex,
                              ),
                            )
                          }
                        >
                          <Image
                            src={imageStaticData.src}
                            alt={imageStaticData.alt}
                            width={16}
                            height={16}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
              <input
                hidden
                id={`inputFile.${name}`}
                type="file"
                accept=".docx,.doc,application/pdf,image/svg,image/png,image/jpg"
                onChange={(event) => {
                  if (
                    event.target.files &&
                    isFileAddable(event.target.files[0])
                  )
                    setMultipleFiles([...multipleFiles, event.target.files[0]]);
                  else alert(labels.exceededFileSizeCapacity);
                  event.target.value = "";
                }}
              />
              <CommonButton
                onClick={() =>
                  document.getElementById(`inputFile.${name}`)?.click()
                }
                label="Ajouter une pièce jointe"
                picto="add"
                isDisabled={
                  !attachmentsBlockData.multipleAttachments &&
                  multipleFiles.length === 1
                }
              />
            </div>
          );
        }}
      />
      <span className="c-RequestAttachmentsBlock__InformativeText">
        {labels.subInformationFiles}
      </span>
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
