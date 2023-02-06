// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.email;
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  const DATACENTER = API_KEY?.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  // Api key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
      name: "",
    });
  }
  try {
    const response = await axios.post(url, data, { headers });
   return res.status(200).json({ error: "", name: email });
  } catch (err) {}
  return res.status(400).json({
    error: `Oops, something went wrong... Send me an email at hernackikacper@gmail.com and I'll add you to the list.`,
  });
}
