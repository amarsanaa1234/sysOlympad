import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from 'common/assets/image/cryptoModern/Brain_Banner.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content={<div style={{fontFamily: "Roboto"}}>Програмчлалын олимпиад - 2022</div>}
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              style={{
                lineHeight: "1.6",
              }}
              content={<div style={{fontFamily: "MuhlishBold", fontSize: "18px", color: '#30D4FE'}}>МХТС-ийн 1-4 курсын бүх оюутан залууст</div>}
            />
          </Fade>
          {/* <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="GET TOKEN" />
              <Button
                className="text"
                variant="textButton"
                title="WHITE PAPER"
              />
            </ButtonGroup>
          </Fade> */}
        </BannerContent>
        <BannerImage>
          <Fade in delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
