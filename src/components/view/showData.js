import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import NavBar from './navBar';


const ShowData = () => {

    const [complaint, setcomplaint] = useState("")

    const getUserData = async () => {
        try {
            const res = await axios.get("http://localhost:8080/route/");
            setcomplaint(res)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData()
    }, []);
  



    return (
        <>
            <NavBar />
            <div className="card shadow outline m-1 hoverable" >
                {complaint.data?.map((item,index) =>
                    <div className="m-3 m-5" style={{
                        border: "2px solid green", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                        transition: "0.8s"
                    }} key={index}>
                        {/* <div style={{ display: "flex" }}>
                            <p className="mx-1 my-1">{item.fname}</p>
                            <p className="m-1">{item.mname}</p>
                            <p className="m-1">{item.lname}</p>
                        </div> */}
                        <p>{item.dateTime}</p>
                        <p>{item.tname}</p>
                        <p>{item.desname}</p>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default ShowData




