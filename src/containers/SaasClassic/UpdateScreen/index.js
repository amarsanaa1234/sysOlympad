import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import ParticlesComponent from "containers/Crypto/Particle";

import SectionWrapper from "./updateScreen.style";
// import { SCREENSHOTS } from "common/data/SaasClassic";
// import LoginModal from "containers/Agency/LoginModal";
import HackathonTeam from "containers/Agency/HackathonTeam";
import HackathonUserForm from "containers/Agency/HackathonUserForm";
import HackathonPayment from "containers/Agency/HackathonPayment";
// import { users } from "react-icons-kit/fa/users";
import { userCircleO } from "react-icons-kit/fa/userCircleO";
import { creditCard } from "react-icons-kit/fa/creditCard";
import Alert from "common/components/Alert";

const UpdateScreen = ({ secTitleWrapper, secText, secHeading, endTime }) => {
  const [activeKey, setActiveKey] = useState("1");
  const [teamId, setTeamId] = useState(null);
  const [validTeam, setValidTeam] = useState(false);
  const [registerSuccess, setRegisterSuceess] = useState(false);

  const onChange = (index) => {
    if (index === "3") {
      setActiveKey(String(index));
      return;
    }

    if (validTeam) {
      setActiveKey(String(index));
      return;
    }
    setActiveKey(String(index));
  };

  return (
    <SectionWrapper id="screenshot_section">
      <ParticlesComponent />
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={<div style={{fontFamily: "Georgia", fontSize: "25px", color: "#fff"}}>Sys&CoTech club</div>} />
          <Heading
            {...secHeading}
            content={<div style={{fontFamily: "MulishBold", color: "#00FF00"}}>"Програмчлалын Олимпиад - 2022" бүртгүүлэх</div>}
          />
        </Box>
        <Tabs
          className="update-screen-tab"
          activeKey={activeKey}
          onChange={onChange}
        >
          <TabPane
            tab={
              <>
                <Icon
                  icon={userCircleO}
                  size={20}
                  style={{ marginRight: 10 }}
                />
                Бүртгэл
              </>
            }
            key="1"
          >
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
                <HackathonTeam
                  registerSuccess={registerSuccess}
                  validTeam={validTeam}
                  setValidTeam={setValidTeam}
                />
                {validTeam && (
                  <HackathonUserForm
                    registerSuccess={registerSuccess}
                    setRegisterSuceess={setRegisterSuceess}
                    validTeam={validTeam}
                  />
                )}
              </>
            )}
          </TabPane>
          <TabPane
            tab={
              <>
                <Icon icon={creditCard} size={20} style={{ marginRight: 10 }} />
                Хураамж
              </>
            }
            key="2"
          >
            <HackathonPayment />
          </TabPane>
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "80px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#ff4362",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
};

export default UpdateScreen;
