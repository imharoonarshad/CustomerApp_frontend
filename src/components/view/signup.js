import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schemasignup } from '../validaton/schema';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();
    // const [signupValues, setSignupValues] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Schemasignup),
    });
    const submitForm = async (signupValues, e) => {
        e.preventDefault()
     
        await axios.post('http://localhost:8080/route/signup',  signupValues )
        console.log(signupValues)
        navigate("/login")
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
                    <h2 style={{ marginLeft: "32%", marginTop: "20px" }}>Sign Up</h2>

                    <TextField
                        sx={{
                            margin: "10px"
                        }}

                        name='custoname'
                        label="Name"
                        type="Name"
                        autoComplete="current-name"
                        helperText={errors.custoname?.message}
                        {...register("custoname")}
                    />
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
                    <TextField
                        sx={{
                            margin: "10px"
                        }}
                        helperText={errors.confirmPassword?.message}
                        {...register("confirmPassword")}
                        name="confirmPassword"
                        autoComplete="current-password"
                        label="Confirm Password"
                        type="password"

                    />


                    <Button

                        sx={{ display: "inline-block", textdecoration: "none", borderBottom: "none", margin: "10px", width: "10vw", marginLeft: "30%" }}
                        variant="contained"
                        color="success"
                        type='submit'>

                        Submit
                    </Button>



                    <p style={{ marginLeft: "25%", marginTop: "20px" }}>
                        Already a member?
                        <Link to='/login'>
                            <span>
                                LogIn
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default Signup
