import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(res);
  const slug = req.query.slug as string;
  res.clearPreviewData();
  res.redirect(decodeURIComponent(slug));
  res.end();
}
