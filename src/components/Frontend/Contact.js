"use client"
import React, { useState } from 'react';
import { useLoadingContext } from "react-router-loading";

const Contact = () => {
     const loadingContext = useLoadingContext();
     setInterval(function () { loadingContext.done() }, 1000);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                // const response = await submitContact(formData);
                // if (response) {
                //     toast.success('Message sent successfully!');
                //     setFormData({
                //         name: '',
                //         email: '',
                //         message: ''
                //     });
                // }
            } catch (error) {
                // toast.error('Failed to send message');
            }
        } else {
            setErrors(validationErrors);
        }
    };



    return (
        <>
            <div className="w-full bg-gradient-to-l from-blue-300 py-10 p-10 sm:px-0 ">
                <h1 className="text-3xl font-bold text-center">Get in Touch</h1>
                <p className="text-center mb-8">Feel free to contact me via email at "mukul6307@gmail.com" or fill out the form below. I look forward to hearing from you!</p>
                <div className="max-w-md mx-auto p-4 bg-grey-500  border-2 text-grey-100 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-lg">
                    <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block lifont-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-green-500`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 li mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block lifont-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-green-500`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 li mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block lifont-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-green-500`}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <p className="text-red-500 li mt-1">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white px-4 py-2 rounded hover:bg-custom-secondary focus:outline-none focus:bg-custom-secondary"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
