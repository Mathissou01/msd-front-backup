import React from "react";
import "./error-contact-block.scss";
import MailIcon from "public/images/pictos/send_mail.svg";
import AdressIcon from "public/images/pictos/maps_pin.svg";
import PhoneIcon from "public/images/pictos/headphones.svg";

const ErrorContactBlock = () => {
  const a: { [key: string]: { [key: string]: string }[] } = {
    email: [
      {
        label: "Par email",
        value: "support.tri@collectivite.fr",
        type: "email",
      },
    ],
    address: [
      {
        label: "Par courrier",
        value: "24 rue de la gare 82000 Montauban",
        type: "address",
      },
    ],
    phone: [
      {
        label: "Par téléphone",
        value: "01 23 45 67 89",
        type: "phone",
      },
    ],
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case "email":
        return <MailIcon />;
      case "address":
        return <AdressIcon />;
      case "phone":
        return <PhoneIcon />;
    }
  };

  return (
    <div className="c-ContactBlock">
      {Object.keys(a).map((key: string, i: number) => (
        <div key={i} className="c-ContactBlock__CardContainer">
          {a[key].map((item: { [key: string]: string }, index: number) => (
            <div key={index} className="c-ContactBlock__Card">
              {renderIcon(item.type)}
              <div>
                <p>{item.label}</p>
                <p>
                  <strong>{item.value}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ErrorContactBlock;
