import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/cryptoModern";
import ResetCSS from "common/assets/css/style";
import moment from "moment";
import GlobalStyle, {
  CryptoWrapper,
} from "containers/CryptoModern/cryptoModern.style";
import Navbar from "containers/CryptoModern/Navbar";
import Bunner from "containers/CryptoModern/Banner";
import CountDown from "containers/CryptoModern/CountDown";
import FaqSection from "containers/CryptoModern/FaqSection";
import FeatureSection from "containers/CryptoModern/FeatureSection/";
import Footer from "containers/CryptoModern/Footer";
import FundRaising from "containers/CryptoModern/FundRaising";
import Investment from "containers/CryptoModern/Investment";
import MapSection from "containers/CryptoModern/MapSection";
import Privacy from "containers/CryptoModern/Privacy";
import WalletSection from "containers/CryptoModern/WalletSection";
import WorkHistory from "containers/CryptoModern/WorkHistory";
import CountDownSection from "containers/CryptoModern/CountDown";
import UpdateScreen from "containers/SaasClassic/UpdateScreen";
import LoginModal from "containers/Agency/LoginModal";
import Bvrtgel from "containers/Agency/Bvrtgel";

// Дуусах хугацаа
const deadline = moment("2022-11-11");
const today = new Date();
const endTime = today > deadline;

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Sys&CoTech club | SICT</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="description" content="Sys&CoTech" />
          <meta
            name="keywords"
            content="Sys&CoTech Olympiad  - 2022, Sys&CoTech club, syscotech"
          />
          <meta
            property="og:url"
            content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Sys&CoTech Olympiad - 2022" />
          <meta
            property="og:description"
            content="Sys&CoTech Olympiad - 2022"
          />
          <meta
            property="og:image"
            content=""
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            rel="icon"
            // type=""
            href="/static/Modern_Sys&CoLogo.png"
          />
          {/* <link rel="apple-touch-icon" href="./assets/images/favicon.webp" />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="./assets/images/favicon-72x72.webp"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="./assets/images/favicon-114x114.webp"
          /> */}
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app creative landing */}
        <CryptoWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <Bunner />
          <CountDownSection deadline={deadline} endTime={endTime} />
          <FeatureSection />
          <WorkHistory />
          <UpdateScreen endTime={endTime} />
          {/* <LoginModal /> */}
          {/* <Bvrtgel/> */}
          {/* <Investment/> */}
          <Privacy />
          <WalletSection />
          {/* <MapSection /> */}
          {/* <FundRaising /> */}
          <FaqSection />
          <Footer />
        </CryptoWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;
