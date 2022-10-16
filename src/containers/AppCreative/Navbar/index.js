import React, { useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import Logo from "common/components/UIElements/Logo";
import Button from "common/components/Button";
import Container from "common/components/UI/Container";
import NavbarWrapper, { MenuArea, MobileMenu } from "./navbar.style";

import { navbar } from "common/data/AppCreative";

const Navbar = () => {
  const { logoImage, navMenu } = navbar;
  const [state, setState] = useState({
    mobileMenu: false,
  });

  const toggleHandler = (type) => {
    if (type === "menu") {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const scrollItems = [];

  navMenu.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/"
          logoSrc={logoImage}
          title="Sys&CoTech"
          className="main-logo"
        />
        {/* end of logo */}

        <MenuArea>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}
          <AnchorLink href="#screenshot_section" offset={-84}>
            <Button
              className="menubarRegitser"
              title="Бүртгүүлэх"
              color="#6C247E"
              borderRadius="60px"
              minHeight="40px"
              variant="outlined"
            />
          </AnchorLink>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler("menu")}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? "active" : ""}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}

            <li key={`menu_key_1000`}>
              <AnchorLink
                href="#screenshot_section"
                offset={-84}
                onClick={handleRemoveMenu}
              >
                <Button
                  right={0}
                  title="Бүртгүүлэх"
                  color="#6C247E"
                  borderRadius="60px"
                  minHeight="40px"
                  variant="outlined"
                />
              </AnchorLink>
            </li>
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
