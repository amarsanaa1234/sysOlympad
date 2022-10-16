import React from "react";
import Container from "common/components/UI/Container";
import SectionWrapper, { PricingCard } from "./pricingPolicy.style";

import crown from "common/assets/image/appClassic/crown.svg";

import { pricing } from "common/data/AppModern";

const PricingPolicy = ({ children }) => {
  return (
    <SectionWrapper id="pricing">
      <Container>
        <PricingCard>
          {true && (
            <span style={{ paddingLeft: 10, paddingRight: 10 }} className="tag">
              <img src={crown?.src} alt="Crown" /> Ерөнхий ивээн тэтгэгч
            </span>
          )}
          {children}
        </PricingCard>
      </Container>
    </SectionWrapper>
  );
};

export default PricingPolicy;
