import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { clipboard } from 'react-icons-kit/typicons/clipboard';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import Box from 'common/components/Box';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, { FeatureWrapper, Wrappper } from './features.style';
import featureIcon1 from 'common/assets/image/appModern/icon1.svg';

import { features, features2 } from 'common/data/AppModern';

const Features = ({ content }) => {
  const { slogan, title, items } = features;
  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading content={content} />
          </Fade>
        </SectionHeader>
          <Fade up>
            <div style={{ textAlign: 'center' }}>
              <p>Уг програмчлалын олимпиадад нь 2 үе шаттай зохион байгуулагдана.</p>
            </div>
          </Fade>
        <FeatureWrapper>
          {items.map((item) => (
            <Fade up delay={100 * item.id} key={`feature-key${item.id}`}>
              <FeatureBlock
                style={{ '--color': `${item.color}` }}
                icon={
                  <Fragment>
                    <Icon className="plus" icon={plus} />
                    <Icon className="circle" icon={mediaRecordOutline} />
                    <NextImage src={item.icon} alt={item.title} />
                    <Icon className="star" icon={starOutline} />
                  </Fragment>
                }
                iconPosition="left"
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
        <Fade up>
            <div style={{ textAlign: 'center' }}>
              <p>Бүртгэлийн хураамжаа төлснөөр таны бүртгэл баталгаажна.  Бүртгэл баталгаажсан <br/> эсэхийг таны имэйл хаягаар мэдэгдэх болно.  </p>
            </div>
          </Fade>
        <Wrappper>
        <style jsx>{`
              .shadow-color {
                -webkit-box-shadow: 0px 0px 10px -4px #000000; 
                box-shadow: 0px 0px 10px -4px #000000;
              }
            `}</style>
          <div className="shadow-color" style={{ boxShadow: 4, borderWidth: 1, borderColor: '#EFE9F4', borderStyle: 'solid', padding: 40, borderRadius: 10 }}>
            <Fade up delay={100 * 6}>
            <Heading as="h3" content="Голомт банк" />
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 560 }}>
                  <ToastContainer 
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    draggable
                    style={{ zIndex: 1000, top: 200 }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <div style={{ marginTop: 10 }}>
                      <Heading as="h4" content="ДАНСНЫ ДУГААР" />
                      <Text content="1235121688" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ 
                        display: 'flex', height: 40, width: 40, borderRadius: 20, backgroundColor: '#10ac84', justifyContent: 'center', alignItems: 'center' }}>
                        <CopyToClipboard text="1235121688" onCopy={() =>  toast.success("Хуулагдлаа")}>
                          <Icon className="clipboard" icon={clipboard} size={20} style={{ color: 'white' }} />
                        </CopyToClipboard>
                      </div>
                    </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <div style={{ marginTop: 10 }}>
                      <Heading as="h4" content="ДАНСНЫ НЭР" />
                      <Text content="Төрмандах" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ 
                        display: 'flex', height: 40, width: 40, borderRadius: 20, backgroundColor: '#10ac84', justifyContent: 'center', alignItems: 'center' }}>
                         <CopyToClipboard text="Төрмандах" onCopy={() =>  toast.success("Хуулагдлаа")}>
                          <Icon className="clipboard" icon={clipboard} size={20} style={{ color: 'white' }} />
                        </CopyToClipboard>
                      </div>
                    </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <div style={{ marginTop: 10 }}>
                      <Heading as="h4" content="ГҮЙЛГЭЭНИЙ ДҮН" />
                      <Text content="3000₮" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ 
                        display: 'flex', height: 40, width: 40, borderRadius: 20, backgroundColor: '#10ac84', justifyContent: 'center', alignItems: 'center' }}>
                         <CopyToClipboard text="3000" onCopy={() =>  toast.success("Хуулагдлаа")}>
                          <Icon className="clipboard" icon={clipboard} size={20} style={{ color: 'white' }} />
                        </CopyToClipboard>
                      </div>
                    </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <div style={{ marginTop: 10 }}>
                      <Heading as="h4" content="ГҮЙЛГЭЭНИЙ УТГА" />
                      <Text content="Бүртгүүлсэн оюутны код, Утасны дугаар" />
                    </div>
                      </div>
                </div>
            </Fade>
          </div>
        </Wrappper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
