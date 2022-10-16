import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabs, { TabPane } from 'rc-tabs';
// import TabContent from 'rc-tabs/lib/TabContent';
// import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import CheckBox from 'common/components/Checkbox/index';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import LoginModalWrapper from './loginModal.style';
import 'rc-tabs/assets/index.css';
import LogoImage from 'common/assets/image/agency/logo.png';
import LoginImage from 'common/assets/image/agency/login-bg.jpg';
import { alignItems, height } from 'styled-system';
import axios from 'axios';
import Counter from 'containers/AppMinimal/Counter';
import Features from 'containers/AppModern/Features';


const Space = styled.div`
  height: 10px;
  width: 100%;
`;

const LoginModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  hintStyle,
}) => {
  const LoginButtonGroup = () => (
    <Fragment>
      <Button className="default" title="LOGIN" {...btnStyle} />
      <Button
        title="Forget Password"
        variant="textButton"
        {...outlineBtnStyle}
      />
    </Fragment>
  );

  const registerData = async (data) => {
    toast.promise(
      axios.post('https://syscotech-api.herokuapp.com/api/v1/olympiads/616ef1d2be18de66889ae3e8/users', data, {
        headers: {
          'Access-Control-Allow-Headers': "*"
        }
      }),
        {
          pending: 'Бүртгэл хийгдэж байна... ',
          success: {
            render(data){
              setRegister(true);
              return `Амжилттай бүртгэгдлээ. `
            },
          },
          error: {
            render(data){
              return `Оюутны код бүртгэлтэй байна. `
            },
          },
        }
    )
  }

  const [lastname, setLastname] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [studentCode, setStudentCode] = useState(null);
  const [register, setRegister] = useState(false);

  const validateText = (val) => {
    if(val === null) {
      return true;
    }
    return val.length > 1
  }
  const validateNumeric = (val) => {
    if(val === null) {
      return true;
    }
    const re = /^[0-9]{8,}$/;
    return re.test(val);
  };
  const validateEmail = (val) => {
    if(val === null) {
      return true;
    }
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(val);
  };

  const validateCode = (val) => {
    if(val === null) {
      return true;
    }
    // B190120009
    const re = /^B[1-2]{1}[0-1.9]{1}[0-9]{7}$/;
    return re.test(val);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(!validateText(lastname || '' )) {
      setLastname(lastname || '');
      return;
    }

    if(!validateText(firstname || '' )) {
      setFirstname(firstname || '');
      return;
    }

    if(!validateCode(studentCode || '')) {
      setStudentCode(studentCode || '');
      return;
    }

    if(!validateNumeric(phoneNumber || '')) {
      setPhoneNumber(phoneNumber || '');
      return;
    }

    if(!validateEmail(email || '')) {
      setEmail(email || '');
      return;
    }

    registerData({ firstname, lastname, email, studentCode, phoneNumber });
  }

  const renderRegister = () => (
    <Box className="row" {...row}>
      <Box className="col " {...col}>
        <Box {...contentWrapper}>
          <form onSubmit={onSubmit}>
          <Heading content="Бүртгүүлэх хэсэг" {...titleStyle} />
          <Space/>
          <Input label="Овог: " value={lastname || ''} onChange={(text) => setLastname(text)} />
          {!validateText(lastname) && <Text content="*Овогоо оруулна уу" {...hintStyle} style={{ marginTop: 8 }} />}
          <Space/>
          <Input label="Нэр: " value={firstname} onChange={(text) => setFirstname(text)} />
          {!validateText(firstname) && <Text content="*Нэрээ оруулна уу" {...hintStyle} style={{ marginTop: 8 }} />}
          <Space/>
          <Input inputType="text" label="Оюутны код: " value={studentCode} onChange={(text) => setStudentCode(text)}/>
          {!validateCode(studentCode) && <Text content="*Тэмцэнд оролцох боломжгүй оюутны код байна ..." {...hintStyle} style={{ marginTop: 8 }} />}
          <Space/>
          <Input inputType="number" value={phoneNumber} label="Утасны дугаар: " onChange={(text) => setPhoneNumber(text)}/>
          {!validateNumeric(phoneNumber) && <Text content="*Утасны дугаар буруу ..." {...hintStyle} style={{ marginTop: 8 }} />}
                      <Space/>
          <Input inputType="email" value={email} label="Мэйл хаяг" onChange={(text) => setEmail(text)} />
          {!validateEmail(email) && <Text content="*Мэйл хаяг буруу байна." {...hintStyle} style={{ marginTop: 8 }} />}
          <Space/>
          <br/>
          <Button type="submit" className="default" title="Бүртгүүлэх" {...btnStyle}/>
        </form>
        </Box>
      </Box>
    </Box>
  );

  return (
    <LoginModalWrapper>
        <ToastContainer 
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          draggable
          style={{ zIndex: 1000, top: 200 }}
        />
      {/* <Counter/> */}
      { register ? (<Features content="Манай програмчлалын олимпиадад бүртгүүлсэнд баярлалаа." />) : renderRegister() }
    </LoginModalWrapper>
  );
};

// LoginModal style props
LoginModal.propTypes = {
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
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Team member col default style
  col: {
    width: ['100%', '80%', '60%'],
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px',
  },
  // Title default style
  titleStyle: {
    fontSize: ['22px', '36px', '50px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '30px',
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px',
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['17px', '32px', '38px', '40px', '56px'],
    pr: '32px',
    pb: ['32px', '56px'],
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    maxHeight: '40px',
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#10ac84',
  },
  // Google button style
  googleButtonStyle: {
    bg: '#ffffff',
    color: '#343D48',
  },
  hintStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'red',
    letterSpacing: '-0.025em',
    marginTop: '8px',
  },
};

export default LoginModal;
