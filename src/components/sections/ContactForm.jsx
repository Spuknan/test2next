"use client";

import { useState } from "react";
import '@/components/sections/ContactForm.css';
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;


const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!captcha) {
      console.log("captcha not verified!");
      return
    }

    if (!name || !message || !email) {
      return;
    }


    try {
      const res = await fetch('api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message, email }),
      });
      const data = await res.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container px-6 py-16 pb-30 mx-auto max-w-4xl flex flex-col gap-6">
      <div className="m-2 sm:m-6 rounded-md bg-zinc-900 p-6 shadow-lg">
        <div className="flex flex-col justify-center mx-auto text-center">
          <h3 className="text-white glow font-bold text-2xl">CONTACTO</h3>
          <p className="text-zinc-400 text-sm">Si querés dejarme un mensajito lindo o una propuesta, este es el lugar!</p>
        </div>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <label htmlFor="name" className="text-white flex flex-col">
            Nombre:
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="rounded-md p-2 bg-zinc-600"
              required
            />
          </label>
          <label htmlFor="email" className="text-white flex flex-col">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="rounded-md p-2 bg-zinc-600"
              required
            />
          </label>
          <label htmlFor="message" className="text-white  flex flex-col">
            Mensaje:
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              rows="4"
              className="rounded-md p-2 bg-zinc-600"
              required
            ></textarea>
          </label>
          <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-start gap-3">
            <ReCAPTCHA sitekey={recaptchaSiteKey} className="w-full flex justify-center sm:justify-start" theme="dark" onChange={setCaptcha} />
            <button
              type="submit"
              className="bg-pink-600 w-full sm:w-max px-5 py-1 rounded-md font-medium text-white hover:bg-pink-700 hover:text-white transition duration-400 hover:scale-110"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;