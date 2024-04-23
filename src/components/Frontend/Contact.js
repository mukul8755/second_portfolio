import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import { useLoadingContext } from "react-router-loading";
import toast from 'react-hot-toast';
export default function Contact() {
  const loadingContext = useLoadingContext();
  setInterval(function () { loadingContext.done() }, 1000);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    subject: '',
    access_key: "a6570e0d-ce08-42c1-bd8c-60bed1fe7815",
  });

  const saveSettings = async (formData) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();

      })
      .catch(error => {
        toast.error('There was a problem submitting the form:');
      });
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.email === '' || formData.name === '' || formData.message === '') {
      toast.error('Please fill all the fields')
    } else if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error('email is not valid')
      } else {
        const result = await toast.promise(
          saveSettings(formData),
          {
            loading: 'Please wait while we sending your data...',
            success: <b>form submitted successfully</b>,
            error: <b>Could not save.</b>,
          }
        );
        setFormData({ email: '', name: '', message: '', subject: '' });
      }
    }
  }






  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <Header />
      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">Contact Me</h2>
          <div class="about-content">
            <div class="column left">
              <img src="https://source.unsplash.com/626x626/?dark" alt="Profile Image 626x626" />
            </div>
            <div class="column right">
              <form class="space-y-3  text-base " onSubmit={handleSubmit}>
                <div>
                  <label for="email" class="block text-base font-medium text-gray-600 dark:text-gray-400 ">Your email</label>
                  <input type="text" value={formData.email} name="email"
                    onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                </div>
                <div>
                  <label for="subject" class="block mb-2  text-base font-medium text-gray-600 dark:text-gray-300">Name</label>
                  <input type="text" value={formData.name} name="name"
                    onChange={handleChange} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" />
                </div>


                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-base font-medium  text-gray-600 dark:text-gray-400">Your message</label>
                  <textarea value={formData.message}
                    onChange={handleChange} rows="6" name="message" class="block p-2.5 w-full  text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type='submit' class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#142832] sm:w-fit hover:bg-[#0d2028] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-400" >Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
