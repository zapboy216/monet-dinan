import HeaderFive from "@/components/homes/headers/HeaderFive";
import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import React from "react";

export const metadata = {
  title: "Home-2 ||  Professional Freelance",
  description:
    "Discover DinanDev , with the most impressive portfolio ",
};
export default function Home2() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <PersonalInfoTwo />
          </div>
        </div>
      </div>
    </>
  );
}
