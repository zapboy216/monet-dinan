import ContactTwo from "@/components/homes/contact/ContactTwo";

import HeaderTwo from "@/components/homes/headers/HeaderTwo";

import React from "react";
export const metadata = {
  title: "Contact-2 ||  Professional Freelance",
  description:
    "Discover DinanDev , with the most impressive portfolio ",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <ContactTwo />
      </div>
    </>
  );
}
