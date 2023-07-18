import React, { useRef } from "react";
import { Communication } from "../../../lib/user";
import { Control, Controller, FieldValues } from "react-hook-form";
import Letter from "public/images/pictos/letter.svg";
import Mobile from "public/images/pictos/mobile.svg";
import Notification from "public/images/pictos/notification.svg";
import CommonCheckbox from "../../Common/CommonCheckbox/CommonCheckbox";
import "./my-services.scss";

interface MyServicesProps {
  control: Control<Communication>;
}

const communications: { title: string; type: keyof Communication }[] = [
  { title: "Recevoir des alertes et informations", type: "alerts" },
  { title: "Conseils personnalisés", type: "tips" },
];

const communicationsType = ["email", "sms", "push"];

const MyServices: React.FC<MyServicesProps> = ({ control }) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  return (
    <div className="c-MyServices">
      <h1 className="c-MyServices__Title">Mes services</h1>
      <div className="c-MyServices__Container">
        {communications.map((item, index) => (
          <div className="c-MyServices__CommunicationContainer" key={index}>
            <p className="c-MyServices__SubTitle">{item.title}</p>
            <div className="c-MyServices__Type">
              {communicationsType.map((key, i) => (
                <div key={i} className="c-MyServices__CheckboxContainer">
                  <div className="c-MyServices__CheckboxContainer_mobile">
                    {key === "email" && "Par E-mail"}
                    {key === "sms" && "Par SMS"}
                    {key === "push" && "Par push"}

                    <Controller
                      control={control}
                      name={`${item.type}.${key}` as keyof Communication}
                      render={({
                        field,
                      }: {
                        field: FieldValues[keyof FieldValues];
                      }) => (
                        <CommonCheckbox
                          {...field}
                          defaultChecked={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.checked);
                          }}
                          ref={checkboxRef}
                        />
                      )}
                    />
                  </div>
                  <div className="c-MyServices__CheckboxContainer_desktop">
                    {index === 0 && (
                      <div>
                        {key === "email" && (
                          <div className="c-MyServices__CustomLabel">
                            <Letter />
                            <p>Email</p>
                          </div>
                        )}
                        {key === "sms" && (
                          <div className="c-MyServices__CustomLabel">
                            <Mobile />
                            <p>SMS</p>
                          </div>
                        )}
                        {key === "push" && (
                          <div className="c-MyServices__CustomLabel">
                            <Notification />
                            <p>Push</p>
                          </div>
                        )}
                      </div>
                    )}

                    <Controller
                      control={control}
                      name={`${item.type}.${key}` as keyof Communication}
                      render={({
                        field,
                      }: {
                        field: FieldValues[keyof FieldValues];
                      }) => (
                        <CommonCheckbox
                          {...field}
                          defaultChecked={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.checked);
                          }}
                          ref={checkboxRef}
                        />
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
