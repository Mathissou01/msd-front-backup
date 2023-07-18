import React from "react";
import MailIcon from "public/images/pictos/send_mail.svg";
import AdressIcon from "public/images/pictos/maps_pin.svg";
import PhoneIcon from "public/images/pictos/headphones.svg";
import { useGetContactQuery } from "../../../../graphql/codegen/generated-types";
import "./error-contact-block.scss";

const { NEXT_PUBLIC_CONTRACT_ID } = process.env;

export default function ErrorContactBlock() {
  const { data } = useGetContactQuery({
    variables: {
      filters: {
        contract: {
          id: {
            eq: NEXT_PUBLIC_CONTRACT_ID,
          },
        },
      },
    },
  });

  const contactData = data?.mwCounterServices?.data?.[0]?.attributes;

  const contactBlocks = [
    {
      key: "email",
      label: "Par email",
      value: contactData?.contactEmail || "",
      type: "email",
      icon: <MailIcon />,
      hasData: !!contactData?.contactEmail,
    },
    {
      key: "address",
      label: "Par courrier",
      value: contactData?.postalAddress || "",
      type: "address",
      icon: <AdressIcon />,
      hasData: !!contactData?.postalAddress,
    },
    {
      key: "phone",
      label: "Par téléphone",
      value: contactData?.phoneNumber
        ? contactData?.phoneNumber.toString()
        : "",
      type: "phone",
      icon: <PhoneIcon />,
      hasData: !!contactData?.phoneNumber,
    },
  ];

  return (
    <div className="c-ContactBlock">
      {contactBlocks
        .filter((block) => block.hasData)
        .map((block, index) => (
          <div key={index} className="c-ContactBlock__CardContainer">
            <div className="c-ContactBlock__Card">
              {block.icon}
              <div>
                <p>{block.label}</p>
                <p>
                  <strong>{block.value}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
