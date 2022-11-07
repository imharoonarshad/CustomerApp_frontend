


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from '../validaton/schema';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CustomerForm = () => {


    const navigate = useNavigate();
    // const [formValues, setFormValues] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Schema),
    });
    const submitForm = async (formValues, e) => {
        // console.log('sucmitFormData',data)
        e.preventDefault()
        await axios.post('http://localhost:8080/route/', { formValues })
    //    await setFormValues(data)
        // await componentMount()
        navigate("/")
    };

    // const componentMount = async () => {

        
    // }

    // useEffect(() => {

    // },[])


    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <form onSubmit={handleSubmit(submitForm)}>


                <div style={{ height: "6%", background: "#348feb", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h1 style={{ color: "white" }}>
                        Complaint Form
                    </h1>
                </div>



                <div style={{ height: "40%", margin: "20px" }}>
                    <h2>
                        Complaint Details
                        <hr style={{ border: "1px solid", }} />
                    </h2>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { width: '60ch' },
                            display: "flex",
                            flexDirection: "column",



                        }}
                    >
                        <TextField
                            sx={{
                                margin: "20px"
                            }}
                            id="demo-helper-text-aligned"
                            label="Complaint Type"
                            size='small'
                            name='tname'
                            helperText={errors.tname?.message}
                            {...register("tname")}

                        />
                        <TextField
                            sx={{
                                margin: "20px"
                            }}
                            name="dateTime"
                            id="datetime-local"
                            helperText={errors.dateTime?.message}
                            label="Complaint Date"
                            type="datetime-local"
                            size='small'
                            InputLabelProps={{ shrink: true, }}
                            {...register("dateTime")}
                        />


                    </Box>

                    <TextField
                        sx={{
                            '& > :not(style)': { width: '58ch' },
                            margin: "20px",


                        }}

                        id="outlined-multiline"
                        label=" Complaint Details"
                        multiline
                        rows={4}
                        size='small'
                        helperText={errors.desname?.message}
                        {...register("desname")}

                    />

                    <Box>

                        <Button
                            type='submit'
                            sx={{
                                margin: "25px",
                                textdecoration: "none",
                                display: "inline-block",
                            }}
                            variant="contained"
                            color="success"

                        >
                            Submit
                        </Button>

                    </Box>


                </div>

            </form>
        </div>
    )
}

export default CustomerForm



