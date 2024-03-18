import BlogsThree from "@/components/homes/blogs/BlogsThree";
import HeaderFour from "@/components/homes/headers/HeaderFour";
import HeaderThree from "@/components/homes/headers/HeaderThree";
import PersonalInfoThree from "@/components/homes/personalInfo/PersonalInfoThree";
export const metadata = {
  title: "Blog-3 ||  Professional Freelance",
  description:
    "Discover DinanDev , with the most impressive portfolio ",
};
import React from "react";

export default function page() {
  return (
    <>
      <div className="page-wrapper home-3">
        <HeaderFour />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfoThree />
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <HeaderThree />
              <BlogsThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}