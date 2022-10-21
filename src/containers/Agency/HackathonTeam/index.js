import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import LoginModalWrapper from "./loginModal.style";
import "rc-tabs/assets/index.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Alert from "common/components/Alert";

const HackathonTeamSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Оролцогчийн нэрээ оруулна уу!")
    .required("Оролцогчийн нэрээ оруулна уу!"),
  lastname: Yup.string()
    .min(2, "Оролцогчийн овог хоосон байна!")
    .required("Заавал оруулах"),
  studentCode: Yup.string()
    .required("Заавал оруулах")
    .test("student-code", "Оюутаны код буруу байна!", (value, data) => {
      const {
        parent: { schoolName },
      } = data;
      return schoolValidation(schoolName, value);
    }),
  class: Yup.string()
    .min(2, "Суралцаж буй мэргэжил ээ бичнэ үү!!")
    .required("Заавал оруулах"),
  course: Yup.string().required("Заавал оруулах"),
  email: Yup.string()
    .email("И-мэйл хаяг буруу байна!")
    .required("Заавал оруулах"),
  phoneNumber: Yup.number()
    .min(8, "Утасны дугаар аа зөв оруулан уу")
    .required("Утасны дугаар хоосон байна"),
  subSchoolName: Yup.string().test(
    "sub-school",
    "Суралцаж буй сургуулийн нэрийг бичнэ үү!",
    (value, data) => {
      const {
        parent: { schoolName },
      } = data;

      // if (schoolName === "Бусад") {
      //   if (value && value.length > 1) {
      //     return true;
      //   }
      //   return false;
      // }
      return true;
    }
  ),
});

export const Space = styled.div`
  height: 10px;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: block;
  color: #767676;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  -webkit-transition: 0.2s ease all;
  transition: 0.2s ease all;
`;

export const FormInput = styled.input`
  font-size: 16px;
  padding: 11px;
  display: block;
  width: 100%;
  color: #484848;
  box-shadow: none;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.error ? "#ff4362" : "#ebebeb")};
  transition: border-color 0.2s ease;
  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "#ff4362" : "#028489")};
  }
`;

export const FormError = styled.p`
  color: #e55353;
  margin-top: 5px;
`;

export const Select = styled.select`
  font-size: 16px;
  padding: 11px;
  display: block;
  width: 100%;
  color: #484848;
  box-shadow: none;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.error ? "#ff4362" : "#ebebeb")};
  transition: border-color 0.2s ease;
  padding-right: 20px;
  background-color: #fff;
`;

export const Option = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

export const FormComponent = ({
  value,
  onChange,
  name,
  label,
  error,
  errorMsg,
  type = "text",
  contentType = "input",
  disabled = false,
  options = [],
}) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      {contentType === "input" ? (
        <FormInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          error={error}
          disabled={disabled}
        />
      ) : options.length > 0 ? (
        <Select
          name={name}
          value={value}
          defaultValue={options[0]}
          onChange={onChange}
          error={error}
          disabled={disabled}
        >
          {options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      ) : (
        <Select
          name={name}
          value={value}
          defaultValue="ШУТИС"
          onChange={onChange}
          error={error}
          disabled={disabled}
        >
          <Option value="ШУТИС">ШУТИС</Option>
          <Option value="МУТС">МУТС</Option>
        </Select>
      )}
      {error && <FormError>{errorMsg}</FormError>}
    </div>
  );
};

const schoolData = ["ШУТИС", "МУИС"];

const courseList = ["1", "2", "3"];

const schoolValidation = (schoolName, value) => {
  switch (schoolName) {
    case "ШУТИС":
      // B180930008
      return /^[Bb]{1}[1-2]{1}[0-9]{8}$/.test(value);
    case "МУИС":
      // 21b1num0595
      return /^[0-9]{2}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[a-zA-Z]{1}[a-zA-Z]{1}[0-9]{4}$/.test(
        value
      );
    default:
      return value ? value.length > 2 : false;
  }
};

const HackathonTeam = ({
  row,
  col,
  btnStyle,
  contentWrapper,
  validTeam,
  setValidTeam,
  registerSuccess = false,
  setRegisterSuceess,
}) => {
  const initialValues = {
    firstname: "",
    email: "",
    phoneNumber: "",
    schoolName: schoolData[0],
    subSchoolName: "",
    class: "",
    course: courseList[0],
    studentCode: "",
    lastname: "",
  };

  const createUserForm = async () => {
    const data = await localStorage.getItem("hackathonTeam");
    const hackathonTeam = JSON.parse(data);

    if (!hackathonTeam) {
      toast.warn("Багийн мэдээлэл олдсонгүй !!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setRegisterSuceess(true);
    await teamRegister(hackathonTeam);
  };

  const SignupButtonGroup = ({ setFieldValue }) => (
    <Fragment>
      <Button
        type="submit"
        className="default"
        title="Багийн гишүүн нэмэх"
        {...btnStyle}
        style={{ borderRadius: 5 }}
      />

      <Button
        type="submit"
        className="default"
        title="Бүртгүүлэх"
        // disabled={!submitBtnDisaled}
        // style={{
        //   backgroundColor: !submitBtnDisaled ? "grey" : "green",
        //   borderRadius: 5,
        // }}
        {...btnStyle}
        onClick={createUserForm}
      />

      <Button
        type="submit"
        className="default"
        title="Бүртгүүлэх"
        // disabled={!submitBtnDisaled}
        // style={{
        //   marginLeft: 30,
        //   backgroundColor: !submitBtnDisaled ? "grey" : "green",
        //   borderRadius: 5,
        // }}
        {...btnStyle}
        onClick={() => {
          setFieldValue("isSubmit", true);
        }}
      />
    </Fragment>
  );

  const teamRegister = async (data) => {
    toast.promise(
      axios.post(
        "https://syscotech-api.herokuapp.com/api/v1/hackathons/6255f6fbbaf0fa4aebde4072/teams",
        data,
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
          },
        }
      ),
      {
        pending: "Багийн бүртгэл хийгдэж байна... ",
        success: {
          render(data) {
            const requestData = data.data.data;
            promises(requestData.data.id);
            return `Амжилттай бүртгэгдлээ. `;
          },
        },
        error: {
          render(data) {
            return `Бүртгэх үед алдаа гарлаа. `;
          },
        },
      }
    );
  };

  const checkTeamName = (data) => {
    const formData = data;
    toast.promise(
      axios.post(
        "https://syscotech-api.herokuapp.com/api/v1/hackathonteams/check",
        data,
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
          },
        }
      ),
      {
        pending: "Багийн мэдээллийг шалгаж байна... ",
        success: {
          render(data) {
            localStorage.setItem("hackathonTeam", JSON.stringify(formData));
            setValidTeam(true);
            return "Тэмцээнд бүртгүүлэх боломжтой.";
          },
        },
        error: {
          render(data) {
            return `${formData.name} нэртэй баг бүртгэлтэй байна!!!`;
          },
        },
      }
    );
  };

  // const checkStudentCode = (data, id) => {
  //   const formData = data;
  //   const isSubmit = formData.isSubmit;
  //   toast.promise(
  //     axios.post(
  //       "https://syscotech-api.herokuapp.com/api/v1/hackathonusers/check",
  //       data,
  //       {
  //         headers: {
  //           "Access-Control-Allow-Headers": "*",
  //         },
  //       }
  //     ),
  //     {
  //       pending: `Оролцогч #${id} мэдээллийг шалгаж байна... `,
  //       success: {
  //         render(data) {
  //           if (isSubmit) {
  //             setLastUser(false);
  //           }
  //           const index = rolesData.indexOf(formData.role);
  //           rolesData.splice(index, 1);
  //           setRolesData([...rolesData]);
  //           forms.push(formData);
  //           setForms([...forms]);
  //           return `Оролцогч ${id}-ийг бүртгэх боломжтой.`;
  //         },
  //       },
  //       error: {
  //         render(data) {
  //           return `${formData.studentCode} оюутны код бүртгэлтэй байна.!!!`;
  //         },
  //       },
  //     }
  //   );
  // };

  const registerHackathonTeam = async (data) => {
    if (data.schoolName === "Бусад") {
      data.schoolName = data.subSchoolName;
    }

    await checkTeamName(data);
  };

  return (
    <LoginModalWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={HackathonTeamSchema}
        onSubmit={(values) => registerHackathonTeam(values)}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box style={{ paddingBottom: 32 }} {...contentWrapper}>
              {registerSuccess ? (
                <Alert
                  style={{
                    borderColor: "#badbcc",
                    backgroundColor: "#d1e7dd",
                    color: "#0f5132",
                    marginBottom: 30,
                  }}
                >
                  - Бүртгэлийн хураамжийг төлснөөр тэмцээнд оролцох эрх
                  баталгаажих болно. <br /> - Бүртгэлтэй холбоотой асууж
                  тодруулах зүйл гарвал манай сошиал хаягууд руу хандана уу!
                </Alert>
              ) : (
                <Alert
                  style={{
                    borderColor: "#ffecb5",
                    backgroundColor: "#fff3cd",
                    color: "#664d03",
                    marginBottom: 30,
                  }}
                >
                  Нэг баг нь 3-5 хүний бүрэлдэхүүнтэй оролцох боломжтой бөгөөд
                  багийн гишүүний тоо хүрээгүй тохиолдолд тэмцээнд оролцох
                  боломжгүйг анхаарна уу!
                </Alert>
              )}
              <Heading content="Багийн мэдээлэл" />
              <Box className="row" {...row}>
                <Box className="col" {...col}>
                  <Box className="formComponent">
                    <Space />
                    <FormComponent
                      name="firstname"
                      value={values.firstname}
                      label="Оролцогчийн нэр: "
                      onChange={handleChange}
                      error={errors.firstname && touched.firstname}
                      errorMsg={errors.firstname}
                      disabled={validTeam}
                    />
                    {/* <Space />
                    <FormComponent
                      label="Сургуулийн нэр:"
                      name="schoolName"
                      value={values.schoolName}
                      onChange={handleChange}
                      error={errors.schoolName && touched.schoolName}
                      errorMsg={errors.schoolName}
                      contentType="select"
                      disabled={validTeam}
                      options={schoolData}
                    /> */}
                    <Space />
                    {/* {values.schoolName === "Бусад" && (
                      <>
                        <FormComponent
                          label="Суралцаж буй сургууль:"
                          name="subSchoolName"
                          value={values.subSchoolName}
                          onChange={handleChange}
                          error={errors.subSchoolName && touched.subSchoolName}
                          errorMsg={errors.subSchoolName}
                          disabled={validTeam}
                        />
                        <Space />
                      </>
                    )} */}
                  </Box>
                </Box>
                <Box className="col" {...col}>
                  <Box className="formComponent">
                    <Space />
                    <FormComponent
                      label="И-мэйл хаяг: "
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email && touched.email}
                      errorMsg={errors.email}
                      disabled={validTeam}
                    />
                    <Space />
                    <FormComponent
                      label="Утасны дугаар:"
                      name="phoneNumber"
                      type="number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      error={errors.phoneNumber && touched.phoneNumber}
                      errorMsg={errors.phoneNumber}
                      disabled={validTeam}
                    />
                    <Space />
                    <FormComponent
                      name="class"
                      value={values.class}
                      label="Ямар мэргэжлээр суралцдаг вэ:"
                      onChange={handleChange}
                      error={errors.class && touched.class}
                      errorMsg={errors.class}
                      disabled={validTeam}
                    />
                    <Space />
                    <FormComponent
                      name="course"
                      value={values.course}
                      label="Курс: "
                      onChange={handleChange}
                      error={errors.course && touched.course}
                      errorMsg={errors.course}
                      disabled={validTeam}
                      options={courseList}
                      contentType="select"
                    />
                    <FormComponent
                      name="studentCode"
                      value={values.studentCode}
                      label="Оюутны код: "
                      onChange={handleChange}
                      error={errors.studentCode && touched.studentCode}
                      errorMsg={errors.studentCode}
                      disabled={validTeam}
                    />
                    <Space />
                    <FormComponent
                      name="lastname"
                      value={values.lastname}
                      label="Оролцогчийн овог: "
                      onChange={handleChange}
                      error={errors.lastname && touched.lastname}
                      errorMsg={errors.lastname}
                      disabled={validTeam}
                    />
                  </Box>
                </Box>
              </Box>
              {!validTeam && (
                <>
                  <Space />
                  <Space />
                  <SignupButtonGroup />
                </>
              )}
            </Box>
          </form>
        )}
      </Formik>
    </LoginModalWrapper>
  );
};

// LoginModal style props
HackathonTeam.propTypes = {
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
HackathonTeam.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    height: "auto",
    ml: "15px",
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "20px", "2px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mb: "10px",
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px",
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["32px", "56px"],
  },

  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84",
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
};

export default HackathonTeam;
