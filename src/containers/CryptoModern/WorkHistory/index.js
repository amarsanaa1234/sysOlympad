import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Box from 'common/components/Box';
import NextImage from 'common/components/NextImage';
import Card from 'common/components/Card';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style';
import shape1 from 'common/assets/image/cryptoModern/NEG.png';
import shape2 from 'common/assets/image/cryptoModern/HOYR.png';
import shape3 from 'common/assets/image/cryptoModern/GURAW.png';
import shape4 from 'common/assets/image/cryptoModern/TUSGAI.png';

const WorkHistory = ({ row, col, cardStyle, btnStyle }) => {
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <NextImage src={shape1} alt="Shape 1" />
                <h3>
                  <CountUp start={0} end={300000} duration={2}/>₮
                </h3>
                <Text content={<div style={{fontFamily: 'MulishBold', fontSize: '20px'}}>1 - Байр</div>} />
              </Card>
              <Card className="card" {...cardStyle}>
                <NextImage src={shape2} alt="Shape 2" />
                <h3>
                  <CountUp start={0} end={250000} duration={2} />₮
                </h3>
                <Text content={<div style={{fontFamily: 'MulishBold', fontSize: '20px'}}>2 - Байр</div>} />
              </Card>
              <Card className="card" {...cardStyle}>
                <NextImage src={shape3} alt="Shape 3" />
                <h3>
                  <CountUp start={0} end={200000} duration={2} />₮
                </h3>
                <Text content={<div style={{fontFamily: 'MulishBold', fontSize: '20px'}}>3 - Байр</div>} />
              </Card>
              <Card className="card" {...cardStyle}>
                <NextImage src={shape4} alt="Shape 4" />
                <h3>
                  <CountUp start={0} end={100000} duration={2} />₮
                </h3>
                <Text content={<div style={{fontFamily: 'MulishBold', fontSize: '20px'}}>Уран бодолт</div>} />
              </Card>
            </CounterUpArea>
          </Box>
          <Box className="col" {...col}>
            <FeatureBlock
              title={<Heading content={<div style={{fontFamily: 'MulishBold'}}>Шагналын сан</div>} />}
              description={
                <Text content="Sys&CoTech клубийн санаачлан зохион байгуулсан  програмчлалын олимпиадын  шагналын сан + ивээн тэтгэгчдийн гарын бэлэг." />
              }
              // button={
              //   <Button
              //     title="See our stories"
              //     variant="textButton"
              //     icon={<i className="flaticon-next" />}
              //     {...btnStyle}
              //   />
              // }
            />
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
  },

  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default WorkHistory;
