import React from "react";
import Button from "../Button";
import css from "./style.module.css"
import Spinner from "../Spinner";
import axios from "../axios-orders"
// import { withRouter } from "react-router-dom";

class Bvrtgel extends React.Component {
    state = {
        name: null,
        studentCode: null,
        phoneNumber: null,
        email: null,
        loading: false
    }

    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    changeStudentCode = (e) => {
        this.setState({
            studentCode: e.target.value
        })
    }

    changePhoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }
    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    saveOrder = () => {
        const order = {
            delgerengui: {
              name: this.state.name,
              studentCode: this.state.studentCode,
              phoneNumber: this.state.phoneNumber,
              email: this.state.email
            }
          };
          this.setState({
            loading: true
          });
          axios
            .post("/Medeelel.json", order)
            .then(response => {
                console.log("order amjilttai");
            })
            .catch(error => {
                console.log("order amjiltgui:" + error)
            })
            .finally(() => {
            this.setState({
              loading: false    
            })
            // this.props.history.replace("/orders")
            console.log('end')
          })
    }

    render() {
        console.log('propsooooo',this.props);
        return <div className={css.ContactData}>
            {this.props.price}
            {
                this.state.loading 
                ?
                    <Spinner />
                :
                    (<div>
                        <input 
                        onChange={this.changeName} 
                        type="text" 
                        name="name" 
                        placeholder="Таны нэр" 
                        />

                        <input 
                            onChange={this.changeStudentCode}  
                            type="text" 
                            name="studentCode" 
                            placeholder="Оюутны код" 
                        />

                        <input 
                            onChange={this.changePhoneNumber} 
                            type="text" 
                            name="phoneNumber" 
                            placeholder="Утасны дугаар" 
                        />

                        <input 
                            onChange={this.changeEmail} 
                            type="text" 
                            name="email" 
                            placeholder="email" 
                        />

                        <Button 
                            text="ИЛГЭЭХ" 
                            btnType="Success"
                            daragdsan={this.saveOrder}
                        />
                    </div>)
            }
        </div>
    }
}

export default Bvrtgel; 