import React from "react";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import { openModal, closeModal } from "@redq/reuse-modal";
import NormalClock from "./timer";
import SearchPanel from "containers/Agency/SearchPanel";
import LoginModal from "containers/Agency/LoginModal";
import JuramModal from "containers/Agency/JuramModal";

// Дуусах хугацаа
const deadline2 = new Date("2021-11-02 18:00:00");

import SectionWrapper, { ContentWrapper } from "./countdown.style";
import { SectionHeader } from "containers/AppCreative/appCreative.style";
import ParticlesComponent from "containers/Crypto/Particle";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Alert from "common/components/Alert";

const CountDownSection = ({ deadline, endTime }) => {
  const JuramModalHandle = () => {
    openModal({
      config: {
        className: "search-modal",
        disableDragging: true,
        width: "100%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" }, // react-spring <Spring from={}> props value
        animationTo: { transform: "translateY(0)" }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: JuramModal,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };

  // Alt close button for modal
  const CloseModalButtonAlt = () => (
    <Button
      className="modalCloseBtn alt"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );

  // Search modal handler
  const handleSearchModal = () => {
    openModal({
      config: {
        className: "search-modal",
        disableDragging: true,
        width: "100%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" }, // react-spring <Spring from={}> props value
        animationTo: { transform: "translateY(0)" }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };

  return (
    <SectionWrapper id="normalCount">
      <Container>
        <ContentWrapper>
          <SectionHeader>
            <Fade up>
              <Heading
                as="h1"
                content={<div style={{color: "#fff", fontFamily: "Roboto"}}>Програмчлалын Олимпиад - 2022 бүртгэл хаагдахад</div>}
              />
              {/* <Text content={slogan} /> */}
            </Fade>
          </SectionHeader>
          {endTime ? (
            <Alert
              style={{
                borderColor: "#ffecb5",
                backgroundColor: "#fff3cd",
                color: "#664d03",
                margin: 30,
              }}
            >
              {`"Dev Hackathon Student - 2022" тэмцээний бүртгэл хаагдсан.`}
            </Alert>
          ) : (
            <>
              <Fade up>
                <div className="timerCount">
                  <NormalClock countdown={deadline} divider="true" />
                </div>
              </Fade>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <AnchorLink href="#screenshot_section" offset="80">
                  <Button className="secondary" title="Бүртгүүлэх" />
                </AnchorLink>
                <Button
              style={{ marginLeft: 10 }}
              onClick={JuramModalHandle}
              className="primary"
              title="Бүртгэлийн хураамж"
            />
              </div>
            </>
          )}
          <ParticlesComponent />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
