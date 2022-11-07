import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { Schemasignin } from '../validaton/schema';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";





function Login() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Schemasignin),
    });



    const submitForm = async (signInValues, e) => {
        e.preventDefault()

        try {
        let {data} = await axios.post('http://localhost:8080/route/login', signInValues)
            console.log("Result",data)
        } 
        catch (error) {
            console.log("Error",error)
        }

    };


    return (
        <form onSubmit={handleSubmit(submitForm)}>

            <div style={{
                backgroundColor: "#39415F",
                height: "100vh",
                width: "100%",
                display: "flex", justifyContent: "center", alignItems: "center", padding: "90px 0 90px 0"
            }}>
                <div style={{
                    display: "flex", flexDirection: "column", justifyContent: "center", height: "550px", width: "30%", backgroundColor: "white", borderRadius: "25px", padding: "10px"

                }}>
                    <h2 style={{ marginLeft: "35%", marginTop: "20px" }}>Log In</h2>


                    <TextField
                        sx={{
                            margin: "10px"
                        }}

                        label="E-mail"
                        name='email'
                        type="email"
                        autoComplete="current-email"
                        helperText={errors.email?.message}
                        {...register("email")}
                    />
                     <TextField
                        sx={{
                            margin: "10px"
                        }}
                        label="Password"
                        name='password'
                        type="password"
                        autoComplete="current-password"
                        helperText={errors.password?.message}
                        {...register("password")}
                    />



                    <Button

                        sx={{ display: "inline-block", textdecoration: "none", borderBottom: "none", margin: "10px", width: "10vw", marginLeft: "30%" }}
                        variant="contained"
                        color="success"
                        type='submit'>

                        Submit
                    </Button>



                    <p style={{
                        marginLeft: "25%",
                        marginTop: "20px"
                    }}>
                        Don't have an account?
                        <Link to='/signup'>
                            <span>
                                Create New
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default Login
