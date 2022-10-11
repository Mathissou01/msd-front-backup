import type { NextApiRequest, NextApiResponse } from "next";
import { getPageBySlug } from "../../lib/api";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.query.secret !== (process.env.PREVIEW_SECRET || "secret_token")) {
    return res.status(401).json({ message: "Invalid Token" });
  }
  const slug = decodeURIComponent(req.query.slug as string);

  await getPageBySlug(slug as string, true).then((pageRes) => {
    if (!slug) {
      return res.status(401).json({ message: "Invalid slug" });
    }
    if (pageRes?.length === 0) {
      res.redirect("/");
    }
    res.setPreviewData({}, { maxAge: 120 });
    res.redirect(`/page/${slug}`);
  });
  res.end();
}
