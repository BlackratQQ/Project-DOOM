"use client";

import React, { Fragment } from "react";
import InfoSection from "./InfoSection";
import AboutContentCreation from "./AboutContentCreation";
import ContentCreationService from "./ContentCreationService";
import useLenis from "../../hooks/useLenis"; // Import Lenis hooku

const Page = () => {
  useLenis();

  return (
    <Fragment>
      <AboutContentCreation />
      <InfoSection />
      <ContentCreationService />
    </Fragment>
  );
};

export default Page;
