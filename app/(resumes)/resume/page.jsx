import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";
import AboutOne from "@/components/homes/about/AboutOne";
import Resume from "@/components/homes/resume/Resume";
import React from "react";

import MenuTwo from "@/components/homes/menus/MenuTwo";
export const metadata = {
  title: "Resume-1 ||  Professional Freelance",
  description:
    "Discover DinanDev , with the most impressive portfolio ",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper home-1" id="resume">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />

            <Resume />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
