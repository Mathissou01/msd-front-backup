import Head from "next/head";
import { makePublicAssetPath } from "../../../lib/utilities";

interface ICommonHeadTagProps {
  title?: string;
  description?: string;
}

export default function CommonMeta({
  title,
  description = "",
}: ICommonHeadTagProps) {
  /* Static Data */
  const siteName = "MSD";

  return (
    <Head>
      <title>{title ? `${title} - ${siteName}` : siteName}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={makePublicAssetPath("/favicon.ico")} />
    </Head>
  );
}
