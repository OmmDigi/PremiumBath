import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { blogsLists } from "@/app/datas/blogsInfo";

interface IProps {
  children: React.ReactNode;
  id: number;
}

function ReadBlogLayout({ id, children }: IProps) {
  return (
    <div className="w-full min-h-screen px-28 py-5 sm:px-5">
      <div className="w-full mx-auto sm:w-full">
        <div className="flex items-center gap-5 sm:gap-3">
          <span className="text-sm">{blogsLists[id - 1].catgory}</span>{" "}
          <GoDotFill size={12} className="text-gray-500" />
          <span className="text-gray-700 text-sm">
            {blogsLists[id - 1].author}
          </span>{" "}
          <GoDotFill size={12} className="text-gray-500" />
          <span className="text-xs text-gray-600">
            {blogsLists[id - 1].date}
          </span>
        </div>

        <h1 className="text-3xl josefin-sans-568 text-emerald-700 pt-4">
          {blogsLists[id - 1].title}
        </h1>
        {/* <p className="josefin-sans-350 text-justify text-[15px] w-[80%] sm:w-full">
          {props.shortdescription}
        </p> */}

        <Image
          src={blogsLists[id - 1].bannerimg}
          alt="blog-img"
          width={1280}
          height={1280}
          className="w-[80%] mt-4 sm:w-full aspect-video object-cover"
        />
        <div className="w-[80%]">{children}</div>
      </div>
    </div>
  );
}

export default ReadBlogLayout;
