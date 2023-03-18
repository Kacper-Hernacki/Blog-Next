"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ClientSideRoute from "./ClientSideRoute";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

function EmbeddedMedium() {
  const [data, setData] = useState(null);
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hernackikacper";
  useEffect(() => {
    const result = axios.get(mediumURL).then((response) => {
      setData(response);
    });
  }, []);

  const feedTitle = data?.feed?.title;
  const feedLink = data?.feed?.url;
  const items = data?.data?.items;


  return (
    <div className="bg-gray-800 -mt-24">
      <div className="w-full h-24 absolute bg-gradient-to-b from-gray-600" />
      <h1 className="absolute w-full text-center text-4xl font-bold p-6 text-white max-[800px]:pb-8">Medium
        articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pt-32 pb-24">
        {items?.map((item, idx) => {
          return (
            <ClientSideRoute key={idx} route={item?.link}>
              <div className="flex flex-col group ease-in-out cursor-pointer rounded-2xl cursor-pointer bg-gray-800 shadow-2xl">
                <div className="relative w-full h-80 drop-shadow-xl">
                  <Image
                    className="object-cover object-left lg:object-center rounded-t-2xl"
                    src={item?.thumbnail}
                    alt={""}
                    fill
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                    <div className="mt-5 flex-1">
                      <p className="font-bold text-lg">
                        {item?.title}
                      </p>
                      <p className="line-clamp-2 text-white">
                        {new Date(item?.pubDate).toLocaleDateString(
                          "en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </p>
                      <div className="mt-4 flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                        {
                          item?.categories?.map((category, idx) => {
                            if (idx < 2) {
                              return (
                                <div className="bg-gray-500 text-center text-white px-3 py-1 rounded-full text-sm font-semibold">
                                  <p>{category}</p>
                                </div>);
                            }
                          })
                        }
                      </div>
                    </div>


                  </div>
                </div>

                <div className="mt-5 flex-1 p-3">
                  <p className="h-12 text-lg font-bold text-gray-50">{item?.title}</p>
                </div>

                <p className="p-3 font-bold flex items-center group-hover:underline">
                  Read Post
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </p>
              </div>
            </ClientSideRoute>

          );
        })}

      </div>
      <div className="w-full h-32 bg-gradient-to-t from-gray-600" />
    </div>
  );
}

export default EmbeddedMedium;

