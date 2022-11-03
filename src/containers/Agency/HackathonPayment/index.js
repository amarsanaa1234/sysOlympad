import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import LoginModalWrapper from "./loginModal.style";
import "rc-tabs/assets/index.css";
import { Wrappper } from "containers/AppModern/Features/features.style";
import { Fade } from "react-reveal";
import CopyToClipboard from "react-copy-to-clipboard";
import { clipboard } from "react-icons-kit/typicons/clipboard";
import Icon from "react-icons-kit";
import { toast } from "react-toastify";
import Alert from "common/components/Alert";

const HackathonPayment = ({ contentWrapper }) => {
  return (
    <LoginModalWrapper>
      <form onSubmit={() => {}}>
        <Box {...contentWrapper}>
          <Alert
            style={{
              borderColor: "#ffecb5",
              backgroundColor: "#fff3cd",
              color: "#664d03",
              marginBottom: 30,
            }}
          >
            Бүртгэлийн хураамж 6000 төгрөг. Доорх заавраар
            11:10-ны дотор илгээж бүртгэлээ баталгаажуулна уу.
          </Alert>
          <Wrappper>
            <style jsx>{`
              .shadow-color {
                -webkit-box-shadow: 0px 0px 10px -4px #000000;
                box-shadow: 0px 0px 10px -4px #000000;
              }
            `}</style>
            <div
              className="shadow-color"
              style={{
                boxShadow: 4,
                borderWidth: 1,
                borderColor: "#EFE9F4",
                borderStyle: "solid",
                padding: 40,
                borderRadius: 10,
              }}
            >
              <Fade up delay={50}>
                <Heading as="h2" content="Голомт банк" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 560,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: 10 }}>
                      <Heading as="h3" content="ДАНСНЫ ДУГААР" />
                      <Heading
                        mt="-5px"
                        as="h3"
                        fontWeight="500"
                        content="1235121688"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          height: 40,
                          width: 40,
                          borderRadius: 20,
                          backgroundColor: "#10ac84",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CopyToClipboard
                          text="1235121688"
                          onCopy={() => toast.success("Хуулагдлаа")}
                        >
                          <Icon
                            className="clipboard"
                            icon={clipboard}
                            size={20}
                            style={{ color: "white" }}
                          />
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: 10 }}>
                      <Heading as="h3" content="ДАНСНЫ НЭР" />
                      <Heading
                        mt="-5px"
                        as="h3"
                        fontWeight="500"
                        content="Төрмандах"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          height: 40,
                          width: 40,
                          borderRadius: 20,
                          backgroundColor: "#10ac84",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CopyToClipboard
                          text="Төрмандах"
                          onCopy={() => toast.success("Хуулагдлаа")}
                        >
                          <Icon
                            className="clipboard"
                            icon={clipboard}
                            size={20}
                            style={{ color: "white" }}
                          />
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: 10 }}>
                      <Heading as="h3" content="ГҮЙЛГЭЭНИЙ ДҮН" />
                      <Heading
                        mt="-5px"
                        as="h3"
                        fontWeight="500"
                        content="6000₮"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          height: 40,
                          width: 40,
                          borderRadius: 20,
                          backgroundColor: "#10ac84",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CopyToClipboard
                          text="6000"
                          onCopy={() => toast.success("Хуулагдлаа")}
                        >
                          <Icon
                            className="clipboard"
                            icon={clipboard}
                            size={20}
                            style={{ color: "white" }}
                          />
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: 10 }}>
                      <Heading as="h3" content="ГҮЙЛГЭЭНИЙ УТГА" />
                      <Heading
                        mt="-5px"
                        as="h3"
                        fontWeight="500"
                        content="Оюутны код, өөрийн нэр, утасны дугаар"
                      />
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </Wrappper>
        </Box>
      </form>
    </LoginModalWrapper>
  );
};

// LoginModal style props
HackathonPayment.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

// LoginModal default style
HackathonPayment.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    height: "auto",
    ml: "15px",
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "20px", "2px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mb: "10px",
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px",
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["32px", "56px"],
  },

  contentWrapper2: {
    pr: "32px",
  },
  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84",
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48",
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

export default HackathonPayment;
