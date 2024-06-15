import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    function validateForm() {
        let valid = true;
        setNameError('');
        setEmailError('');

        if (!name) {
            setNameError('Name is required');
            valid = false;
        }

        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is invalid');
            valid = false;
        }

        return valid;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const result = await Axios.post("http://localhost:3000/api/login", {
                    name,
                    email,
                });
                toast.success('Login successful!');
                setTimeout(() => {
                    navigate('/home');
                }, 2000);
            } catch (error) {
                console.error('Error submitting the form:', error);
            }
        }
    }

    return (
        <div>
            <div className="container-fluid bg-light">
                <img
                    src="https://www.paradisefoodcourt.in/images/logos/Paradise-Logo3.png"
                    className="p-3"
                    alt="Paradise Logo"
                    style={{ width: "200px" }}
                />
            </div>
            <div className="container mt-5">
                <h1 className='text-dark text-center'>Welcome</h1>
                <div className="container">
                    <form onSubmit={onSubmit} className='text-dark d-flex flex-column justify-content-center align-items-center mt-5'>
                        <label htmlFor="name" className='text-start m-2 fw-bold'>Name</label>
                        <input
                            type="text"
                            className={`form-control p-3 ${nameError ? 'is-invalid' : ''}`}
                            id="frm"
                            value={name}
                            placeholder='Enter your Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <div className="text-danger">{nameError}</div>}

                        <label htmlFor="email" className='m-2 fw-bold'>Email</label>
                        <input
                            type="email"
                            className={`form-control p-3 ${emailError ? 'is-invalid' : ''}`}
                            id="frm"
                            value={email}
                            placeholder='Enter your Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="text-danger">{emailError}</div>}

                        <p className='mt-3 p1'>Forgot Password?</p>
                        <button type="submit" className="btn btn-success mt-1 fs-5 ps-5 pe-5 pt-2 mb-5 btn1">
                            Sign Up <FaArrowRight />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
