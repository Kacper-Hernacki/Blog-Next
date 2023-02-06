"use client";
import axios from "axios";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/navigation";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const { data } = useSWR("/api/getSubscribers", (apiURL: string) => fetch(apiURL).then(res => res.json()));

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      await mutate(`/api/getSubscribers`);
      setState("SUCCESS");
      await router.push("/thanks");
    } catch (e: any) {
      console.log(e);
      setErrorMessage(e?.response?.data?.error);
      setState("ERROR");
    }
  };

  return (
    <form className="sm:mx-auto max-[600px]:m-6  shadow-xl flex-col mx-10 mb-4 max-w-screen-md align-middle justify-center p-7 bg-sky-300 rounded-xl">
      <h2 className="max-[600px]:text-xl text-2xl font-bold max-w-md">
        Do you want to be updated with the latest tech stuff?
      </h2>
      <h2 className="max-[600px]:text-xl text-2xl font-bold mb-4">
        Please leave your mail below, and sign up!
      </h2>
      <div className="flex max-[600px]:flex-col">
        <input className=" max-[600px]:mb-3 max-[600px]:mr-0 max-[600px]:text-xl:mr-0 mr-2 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               type="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               disabled={state === "SUCCESS" || state === "LOADING"}
        />
        <button
          disabled={state === "SUCCESS" || state === "LOADING"}
          className=" max-[600px]:ml-0 max-[600px]:text-sm  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
          type="submit" onClick={subscribe}>
          Subscribe
        </button>
      </div>

      {(data) ?
        <h2 className="max-[600px]:text-xl mt-4 text-2xl font-bold">Join <span className="font-bold text-sky-800">{data}</span> happy
          subscribers!</h2> : null
      }
      <h4 className="font-bold mb-4 mt-2 max-w-md">
        I provide there a valuable content, trusted throughout thousands of followers, across many social platforms. You
        can unsubscribe anytime.
      </h4>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="text-2xl mt-2 font-bold text-sky-900">Thank you for the subscription 🎉</p>
      )}
    </form>
  );
}
