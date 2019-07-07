import React from "react";
import {Link} from "react-router-dom";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

//import styles
import "./Log.scss";

class Log extends React.Component {
    state = {
        fname: "",
        email: "",
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
                <h1 className="log-header">Zaloguj się</h1>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="grey-text">
                                Nick
                            </label>
                            <input
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="First name"
                                required
                            />
                            <div className="invalid-feedback">
                                Wprowadź prawidłowy nick
                            </div>
                            <div className="valid-feedback">Ok</div>
                        </MDBCol> 
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterPasswordEx4"
                                className="grey-text">
                                Hasło
                            </label>
                            <input
                                value={this.state.city}
                                onChange={this.changeHandler}
                                type="password"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="city"
                                placeholder="City"
                                required
                            />
                            <div className="invalid-feedback">
                                Wprowadź prawidłowe hasło
                            </div>
                            <div className="valid-feedback">Ok</div>
                        </MDBCol>  
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-4">
                            <MDBBtn color="primary" type="submit">
                            Zaloguj
                            </MDBBtn> 
                            <Link exact to={"/register"} className="link-register">
                            Zazrejestruj się
                            </Link>
                        </MDBCol>
                    </MDBRow>
                </form>
            </div>
        );
    }
}

export default Log;