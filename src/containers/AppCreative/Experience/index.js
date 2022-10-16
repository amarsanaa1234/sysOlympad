import React from "react";
import Logo from "common/components/UIElements/Logo";
import { Icon } from "react-icons-kit";
import { ic_play_arrow } from "react-icons-kit/md/ic_play_arrow";
import { openModal, closeModal } from "@redq/reuse-modal";
import Button from "common/components/Button";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import { SectionHeader } from "../appCreative.style";
import FeatureBlock from "common/components/FeatureBlock";
import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper,
  VideoWrapper,
  VideoArea,
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from "./experience.style";
import { experiences, event } from "common/data/AppCreative";
import PricingPolicy from "containers/AppModern/PricingPolicy";

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/oAuGv5_qtlQ"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Experiences = () => {
  const { slogan, title, features, video_theme, clients } = experiences;

  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content="ШУТИС-МХТС Sys&CoTech клуб нь 2009 оноос хойш мэдээллийн технологийн чиглэлийн оюутнуудад зориулсан олон ажил, үйл ажиллагааг удирдан зохион байгуулж явуулсаар байна." />
        </SectionHeader>
        <ExperienceMainWrap>
          <VideoArea onClick={handleVideoModal}>
            <NextImage src={video_theme} alt="Microsoft" />
            <Button
              className="video__btn"
              icon={<Icon className="plus" icon={ic_play_arrow} />}
            />
          </VideoArea>
          <SectionHeader>
            <Heading content="Ерөнхий ивээн тэтгэгч" />
            <Text
              content={`"Dev Hackathon Student - 2022" тэмцээний ерөнхий ивээн тэтгэгч`}
            />
            <PricingPolicy>
              <FeatureBlock
                logo
                className="experience__item"
                icon={
                  <NextImage
                    src={event.icon}
                    alt={`Icon ${event.id}`}
                    objectFit="contain"
                    className="experience__image"
                    width={200}
                    height={90}
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={event.title} />}
                description={<Text content={event.description} />}
              />
            </PricingPolicy>
          </SectionHeader>
          <SectionHeader>
            <Heading content="Ивээн тэтгэгч" />
            <Text content={slogan} />
          </SectionHeader>
          <ExperienceWrapper>
            {features.map((item, index) => (
              <FeatureBlock
                logo
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="experience__item"
                icon={
                  <NextImage
                    src={item.icon}
                    alt={`Icon ${item.id}`}
                    objectFit="contain"
                    className="experience__image"
                    width={200}
                    height={90}
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            ))}
          </ExperienceWrapper>
        </ExperienceMainWrap>
        <ClientWrapper>
          <div className="client__text">
            <Text as="span" content={"Ивээн тэтгэгч байгууллагууд"} />
          </div>
          <ImageSlider>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                  logoStyle={{ height: 60 }}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide2__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                  logoStyle={{ height: 60 }}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide3__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                  logoStyle={{ height: 60 }}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
