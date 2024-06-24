"use client";

import React, { Fragment } from "react";
import InfoSection from "./infoSection";
import AboutContentCreation from "./aboutContentCreation";
import ContentCreationService from "./contentCreationService";
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
