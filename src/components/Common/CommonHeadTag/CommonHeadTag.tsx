import Head from "next/head";

interface ICommonHeadTagProps {
  title: string;
  description?: string;
}

export default function CommonHeadTag({
  title,
  description = "",
}: ICommonHeadTagProps) {
  /* Static Data */
  const siteName = "MSD-Front";

  return (
    <Head>
      <title>
        {title} - {siteName}
      </title>
      <meta name="description" content={description} />
    </Head>
  );
}
