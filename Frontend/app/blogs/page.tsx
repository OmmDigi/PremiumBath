import React from "react";
import BlogItems from "./components/BlogItems";
import { blogsLists } from "../datas/blogsInfo";
import { Metadata } from "next";
import { BASE_URL } from "@/constant";

export const metadata: Metadata = {
  title: "Read our Blogs on Modern Bathroom | Premium Bathware",
  description:
    "Explore our blogs for inspiration on your modern bathroom and kitchen. Discover modern designs and elevate your bathroom with Premium Bathware.",
  metadataBase: new URL(`${BASE_URL}`),
  alternates: {
    canonical: BASE_URL + "/blogs",
  },
};


function page() {
  return (
    <>
      <div className="min-h-[100vh] pt-10">
        <h2 className="w-full text-center font-semibold text-3xl">BLOGS</h2>
        <ul className="w-full grid grid-cols-3 gap-8 px-8 pt-5 sm:grid-cols-1">
          {blogsLists.map((item) => (
            <BlogItems key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default page;
