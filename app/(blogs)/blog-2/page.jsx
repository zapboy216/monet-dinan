import BlogsTwo from "@/components/homes/blogs/BlogsTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";

import React from "react";
export const metadata = {
  title: "Blog-2 ||  Professional Freelance",
  description:
    "Discover DinanDev , with the most impressive portfolio ",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <BlogsTwo />
      </div>
    </>
  );
}
