import React from "react";
import CommonButton from "../../components/Common/CommonButton/CommonButton";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import "./login.scss";
import { useRouter } from "next/router";

const Login = () => {
  // TODO: This button is created for testing. To be removed when implementing the connection
  const { login } = useCurrentUser();
  const router = useRouter();

  return (
    <div className="c-Login">
      <CommonButton
        type="button"
        style="primary"
        label="Connexion"
        onClick={() => {
          login();
          //TODO: This is a temporary redirection. To be removed when implementing the connection
          router.push("/mon-compteur-dechets");
        }}
      />
    </div>
  );
};

export default Login;
