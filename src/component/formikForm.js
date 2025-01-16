/*
command to install formik : npm i formik --save

Formik
    -Library for building 
    -useFormik() : is a custom react hook that will return all formik states

-JSON.stringify dispalys the values in the string format
-JSON.stringify(values,null,2)

A common use of JSON is to exchange data to /from to a webserver
The data in the form is present int he JSON object .
When sending data to a webserver,the data has to be a string.
Convert a JS object into string with JSON.stringify() -show the string representation of the JASON object
*/

import React from "react";
import { useFormik } from "formik";

export const SignUpForm = () =>{
    const formik = useFormik({
        initialValues: {
            email : "",password : "",uname : "",
        },

        onSubmit: (values) =>{
            alert(JSON.stringify(values,null,2));
        },
        
        validate: (values) =>{
            let errors = {};
            if(!values.uname){
                errors.uname = "Please Enter the User Name";
            }
            if(!values.password){
                errors.password = "Please Enter the password";
            }
            if(!values.email){
                errors.email = "Please Enter the email";
            }

            return errors;
        }
        
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="uname">Username &nbsp;&nbsp;</label>
            <input type="text" id="uname" onChange={formik.handleChange} value={formik.values.uname}/>&nbsp;&nbsp;
            <br/>
            <div>
                {
                    formik.touched.uname && formik.errors.uname ?(
                        <div style={{color:'red'}}> {formik.errors.uname} </div>
                    ) : null
                }
            </div>
            <br/>


            <label htmlFor="password">Passowrd&nbsp;&nbsp;</label>
            <input type="password" id="password" onChange={formik.handleChange} value={formik.values.password}/>&nbsp;&nbsp;
            <br/>
            <div>
                {
                    formik.touched.password && formik.errors.password ?(
                        <div style={{color:'red'}}> {formik.errors.password} </div>
                    ) : null
                }
            </div>
            <br/>


            <label htmlFor="email">Email&nbsp;&nbsp;</label>
            <input type="emial" id="email" onChange={formik.handleChange} value={formik.values.email}/>&nbsp;&nbsp;
            <br/>
            <div>
                {
                    formik.touched.email && formik.errors.email ?(
                        <div style={{color:'red'}}> {formik.errors.email} </div>
                    ) : null
                }
            </div>
            <br/>

            <button>Submit</button>
        </form>
    )

}