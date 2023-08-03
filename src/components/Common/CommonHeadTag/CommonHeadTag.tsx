import Head from "next/head";

interface ICommonHeadTagProps {
  title: string;
  description?: string;
}

export default function CommonHeadTag({
  title,
  description = "",
}: ICommonHeadTagProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
