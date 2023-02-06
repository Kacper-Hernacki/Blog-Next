// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import mailchimp from "@mailchimp/mailchimp_marketing";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;

    mailchimp.setConfig({
        apiKey: API_KEY,
        server: process.env.MAILCHIMP_SERVER_PREFIX,
    });



    try {
        const response = await mailchimp.lists.getListMembersInfo(LIST_ID);

       return res.status(200).json( response?.total_items );
    } catch (err) {   return res.status(400).json({
        error: `Oops, something went wrong... Send me an email at hernackikacper@gmail.com and I'll add you to the list.`,
    });}

}
