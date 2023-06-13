import React from "react";
import "./error-contact-block.scss";
import MailIcon from "public/images/pictos/send_mail.svg";
import AdressIcon from "public/images/pictos/maps_pin.svg";
import PhoneIcon from "public/images/pictos/headphones.svg";
import { useGetContactMwcQuery } from "../../../../graphql/codegen/generated-types";

const ErrorContactBlock = () => {
  const contractIdString = process.env.NEXT_PUBLIC_CONTRACT_ID;
  const contractId = contractIdString;

  const { data } = useGetContactMwcQuery({
    variables: {
      filters: {
        contract: {
          id: {
            eq: contractId,
          },
        },
      },
    },
  });

  const contactData =
    data?.mwCounterServices?.data[0]?.attributes?.mwcContact?.data?.attributes;

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
};

export default ErrorContactBlock;
