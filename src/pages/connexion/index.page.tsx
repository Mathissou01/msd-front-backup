import React from "react";
import { useRouter } from "next/router";
import CommonMeta from "../../components/Common/CommonMeta/CommonMeta";
import CommonButton from "../../components/Common/CommonButton/CommonButton";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import "./login.scss";

const Login = () => {
  /* Static Data */
  const pageTitle = "Connexion";

  const { login } = useCurrentUser();
  const router = useRouter();

  return (
    <div className="c-Login">
      <CommonMeta title={pageTitle} />
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
