import React, { useEffect, useState } from "react";
import JsonData from "../data/content/data.json";
import Background from "./backgroundPage/Background";
import ContactUs from "./contactUsPage/ContactUsPage";
import { AppContainer, Content } from "./backgroundPage/BackgroundWrapper";
import Navbar from "./Navbar";
const HomePage = () => {
  const [landingPageData, setLandingPageData] = useState(JsonData);

  return (
    <AppContainer>
      <Navbar />
      <Content>
        <Background data={landingPageData.About} />
        <ContactUs />
      </Content>
    </AppContainer>
  );
};

export default HomePage;
