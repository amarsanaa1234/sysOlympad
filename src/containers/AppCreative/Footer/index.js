import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from "./footer.style";

import { footerWidget } from "common/data/AppCreative";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <NextImage
                width={200}
                height={50}
                src={footerWidget.logo}
                alt="Logo"
              />
              <p>ШУТИС-МХТС 400 тоот</p>
              <p>+976 8655 0963</p>
              <br />
              <p>©2022 Made by SyscoTech Club ❤️</p>
            </Fade>
          </CopyrightInfo>

          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" content={footerWidget.aboutUs.title} />
              <Nav>
                {footerWidget.aboutUs.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <a>{item.text}</a>
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={300}>
              <Heading as="h4" content={footerWidget.ourInformation.title} />
              <Nav>
                {footerWidget.ourInformation.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <a>{item.text}</a>
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            {/* <Fade up delay={400}>
              <Heading as="h4" content={footerWidget.myAccount.title} />
              <Nav>
                {footerWidget.myAccount.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <a>{item.text}</a>
                  </Link>
                ))}
              </Nav>
            </Fade> */}
          </FooterWidget>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
