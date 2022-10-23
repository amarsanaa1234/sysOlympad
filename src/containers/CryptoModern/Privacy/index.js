import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './privacy.style';
import Illustration from 'common/assets/image/cryptoModern/illustration1.png';

const PrivacyPortal = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading content={<div style={{fontFamily: 'MulishBold'}}>Програмчлалын олимпиад - 2021</div>} />
            <Text content="Шагналт байрнанд шалгарсан оюутнууд" />
          </div>
          <div className="image">
            <Fade up>
              <NextImage src={Illustration} alt="Illustration Image" />
            </Fade>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PrivacyPortal;
