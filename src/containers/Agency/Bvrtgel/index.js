import Button from "../Button";
import css from "./style.module.css";
import Spinner from "../Spinner";
import axios from "../axios-orders";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const Bvrtgel = () => {
  const [name, setName] = useState(null);
  const [studentCode, setStudentCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  const HackathonTeamSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Оролцогчийн нэрээ оруулна уу!")
      .required("Оролцогчийн нэрээ оруулна уу!"),
  });

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeStudentCode = (e) => {
    setStudentCode(e.target.value);
  };

  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const saveOrder = () => {
    const order = {
      delgerengui: {
        name,
        studentCode,
        phoneNumber,
        email,
      },
    };

    setLoading(true);
    axios
      .post("/Medeelel.json", order)
      .then((response) => {
        alert("order amjilttai");
      })
      .catch((error) => {
        console.log("order amjiltgui:" + error);
      })
      .finally(() => {
        setLoading(false);
        console.log("end");
      });
  };

  return (
    <div className={css.ContactData}>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h2>Бүртгүүлэх хэсэг</h2>
            <label >Таны нэр
            <input 
            onChange={changeName} 
            type="text" 
            name="name" 
            />
            </label>
            
            <label >Оюутны код
            <input 
                onChange={changeStudentCode}  
                type="text" 
                name="studentCode" 
            />
            </label>

            <label >Утасны дугаар
            <input 
                onChange={changePhoneNumber} 
                type="text" 
                name="phoneNumber" 
            />
            </label>

            <label >email
            <input 
                onChange={changeEmail} 
                type="text" 
                name="email" 
            />
            </label>

            <Button 
                text="Илгээх" 
                btnType="Success"
                daragdsan={saveOrder}
            />
        </div>
      )}
    </div>
  );
};

export default Bvrtgel;
