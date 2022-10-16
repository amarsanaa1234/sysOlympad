import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import { Icon } from 'react-icons-kit';
import { iosSearchStrong } from 'react-icons-kit/ionicons/iosSearchStrong';
import Button from 'common/components/Button';
import SearchPanelWrapper from './searchPanel.style';

const SearchPanel = ({ titleStyle, hintStyle, btnStyle }) => {

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [studentCode, setStudentCode] = useState('');

  const validateText = (val) => {
    return val.length > 1
  }
  const validateNumeric = (val) => {
    const re = /^[0-9]{8,}$/;
    return re.test(val);
  };
  const validateEmail = (val) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(val);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    console.log(email)
  }
  return (
    <SearchPanelWrapper>
      <form onSubmit={onSubmit}>
        <Heading content="Бүтгүүлэх хэсэг" {...titleStyle} />
        <Input label="Овог: " value={lastname} onChange={(text) => setLastname(text)} />
        {!validateText(lastname) && <Text content="*Овогоо оруулна уу" {...hintStyle} />}
        <Input label="Нэр: " value={firstname} onChange={(text) => setFirstname(text)} />
        {!validateText(firstname) && <Text content="*Нэрээ оруулна уу" {...hintStyle} />}
        <Input label="Оюутны код: " value={studentCode} onChange={(text) => setStudentCode(text)}/>
        {!studentCode.valid && <Text content="*Оюутаны код буруу ..." {...hintStyle} />}
        <Input inputType="number" value={phoneNumber} label="Утасны дугаар: " onChange={(text) => setPhoneNumber(text)}/>
        {!validateNumeric(phoneNumber) && <Text content="*Утасны дугаар буруу ..." {...hintStyle} />}
        <Input inputType="email" value={email.value} label="Мэйл хаяг" onChange={(text) => setEmail(text)} />
        {!validateEmail(email) && <Text content="*Мэйл хаяг буруу байна." {...hintStyle} />}
        <Button style={{ marginTop: 20 }} type="submit" className="secondary" title="Бүтгүүлэх" />
      </form>
    </SearchPanelWrapper>
  );
};

// SearchPanel style props
SearchPanel.propTypes = {
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
};

// SearchPanel default style
SearchPanel.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['24px', '30px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // hint default style
  hintStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'red',
    letterSpacing: '-0.025em',
    marginTop: '-8px',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default SearchPanel;
