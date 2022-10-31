import React from 'react';
import Text from 'common/components/Text';
import Fade from 'react-reveal/Fade';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import { WalletFeatures } from 'common/data/CryptoModern';
import SectionWrapper, { ContentWrapper } from './walletSection.style';
import WalletImg from 'common/assets/image/cryptoModern/frame.png';

const WalletPortal = () => {
  return (
    <SectionWrapper id="wallet">
      <Container>
        <ContentWrapper>
          <div className="image">
            <NextImage src={WalletImg} alt="Wallet Image" />
          </div>
          <div className="content">
            <Heading content={<div style={{fontFamily: 'Roboto'}}>"System & Computer Technology"</div>} />
            {/* <Text content="Sys&CoTech 11 дэх удаагийн Програмчлалын олимпиад." /> */}
            <div className="walletfeatures">
              <Fade up>
                {WalletFeatures.map((feature, index) => (
                  <FeatureBlock
                    key={`feature_point-${index}`}
                    icon={<img src={feature.icon?.src} />}
                    iconPosition="left"
                    title={<Text content={feature.title} />}
                  />
                ))}
              </Fade>
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletPortal;
