import React from "react";
import { useRouter } from "next/router";
import CommonMeta from "../../components/Common/CommonMeta/CommonMeta";
import CommonButton from "../../components/Common/CommonButton/CommonButton";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import "./login.scss";
import { useForm } from "react-hook-form";

export default function Login() {
  const pageTitle = "Connexion";

  const { login } = useCurrentUser();
  const router = useRouter();
  const { register, handleSubmit } = useForm<{ email: string }>();

  const onSubmit = async (data: { email: string }) => {
    await login(data.email);
    router.push("/");
  };

  return (
    <div className="c-Login">
      <CommonMeta title={pageTitle} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id="email" {...register("email")} />
        <CommonButton type="submit" style="primary" label="Connexion" />
      </form>
    </div>
  );
}
